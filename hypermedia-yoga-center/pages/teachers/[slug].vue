<template>
  <div v-if="teacher" class="bg-white">
    <LayoutTheHeader />

    <!-- Main Content -->
    <div class="max-w-screen-2xl mx-auto px-8 sm:px-12 lg:px-16 py-12">
      <!-- Breadcrumb -->
      <nav class="flex items-center text-sm font-medium text-gray-500 mb-12">
        <NuxtLink to="/" class="text-green-700 hover:text-green-800">Home</NuxtLink>
        <span class="mx-2">/</span>
        <NuxtLink to="/team" class="text-green-700 hover:text-green-800">Team</NuxtLink>
        <span class="mx-2">/</span>
        <span class="text-gray-800">{{ teacher.name }}</span>
      </nav>

      <!-- Teacher Details Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <!-- Left Column: Image -->
        <div class="lg:col-span-1">
          <img :src="teacher.image" :alt="teacher.name" class="w-full h-auto object-cover rounded-lg shadow-md">
        </div>

        <!-- Right Column: Info -->
        <div class="lg:col-span-2">
          <h1 class="text-5xl font-bold text-gray-900 mb-8">{{ teacher.name }}</h1>
          <div class="prose prose-lg max-w-none text-gray-700">
            <h2 class="font-bold text-xl text-gray-800">ABOUT:</h2>
            <p>{{ teacher.bio }}</p>
            
            <h2 class="font-bold text-xl text-gray-800 mt-8">Teaching Style:</h2>
            <p>{{ teacher.teachingStyle }}</p>

            <h2 class="font-bold text-xl text-gray-800 mt-8">Yoga Philosophy:</h2>
            <p>{{ teacher.yogaPhilosophy }}</p>

            <h2 class="font-bold text-xl text-gray-800 mt-8">Course:</h2>
            <ul class="list-disc pl-5">
              <li v-for="course in teacher.courses" :key="course">{{ course }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Other Teachers Section -->
    <div v-if="otherTeachers.length > 0" class="bg-gray-50 mt-16 py-16">
      <div class="max-w-screen-2xl mx-auto px-8 sm:px-12 lg:px-16">
        <h2 class="text-4xl font-bold text-center text-gray-900 mb-12">Other teachers</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <NuxtLink v-for="other in otherTeachers" :key="other.slug" :to="`/teachers/${other.slug}`" class="group text-center">
                <img :src="other.image" :alt="other.name" class="w-full h-auto object-cover rounded-lg shadow-md transform transition-transform duration-300 group-hover:scale-105">
                <p class="mt-4 font-semibold text-gray-800">{{ other.name }}</p>
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

const { data: teacher, error } = await useFetch<Teacher>(`/api/teachers/${slug}`);
const { data: allTeachers } = await useFetch<Teacher[]>('/api/teachers');

const otherTeachers = computed(() => {
  if (!allTeachers.value || !teacher.value) {
    return [];
  }
  return allTeachers.value.filter(t => t.slug !== slug).slice(0, 5);
});

// SEO Head
useHead({
  title: teacher.value ? `${teacher.value.name} - Yoga Teacher` : 'Teacher Profile',
  meta: [
    { name: 'description', content: teacher.value ? `Learn more about ${teacher.value.name}, our dedicated yoga instructor.` : 'Meet our yoga instructors.' }
  ]
});
</script>

<style>
.prose h2 {
    margin-bottom: 0.5rem;
}
.prose p {
    margin-bottom: 1rem;
}
</style> 