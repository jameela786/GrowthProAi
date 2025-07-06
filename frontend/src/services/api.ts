import { ApiResponse, HeadlineResponse, BusinessFormData } from '../types';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001';

export class ApiService {
  static async getBusinessData(formData: BusinessFormData): Promise<ApiResponse> {
    const response = await fetch(`${API_BASE_URL}/business-data`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'Failed to fetch business data');
    }

    return response.json();
  }

  static async regenerateHeadline(name: string, location: string): Promise<HeadlineResponse> {
    const params = new URLSearchParams({
      name,
      location,
    });

    const response = await fetch(`${API_BASE_URL}/regenerate-headline?${params}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'Failed to regenerate headline');
    }

    return response.json();
  }
} 