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
import type { Course } from '~/server/api/classes';

useHead({
  title: 'Classes Introduction - Yoga Studio',
  meta: [
    { name: 'description', content: 'Explore our foundational yoga classes, from Beginner to Ashtanga.' }
  ]
});

const { data: courses } = await useFetch<Course[]>('/api/classes')
</script>

<style scoped>
/* Using a more specific font name if available from a global CSS import, otherwise Inter is a good fallback */
.font-inter {
  font-family: 'Inter', sans-serif;
}
</style> 