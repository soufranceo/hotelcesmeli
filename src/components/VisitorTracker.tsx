import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackVisit, updateVisitDuration } from '../services/analytics';

const VisitorTracker: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    let startTime = Date.now();
    let visitorId: string | null = null;

    const track = async () => {
      visitorId = await trackVisit(location.pathname);
    };

    track();

    return () => {
      if (visitorId) {
        const duration = (Date.now() - startTime) / 1000;
        updateVisitDuration(visitorId, duration);
      }
    };
  }, [location.pathname]);

  return null;
};

export default VisitorTracker;