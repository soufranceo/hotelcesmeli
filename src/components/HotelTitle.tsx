import React from 'react';

const HotelTitle = ({ language }: { language: 'tr' | 'en' | 'ar' }) => {
  return (
    <h1 className="font-['Montserrat'] text-3xl md:text-4xl font-black tracking-wider text-blue-900 hover:text-blue-800 transition-colors duration-300" 
        style={{ 
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
          letterSpacing: '0.1em'
        }}>
      HOTEL ÇEŞMELİ
    </h1>
  );
};

export default HotelTitle;