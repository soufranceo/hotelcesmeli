import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminSidebar from './components/AdminSidebar';
import Overview from './components/Overview';
import RoomManager from './components/RoomManager';
import ContentManager from './components/ContentManager';
import Analytics from './components/Analytics';
import SEOManager from './components/SEOManager';
import Settings from './components/Settings';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <Routes>
            <Route path="/" element={<Navigate to="overview" replace />} />
            <Route path="overview" element={<Overview />} />
            <Route path="rooms" element={<RoomManager />} />
            <Route path="content" element={<ContentManager />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="seo" element={<SEOManager />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;