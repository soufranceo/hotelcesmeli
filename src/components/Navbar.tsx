import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import HotelTitle from './HotelTitle';

const Navbar = ({ setLanguage, language }: { setLanguage: (lang: 'tr' | 'en' | 'ar') => void, language: 'tr' | 'en' | 'ar' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = {
    tr: ['Ana Sayfa', 'Odalarımız', 'Hakkımızda', 'Bursa Rehberi', 'İletişim'],
    en: ['Home', 'Rooms', 'About', 'Bursa Guide', 'Contact'],
    ar: ['الصفحة الرئيسية', 'الغرف', 'معلومات عنا', 'دليل بورصة', 'اتصل بنا']
  };

  const paths = ['/', '/rooms', '/about', '/guide', '/contact'];

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <HotelTitle language={language} />
          </Link>

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
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setLanguage('tr')}
                className={`px-2 py-1 rounded ${language === 'tr' ? 'bg-blue-900 text-white' : 'text-gray-700'}`}
              >
                TR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded ${language === 'en' ? 'bg-blue-900 text-white' : 'text-gray-700'}`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('ar')}
                className={`px-2 py-1 rounded ${language === 'ar' ? 'bg-blue-900 text-white' : 'text-gray-700'}`}
              >
                عربي
              </button>
            </div>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

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
            <div className="flex space-x-2 py-2">
              <button
                onClick={() => {
                  setLanguage('tr');
                  setIsOpen(false);
                }}
                className={`px-2 py-1 rounded ${language === 'tr' ? 'bg-blue-900 text-white' : 'text-gray-700'}`}
              >
                TR
              </button>
              <button
                onClick={() => {
                  setLanguage('en');
                  setIsOpen(false);
                }}
                className={`px-2 py-1 rounded ${language === 'en' ? 'bg-blue-900 text-white' : 'text-gray-700'}`}
              >
                EN
              </button>
              <button
                onClick={() => {
                  setLanguage('ar');
                  setIsOpen(false);
                }}
                className={`px-2 py-1 rounded ${language === 'ar' ? 'bg-blue-900 text-white' : 'text-gray-700'}`}
              >
                عربي
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;