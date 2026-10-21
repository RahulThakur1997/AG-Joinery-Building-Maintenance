export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  category: 'Joinery' | 'Building Services' | 'Plumbing' | 'Decorating' | 'Property Maintenance' | 'Emergency Call-Outs';
  shortDesc: string;
  fullDesc: string;
  items: string[];
  image: string;
  tag?: string;
  scopeBadge?: string;
}

export interface QualificationFormData {
  name: string;
  phone: string;
  email: string;
  propertyType: 'Domestic' | 'Commercial';
  serviceRequired: string;
  selectedServices: string[];
  descriptionOfWork: string;
  preferredContactMethod: 'Phone Call' | 'Email' | 'WhatsApp / Text';
  isEmergencyCallout?: boolean;
}

export interface ComparisonRow {
  feature: string;
  standardHandyman: string;
  agContractor: string;
  nationalConglomerate: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  location: string;
  category: string;
  propertyType: 'Domestic' | 'Commercial';
  description?: string;
  beforeImage: string;
  afterImage: string;
  isFeatured?: boolean;
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  location: string;
  propertyType: 'Domestic' | 'Commercial';
  rating: number;
  quote: string;
  serviceUsed: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ServiceAreaItem {
  name: string;
  region: string;
  tag: string;
}
