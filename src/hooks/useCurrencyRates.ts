import { useState, useEffect } from 'react';
import { fetchCurrencyRates } from '../services/api';

interface CurrencyRates {
  USD: number;
  EUR: number;
}

interface UseCurrencyRatesResult {
  rates: CurrencyRates;
  error: boolean;
  isLoading: boolean;
}

const REFRESH_INTERVAL = 300000; // 5 minutes

export function useCurrencyRates(): UseCurrencyRatesResult {
  const [rates, setRates] = useState<CurrencyRates>({ USD: 0, EUR: 0 });
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const fetchRates = async () => {
      try {
        setIsLoading(true);
        const data = await fetchCurrencyRates();
        
        if (mounted) {
          setRates(data);
          setError(false);
        }
      } catch (err) {
        if (mounted) {
          console.error('Error fetching rates:', err);
          setError(true);
        }
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    fetchRates();
    const interval = setInterval(fetchRates, REFRESH_INTERVAL);

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  return { rates, error, isLoading };
}