<template>
  <div class="bg-white">
    <LayoutTheHeader />

    <div v-if="course" class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Breadcrumb -->
      <nav class="mb-8 text-lg">
        <NuxtLink to="/" class="text-green-700 hover:underline">Home</NuxtLink>
        <span class="mx-2">/</span>
        <NuxtLink to="/classes" class="text-green-700 hover:underline">Classes</NuxtLink>
        <span class="mx-2">/</span>
        <span class="text-gray-500">{{ course.title }}</span>
      </nav>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
        <!-- Left Column: Main Content -->
        <div class="lg:col-span-2">
          <div class="w-full h-[400px] bg-cover bg-center rounded-lg mb-8" :style="{ backgroundImage: `url(${course.imageUrl})` }"></div>
          <h1 class="text-4xl font-bold text-gray-900 mb-4">{{ course.title }}</h1>
          <p class="text-lg text-gray-600 leading-relaxed" v-html="course.description"></p>
        </div>

        <!-- Right Column: Info Cards -->
        <div class="lg:col-span-1">
          <div class="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
            <h2 class="text-2xl font-semibold text-center text-gray-800 mb-6">Class Details</h2>
            <div class="space-y-4">
              <div class="flex justify-between">
                <span class="font-medium text-gray-600">Intensity:</span>
                <span class="font-bold text-gray-800 text-center">{{ '★'.repeat(course.intensity) }}{{ '☆'.repeat(5 - course.intensity) }}</span>
              </div>
              <div class="flex justify-between">
                <span class="font-medium text-gray-600">Duration:</span>
                <span class="font-bold text-gray-800 text-center">60 minutes</span>
              </div>
              <div class="flex justify-between">
                <span class="font-medium text-gray-600">Frequency:</span>
                <span class="font-bold text-gray-800 text-center">Weekly</span>
              </div>
              <div class="flex justify-between">
                <span class="font-medium text-gray-600">Price:</span>
                <span class="font-bold text-gray-800 text-center">€{{ course.price }}</span>
              </div>
              <div class="flex justify-between">
                <span class="font-medium text-gray-600">Participants:</span>
                <span class="font-bold text-gray-800 text-center">Max 12</span>
              </div>
              <div class="flex justify-between">
                <span class="font-medium text-gray-600">First Class:</span>
                <span class="font-bold text-gray-800 text-center">Sep 1, 2025</span>
              </div>
            </div>
            <button class="w-full mt-8 bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition">Book Now</button>
          </div>

          <div class="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 class="text-2xl font-semibold text-center text-gray-800 mb-6">Teacher</h2>
            <div class="flex items-center space-x-4">
              <img :src="course.teacher.imageUrl" :alt="course.teacher.name" class="w-24 h-24 rounded-full object-cover">
              <div>
                <h3 class="text-xl font-bold text-gray-900">{{ course.teacher.name }}</h3>
                <p class="text-md text-gray-600">{{ course.teacher.title }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div v-else class="text-center py-16">
      <p class="text-2xl text-gray-500">Class not found.</p>
    </div>

    <LayoutTheFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';

interface Teacher {
  name: string;
  title: string;
  imageUrl: string;
}

interface Course {
  slug: string;
  title: string;
  intensity: number;
  courseName: string;
  description: string;
  imageUrl: string;
  price: number;
  teacher: Teacher;
}

// In a real app, this would come from an API fetch
const allCourses: Course[] = [
  {
    slug: 'beginner-yoga',
    title: 'Beginner Yoga Course Introduction',
    intensity: 1,
    courseName: 'Foundation Alignment Yoga',
    description: 'Based on traditional Hatha Yoga and incorporating a scientifically structured sequence, this course emphasizes breath control and proper body alignment. It focuses on classic yoga postures, delivered at a gentle pace with moderate intensity, making it ideal for beginners or practitioners looking to strengthen their foundation and cultivate correct practice habits.',
    imageUrl: '/images/activities/activity-1.png',
    price: 98,
    teacher: { name: 'Ashley Lorenzo', title: 'Yoga Instructor', imageUrl: '/images/team/teacher-1.png' }
  },
  {
    slug: 'gentle-flow-yoga',
    title: 'Gentle Flow Yoga',
    intensity: 2,
    courseName: 'Gentle Vinyasa Foundation',
    description: 'Building upon alignment fundamentals, this course introduces basic vinyasa sequences with modified sun salutations. Focuses on breath-to-movement synchronization through standing/balancing postures, ideal for graduates of 8 foundational classes or practitioners seeking fluid transitions.',
    imageUrl: '/images/activities/activity-2.png',
    price: 118,
    teacher: { name: 'Sophia Chen', title: 'Meditation Expert', imageUrl: '/images/team/teacher-2.png' }
  },
  {
    slug: 'prenatal-yoga',
    title: 'Prenatal Yoga',
    intensity: 2,
    courseName: 'Motherhood Preparation',
    description: 'OB/GYN-approved sequences for second/third trimester, featuring:<br>• Pelvic floor mindfulness<br>• Labor breathing techniques<br>• Pregnancy-safe modifications<br>Medical clearance mandatory.',
    imageUrl: '/images/activities/activity-3.png',
    price: 128,
    teacher: { name: 'Isabella Costa', title: 'Prenatal Yoga Specialist', imageUrl: '/images/team/teacher-5.png' }
  },
  {
    slug: 'yin-yang-harmony-yoga',
    title: 'Yin-Yang Harmony Yoga',
    intensity: 3,
    courseName: 'Dynamic & Restorative Fusion',
    description: 'A intelligent blend of active Yang flow and passive Yin holds. The first half builds heat with targeted mobility sequences, while the second half features 3-5 minute deep tissue releases. Specialized modules for hip openers and cervical spine relief, requiring 3 months consistent practice.',
    imageUrl: '/images/activities/activity-4.png',
    price: 148,
    teacher: { name: 'Seraphina Rossi', title: 'Yin Yoga Expert', imageUrl: '/images/team/teacher-3.png' }
  },
  {
    slug: 'ashtanga-fundamentals',
    title: 'Ashtanga Fundamentals',
    intensity: 4,
    courseName: 'Traditional Primary Series Introduction',
    description: 'An authentic yet accessible approach to Ashtanga\'s standing sequence and seated prep poses. Emphasizes the trinity of Ujjayi breath, Bandha engagement, and Drishti focus. Designed for intermediate practitioners establishing morning sadhana (practice).',
    imageUrl: '/images/activities/activity-5.png',
    price: 168,
    teacher: { name: 'Kenji Tanaka', title: 'Ashtanga Master', imageUrl: '/images/team/teacher-4.png' }
  }
];

const route = useRoute();
const course = computed(() => {
  return allCourses.find(c => c.slug === route.params.slug);
});

onMounted(() => {
  if (course.value) {
    useHead({
      title: `${course.value.title} - Yoga Studio`,
      meta: [
        { name: 'description', content: `Details for the ${course.value.title} class.` }
      ]
    });
  }
});
</script> 