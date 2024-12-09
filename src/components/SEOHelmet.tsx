import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHelmetProps {
  title: string;
  description: string;
  keywords: string;
  path: string;
  image?: string;
}

const SEOHelmet: React.FC<SEOHelmetProps> = ({ 
  title, 
  description, 
  keywords, 
  path,
  image = 'https://cesmelihotel.com/hotel-exterior.jpg'
}) => {
  const baseUrl = 'https://cesmelihotel.com';
  const fullUrl = `${baseUrl}${path}`;
  const defaultTitle = 'Çeşmeli Hotel Bursa - Merkezi Konum, Uygun Fiyat';
  const fullTitle = title === defaultTitle ? title : `${title} | Çeşmeli Hotel Bursa`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="tr_TR" />
      <meta property="og:site_name" content="Çeşmeli Hotel Bursa" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Location Meta Tags */}
      <meta name="geo.region" content="TR-16" />
      <meta name="geo.placename" content="Bursa" />
      <meta name="geo.position" content="40.182622;29.062901" />
      <meta name="ICBM" content="40.182622, 29.062901" />
    </Helmet>
  );
};

export default SEOHelmet;