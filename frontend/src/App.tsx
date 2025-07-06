import React, { useState } from 'react';
import BusinessForm from './components/BusinessForm';
import BusinessDataCard from './components/BusinessDataCard';
import { BusinessData, BusinessFormData } from './types';
import { ApiService } from './services/api';

function App() {
  const [businessData, setBusinessData] = useState<BusinessData | null>(null);
  const [businessInfo, setBusinessInfo] = useState<BusinessFormData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isRegenerating, setIsRegenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = async (formData: BusinessFormData) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const data = await ApiService.getBusinessData(formData);
      setBusinessData(data);
      setBusinessInfo(formData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('Error fetching business data:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegenerateHeadline = async () => {
    if (!businessInfo || !businessData) return;
    
    setIsRegenerating(true);
    setError(null);
    
    try {
      const { headline } = await ApiService.regenerateHeadline(
        businessInfo.name,
        businessInfo.location
      );
      setBusinessData(prev => prev ? { ...prev, headline } : null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to regenerate headline');
      console.error('Error regenerating headline:', err);
    } finally {
      setIsRegenerating(false);
    }
  };

  const handleReset = () => {
    setBusinessData(null);
    setBusinessInfo(null);
    setError(null);
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-shadow">
            <span className="gradient-text">GrowthProAI</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Discover how your local business appears online with AI-powered insights
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="max-w-md mx-auto mb-6">
            <div className="bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 rounded-lg p-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-red-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <p className="text-red-200">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="space-y-8">
          {!businessData ? (
            <BusinessForm onSubmit={handleFormSubmit} isLoading={isLoading} />
          ) : (
            <BusinessDataCard
              businessData={businessData}
              businessInfo={businessInfo!}
              onRegenerateHeadline={handleRegenerateHeadline}
              isRegenerating={isRegenerating}
              onReset={handleReset}
            />
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-16 text-gray-300">
          <p className="text-sm">
            Made with ❤️ for GrowthProAI | Simulated Data for Demo Purposes
          </p>
          <p className="text-xs mt-2 opacity-75">
            This dashboard simulates how businesses might view their online presence
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
