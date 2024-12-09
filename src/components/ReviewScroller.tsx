import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ReviewCard from './ReviewCard';

interface Review {
  name: string;
  rating: number;
  comment: string;
}

interface ReviewScrollerProps {
  reviews: Review[];
  language: 'tr' | 'en';
}

const ReviewScroller: React.FC<ReviewScrollerProps> = ({ reviews, language }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [reviews.length, isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const scrollTo = (direction: 'prev' | 'next') => {
    setCurrentIndex((prev) => {
      if (direction === 'prev') {
        return prev === 0 ? reviews.length - 1 : prev - 1;
      }
      return (prev + 1) % reviews.length;
    });
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 py-12">
      <div
        ref={scrollRef}
        className="overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <motion.div
          className="flex"
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="min-w-full px-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <ReviewCard {...review} language={language} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <button
        onClick={() => scrollTo('prev')}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-blue-900" />
      </button>

      <button
        onClick={() => scrollTo('next')}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-blue-900" />
      </button>

      <div className="flex justify-center mt-4 space-x-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-blue-900' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewScroller;