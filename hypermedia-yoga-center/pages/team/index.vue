<template>
  <div class="bg-white">
    <LayoutTheHeader />
    
    <!-- Breadcrumb Navigation -->
    <div class="max-w-6xl mx-auto px-6 pt-6">
      <nav class="flex items-center text-sm space-x-2">
        <NuxtLink to="/" class="text-[#2d5a27] font-medium hover:underline">Home</NuxtLink>
        <span class="text-[#4b5563]">/</span>
        <span class="text-[#111827] font-medium">Team</span>
      </nav>
    </div>

    <!-- Hero Section -->
    <div class="relative h-[600px] bg-cover bg-center flex items-center justify-center" 
         style="background-image: url('/images/team/hero-background.png')">
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black bg-opacity-30"></div>
      
      <!-- Content -->
      <div class="relative z-10 text-center text-white px-6 max-w-4xl">
        <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Join us to cultivate a healthy body and a free balanced mind.
        </h1>
        <NuxtLink to="/teachers/1" class="inline-block bg-[#2d5a27] text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-[#25492a] transition-colors">
          READ MORE
        </NuxtLink>
      </div>
    </div>

    <!-- Team Section -->
    <div class="max-w-6xl mx-auto px-6 py-16">
      <h2 class="text-4xl font-bold text-[#111827] mb-12">Our team</h2>
      
      <!-- Team Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        <NuxtLink 
          v-for="teacher in teachers" 
          :key="teacher.id" 
          :to="`/teachers/${teacher.id}`"
          class="group cursor-pointer"
        >
          <div class="aspect-square bg-cover bg-center rounded-lg shadow-md transition-transform group-hover:scale-105" 
               :style="`background-image: url('${teacher.image_url}')`">
          </div>
        </NuxtLink>
      </div>
    </div>

    <LayoutTheFooter />
  </div>
</template>

<script setup lang="ts">
import type { Teacher } from '~/types'

// Fetch teachers data
const { data: teachers } = await useFetch<Teacher[]>('/api/teachers')

useHead({
  title: 'Our Team - Yoga Studio',
  meta: [
    { name: 'description', content: 'Meet our experienced yoga instructors dedicated to helping you cultivate a healthy body and balanced mind.' }
  ]
})
</script>

<style scoped>
.font-inter {
  font-family: 'Inter', sans-serif;
}
</style> 