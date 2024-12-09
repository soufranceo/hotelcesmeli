import React, { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

const WorldClock = () => {
  const [time, setTime] = useState<{ [key: string]: string }>({});

  const cities = [
    { name: 'Istanbul', timezone: 'Europe/Istanbul' },
    { name: 'New York', timezone: 'America/New_York' },
    { name: 'Berlin', timezone: 'Europe/Berlin' },
    { name: 'Paris', timezone: 'Europe/Paris' },
    { name: 'Tokyo', timezone: 'Asia/Tokyo' },
    { name: 'Singapore', timezone: 'Asia/Singapore' }
  ];

  useEffect(() => {
    const updateTime = () => {
      const times: { [key: string]: string } = {};
      cities.forEach(city => {
        times[city.name] = new Date().toLocaleTimeString('tr-TR', {
          timeZone: city.timezone,
          hour: '2-digit',
          minute: '2-digit'
        });
      });
      setTime(times);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto mt-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {cities.map((city) => (
          <div
            key={city.name}
            className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md p-4 flex flex-col items-center justify-center"
          >
            <Clock className="w-6 h-6 text-blue-900 mb-2" />
            <h3 className="text-sm font-medium text-gray-600">{city.name}</h3>
            <p className="text-xl font-semibold text-blue-900">{time[city.name]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorldClock;