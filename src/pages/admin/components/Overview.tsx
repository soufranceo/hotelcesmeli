import React from 'react';
import { Users, Hotel, Eye, Clock } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { useVisitorStats } from '../../../hooks/useVisitorStats';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Overview = () => {
  const stats = useVisitorStats();

  const chartData = {
    labels: Object.keys(stats.pageViews),
    datasets: [
      {
        label: 'Sayfa Görüntülenmeleri',
        data: Object.values(stats.pageViews),
        fill: false,
        borderColor: 'rgb(59, 130, 246)',
        tension: 0.1
      }
    ]
  };

  const overviewStats = [
    {
      label: 'Aktif Ziyaretçi',
      value: stats.activeVisitors,
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      label: 'Toplam Ziyaretçi',
      value: stats.totalVisitors,
      icon: Eye,
      color: 'bg-green-500'
    },
    {
      label: 'Ortalama Süre',
      value: `${Math.round(stats.averageDuration)}s`,
      icon: Clock,
      color: 'bg-purple-500'
    }
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-900">Genel Bakış</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {overviewStats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className={`p-3 rounded-full ${stat.color} bg-opacity-10 mr-4`}>
                <stat.icon className={`w-6 h-6 ${stat.color.replace('bg-', 'text-')}`} />
              </div>
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Sayfa Görüntülenmeleri</h2>
        <Line data={chartData} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Cihaz Dağılımı</h2>
          <div className="space-y-4">
            {Object.entries(stats.deviceStats).map(([device, count]) => (
              <div key={device} className="flex justify-between items-center">
                <span className="capitalize">{device}</span>
                <span className="font-semibold">{count}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Konum Dağılımı</h2>
          <div className="space-y-4">
            {Object.entries(stats.locationStats).map(([location, count]) => (
              <div key={location} className="flex justify-between items-center">
                <span>{location}</span>
                <span className="font-semibold">{count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;