import React from 'react';
import SEOHelmet from './SEOHelmet'; // Mevcut SEOHelmet bileşenini içeri aktarın.

const pageMetadata = {
  home: {
    title: "Çeşmeli Hotel Bursa - Konforlu ve Uygun Fiyatlı Konaklama",
    description: "Hotel Çeşmeli Bursa, merkezi konumu ve uygun fiyatlarıyla tatilinizi unutulmaz kılar. Hijyenik ve konforlu odalar sunar.",
    keywords: "Çeşmeli Hotel, Bursa Otel, Uygun Fiyatlı otel, Merkezi Otel, Aile Oteli, 750, ucuz otel, nerede konaklanır",
    path: "/",
    image: "https://r.resimlink.com/kYTfn9u.jpg",
  },
  rooms: {
    title: "Odalar - Çeşmeli Hotel Bursa",
    description: "Çeşmeli Hotel Bursa, her bütçeye uygun konforlu ve hijyenik odalar sunar. Tatilinizin keyfini çıkarın!",
    keywords: "Çeşmeli Hotel Odalar, Bursa Ucuz Odalar, Konforlu Konaklama, Aile Odaları, bursa telefon",
    path: "/rooms",
    image: "https://r.resimlink.com/kYTfn9u.jpg",
  },
  about: {
    title: "Hakkımızda - Çeşmeli Hotel Bursa",
    description: "Çeşmeli Hotel Bursa, yılların deneyimi ve müşteri memnuniyetine dayalı hizmet anlayışıyla size özel bir konaklama sunar.",
    keywords: "Çeşmeli Hotel Hakkımızda, Bursa Otel Tarihçesi, Müşteri Memnuniyeti, bursa iletişim, bursa tarihi",
    path: "/about",
    image: "https://r.resimlink.com/kYTfn9u.jpg",
  },
  guide: {
    title: "Bursa Rehberi - Çeşmeli Hotel Bursa",
    description: "Bursa'da gezilecek yerler ve yapılacak aktiviteler hakkında bilgi alın. Çeşmeli Hotel Bursa rehberiniz!",
    keywords: "Bursa Rehberi, Bursa Gezilecek Yerler, Çeşmeli Hotel Bursa Aktiviteler, nerede konaklanır, gezilecek yerler, bursa kebabı",
    path: "/guide",
    image: "https://r.resimlink.com/kYTfn9u.jpg",
  },
  contact: {
    title: "İletişim - Çeşmeli Hotel Bursa",
    description: "Çeşmeli Hotel Bursa ile iletişim kurun. Rezervasyon ve sorularınız için bize ulaşabilirsiniz.",
    keywords: "Çeşmeli Hotel İletişim, Bursa Otel Rezervasyon, Otel Telefon, iletişim, bursa otel telefon, uygun otel telefon, ucuz otel nerede",
    path: "/contact",
    image: "https://r.resimlink.com/kYTfn9u.jpg",
  },
};

const DynamicSEOHelmet: React.FC<{ page: keyof typeof pageMetadata }> = ({ page }) => {
  const metadata = pageMetadata[page];

  return (
    <SEOHelmet
      title={metadata.title}
      description={metadata.description}
      keywords={metadata.keywords}
      path={metadata.path}
      image={metadata.image}
    />
  );
};

export default DynamicSEOHelmet;
