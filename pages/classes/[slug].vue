<template>
  <div v-if="course" class="bg-white font-inter">
    <LayoutTheHeader />

    <!-- Main Content -->
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      <!-- Breadcrumb -->
      <nav class="text-lg mb-8">
        <NuxtLink to="/" class="text-[#4e7749] font-medium hover:underline">Home</NuxtLink>
        <span class="mx-2">/</span>
        <NuxtLink to="/classes" class="text-[#4e7749] font-medium hover:underline">Classes</NuxtLink>
        <span class="mx-2">/</span>
        <span class="text-gray-600">Registration</span>
      </nav>

      <!-- Title -->
      <div class="text-center my-12">
        <h1 class="text-5xl font-bold text-black">Classes Registration</h1>
      </div>

      <!-- Course Details -->
      <div class="flex flex-col md:flex-row items-start gap-12">
        <!-- Image -->
        <div class="w-full md:w-2/5">
          <img :src="course.imageUrl" :alt="course.title" class="w-full h-auto object-cover rounded-lg shadow-lg">
        </div>

        <!-- Info -->
        <div class="w-full md:w-3/5 bg-gray-50 p-8 rounded-lg shadow-inner">
          <h2 class="text-4xl font-semibold mb-2 text-black">{{ course.title }}</h2>
          <p class="text-lg text-gray-500 mb-4">Intensity Level: {{ '★'.repeat(course.intensity) }}{{ '☆'.repeat(5 - course.intensity) }}</p>
          <hr class="my-6">
          <h3 class="text-2xl font-semibold text-gray-800 mb-2">{{ course.courseName }}</h3>
          <div class="prose max-w-none text-gray-700 leading-relaxed" v-html="course.description"></div>
        </div>
      </div>

      <!-- Booking & Price Section -->
      <div class="mt-16 py-8 border-t-2 border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
        <div class="text-center md:text-left">
          <p class="text-2xl font-medium text-gray-800">1 semester/course</p>
          <p class="text-lg text-gray-600">Valid from 01-03-2025 to 30-06-2025</p>
        </div>
        <div class="text-center md:text-left">
          <p class="text-2xl font-medium text-gray-800">1 Person</p>
        </div>
        <div class="flex items-center gap-6 bg-white p-6 rounded-lg shadow-md">
          <p class="text-5xl font-bold text-black">€{{ course.price.toFixed(2) }}</p>
          <button @click="addToCart" class="bg-[#2D5A27] text-white font-bold px-10 py-4 rounded-lg text-xl hover:bg-opacity-90 transition-transform transform hover:scale-105">
            Firm payment
          </button>
        </div>
      </div>

    </div>

    <LayoutTheFooter />
  </div>

  <div v-else class="flex flex-col items-center justify-center h-screen">
    <p v-if="error" class="text-2xl text-red-600">Could not find the course.</p>
    <p v-else class="text-2xl text-gray-600">Loading course...</p>
    <NuxtLink to="/classes" class="mt-8 inline-block bg-[#2D5A27] text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">Back to Classes</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import type { Course } from '~/server/api/classes/[slug]';
import { useCartStore } from '~/stores/cart';

const route = useRoute();
const slug = route.params.slug as string;

const { data: course, error } = await useFetch<Course>(`/api/classes/${slug}`, { key: slug });
const cartStore = useCartStore();

const addToCart = () => {
  if (course.value) {
    cartStore.addItem({
      id: course.value.id,
      name: course.value.title,
      price: course.value.price,
      quantity: 1,
      image: course.value.imageUrl,
      description: course.value.courseName,
    });
    alert(`✅ "${course.value.title}" has been added to your cart!`);
  }
};

useHead({
  title: course.value ? `${course.value.title} - Registration` : 'Class Registration',
  meta: [
    { name: 'description', content: course.value ? `Register for the ${course.value.title} class.` : 'Class registration page.' }
  ]
});
</script>

<style scoped>
.font-inter {
  font-family: 'Inter', sans-serif;
}
.prose {
  /* Add any prose-specific styles if needed */
}
</style> 