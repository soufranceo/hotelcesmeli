import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dotenv from 'dotenv';
import Database from 'better-sqlite3';
import multer from 'multer';

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Database setup
const db = new Database(join(__dirname, 'database.sqlite'));

// Middleware
app.use(cors());
app.use(express.json());

// Initialize database tables
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
  );
`);

// Insert default admin user if not exists
const hashedPassword = bcrypt.hashSync('Zaq123..', 10);
const insertAdmin = db.prepare('INSERT OR IGNORE INTO users (username, password) VALUES (?, ?)');
insertAdmin.run('admin', hashedPassword);

// Authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key', (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
};

// Login route
app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;

  const stmt = db.prepare('SELECT * FROM users WHERE username = ?');
  const user = stmt.get(username);

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET || 'your-secret-key',
    { expiresIn: '24h' }
  );

  res.json({ token });
});

// Protected routes
app.use('/api/admin/*', authenticateToken);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});