import { defineEventHandler } from 'h3';

export interface Course {
  slug: string;
  title: string;
  intensity: number;
  courseName: string;
  description: string;
  imageUrl: string;
  price: number;
}

const courses: Course[] = [
  {
    slug: 'beginner-yoga',
    title: 'Beginner Yoga Course Introduction',
    intensity: 1,
    courseName: 'Foundation Alignment Yoga',
    description: 'Based on traditional Hatha Yoga and incorporating a scientifically structured sequence, this course emphasizes breath control and proper body alignment. It focuses on classic yoga postures, delivered at a gentle pace with moderate intensity, making it ideal for beginners or practitioners looking to strengthen their foundation and cultivate correct practice habits.',
    imageUrl: '/images/activities/activity-1.png',
    price: 98,
  },
  {
    slug: 'gentle-flow-yoga',
    title: 'Gentle Flow Yoga',
    intensity: 2,
    courseName: 'Gentle Vinyasa Foundation',
    description: 'Building upon alignment fundamentals, this course introduces basic vinyasa sequences with modified sun salutations. Focuses on breath-to-movement synchronization through standing/balancing postures, ideal for graduates of 8 foundational classes or practitioners seeking fluid transitions.',
    imageUrl: '/images/activities/activity-2.png',
    price: 118,
  },
  {
    slug: 'prenatal-yoga',
    title: 'Prenatal Yoga',
    intensity: 2,
    courseName: 'Motherhood Preparation',
    description: 'OB/GYN-approved sequences for second/third trimester, featuring:<br>• Pelvic floor mindfulness<br>• Labor breathing techniques<br>• Pregnancy-safe modifications<br>Medical clearance mandatory.',
    imageUrl: '/images/activities/activity-3.png',
    price: 128,
  },
  {
    slug: 'yin-yang-harmony-yoga',
    title: 'Yin-Yang Harmony Yoga',
    intensity: 3,
    courseName: 'Dynamic & Restorative Fusion',
    description: 'A intelligent blend of active Yang flow and passive Yin holds. The first half builds heat with targeted mobility sequences, while the second half features 3-5 minute deep tissue releases. Specialized modules for hip openers and cervical spine relief, requiring 3 months consistent practice.',
    imageUrl: '/images/activities/activity-4.png',
    price: 148,
  },
  {
    slug: 'ashtanga-fundamentals',
    title: 'Ashtanga Fundamentals',
    intensity: 4,
    courseName: 'Traditional Primary Series Introduction',
    description: 'An authentic yet accessible approach to Ashtanga\'s standing sequence and seated prep poses. Emphasizes the trinity of Ujjayi breath, Bandha engagement, and Drishti focus. Designed for intermediate practitioners establishing morning sadhana (practice).',
    imageUrl: '/images/activities/activity-5.png',
    price: 168,
  }
];

export default defineEventHandler((event) => {
  return courses;
}); 