import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { X } from 'lucide-react';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('cookieConsent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set('cookieConsent', 'true', { expires: 365 });
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-gray-200 p-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <p className="text-sm text-gray-600 mr-8">
          Bu web sitesi deneyiminizi geliştirmek için çerezleri kullanmaktadır. Siteyi kullanmaya devam ederek çerez kullanımını kabul etmiş sayılırsınız.
        </p>
        <div className="flex items-center space-x-4">
          <button
            onClick={acceptCookies}
            className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors text-sm"
          >
            Kabul Et
          </button>
          <button
            onClick={() => setShowConsent(false)}
            className="p-2 text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;