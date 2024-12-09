import db from './db';
import FingerprintJS from '@fingerprintjs/fingerprintjs';

const fpPromise = FingerprintJS.load();

const getVisitorId = async () => {
  const fp = await fpPromise;
  const result = await fp.get();
  return result.visitorId;
};

export const trackVisit = async (page: string) => {
  try {
    const visitorId = await getVisitorId();
    
    const visit = {
      timestamp: Date.now(),
      page,
      visitorId,
      device: getDeviceType(),
      duration: 0,
      location: await getLocation()
    };
    
    const id = await db.analytics.add(visit);
    return id;
  } catch (error) {
    console.error('Error tracking visit:', error);
    return null;
  }
};

export const updateVisitDuration = async (id: number, duration: number) => {
  try {
    await db.analytics.update(id, { duration });
  } catch (error) {
    console.error('Error updating visit duration:', error);
  }
};

export const getAnalytics = async () => {
  try {
    const visits = await db.analytics.toArray();
    const now = Date.now();
    const uniqueVisitors = new Set(visits.map(v => v.visitorId));

    return {
      totalVisitors: uniqueVisitors.size,
      activeVisitors: new Set(
        visits
          .filter(v => now - v.timestamp < 300000)
          .map(v => v.visitorId)
      ).size,
      pageViews: visits.reduce((acc, v) => {
        acc[v.page] = (acc[v.page] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      deviceStats: visits.reduce((acc, v) => {
        acc[v.device] = (acc[v.device] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      locationStats: visits.reduce((acc, v) => {
        if (v.location) {
          acc[v.location] = (acc[v.location] || 0) + 1;
        }
        return acc;
      }, {} as Record<string, number>),
      averageDuration: visits.reduce((acc, v) => acc + v.duration, 0) / visits.length || 0
    };
  } catch (error) {
    console.error('Error getting analytics:', error);
    return {
      totalVisitors: 0,
      activeVisitors: 0,
      pageViews: {},
      deviceStats: {},
      locationStats: {},
      averageDuration: 0
    };
  }
};

const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) return 'tablet';
  if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) return 'mobile';
  return 'desktop';
};

const getLocation = async () => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    return `${data.city}, ${data.country_name}`;
  } catch {
    return 'Unknown';
  }
};