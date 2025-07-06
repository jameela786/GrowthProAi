import React, { useState } from 'react';
import { BusinessFormData, FormErrors } from '../types';
import LoadingSpinner from './LoadingSpinner';

interface BusinessFormProps {
  onSubmit: (formData: BusinessFormData) => void;
  isLoading: boolean;
}

const BusinessForm: React.FC<BusinessFormProps> = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState<BusinessFormData>({
    name: '',
    location: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Business name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Business name must be at least 2 characters';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    } else if (formData.location.trim().length < 2) {
      newErrors.location = 'Location must be at least 2 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  return (
    <div className="glass-card rounded-xl p-8 max-w-md mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">
          Business Dashboard
        </h2>
        <p className="text-gray-200">
          Enter your business details to get insights
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
            Business Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`custom-input ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''}`}
            placeholder="Enter your business name"
            disabled={isLoading}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-200">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-white mb-2">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            className={`custom-input ${errors.location ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''}`}
            placeholder="Enter your location"
            disabled={isLoading}
          />
          {errors.location && (
            <p className="mt-1 text-sm text-red-200">{errors.location}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full custom-button flex items-center justify-center"
        >
          {isLoading ? (
            <>
              <LoadingSpinner size="sm" color="white" />
              <span className="ml-2">Getting Business Data...</span>
            </>
          ) : (
            'Get Business Insights'
          )}
        </button>
      </form>
    </div>
  );
};

export default BusinessForm; 