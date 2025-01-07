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
      className="fixed bottom-6 right-6 z-50 transition-all duration-300 hover:transform hover:scale-110"
      aria-label="WhatsApp ile iletişime geçin"
    >
      <div className="bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors group">
        <MessageCircle className="w-7 h-7 text-white" />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white px-3 py-1.5 rounded-lg shadow-md text-sm font-medium text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Bize Ulaşın
        </span>
      </div>
    </a>
  );
};

export default WhatsAppButton;
