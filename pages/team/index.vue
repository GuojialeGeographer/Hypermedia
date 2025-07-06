<template>
  <div class="bg-white">
    <LayoutTheHeader />

    <!-- Hero Section -->
    <div 
      class="relative w-full h-[948px] bg-cover bg-center"
      style="background-image: url('/images/team/hero-background.png');"
    >
      <div class="w-full h-full bg-black bg-opacity-30 flex flex-col items-center justify-center text-center text-white p-4">
        <h1 class="text-[54px] font-bold leading-tight max-w-4xl">
          Join us to cultivate a healthy body and a free, balanced mind.
        </h1>
        <NuxtLink 
          v-if="teachers && teachers.length > 0"
          :to="`/teachers/${teachers[0].slug}`" 
          class="mt-8 bg-[#2d5a27] text-white px-12 py-3 rounded-md text-lg font-medium hover:bg-opacity-90 transition-colors"
        >
          READ MORE
        </NuxtLink>
      </div>
    </div>

    <!-- Breadcrumb and Team Section Wrapper -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- Breadcrumb Navigation -->
      <nav class="text-lg sm:text-xl lg:text-2xl font-inter flex items-center font-medium mb-12">
        <NuxtLink to="/" class="text-[#4e7749] hover:underline">Home</NuxtLink>
        <span class="text-black mx-2">/</span>
        <span class="text-black">Team</span>
      </nav>

      <!-- Team Members Section -->
      <div>
        <h2 class="text-5xl font-bold text-gray-900 mb-12">Our team</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <NuxtLink 
            v-for="teacher in teachers" 
            :key="teacher.slug" 
            :to="`/teachers/${teacher.slug}`"
            class="group text-center"
          >
            <div class="w-40 h-40 rounded-lg overflow-hidden mx-auto">
              <img 
                :src="teacher.image" 
                :alt="teacher.name" 
                class="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105" 
              />
            </div>
            <p class="mt-4 font-semibold text-base text-gray-800">{{ teacher.name }}</p>
          </NuxtLink>
        </div>
      </div>
    </div>

    <LayoutTheFooter />
  </div>
</template>

<script setup lang="ts">
import type { Teacher } from '~/types'

const { data: teachers } = await useFetch<Teacher[]>('/api/teachers')

useHead({
  title: 'Our Team - Yoga Studio',
  meta: [
    { name: 'description', content: 'Meet our experienced and dedicated team of yoga instructors.' }
  ]
})
</script>

<style scoped>
.font-inter {
  font-family: 'Inter', sans-serif;
}
</style>
