import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import {
  LayoutDashboard,
  Hotel,
  FileEdit,
  BarChart2,
  Search,
  Settings,
  LogOut
} from 'lucide-react';

const AdminSidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const menuItems = [
    { path: '/admin/dashboard/overview', icon: LayoutDashboard, label: 'Genel Bakış' },
    { path: '/admin/dashboard/rooms', icon: Hotel, label: 'Odalar' },
    { path: '/admin/dashboard/content', icon: FileEdit, label: 'İçerik' },
    { path: '/admin/dashboard/analytics', icon: BarChart2, label: 'Analitik' },
    { path: '/admin/dashboard/seo', icon: Search, label: 'SEO' },
    { path: '/admin/dashboard/settings', icon: Settings, label: 'Ayarlar' }
  ];

  return (
    <div className="w-64 bg-white shadow-lg h-screen">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-blue-900">Admin Panel</h2>
      </div>
      
      <nav className="mt-6">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors ${
                isActive ? 'bg-blue-50 text-blue-900 border-r-4 border-blue-900' : ''
              }`
            }
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="absolute bottom-0 w-64 p-6">
        <button
          onClick={handleLogout}
          className="flex items-center w-full px-4 py-2 text-gray-700 hover:text-red-600 transition-colors"
        >
          <LogOut className="w-5 h-5 mr-3" />
          Çıkış Yap
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;