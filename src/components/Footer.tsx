import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <p className="text-sm">
              Alacamescit, Gümüşçeken Cd. no:6<br />
              16200 Osmangazi/Bursa
            </p>
            <p className="text-sm mt-2">
              Tel: +90 543 228 15 11<br />
              Email: cesmelihotel16@hotmail.com
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h3>
            <ul className="text-sm space-y-2">
              <li><a href="/rooms" className="hover:text-gray-300">Odalarımız</a></li>
              <li><a href="/about" className="hover:text-gray-300">Hakkımızda</a></li>
              <li><a href="/guide" className="hover:text-gray-300">Bursa Rehberi</a></li>
              <li><a href="/contact" className="hover:text-gray-300">İletişim</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Konum</h3>
            <p className="text-sm">
              Ulucami'ye 2 dakika<br />
              Kapalı Çarşı'ya 2 dakika<br />
              Tophane'ye 10 dakika<br />
              Yeşil Türbe'ye 10 dakika
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-blue-800">
          <p className="text-center text-sm">
            © {currentYear} Çeşmeli Hotel. Tüm hakları saklıdır.<br />
            <span className="flex items-center justify-center mt-2">
              Written with <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" /> by Mehmet Akgül
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;