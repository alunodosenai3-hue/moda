export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  persuasiveCall: string;
}

export interface TestimonialItem {
  id: string;
  authorName: string;
  location: string;
  avatarUrl: string;
  rating: number; // e.g. 5
  comment: string;
  verified: boolean;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
