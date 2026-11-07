export type DonationCategory = 'education' | 'food' | 'health' | 'relief';

export interface Campaign {
  id: string;
  title: string;
  category: DonationCategory;
  shortDescription: string;
  fullDescription: string;
  targetAmount: number;
  raisedAmount: number;
  image: string;
  donorsCount: number;
  urgent?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: 'Beneficiary' | 'Volunteer' | 'Supporter';
  title: string;
  quote: string;
  impactNote: string;
  avatarInitials: string;
  avatarBg: string;
  location: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'donations' | 'volunteering' | 'general';
}

export interface DonationReceiptData {
  donorName: string;
  donorEmail: string;
  amount: number;
  frequency: 'Monthly' | 'One-time';
  category: string;
  transactionId: string;
  date: string;
  impactDescription: string;
}
