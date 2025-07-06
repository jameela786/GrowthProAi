import React from 'react';
import { BusinessData, BusinessFormData } from '../types';
import LoadingSpinner from './LoadingSpinner';

interface BusinessDataCardProps {
  businessData: BusinessData;
  businessInfo: BusinessFormData;
  onRegenerateHeadline: () => void;
  isRegenerating: boolean;
  onReset: () => void;
}

const BusinessDataCard: React.FC<BusinessDataCardProps> = ({
  businessData,
  businessInfo,
  onRegenerateHeadline,
  isRegenerating,
  onReset
}) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    
    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="halfStarGradient">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path fill="url(#halfStarGradient)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-5 h-5 text-gray-300 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    
    return stars;
  };

  return (
    <div className="glass-card rounded-xl p-8 max-w-2xl mx-auto">
      {/* Header with business name and location */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-white mb-2">
          {businessInfo.name}
        </h2>
        <p className="text-gray-200 text-lg">
          📍 {businessInfo.location}
        </p>
      </div>

      {/* Rating and Reviews Section */}
      <div className="bg-white bg-opacity-20 rounded-lg p-6 mb-6">
        <div className="flex items-center justify-center mb-4">
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {renderStars(businessData.rating)}
            </div>
            <span className="text-2xl font-bold text-white ml-2">
              {businessData.rating.toFixed(1)}
            </span>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-white text-lg font-medium">
            {businessData.reviews.toLocaleString()} Reviews
          </p>
          <p className="text-gray-200 text-sm mt-1">
            Based on Google Business data
          </p>
        </div>
      </div>

      {/* SEO Headline Section */}
      <div className="bg-white bg-opacity-20 rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
          <span className="mr-2">🚀</span>
          AI-Generated SEO Headline
        </h3>
        <p className="text-white text-lg leading-relaxed mb-4">
          "{businessData.headline}"
        </p>
        
        <button
          onClick={onRegenerateHeadline}
          disabled={isRegenerating}
          className="custom-button-secondary flex items-center justify-center w-full sm:w-auto"
        >
          {isRegenerating ? (
            <>
              <LoadingSpinner size="sm" color="primary" />
              <span className="ml-2">Regenerating...</span>
            </>
          ) : (
            <>
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Regenerate SEO Headline
            </>
          )}
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={onReset}
          className="flex-1 bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 border border-white border-opacity-30"
        >
          Try Another Business
        </button>
        <button
          onClick={() => window.open('https://business.google.com', '_blank')}
          className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Manage on Google
        </button>
      </div>
    </div>
  );
};

export default BusinessDataCard; 