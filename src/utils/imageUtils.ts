// Geçici olarak Unsplash'ten örnek resimler kullanıyoruz
export const roomImages = {
  familyRoom: [
    'https://r.resimlink.com/kYTfn9u.jpg',
    'https://r.resimlink.com/W3mxEuZJR.jpeg',
    'https://r.resimlink.com/WJX3rK7.jpeg',
    'https://r.resimlink.com/p2gFm0TDEZhH.jpeg',
  ],
  tripleRoom: [
    'https://resmim.net/cdn/2024/12/09/DokmC2.jpg',
    'https://resmim.net/cdn/2024/12/09/DokKNK.jpg',
    'https://resmim.net/cdn/2024/12/09/Dok5Ec.jpg',
    'https://resmim.net/cdn/2024/12/09/Dok0UH.jpg'
  ],
  doubleRoom: [
    'https://resmim.net/cdn/2024/12/09/DokXDF.jpg',
    'https://resmim.net/cdn/2024/12/09/DolYG2.jpg',
    'https://resmim.net/cdn/2024/12/09/Dol3Qb.jpg',
    'https://resmim.net/cdn/2024/12/09/Dok5Ec.jpg'
  ],
  singleRoom: [
    'https://resmim.net/cdn/2024/12/09/DokEMG.jpg',
    'https://resmim.net/cdn/2024/12/09/Dokjei.jpg',
    'https://resmim.net/cdn/2024/12/09/Dok5Ec.jpg',
  ]
};

export const getImageUrl = (imageName: string) => {
  return new URL(`../assets/images/${imageName}`, import.meta.url).href;
};