import React from 'react';
import { motion } from 'framer-motion';
import ImageSlider from '../components/ImageSlider';
import ReviewScroller from '../components/ReviewScroller';
import CurrencyRates from '../components/CurrencyRates';
import WorldClock from '../components/WorldClock';
import WelcomeOverlay from '../components/WelcomeOverlay';
import SEOHelmet from '../components/SEOHelmet';

const Home = ({ language }: { language: 'tr' | 'en' | 'ar' }) => {
  const reviews = {
    tr: [
      {
        name: "Ahmet Y.",
        rating: 9,
        comment: "Merkezi konumu ve temizliği ile harika bir otel. Personel çok ilgili ve yardımsever."
      },
      {
        name: "Mehmet K.",
        rating: 10,
        comment: "Kahvaltı mükemmel, odalar çok rahat. Kesinlikle tekrar tercih edeceğim."
      },
      {
        name: "Ayşe S.",
        rating: 9,
        comment: "İş seyahatleri için ideal. Ulaşım çok kolay ve merkezi konumda."
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
        comment: "Excellent breakfast, very comfortable rooms. Will definitely choose again."
      },
      {
        name: "Michael R.",
        rating: 9,
        comment: "Perfect for business trips. Easy transportation and central location."
      }
    ],
    ar: [
      {
        name: "محمد س.",
        rating: 9,
        comment: "فندق رائع بموقع مركزي ونظافة. الموظفون متعاونون ومهتمون للغاية."
      },
      {
        name: "أحمد ي.",
        rating: 10,
        comment: "الإفطار رائع، الغرف مريحة جداً. سأختاره مرة أخرى بالتأكيد."
      },
      {
        name: "فاطمة م.",
        rating: 9,
        comment: "مثالي لرحلات العمل. المواصلات سهلة جداً والموقع مركزي."
      }
    ]
  };

  const images = [
    {
      url: "https://resmim.net/cdn/2024/12/09/DokmC2.jpg",
      alt: "Hotel Çeşmeli Dış Görünüm"
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
      title: 'Hotel Çeşmeli Bursa - Merkezi Konum, Uygun Fiyat',
      description: 'Bursa\'nın merkezinde, Ulucami ve Kapalı Çarşı\'ya yakın konumda bulunan Hotel Çeşmeli. Ailenizin huzur ve güvenli adresi. Uygun fiyatlı konaklama, ücretsiz WiFi ve açık büfe kahvaltı.',
      keywords: 'bursa otel, bursa merkez otel, çeşmeli hotel, uygun otel bursa, ulucami yakını otel, kapalı çarşı yakını otel, bursa konaklama'
    },
    en: {
      title: 'Hotel Çeşmeli Bursa - Central Location, Affordable Prices',
      description: 'Located in the center of Bursa, close to Ulucami and Grand Bazaar. Your family\'s peaceful and safe address. Affordable accommodation with free WiFi and open buffet breakfast.',
      keywords: 'bursa hotel, central bursa hotel, cesmeli hotel, affordable hotel bursa, hotel near ulucami, hotel near grand bazaar'
    },
    ar: {
      title: 'فندق تشيشملي بورصة - موقع مركزي، أسعار مناسبة',
      description: 'يقع في وسط بورصة، بالقرب من جامع أولو والسوق المغطى. عنوان عائلتك للراحة والأمان. إقامة بأسعار معقولة مع واي فاي مجاني وإفطار مفتوح.',
      keywords: 'فندق بورصة، فندق وسط بورصة، فندق تشيشملي، فندق رخيص بورصة، فندق قرب جامع أولو، فندق قرب السوق المغطى'
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
              {language === 'tr' ? 'Misafirlerimizin Yorumları' : 
               language === 'en' ? 'Guest Reviews' : 
               'آراء ضيوفنا'}
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