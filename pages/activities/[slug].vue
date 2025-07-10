<template>
  <div class="bg-white">
    <LayoutTheHeader />

    <main v-if="activity" class="py-12 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Breadcrumb -->
        <nav class="flex items-center text-base text-gray-500 mb-6">
          <NuxtLink to="/" class="hover:text-green-700">Home</NuxtLink>
          <span class="mx-2">/</span>
          <NuxtLink to="/activities" class="hover:text-green-700">Activities</NuxtLink>
          <span class="mx-2">/</span>
          <span class="text-gray-700">{{ activity.name }}</span>
        </nav>
        
        <!-- Title Section -->
        <div class="mb-8">
          <div class="flex items-center gap-4">
            <h1 class="text-4xl font-extrabold text-gray-900 tracking-tight">{{ activity.name }}</h1>
            <span v-if="activity.price !== undefined && activity.price > 0" class="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800 border border-green-300">
              Free Trial
            </span>
          </div>
          <p class="mt-2 text-xl text-gray-600">{{ activity.description }}</p>
        </div>


        <!-- Main Content Grid -->
        <div class="lg:grid lg:grid-cols-3 lg:gap-8">
          
          <!-- Left Column: Image -->
          <div class="lg:col-span-2 rounded-lg overflow-hidden">
            <img :src="activity.image_url" :alt="activity.name" class="w-full h-auto object-cover">
          </div>

          <!-- Right Column: Details Card -->
          <div class="mt-8 lg:mt-0 p-6 bg-white rounded-lg shadow-md h-fit">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">Class Details</h2>
            <div class="space-y-4 text-base text-gray-700">
              <div class="flex justify-between"><span>Instructor:</span> <span class="font-medium text-right">{{ getTeacherNames(activity.teacher_ids) }}</span></div>
              <div class="flex justify-between"><span>Duration:</span> <span class="font-medium">{{ activity.duration }} min</span></div>
              <div class="flex justify-between"><span>Location:</span> <span class="font-medium">{{ activity.location }}</span></div>
              <div class="flex justify-between"><span>Schedule:</span> <span class="font-medium text-right">{{ activity.schedule.day }} {{ activity.schedule.time }}</span></div>
              <div class="flex justify-between"><span>Intensity:</span> <span class="font-medium">{{ activity.intensity }}</span></div>
              <div class="flex justify-between"><span>Capacity:</span> <span class="font-medium">Max {{ activity.capacity }} people</span></div>
            </div>
            <div class="mt-8">
              <button class="w-full bg-[#2d5a27] text-white font-semibold py-3 px-8 rounded-lg text-lg hover:bg-opacity-90 transition">
                Book
              </button>
            </div>
          </div>
        </div>

        <!-- Lower Section: Perfect For & What You'll Experience -->
        <div class="mt-12 lg:grid lg:grid-cols-3 lg:gap-8">
          <div class="lg:col-span-2">
            <div class="bg-white p-8 rounded-lg shadow-md mb-8">
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Perfect For</h3>
              <p class="text-gray-700">{{ activity.suitableFor }}</p>
            </div>
            <div class="bg-white p-8 rounded-lg shadow-md">
              <h3 class="text-2xl font-bold text-gray-800 mb-4">What You'll Experience</h3>
              <ul v-if="activity.highlights" class="list-disc list-inside space-y-2 text-gray-700">
                <li v-for="highlight in activity.highlights" :key="highlight">{{ highlight }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>

    <div v-else-if="pending" class="text-center py-24">
      <p>Loading activity...</p>
    </div>
    
    <div v-else class="text-center py-24">
      <p class="text-red-500">Could not load the activity. Please try again later.</p>
    </div>

    <LayoutTheFooter />
  </div>
</template>

<script setup lang="ts">
import type { Activity, Teacher } from '~/types';

const route = useRoute();
const slug = route.params.slug as string;

// Fetch activity details
const { data: activity, pending, error } = await useFetch<Activity>(`/api/activities/${slug}`);

// Fetch all teachers to map IDs to names
const { data: teachers } = await useFetch<Teacher[]>('/api/teachers');

const getTeacherNames = (ids: number[]) => {
  if (!teachers.value || !ids) return 'N/A';
  return ids.map(id => teachers.value?.find(t => t.id === id)?.name).filter(Boolean).join(', ');
};


if (error.value && !activity.value) {
  console.error('Failed to fetch activity:', error.value);
}

useHead({
  title: computed(() => activity.value ? `${activity.value.name} - Yoga Activity` : 'Activity Details'),
  meta: [
    { name: 'description', content: computed(() => activity.value?.description || 'Details about our yoga activities.') }
  ]
});
</script> 