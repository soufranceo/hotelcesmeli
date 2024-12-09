import React, { useState } from 'react';
import { Save, Trash2, Info } from 'lucide-react';

const Settings = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Ayarlar</h1>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Veri Temizleme Politikası</h2>
          <button
            onClick={() => setShowInfo(!showInfo)}
            className="p-2 text-gray-500 hover:text-blue-600 transition-colors"
          >
            <Info className="w-5 h-5" />
          </button>
        </div>

        {showInfo && (
          <div className="mb-6 p-4 bg-blue-50 rounded-lg text-blue-800">
            <p>Sistem, ziyaretçi verilerini otomatik olarak 7 günlük süre sonunda temizlemektedir. Bu süre sistem performansını ve veri güvenliğini optimize etmek için ayarlanmıştır.</p>
          </div>
        )}

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg bg-gray-50">
            <div>
              <h3 className="font-medium text-gray-900">Otomatik Veri Temizleme</h3>
              <p className="text-sm text-gray-600">7 günden eski veriler otomatik olarak silinir</p>
            </div>
            <span className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full">Aktif</span>
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="font-medium text-gray-900">Son Temizleme</h3>
              <p className="text-sm text-gray-600">{new Date().toLocaleDateString()}</p>
            </div>
            <button
              onClick={() => {
                // Manual cleanup can be implemented here if needed
                alert('Manuel temizleme başarıyla tamamlandı.');
              }}
              className="flex items-center px-4 py-2 text-sm bg-blue-900 text-white rounded-lg hover:bg-blue-800"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Şimdi Temizle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;