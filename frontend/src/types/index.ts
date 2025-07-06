export interface BusinessData {
  rating: number;
  reviews: number;
  headline: string;
}

export interface BusinessFormData {
  name: string;
  location: string;
}

export interface FormErrors {
  name?: string;
  location?: string;
}

export interface ApiResponse {
  rating: number;
  reviews: number;
  headline: string;
}

export interface HeadlineResponse {
  headline: string;
}

export interface ErrorResponse {
  error: string;
} 