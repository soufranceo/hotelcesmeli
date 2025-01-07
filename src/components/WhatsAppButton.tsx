import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '905432281511';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-6 bottom-28 z-50 transition-all duration-300 hover:transform hover:scale-110"
      aria-label="WhatsApp ile iletişime geçin"
    >
      <div className="bg-green-500 p-3.5 rounded-full shadow-lg hover:bg-green-600 transition-colors group">
        <MessageCircle className="w-6 h-6 text-white" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white px-3 py-1.5 rounded-lg shadow-md text-sm font-medium text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Bize Ulaşın
        </span>
      </div>
    </a>
  );
};

export default WhatsAppButton;