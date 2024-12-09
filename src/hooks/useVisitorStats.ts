import { useState, useEffect } from 'react';
import { getAnalytics } from '../services/analytics';

export interface VisitorStats {
  totalVisitors: number;
  activeVisitors: number;
  pageViews: Record<string, number>;
  deviceStats: Record<string, number>;
  locationStats: Record<string, number>;
  averageDuration: number;
}

export const useVisitorStats = () => {
  const [stats, setStats] = useState<VisitorStats>({
    totalVisitors: 0,
    activeVisitors: 0,
    pageViews: {},
    deviceStats: {},
    locationStats: {},
    averageDuration: 0
  });

  useEffect(() => {
    const fetchStats = () => {
      const data = getAnalytics();
      setStats(data);
    };

    fetchStats();
    const interval = setInterval(fetchStats, 5000);

    return () => clearInterval(interval);
  }, []);

  return stats;
};