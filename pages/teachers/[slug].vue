<template>
  <div v-if="teacher" class="bg-white font-inter">
    <LayoutTheHeader />

    <!-- Main Content -->
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      <!-- Breadcrumb -->
      <nav class="flex items-center text-lg text-gray-500 mb-12">
        <NuxtLink to="/" class="text-[#4e7749] font-medium hover:underline">Home</NuxtLink>
        <span class="mx-2 text-black">/</span>
        <NuxtLink to="/team" class="text-[#4e7749] font-medium hover:underline">Team</NuxtLink>
        <span class="mx-2 text-black">/</span>
        <span class="text-black font-medium">{{ teacher.name }}</span>
      </nav>

      <!-- Teacher Details Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        <!-- Left Column: Image -->
        <div>
          <img :src="teacher.image" :alt="teacher.name" class="w-full h-auto object-cover rounded-none">
        </div>

        <!-- Right Column: Info -->
        <div class="space-y-8">
          <h1 class="text-5xl font-bold text-black">{{ teacher.name }}</h1>
          
          <div>
            <h2 class="font-bold text-xl text-black mb-3">ABOUT:</h2>
            <p class="text-lg text-gray-700 leading-loose">{{ teacher.bio }}</p>
          </div>
          
          <div>
            <h2 class="font-bold text-xl text-black mb-3">Teaching Style:</h2>
            <p class="text-lg text-gray-700 leading-loose">{{ teacher.teachingStyle }}</p>
          </div>

          <div>
            <h2 class="font-bold text-xl text-black mb-3">Yoga Philosophy:</h2>
            <p class="text-lg text-gray-700 leading-loose">{{ teacher.yogaPhilosophy }}</p>
          </div>

          <div>
            <h2 class="font-bold text-xl text-black mb-3">Course:</h2>
            <p class="text-lg text-gray-700 leading-loose">{{ teacher.courses.join(', ') }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Other Teachers Section -->
    <div v-if="otherTeachers.length > 0" class="bg-white mt-16 py-16">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-bold text-center text-black mb-12">Other teachers</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12">
            <NuxtLink v-for="other in otherTeachers" :key="other.slug" :to="`/teachers/${other.slug}`" class="group text-center">
                <div class="w-full h-64 bg-gray-200 overflow-hidden">
                  <img :src="other.image" :alt="other.name" class="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105">
                </div>
                <p class="mt-4 font-semibold text-lg text-gray-800">{{ other.name }}</p>
            </NuxtLink>
        </div>
      </div>
    </div>

    <LayoutTheFooter />
  </div>

  <!-- Error/Loading State -->
  <div v-else class="text-center py-16">
    <div v-if="error">
      <h1 class="text-2xl font-bold">Teacher not found</h1>
      <p class="text-gray-600">The teacher you are looking for does not exist.</p>
      <NuxtLink to="/team" class="mt-4 inline-block bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800">Back to Team</NuxtLink>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import type { Teacher } from '~/types';

const route = useRoute();
const slug = route.params.slug as string;

// Fetch all teachers once
const { data: allTeachers, error: allTeachersError } = await useFetch<Teacher[]>('/api/teachers');

// Find the current teacher from the fetched list
const teacher = computed(() => allTeachers.value?.find(t => t.slug === slug));
const error = computed(() => !teacher.value && (allTeachersError.value || !allTeachers.value));

// Compute other teachers, excluding the current one
const otherTeachers = computed(() => {
  if (!allTeachers.value || !teacher.value) {
    return [];
  }
  // Make sure to filter out the current teacher
  return allTeachers.value.filter(t => t.slug !== slug).slice(0, 5);
});

// Set head based on computed teacher data
watchEffect(() => {
  if (teacher.value) {
    useHead({
      title: `${teacher.value.name} - Yoga Teacher`,
      meta: [
        { name: 'description', content: `Learn more about ${teacher.value.name}, our dedicated yoga instructor.` }
      ]
    });
  } else {
    useHead({
      title: 'Teacher Profile',
      meta: [
        { name: 'description', content: 'Meet our yoga instructors.' }
      ]
    });
  }
});
</script>

<style>
/* Scoped styles can be added here if needed, but for now using Tailwind utility classes */
.font-inter {
  font-family: 'Inter', sans-serif;
}
</style> 