<template>
  <div class="bg-white">
    <LayoutTheHeader />

    <main>
      <!-- Breadcrumb -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p class="text-lg">
          <NuxtLink to="/" class="text-green-700 hover:underline">Home</NuxtLink>
          <span class="mx-2">/</span>
          <span>Shop</span>
        </p>
      </div>

      <!-- Hero Section -->
      <section 
        class="relative bg-cover bg-center bg-no-repeat min-h-[700px] flex items-center justify-center text-white"
        style="background-image: url('/images/team/hero-background.png');"
      >
        <div class="text-center px-4">
          <h1 class="text-5xl md:text-6xl font-bold leading-tight" style="color: #ADBEAB;">
            Enjoy 30 Days of Free Yoga Classes<br />
            with Your Purchase
          </h1>
          <div class="mt-8">
            <NuxtLink
              to="/shop/apparel"
              class="bg-[#2d5a27] text-white font-semibold py-4 px-10 rounded-lg text-lg hover:bg-opacity-90 transition"
            >
              SHOP THE COLLECTION
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- New Arrivals -->
      <section class="bg-[#F9FAFB] py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-5xl font-bold text-center text-gray-900 mb-16">
            New Arrivals
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            <div v-for="product in newArrivals" :key="product.id" class="text-left group">
              <div class="bg-white rounded-lg overflow-hidden mb-4 shadow-md">
                <img :src="product.image_url" :alt="product.name" class="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-300">
              </div>
              <h3 class="text-xl font-bold text-gray-900">{{ product.name }}</h3>
              <p class="text-gray-600">{{ product.category }}</p>
              <div class="flex justify-between items-center mt-2">
                <p class="text-xl font-bold text-gray-900">€{{ product.price.toFixed(2) }}</p>
                <a href="#" class="text-green-700 font-semibold hover:text-green-800">
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Marketing Section -->
      <section class="bg-white py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row items-center gap-16">
            <div class="md:w-1/2 flex justify-center">
              <img src="/images/about/vinyasa-flow.png" alt="Yoga practitioner" class="rounded-lg max-w-sm shadow-lg">
            </div>
            <div class="md:w-1/2 text-right">
              <h2 class="text-4xl font-bold text-gray-900 leading-tight">
                Since YogaWorks first opened in 1987, we've advocated for wellness that starts from within. Now, decades after we paved the way for modern yoga, we're taking things further. In addition to streaming classes, YogaWorks now offers elevated apparel designed to make whole-body wellness a way of life.
              </h2>
            </div>
          </div>
        </div>
      </section>
    </main>

    <LayoutTheFooter />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

useHead({
  title: 'Shop - Yoga Studio',
  meta: [
    { name: 'description', content: 'Shop our collection of yoga apparel and accessories.' }
  ]
});

const newArrivals = ref([
  {
    id: 1,
    name: 'Cross Back Performace Bra',
    category: 'Dewberry',
    price: 45.00,
    image_url: '/images/products/image-26.png',
  },
  {
    id: 2,
    name: 'Curved Seam Side Legging',
    category: 'Dewberry',
    price: 65.00,
    image_url: '/images/products/image-38.png',
  },
  {
    id: 3,
    name: 'Long Sleeve Zip Front Performance Jacket',
    category: 'Dewberry',
    price: 85.00,
    image_url: '/images/products/image-36.png',
  },
  {
    id: 4,
    name: 'Short Sleeve Fitted Performance Tee',
    category: 'Dewberry',
    price: 42.00,
    image_url: '/images/products/image-15.png',
  },
]);
</script> 