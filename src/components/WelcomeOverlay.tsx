import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCurrencyRates } from '../hooks/useCurrencyRates';
import { Hotel, DollarSign, Euro } from 'lucide-react';

interface WelcomeOverlayProps {
  language: 'tr' | 'en';
}

const WelcomeOverlay: React.FC<WelcomeOverlayProps> = ({ language }) => {
  const [isVisible, setIsVisible] = useState(true);
  const { rates } = useCurrencyRates();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const content = {
    tr: {
      welcome: 'Çeşmeli Hotel\'e Hoşgeldiniz',
      subtitle: 'Ailenizin Huzur ve Güvenli Adresi'
    },
    en: {
      welcome: 'Welcome to Çeşmeli Hotel',
      subtitle: 'Your Family\'s Safe and Peaceful Address'
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-blue-900/95 text-white"
        >
          <div className="text-center space-y-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.8 }}
            >
              <Hotel className="w-24 h-24 mx-auto mb-4" />
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl font-bold"
            >
              {content[language].welcome}
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl"
            >
              {content[language].subtitle}
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex justify-center space-x-8"
            >
              <div className="flex items-center space-x-2">
                <DollarSign className="w-6 h-6" />
                <span className="text-2xl font-semibold">{rates.USD.toFixed(2)} ₺</span>
              </div>
              <div className="flex items-center space-x-2">
                <Euro className="w-6 h-6" />
                <span className="text-2xl font-semibold">{rates.EUR.toFixed(2)} ₺</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeOverlay;