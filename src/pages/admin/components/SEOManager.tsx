import React, { useState } from 'react';
import { Save } from 'lucide-react';

interface SEOData {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  language: 'tr' | 'en';
}

const SEOManager = () => {
  const [seoData, setSeoData] = useState<SEOData>({
    title: '',
    description: '',
    keywords: '',
    ogTitle: '',
    ogDescription: '',
    language: 'tr'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save SEO data logic here
    console.log('SEO data saved:', seoData);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">SEO Yönetimi</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Dil
              </label>
              <select
                value={seoData.language}
                onChange={(e) => setSeoData({ ...seoData, language: e.target.value as 'tr' | 'en' })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="tr">Türkçe</option>
                <option value="en">English</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Sayfa Başlığı
              </label>
              <input
                type="text"
                value={seoData.title}
                onChange={(e) => setSeoData({ ...seoData, title: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Meta Açıklama
              </label>
              <textarea
                value={seoData.description}
                onChange={(e) => setSeoData({ ...seoData, description: e.target.value })}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Anahtar Kelimeler
              </label>
              <input
                type="text"
                value={seoData.keywords}
                onChange={(e) => setSeoData({ ...seoData, keywords: e.target.value })}
                placeholder="Virgülle ayırarak yazın"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Open Graph Başlığı
              </label>
              <input
                type="text"
                value={seoData.ogTitle}
                onChange={(e) => setSeoData({ ...seoData, ogTitle: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Open Graph Açıklaması
              </label>
              <textarea
                value={seoData.ogDescription}
                onChange={(e) => setSeoData({ ...seoData, ogDescription: e.target.value })}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="flex items-center px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800"
            >
              <Save className="w-5 h-5 mr-2" />
              Değişiklikleri Kaydet
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SEOManager;