export type TransformationCategory = 'All' | 'Hair' | 'Makeup' | 'Skin' | 'Bridal' | 'Other';

export interface SalonTransformation {
  id: string;
  title: string;
  serviceName: string;
  category: 'Hair' | 'Makeup' | 'Skin' | 'Bridal' | 'Other';
  beforeImage: string;
  afterImage: string;
  description: string;
  servicePrice?: string;
  duration?: string;
  altText: string;
  clientConsentVerified: boolean;
  dateAdded?: string;
  isCustomUpload?: boolean;
  highlights?: string[];
}

export interface SalonServiceItem {
  id: string;
  name: string;
  category: string;
  price: string;
  priceNote?: string;
  popular?: boolean;
}

export interface SalonServiceCategory {
  title: string;
  description: string;
  items: SalonServiceItem[];
}

export interface SalonTestimonial {
  id: string;
  clientName: string;
  headline: string;
  service: string;
  rating: number;
  review: string;
  badge?: string;
  verified?: boolean;
  avatarUrl?: string;
  avatarBg?: string;
}

export interface SalonFAQ {
  id: string;
  category: 'Pricing' | 'Booking' | 'Services' | 'Hygiene';
  question: string;
  answer: string;
  badge?: string;
}

