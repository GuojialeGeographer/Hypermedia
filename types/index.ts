export interface Teacher {
  id: number;
  name: string;
  slug: string;
  image: string;
  bio: string;
  teachingStyle: string;
  yogaPhilosophy: string;
  courses: string[];
}

export interface Activity {
  id?: number;
  name?: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  suitableFor: string;
  instructor: string;
  highlights: string[];
  goal: string;
  image: string;
  isFree: boolean;
  isMembersOnly: boolean;
  bgColor: string;
  titleColor: string;
  subtitleColor: string;
  descriptionColor: string;
  textColor: string;
  dividerColor: string;
  time: string;
  image_url?: string;
  long_description?: string;
  teacher_ids?: number[];
  duration?: number;
  location?: string;
  schedule?: {
    day: string;
    time: string;
  };
  intensity?: string;
  capacity?: number;
  is_featured?: boolean;
  price?: number;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  type: 'class' | 'product';
  description?: string;
  size?: string;
}

export interface Product {
  id: number;
  name: string;
  href: string;
  brand?: string; // Make brand optional
  price: number; // Change price to number
  image: string; // Rename imageSrc to image
  imageAlt: string;
  color: string;
  category: string;
  description: string;
  details: string;
  materials: string;
  tags?: string[];
} 