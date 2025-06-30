<template>
  <div class="bg-white">
    <LayoutTheHeader />

    <div class="relative w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Breadcrumb Navigation is now inside the main container for better alignment -->
      <nav class="absolute top-[2rem] left-[1rem] sm:left-[1.5rem] lg:left-[2rem] text-lg sm:text-xl lg:text-2xl font-inter">
        <NuxtLink to="/" class="text-[#4e7749] font-medium hover:underline">Home</NuxtLink>
        <span class="text-black"> / </span>
        <span class="text-black font-medium">Classes</span>
      </nav>

      <!-- Page Title -->
      <div class="text-center pt-16 sm:pt-20 md:pt-24 pb-12">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight">
          Classes Introduction
        </h1>
      </div>

      <!-- Classes List -->
      <div class="space-y-12 md:space-y-24">
        <div 
          v-for="(course, index) in courses" 
          :key="course.title"
          class="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
          :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'"
        >
          <!-- Image -->
          <div 
            class="w-full md:w-[600px] h-[300px] md:h-[400px] bg-cover bg-center shrink-0"
            :style="{ backgroundImage: `url(${course.imageUrl})` }"
          ></div>

          <!-- Details -->
          <div class="w-full md:w-[932px] relative">
            <div class="absolute bg-[#D9D9D9] bg-opacity-30 -inset-4 md:-inset-x-8 md:-inset-y-12 z-0"></div>
            <div class="relative z-10 p-4 md:p-8">

              <!-- Price Tag -->
              <div class="absolute top-4 right-4 md:top-8 md:right-8">
                <span class="text-2xl md:text-3xl font-bold text-black">€{{ course.price }}</span>
              </div>

              <!-- Title with padding to avoid overlap -->
              <NuxtLink :to="`/classes/${course.slug}`" class="hover:text-green-700 transition-colors">
                <h2 class="text-2xl md:text-3xl font-regular text-black pr-24 md:pr-32">
                  {{ course.title }}
                  <span class="whitespace-nowrap">(Intensity Level: {{ '★'.repeat(course.intensity) }}{{ '☆'.repeat(5 - course.intensity) }})</span>
                </h2>
              </NuxtLink>
              <div class="mt-4 mb-4 h-px"></div>
              <p class="text-lg md:text-xl font-regular text-black mb-4">{{ course.courseName }}</p>
              <p class="text-base md:text-lg font-regular text-black leading-relaxed" v-html="course.description"></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <LayoutTheFooter />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

useHead({
  title: 'Classes Introduction - Yoga Studio',
  meta: [
    { name: 'description', content: 'Explore our foundational yoga classes, from Beginner to Ashtanga.' }
  ]
});

const courses = ref([
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
]);
</script>

<style scoped>
/* Using a more specific font name if available from a global CSS import, otherwise Inter is a good fallback */
.font-inter {
  font-family: 'Inter', sans-serif;
}
</style> 