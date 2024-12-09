import React from 'react';
import { motion } from 'framer-motion';
import ImageSlider from '../components/ImageSlider';
import ReviewScroller from '../components/ReviewScroller';
import CurrencyRates from '../components/CurrencyRates';
import WorldClock from '../components/WorldClock';
import WelcomeOverlay from '../components/WelcomeOverlay';
import SEOHelmet from '../components/SEOHelmet';

const Home = ({ language }: { language: 'tr' | 'en' }) => {
  const reviews = {
    tr: [
      {
        name: "Ahmet Y.",
        rating: 9,
        comment: "Merkezi konumu ve temizliği ile harika bir otel. Personel çok ilgili ve yardımsever."
      },
      {
        name: "Ayşe K.",
        rating: 10,
        comment: "Kahvaltısı muhteşem, odalar çok konforlu. Kesinlikle tekrar tercih edeceğim."
      },
      {
        name: "Mehmet S.",
        rating: 9,
        comment: "İş seyahatleri için ideal. Ulaşım çok kolay ve merkezi konumda."
      },
      {
        name: "Fatma D.",
        rating: 10,
        comment: "Aile dostu bir otel. Çocuklarımızla rahat bir konaklama geçirdik."
      },
      {
        name: "Ali R.",
        rating: 9,
        comment: "Temizlik ve hijyen konusunda çok titizler. Güvenle kalabilirsiniz."
      },
      {
        name: "Zeynep B.",
        rating: 9,
        comment: "Tarihi yerlere yakınlığı büyük avantaj. Personel çok nazik."
      },
      {
        name: "Mustafa K.",
        rating: 10,
        comment: "Fiyat/performans açısından mükemmel. Kahvaltı çeşitleri zengin."
      },
      {
        name: "Esra M.",
        rating: 9,
        comment: "Odalar ferah ve aydınlık. Konum olarak çok merkezi."
      }
    ],
    en: [
      {
        name: "John D.",
        rating: 9,
        comment: "Great hotel with central location and cleanliness. Staff very attentive and helpful."
      },
      {
        name: "Sarah M.",
        rating: 10,
        comment: "Breakfast is amazing, rooms very comfortable. Will definitely choose again."
      },
      {
        name: "Michael R.",
        rating: 9,
        comment: "Ideal for business trips. Transportation is very easy and centrally located."
      },
      {
        name: "Emma W.",
        rating: 10,
        comment: "Family-friendly hotel. Had a comfortable stay with our children."
      },
      {
        name: "David L.",
        rating: 9,
        comment: "Very meticulous about cleanliness and hygiene. You can stay with confidence."
      },
      {
        name: "Lisa K.",
        rating: 9,
        comment: "Proximity to historical places is a big advantage. Staff very polite."
      },
      {
        name: "Robert P.",
        rating: 10,
        comment: "Excellent value for money. Rich breakfast varieties."
      },
      {
        name: "Anna S.",
        rating: 9,
        comment: "Rooms are spacious and bright. Very central location."
      }
    ]
  };

  const images = [
    {
      url: "https://resmim.net/cdn/2024/12/09/DokmC2.jpg",
      alt: "Çeşmeli Hotel Dış Görünüm"
    },
    {
      url: "https://resmim.net/cdn/2024/12/09/DokNnk.webp",
      alt: "Otel Lobisi"
    },
    {
      url: "https://resmim.net/cdn/2024/12/09/DokXDF.jpg",
      alt: "Kahvaltı Salonu"
    },
    {
      url: "https://resmim.net/cdn/2024/12/09/DokKNK.jpg",
      alt: "Otel Odası"
    }
  ];

  const seoContent = {
    tr: {
      title: 'Çeşmeli Hotel Bursa - Merkezi Konum, Uygun Fiyat',
      description: 'Bursa\'nın merkezinde, Ulucami ve Kapalı Çarşı\'ya yakın konumda bulunan Çeşmeli Hotel. Ailenizin huzur ve güvenli adresi. Uygun fiyatlı konaklama, ücretsiz WiFi ve açık büfe kahvaltı.',
      keywords: 'bursa otel, bursa merkez otel, çeşmeli hotel, uygun otel bursa, ulucami yakını otel, kapalı çarşı yakını otel, bursa konaklama, bursa tatil, merkez otel bursa, aile oteli bursa'
    },
    en: {
      title: 'Çeşmeli Hotel Bursa - Central Location, Affordable Prices',
      description: 'Located in the center of Bursa, close to Ulucami and Grand Bazaar. Your family\'s peaceful and safe address. Affordable accommodation with free WiFi and open buffet breakfast.',
      keywords: 'bursa hotel, central bursa hotel, cesmeli hotel, affordable hotel bursa, hotel near ulucami, hotel near grand bazaar, bursa accommodation, bursa holiday, central hotel bursa'
    }
  };

  return (
    <>
      <SEOHelmet
        title={seoContent[language].title}
        description={seoContent[language].description}
        keywords={seoContent[language].keywords}
        path="/"
      />
      <WelcomeOverlay language={language} />
      <div className="min-h-screen">
        <ImageSlider images={images} />
        <div className="max-w-7xl mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold text-blue-900 text-center mb-8">
              {language === 'tr' ? 'Misafirlerimizin Yorumları' : 'Guest Reviews'}
            </h1>
            <ReviewScroller reviews={reviews[language]} language={language} />
          </motion.div>
        </div>
        <CurrencyRates />
        <WorldClock />
      </div>
    </>
  );
};

export default Home;