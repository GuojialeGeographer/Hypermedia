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
  id: number;
  name: string;
  image_url: string;
  description: string;
  long_description: string;
  teacher_ids: number[];
  duration: number;
  location: string;
  schedule: {
    day: string;
    time: string;
  };
  intensity: string;
  capacity: number;
  is_featured: boolean;
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
  imageSrc: string;
  imageAlt: string;
  price: string;
  color: string;
  category: 'top' | 'bottom' | 'jacket';
  description?: string;
  details?: string;
  materials?: string;
} 