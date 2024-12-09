import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Wifi, Coffee } from 'lucide-react';

const About = ({ language }: { language: 'tr' | 'en' }) => {
  const content = {
    tr: {
      title: 'Hakkımızda',
      description: 'Bursa Merkez otelleri arasında yer alan, Çeşmeli Hotel Osmangazi Merkez bölgesinde ve Kapalı Çarşı\'ya, Ulucamii\'ye ve sembol yapılara yakınlığı ile Bursa\'da tercih edilen en uygun ve konforlu oteller arasında yer almaktadır.',
      details: 'Toplamda 18 odası ile hizmet sağlayan otel, uygun fiyata konforlu bir konaklama imkanı sunmaktadır. Oda kahvaltı konseptinde hizmet veren tesiste kahvaltı servisi açık büfe olarak sunulmaktadır.',
      features: [
        'Ücretsiz Wi-Fi',
        'Açık Büfe Kahvaltı',
        '18 Konforlu Oda',
        '24 Saat Resepsiyon'
      ],
      locations: [
        { name: 'Koza Hanı', distance: '2 dakika' },
        { name: 'Bursa Ulu Cami', distance: '2 dakika' },
        { name: 'Yeşil Türbe', distance: '10 dakika' },
        { name: 'Bursa Kent Müzesi', distance: '3 dakika' },
        { name: 'Tophane', distance: '10 dakika' },
        { name: 'Tarihi Bursa Kebapçısı', distance: '1 dakika' }
      ]
    },
    en: {
      title: 'About Us',
      description: 'Located among the central hotels of Bursa, Çeşmeli Hotel is one of the most preferred and comfortable hotels in Bursa, situated in the Osmangazi Central region, close to the Grand Bazaar, Ulucami, and symbolic structures.',
      details: 'The hotel provides comfortable accommodation at affordable prices with a total of 18 rooms. The facility serves in bed and breakfast concept, where breakfast service is offered as an open buffet.',
      features: [
        'Free Wi-Fi',
        'Open Buffet Breakfast',
        '18 Comfortable Rooms',
        '24/7 Reception'
      ],
      locations: [
        { name: 'Koza Han', distance: '2 minutes' },
        { name: 'Bursa Grand Mosque', distance: '2 minutes' },
        { name: 'Green Tomb', distance: '10 minutes' },
        { name: 'Bursa City Museum', distance: '3 minutes' },
        { name: 'Tophane', distance: '10 minutes' },
        { name: 'Historical Bursa Kebab Restaurant', distance: '1 minute' }
      ]
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
          {content[language].title}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              {content[language].description}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {content[language].details}
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {content[language].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  {index === 0 && <Wifi className="w-5 h-5 text-blue-900" />}
                  {index === 1 && <Coffee className="w-5 h-5 text-blue-900" />}
                  {index === 2 && <MapPin className="w-5 h-5 text-blue-900" />}
                  {index === 3 && <Clock className="w-5 h-5 text-blue-900" />}
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-blue-900 mb-6">
              {language === 'tr' ? 'Yakın Konumlar' : 'Nearby Locations'}
            </h2>
            <div className="space-y-4">
              {content[language].locations.map((location, index) => (
                <div key={index} className="flex items-center justify-between border-b pb-2">
                  <span className="text-gray-700">{location.name}</span>
                  <span className="text-blue-900 font-medium">{location.distance}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;