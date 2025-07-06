<template>
  <div v-if="course" class="bg-white font-inter">
    <LayoutTheHeader />

    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Breadcrumb -->
      <nav class="flex items-center text-lg text-gray-500 mb-8">
        <NuxtLink to="/" class="text-[#4e7749] font-medium hover:underline">Home</NuxtLink>
        <span class="mx-2 text-black">/</span>
        <NuxtLink to="/classes" class="text-[#4e7749] font-medium hover:underline">Classes</NuxtLink>
        <span class="mx-2 text-black">/</span>
        <span class="text-black font-medium">Registration</span>
      </nav>

      <h1 class="text-4xl font-bold text-black mb-12">Classes Registration</h1>

      <!-- Course Details Card -->
      <div class="bg-gray-50 p-8 flex flex-col md:flex-row gap-8 items-center mb-12">
        <div class="w-full md:w-1/3">
          <img :src="course.imageUrl" :alt="course.title" class="w-full h-auto object-cover">
        </div>
        <div class="w-full md:w-2/3">
          <h2 class="text-3xl font-semibold text-black">{{ course.title }}</h2>
          <p class="text-lg text-gray-600 mb-4">Intensity Level: {{ '★'.repeat(course.intensity) }}{{ '☆'.repeat(5 - course.intensity) }}</p>
          <div class="prose max-w-none text-gray-700 leading-relaxed" v-html="course.description"></div>
        </div>
      </div>

      <!-- Payment Section -->
      <div class="border-t border-gray-200 pt-8">
        <div class="flex justify-between items-center">
          <p class="text-2xl text-gray-800">1 semester/course</p>
          <div class="flex items-center gap-6">
            <p class="text-2xl text-gray-800">1 Person</p>
            <p class="text-3xl font-bold text-black">€{{ course.price.toFixed(2) }}</p>
            <button
              @click="addToCart"
              class="bg-[#2D5A27] text-white font-semibold px-8 py-3 rounded-md text-lg hover:bg-opacity-90 transition-colors"
            >
              Book
            </button>
          </div>
        </div>
        <p class="text-right text-gray-500 mt-2">Start date: {{ new Date().toLocaleDateString() }} End date: {{ new Date(new Date().setMonth(new Date().getMonth() + 3)).toLocaleDateString() }}</p>
      </div>

    </div>

    <LayoutTheFooter />
  </div>

  <div v-else class="text-center py-16">
    <p v-if="error">Could not find the course.</p>
    <p v-else>Loading course...</p>
    <NuxtLink to="/classes" class="mt-4 inline-block bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800">Back to Classes</NuxtLink>
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
  if (course.value && course.value.price) { // Ensure course and price are available
    cartStore.addItem({
      id: Date.now(),
      name: course.value.title,
      price: course.value.price,
      quantity: 1,
      image: course.value.imageUrl,
      description: course.value.courseName,
    });
    alert(`${course.value.title} has been added to your cart!`);
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
</style> 