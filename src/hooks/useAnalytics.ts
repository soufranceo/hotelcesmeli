import { useState, useEffect } from 'react';
import { getAnalytics } from '../services/analytics';

export const useAnalytics = () => {
  const [analyticsData, setAnalyticsData] = useState(() => getAnalytics());

  useEffect(() => {
    const interval = setInterval(() => {
      setAnalyticsData(getAnalytics());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return analyticsData;
};