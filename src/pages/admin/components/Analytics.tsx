import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { useAnalytics } from '../../../hooks/useAnalytics';
import { Calendar, Globe, Monitor, Smartphone } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('week');
  const analytics = useAnalytics();

  const deviceData = {
    labels: Object.keys(analytics.deviceStats),
    datasets: [{
      label: 'Cihaz Kullanımı',
      data: Object.values(analytics.deviceStats),
      backgroundColor: [
        'rgba(59, 130, 246, 0.5)',
        'rgba(16, 185, 129, 0.5)',
        'rgba(249, 115, 22, 0.5)'
      ]
    }]
  };

  const locationData = {
    labels: Object.keys(analytics.locationStats),
    datasets: [{
      label: 'Ziyaretçi Konumları',
      data: Object.values(analytics.locationStats),
      backgroundColor: 'rgba(59, 130, 246, 0.5)'
    }]
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Analitik</h1>
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          <option value="day">Günlük</option>
          <option value="week">Haftalık</option>
          <option value="month">Aylık</option>
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Cihaz Kullanımı</h2>
          <Bar data={deviceData} />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Ziyaretçi Konumları</h2>
          <Bar data={locationData} />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Sayfa Görüntülenmeleri</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(analytics.pageViews).map(([page, views]) => (
            <div key={page} className="p-4 border rounded-lg">
              <div className="flex items-center space-x-3">
                <Eye className="w-6 h-6 text-blue-500" />
                <div>
                  <p className="text-sm text-gray-600">{page || '/'}</p>
                  <p className="text-xl font-semibold">{views}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;