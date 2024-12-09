import React from 'react';
import { DollarSign, Euro } from 'lucide-react';
import { useCurrencyRates } from '../hooks/useCurrencyRates';
import { motion, AnimatePresence } from 'framer-motion';

const CurrencyRates = () => {
  const { rates, error, isLoading } = useCurrencyRates();

  if (error || isLoading) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        className="fixed top-20 right-4 z-40"
      >
        <div className="flex flex-col space-y-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm p-2"
          >
            <DollarSign className="w-4 h-4 text-blue-900" />
            <span className="text-sm font-medium text-blue-900">
              {rates.USD.toFixed(2)} ₺
            </span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm p-2"
          >
            <Euro className="w-4 h-4 text-blue-900" />
            <span className="text-sm font-medium text-blue-900">
              {rates.EUR.toFixed(2)} ₺
            </span>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CurrencyRates;