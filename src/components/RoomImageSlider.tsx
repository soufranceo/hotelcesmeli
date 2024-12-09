import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface RoomImageSliderProps {
  images: string[];
}

const RoomImageSlider: React.FC<RoomImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Geçici resimler (test için)
  const fallbackImages = [
    'https://r.resimlink.com/kYTfn9u.jpg',
    'https://images.unsplash.com/photo-1631049552057-403cdb8f0658',
    'https://images.unsplash.com/photo-1631049035182-249067d7618e',
    'https://images.unsplash.com/photo-1631049035644-adf3294af7e3'
  ];

  const displayImages = images.length > 0 ? images : fallbackImages;

  return (
    <div className="relative w-full h-full">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={displayImages[currentIndex]}
          alt={`Room image ${currentIndex + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = fallbackImages[currentIndex];
          }}
        />
      </AnimatePresence>

      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors z-10"
      >
        <ChevronLeft className="w-5 h-5 text-blue-900" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors z-10"
      >
        <ChevronRight className="w-5 h-5 text-blue-900" />
      </button>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {displayImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-blue-900' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default RoomImageSlider;