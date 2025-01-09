import React from 'react';
import { motion } from 'framer-motion';
import { Users, Wifi, Coffee, Tv } from 'lucide-react';
import RoomImageSlider from '../components/RoomImageSlider';
import { roomImages } from '../utils/imageUtils';

const Rooms = ({ language }: { language: 'tr' | 'en' | 'ar' }) => {
  const rooms = {
    tr: [
      {
        title: 'Dört Kişilik Aile Odası',
        description: 'Geniş ferah cadde manzaralı aile odalarımızın içerisinde 1 double 2 single yatak bulunmaktadır. max. 4 kişi huzur içinde konaklayabilirsiniz.',
        amenities: ['Ücretsiz Wi-Fi', 'LCD TV', 'Klima', 'Minibar', 'Çay/Kahve Seti', 'Oturma Alanı'],
        capacity: 4,
        images: roomImages.familyRoom,
        size: '30m²'
      },
      {
        title: 'Üç Kişilik Oda',
        description: 'Geniş ferah cadde manzaralı aile odalarımızın içerisinde 1 double 1 single yatak bulunmaktadır. max. 3 kişi huzur içinde konaklayabilirsiniz.',
        amenities: ['Ücretsiz Wi-Fi', 'LCD TV', 'Klima', 'Minibar', 'Çay/Kahve Seti'],
        capacity: 3,
        images: roomImages.tripleRoom,
        size: '25m²'
      },
      {
        title: 'Çift Kişilik Oda',
        description: 'Geniş ferah çift kişilik odalarımızın içerisinde 1 double yatak bulunmaktadır. max. 2 kişi huzur içinde konaklayabilirsiniz.',
        amenities: ['Ücretsiz Wi-Fi', 'LCD TV', 'Klima', 'Minibar', 'Çay/Kahve Seti'],
        capacity: 2,
        images: roomImages.doubleRoom,
        size: '20m²'
      },
      {
        title: 'Standart Tek Kişilik Oda',
        description: 'Tek kişilik odalarımızı double yada single yataklı olarak tercih edebilir huzur içinde konaklayabilirsiniz.',
        amenities: ['Ücretsiz Wi-Fi', 'LCD TV', 'Klima', 'Minibar'],
        capacity: 1,
        images: roomImages.singleRoom,
        size: '18m²'
      }
    ],
    en: [
      {
        title: 'Family Room for Four',
        description: 'Our spacious family rooms with street view feature 1 double bed and 2 single beds. Maximum occupancy of 4 people can stay in comfort.',
        amenities: ['Free Wi-Fi', 'LCD TV', 'Air Conditioning', 'Minibar', 'Tea/Coffee Set', 'Seating Area'],
        capacity: 4,
        images: roomImages.familyRoom,
        size: '30m²'
      },
      {
        title: 'Triple Room',
        description: 'Our spacious rooms with street view feature 1 double bed and 1 single bed. Maximum occupancy of 3 people can stay in comfort.',
        amenities: ['Free Wi-Fi', 'LCD TV', 'Air Conditioning', 'Minibar', 'Tea/Coffee Set'],
        capacity: 3,
        images: roomImages.tripleRoom,
        size: '25m²'
      },
      {
        title: 'Double Room',
        description: 'Our spacious double rooms feature 1 double bed. Maximum occupancy of 2 people can stay in comfort.',
        amenities: ['Free Wi-Fi', 'LCD TV', 'Air Conditioning', 'Minibar', 'Tea/Coffee Set'],
        capacity: 2,
        images: roomImages.doubleRoom,
        size: '20m²'
      },
      {
        title: 'Standard Single Room',
        description: 'You can choose our single rooms with either a double or single bed and stay in comfort.',
        amenities: ['Free Wi-Fi', 'LCD TV', 'Air Conditioning', 'Minibar'],
        capacity: 1,
        images: roomImages.singleRoom,
        size: '18m²'
      }
    ],
    ar: [
      {
        title: 'غرفة عائلية لأربعة أشخاص',
        description: 'غرفنا العائلية الواسعة مع إطلالة على الشارع تحتوي على سرير مزدوج وسريرين مفردين. يمكن لـ 4 أشخاص الإقامة براحة تامة.',
        amenities: ['واي فاي مجاني', 'تلفاز LCD', 'تكييف هواء', 'ميني بار', 'طقم شاي/قهوة', 'منطقة جلوس'],
        capacity: 4,
        images: roomImages.familyRoom,
        size: '30m²'
      },
      {
        title: 'غرفة ثلاثية',
        description: 'غرفنا الواسعة مع إطلالة على الشارع تحتوي على سرير مزدوج وسرير مفرد. يمكن لـ 3 أشخاص الإقامة براحة تامة.',
        amenities: ['واي فاي مجاني', 'تلفاز LCD', 'تكييف هواء', 'ميني بار', 'طقم شاي/قهوة'],
        capacity: 3,
        images: roomImages.tripleRoom,
        size: '25m²'
      },
      {
        title: 'غرفة مزدوجة',
        description: 'غرفنا المزدوجة الواسعة تحتوي على سرير مزدوج. يمكن لشخصين الإقامة براحة تامة.',
        amenities: ['واي فاي مجاني', 'تلفاز LCD', 'تكييف هواء', 'ميني بار', 'طقم شاي/قهوة'],
        capacity: 2,
        images: roomImages.doubleRoom,
        size: '20m²'
      },
      {
        title: 'غرفة مفردة قياسية',
        description: 'يمكنك اختيار غرفنا المفردة إما بسرير مزدوج أو مفرد والإقامة براحة تامة.',
        amenities: ['واي فاي مجاني', 'تلفاز LCD', 'تكييف هواء', 'ميني بار'],
        capacity: 1,
        images: roomImages.singleRoom,
        size: '18m²'
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
          {language === 'tr' ? 'Odalarımız' : 
           language === 'en' ? 'Our Rooms' : 
           'غرفنا'}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms[language].map((room, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <RoomImageSlider images={room.images} />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4 text-blue-900" />
                    <span className="text-sm font-medium text-blue-900">
                      {room.capacity} {language === 'tr' ? 'Kişilik' : 
                                     language === 'en' ? 'Person' : 
                                     'شخص'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {room.title}
                </h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  {room.size}
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {room.amenities.map((amenity, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      {i === 0 && <Wifi className="w-4 h-4 text-blue-900" />}
                      {i === 1 && <Tv className="w-4 h-4 text-blue-900" />}
                      {i === 2 && <Coffee className="w-4 h-4 text-blue-900" />}
                      <span className="text-sm text-gray-600">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Rooms;
