import React from 'react';
import { Star } from 'lucide-react';

interface ReviewCardProps {
  name: string;
  rating: number;
  comment: string;
  language: 'tr' | 'en';
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, rating, comment, language }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
          <span className="text-blue-900 font-semibold">{name[0]}</span>
        </div>
        <div className="ml-3">
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">
              {rating}/10 - {language === 'tr' ? 'Puan' : 'Rating'}
            </span>
          </div>
        </div>
      </div>
      <p className="text-gray-600">{comment}</p>
    </div>
  );
};

export default ReviewCard;