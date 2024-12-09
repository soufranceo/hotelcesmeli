import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import VisitorTracker from './components/VisitorTracker';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import About from './pages/About';
import Guide from './pages/Guide';
import Contact from './pages/Contact';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [language, setLanguage] = useState<'tr' | 'en'>('tr');

  return (
    <HelmetProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 flex flex-col">
            <VisitorTracker />
            <Navbar language={language} setLanguage={setLanguage} />
            <main className="pt-16 flex-grow">
              <Routes>
                <Route path="/" element={<Home language={language} />} />
                <Route path="/rooms" element={<Rooms language={language} />} />
                <Route path="/about" element={<About language={language} />} />
                <Route path="/guide" element={<Guide language={language} />} />
                <Route path="/contact" element={<Contact language={language} />} />
                <Route path="/admin/login" element={<Login />} />
                <Route
                  path="/admin/*"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </main>
            <Footer />
            <CookieConsent />
          </div>
        </Router>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;