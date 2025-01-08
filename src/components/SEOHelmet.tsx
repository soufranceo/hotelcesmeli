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
  title = "Çeşmeli Hotel Bursa - Konforlu ve Uygun Fiyatlı Konaklama",
  description = "Çeşmeli Hotel Ailesi, merkezi konumu ve en uygun fiyatlarıyla her zaman tüm dünyanın tercihi ve aile otelidir. Hijyenik ve konforlu odalar, profesyonel hizmet anlayışıyla ...",
  keywords = "Çeşmeli Hotel Bursa, Uygun Fiyatlı Otel, Merkezi Konum, Bursa Otel, Tatil, 750, tatil bursa, ucuz oteller, bursada nerede, kalınır, Konforlu Konaklama, Hijyenik Odalar, Aile Oteli, Merkezi Otel Bursa",
  path = "/",
  image = "https://r.resimlink.com/kYTfn9u.jpg"
}) => {
  const baseUrl = 'https://hotelcesmeli.com';
  const fullUrl = `${baseUrl}${path}`;
  const defaultTitle = 'Çeşmeli Hotel Bursa - Merkezi Konum, Uygun Fiyat';
  const fullTitle = title === defaultTitle ? title : `${title} | Çeşmeli Hotel Bursa`;

  return (
    <Helmet>
     <title>Hotel Çeşmeli Bursa | Konforlu ve Uygun Fiyatlı Konaklama</title>
<meta name="description" content="Hotel Çeşmeli Bursa, konforlu ve uygun fiyatlarla konaklama imkanı sunar. Tatilinizi burada geçirebilirsiniz ve.." />
      <meta name="keywords" content="Hotel Çeşmeli, bursa, merkez, ucuz, 750, Konaklama, Tatil, Uygun Fiyatlı Hotel, merkezde uygun fiyatlı otel, bursa ucuz otel, ucuz oda, bursa tatil" />
      <link rel="canonical" href="https://hotelcesmeli.com/" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="Hotel Çeşmeli Bursa - Bursa'da En İyi aile otellerinden biri.." />
      <meta property="og:description" content="Hotel Çeşmel, konforlu ve uygun fiyatlarla tatil yapabileceğiniz ideal bir mekandır.Bursa'da En İyi aile otellerinden biri uygun hijyenik fiyatlı full  konaklama hizmeti" />
      <meta property="og:url" content="https://hotelcesmeli.com/" />
      <meta property="og:image" content="https://r.resimlink.com/kYTfn9u.jpg" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="tr_TR" />
      <meta property="og:site_name" content="Hotel Çeşmeli Bursa" />

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
