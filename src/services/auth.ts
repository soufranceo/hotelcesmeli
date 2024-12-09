import { getDB } from './db';
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your-secret-key';

export const authenticateUser = async (username: string, password: string) => {
  const db = await getDB();
  const user = await db.get('users', username);

  if (!user || user.password !== password) {
    throw new Error('Invalid credentials');
  }

  const token = jwt.sign(
    { username, role: user.role },
    SECRET_KEY,
    { expiresIn: '24h' }
  );

  return { token };
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch {
    return null;
  }
};