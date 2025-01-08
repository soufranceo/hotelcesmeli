import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHelmetProps {
  title?: string;
  description?: string;
  keywords?: string;
  path?: string;
  image?: string;
}

const SEOHelmet: React.FC<SEOHelmetProps> = ({
  title = "Çeşmeli Hotel Bursa - Konforlu ve Uygun Fiyatlı Konaklama",
  description = "Çeşmeli Hotel Ailesi, merkezi konumu ve en uygun fiyatlarıyla her zaman tüm dünyanın tercihi ve aile otelidir. Hijyenik ve konforlu odalar, profesyonel hizmet anlayışıyla ...",
  keywords = "Çeşmeli Hotel Bursa, Uygun Fiyatlı Otel, Merkezi Konum, Bursa Otel, Tatil, 750, tatil bursa, ucuz oteller, bursada nerede, kalınır, Konforlu Konaklama, Hijyenik Odalar, Aile Oteli, Merkezi Otel Bursa",
  path = "/",
  image = "https://r.resimlink.com/kYTfn9u.jpg"
}) => {
  const baseUrl = 'https://hotelcesmeli.com';
  const fullUrl = `${baseUrl}${path}`;
  const fullTitle = `${title}`;

  return (
    <Helmet>
      {/* Sayfa Başlığı */}
      <title>{fullTitle}</title>
      
      {/* Açıklayıcı Meta Etiketleri */}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph Meta Etiketleri */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="tr_TR" />
      <meta property="og:site_name" content="Çeşmeli Hotel Bursa" />

      {/* Twitter Card Meta Etiketleri */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Konum Bilgisi */}
      <meta name="geo.region" content="TR-16" />
      <meta name="geo.placename" content="Bursa" />
      <meta name="geo.position" content="40.182622;29.062901" />
      <meta name="ICBM" content="40.182622, 29.062901" />
    </Helmet>
  );
};

export default SEOHelmet;
