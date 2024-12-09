import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = ({ setLanguage, language }: { setLanguage: (lang: 'tr' | 'en') => void, language: 'tr' | 'en' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = {
    tr: ['Ana Sayfa', 'Odalarımız', 'Hakkımızda', 'Bursa Rehberi', 'İletişim'],
    en: ['Home', 'Rooms', 'About', 'Bursa Guide', 'Contact']
  };

  const paths = ['/', '/rooms', '/about', '/guide', '/contact'];

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-semibold text-blue-900">
            Merkez Çeşmeli Otel
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems[language].map((item, index) => (
              <Link
                key={item}
                to={paths[index]}
                className="text-gray-700 hover:text-blue-900 transition-colors"
              >
                {item}
              </Link>
            ))}
            <button
              onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')}
              className="flex items-center text-gray-700 hover:text-blue-900"
            >
              <Globe className="w-5 h-5 mr-1" />
              {language.toUpperCase()}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            {menuItems[language].map((item, index) => (
              <Link
                key={item}
                to={paths[index]}
                className="block py-2 text-gray-700 hover:text-blue-900"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
            <button
              onClick={() => {
                setLanguage(language === 'tr' ? 'en' : 'tr');
                setIsOpen(false);
              }}
              className="flex items-center py-2 text-gray-700 hover:text-blue-900"
            >
              <Globe className="w-5 h-5 mr-1" />
              {language.toUpperCase()}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;