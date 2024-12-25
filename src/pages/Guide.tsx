import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

const Guide = ({ language }: { language: 'tr' | 'en' }) => {
  const places = {
    tr: [
      {
        title: 'Emir Sultan Hazretleri',
        description: 'Bursa\'nın en önemli manevi mekanlarından biri olan Emir Sultan Camii ve Türbesi, Osmanlı mimarisinin güzel örneklerinden biridir.',
        location: 'https://maps.google.com/maps?q=Emir+Sultan+Camii+Bursa',
        image: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTMci8iaW9rChtM6VR2EgB9JA5liv5tP1Of9EnByQow90hmz2OoClGn9uyLi7QIIYNI-P0dV1RkPHJdjGeAXzy8EI6cc10e-ow_4c3iOA'
      },
      {
        title: 'Yeşil Türbe ve Cami',
        description: 'Bursa\'nın simgesi haline gelmiş olan Yeşil Türbe, çinileriyle ünlü muhteşem bir Osmanlı yapısıdır.',
        location: 'https://maps.google.com/maps?q=Yeşil+Türbe+Bursa',
        image: 'https://yildirim.bel.tr/files/cms/47/web/114/8931/dosyalar/p1eavlqmtu1n5mtetl1efcc1vsl4.jpg'
      },
      {
        title: 'Yeşil Çarşı',
        description: 'Geleneksel Bursa el sanatları ve hediyelik eşyaların bulunduğu tarihi çarşı.',
        location: 'https://maps.google.com/maps?q=Yeşil+Çarşı+Bursa',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/4c/0b/9c/lindas-luminarias.jpg?w=900&h=500&s=1'
      },
      {
        title: 'Kapalı Çarşı',
        description: 'Osmanlı döneminden kalma tarihi çarşı, geleneksel Türk el sanatları ve tekstil ürünleri sunar. Turistlerin vazgeçilmez duraklarından biridir.',
        location: 'https://maps.google.com/maps?q=Kapalı+Çarşı+Bursa',
        image: 'http://www.bursa.gov.tr/kurumlar/bursa.gov.tr/Bursa.gov/bursa/kapali-carsi/7.jpg?mode=resize&width=1200'
      },
      {
        title: 'Tarihi Bursa Çınarı',
        description: 'İnkaya Çınarı olarak da bilinen 700 yıllık çınar ağacı, Bursa\'nın yaşayan tarihi anıtlarından biridir.Sabah kahvaltılarında ve öğlen çay molalarında harika bir duraktır.',
        location: 'https://maps.google.com/maps?q=İnkaya+Çınarı+Bursa',
        image: 'https://cdnuploads.aa.com.tr/uploads/userFiles/82e2c611-519a-471c-8da1-e26f0e4933a0/2019%2FAgustoss22%2F20190819_2_37812092_46893354.jpg'
      },
      {
        title: 'Bursa Teleferik',
        description: 'Dünya\'nın en uzun teleferik hattı olan Bursa Teleferik, şehir merkezinden Uludağ\'a ulaşım sağlar. Şehir merkezinden kolay ulaşım ile gidilebilinir.',
        location: 'https://maps.google.com/maps?q=Bursa+Teleferik',
        image: 'https://www.outdoorhaber.com/wp-content/uploads/2017/07/teferruc-teleferik-istasyonu.jpg'
      },
      {
        title: 'Tophane',
        description: 'Osmanlı İmparatorluğu\'nun kurucuları Osman Gazi ve Orhan Gazi\'nin türbelerinin bulunduğu tarihi bölge.',
        location: 'https://maps.google.com/maps?q=Tophane+Bursa',
        image: 'https://www.gotobursa.com.tr/uploads/2021/09/saat-kulesi_large_large.jpg'
      },
      {
        title: 'Ulu Cami',
        description: 'Bursa\'nın en büyük camisi olan Ulu Cami, Osmanlı mimarisinin en önemli örneklerinden biridir.',
        location: 'https://maps.google.com/maps?q=Ulu+Cami+Bursa',
        image: 'https://www.gotobursa.com.tr/uploads/2021/01/dji_0034_large_1_large.jpg'
      }
    ],
    en: [
      {
        title: 'Emir Sultan Shrine',
        description: 'Emir Sultan Mosque and Tomb, one of Bursa\'s most important spiritual places, is a beautiful example of Ottoman architecture.',
        location: 'https://maps.google.com/maps?q=Emir+Sultan+Mosque+Bursa',
        image: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTMci8iaW9rChtM6VR2EgB9JA5liv5tP1Of9EnByQow90hmz2OoClGn9uyLi7QIIYNI-P0dV1RkPHJdjGeAXzy8EI6cc10e-ow_4c3iOA'
      },
      {
        title: 'Green Tomb and Mosque',
        description: 'The Green Tomb, which has become the symbol of Bursa, is a magnificent Ottoman structure famous for its tiles.',
        location: 'https://maps.google.com/maps?q=Green+Tomb+Bursa',
        image: 'https://yildirim.bel.tr/files/cms/47/web/114/8931/dosyalar/p1eavlqmtu1n5mtetl1efcc1vsl4.jpg'
      },
      {
        title: 'Green Bazaar',
        description: 'Historical bazaar featuring traditional Bursa handicrafts and souvenirs.',
        location: 'https://maps.google.com/maps?q=Green+Bazaar+Bursa',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/4c/0b/9c/lindas-luminarias.jpg?w=900&h=500&s=1'
      },
      {
        title: 'Grand Bazaar',
        description: 'Historical bazaar from the Ottoman period, offering traditional Turkish handicrafts and textile products.',
        location: 'https://maps.google.com/maps?q=Grand+Bazaar+Bursa',
        image: 'http://www.bursa.gov.tr/kurumlar/bursa.gov.tr/Bursa.gov/bursa/kapali-carsi/7.jpg?mode=resize&width=1200'
      },
      {
        title: 'Historical Bursa Plane Tree',
        description: 'The 700-year-old plane tree, also known as Inkaya Plane Tree, is one of Bursa\'s living historical monuments.',
        location: 'https://maps.google.com/maps?q=Inkaya+Plane+Tree+Bursa',
        image: 'https://cdnuploads.aa.com.tr/uploads/userFiles/82e2c611-519a-471c-8da1-e26f0e4933a0/2019%2FAgustoss22%2F20190819_2_37812092_46893354.jpg'
      },
      {
        title: 'Bursa Cable Car',
        description: 'The world\'s longest cable car line, connecting the city center to Uludağ.',
        location: 'https://maps.google.com/maps?q=Bursa+Cable+Car',
        image: 'https://www.outdoorhaber.com/wp-content/uploads/2017/07/teferruc-teleferik-istasyonu.jpg'
      },
      {
        title: 'Tophane',
        description: 'Historical area where the tombs of Ottoman Empire founders Osman Ghazi and Orhan Ghazi are located.',
        location: 'https://maps.google.com/maps?q=Tophane+Bursa',
        image: 'https://www.gotobursa.com.tr/uploads/2021/09/saat-kulesi_large_large.jpg'
      },
      {
        title: 'Grand Mosque',
        description: 'The largest mosque in Bursa, the Grand Mosque is one of the most important examples of Ottoman architecture.',
        location: 'https://maps.google.com/maps?q=Grand+Mosque+Bursa',
        image: 'https://www.gotobursa.com.tr/uploads/2021/01/dji_0034_large_1_large.jpg'
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-blue-900 mb-12 text-center">
          {language === 'tr' ? 'Bursa Rehberi' : 'Bursa Guide'}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {places[language].map((place, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <img
                  src={place.image}
                  alt={place.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {place.title}
                  </h3>
                  <div className="flex items-center text-white/90">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">Bursa, Turkey</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{place.description}</p>
                <a
                  href={place.location}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center text-blue-900 hover:text-blue-700 transition-colors"
                >
                  <Navigation className="w-4 h-4 mr-1" />
                  <span className="text-sm font-medium">
                    {language === 'tr' ? 'Yol Tarifi Al' : 'Get Directions'}
                  </span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Guide;
