<template>
  <div class="bg-white font-inter">
    <LayoutTheHeader />

    <div v-if="pending" class="flex justify-center items-center min-h-[60vh]">
      <div class="text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2D5A27] mx-auto mb-4"></div>
        <p class="text-gray-600 text-lg">Loading Page...</p>
      </div>
    </div>

    <div v-else-if="error || !mainTeacher" class="text-center py-16">
      <div class="max-w-md mx-auto">
        <p class="text-red-600 text-lg mb-4">❌ Could not load page content.</p>
        <p class="text-gray-600 mb-6">There was an error fetching the required data for this page.</p>
        <NuxtLink to="/classes" class="inline-block bg-[#2D5A27] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors">
          ← Back to Classes
        </NuxtLink>
      </div>
    </div>

    <main v-else class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Breadcrumbs -->
      <nav class="flex items-center space-x-2 text-gray-500 mb-8">
        <NuxtLink to="/" class="hover:text-gray-700">Home</NuxtLink>
        <span>/</span>
        <NuxtLink to="/classes" class="hover:text-gray-700">Classes</NuxtLink>
        <span>/</span>
        <span class="text-gray-700 font-medium">{{ course?.title || 'Prenatal Yoga' }}</span>
      </nav>

      <div class="relative">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Left: Teacher Image -->
          <div>
            <img :src="mainTeacher.image" :alt="mainTeacher.name" class="w-full h-auto object-cover rounded-xl shadow-lg">
          </div>
          
          <!-- Right: Teacher & Course Info -->
          <div class="space-y-6 text-lg">
            <h1 class="text-4xl font-bold text-gray-900">{{ mainTeacher.name }}</h1>
            
            <div>
              <h2 class="text-2xl font-semibold text-gray-800 mb-2">About the Instructor:</h2>
              <p class="text-gray-600 leading-relaxed">{{ mainTeacher.bio }}</p>
            </div>
            
            <div>
              <h2 class="text-2xl font-semibold text-gray-800 mb-2">Teaching Style:</h2>
              <p class="text-gray-600 leading-relaxed">{{ mainTeacher.teachingStyle }}</p>
            </div>

            <div>
              <h2 class="text-2xl font-semibold text-gray-800 mb-2">Yoga Philosophy:</h2>
              <p class="text-gray-600 leading-relaxed">{{ mainTeacher.yogaPhilosophy }}</p>
            </div>
            
            <div>
              <h2 class="text-2xl font-semibold text-gray-800 mb-2">Course:</h2>
              <p class="text-gray-600 leading-relaxed">This instructor is currently teaching <span class="font-bold text-gray-800">{{ course?.title || 'Prenatal Yoga' }}</span>.</p>
              <NuxtLink :to="`/classes`" class="text-[#2D5A27] font-medium hover:underline transition-colors duration-300 mt-2 inline-block">
                  View All Classes →
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Other Teachers Section -->
        <div class="mt-24">
          <div class="w-full bg-gray-100 p-8 rounded-lg">
            <h2 class="text-3xl font-bold text-center text-gray-900 mb-8">Other Teachers</h2>
            <div v-if="otherTeachers.length" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              <NuxtLink v-for="teacher in otherTeachers" :key="teacher.id" :to="`/teachers/${teacher.slug}`" class="group text-center">
                <div class="aspect-w-3 aspect-h-4 overflow-hidden rounded-lg">
                  <img :src="teacher.image" :alt="teacher.name" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300">
                </div>
                <p class="mt-4 text-lg font-medium text-gray-800 group-hover:text-[#2D5A27] transition-colors">{{ teacher.name }}</p>
              </NuxtLink>
            </div>
             <p v-else class="text-center text-gray-500">No other teachers to display.</p>
          </div>
        </div>
      </div>
    </main>

    <LayoutTheFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Teacher } from '~/types';

interface Course {
  slug: string;
  title: string;
  intensity: number;
  courseName: string;
  description: string;
  imageUrl: string;
  price: number;
}

const { data: allTeachers, error: teachersError } = await useFetch<Teacher[]>('/api/teachers');

const currentCourseSlug = 'prenatal-yoga';
const currentCourseName = 'Prenatal Yoga';

const { data: course, error: courseError } = await useFetch<Course>(`/api/classes/${currentCourseSlug}`);

const mainTeacher = computed(() => {
  if (!allTeachers.value) return null;
  // Based on the data, Isabella Costa teaches Prenatal Yoga.
  return allTeachers.value.find(t => t.name === 'Isabella Costa') || null;
});

const otherTeachers = computed(() => {
  if (!allTeachers.value || !mainTeacher.value) return [];
  return allTeachers.value.filter(t => t.id !== mainTeacher.value?.id).slice(0, 5);
});

const pending = computed(() => {
  return (!allTeachers.value && !teachersError.value) || (!course.value && !courseError.value);
});

const error = computed(() => teachersError.value || courseError.value);

watchEffect(() => {
  const title = mainTeacher.value 
    ? `${mainTeacher.value.name} - ${currentCourseName}` 
    : 'Prenatal Yoga Course';
  
  const description = mainTeacher.value 
    ? `Learn about the Prenatal Yoga course taught by ${mainTeacher.value.name}.` 
    : 'Details about the Prenatal Yoga course.';

  useHead({
    title,
    meta: [{ name: 'description', content: description }]
  });
});

</script>

<style scoped>
.font-inter {
  font-family: 'Inter', sans-serif;
}
</style> 