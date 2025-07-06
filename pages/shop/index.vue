<template>
  <div class="bg-white">
    <LayoutTheHeader />

    <main>
      <!-- Hero Section -->
      <section 
        class="relative bg-cover bg-center bg-no-repeat min-h-[1200px] flex items-center justify-center text-white"
        style="background-image: url('/images/team/hero-background.png');"
      >
        <div class="text-center px-4">
          <h1 class="font-bold" style="color: #FFFFFF; font-size: 46.875px; line-height: 60px;">
            Enjoy 30 Days of Free Yoga Classes<br />
            with Your Purchase
          </h1>
          <div class="mt-8">
            <NuxtLink
              to="/shop/apparel"
              class="bg-[#2d5a27] text-white font-semibold py-[17px] px-8 rounded-lg text-lg hover:bg-opacity-90 transition"
            >
              SHOP THE COLLECTION
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- New Arrivals -->
      <section v-if="products && products.length" class="bg-[#F9FAFB] py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-5xl font-bold text-center text-gray-900 mb-16">
            New Arrivals
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            <div v-for="product in products" :key="product.id" class="text-left group">
              <div class="bg-white rounded-lg overflow-hidden mb-4 shadow-md">
                <img :src="product.imageSrc" :alt="product.imageAlt" class="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-300">
              </div>
              <h3 class="text-xl font-bold text-gray-900 h-14">{{ product.name }}</h3>
              <p class="text-gray-600">{{ product.color }}</p>
              <div class="flex justify-between items-center mt-2">
                <p class="text-xl font-bold text-gray-900">{{ product.price }}</p>
                <NuxtLink :to="`/shop/${product.id}`" class="text-green-700 font-semibold hover:text-green-800">
                  Learn More →
                </NuxtLink>
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
import type { Product } from '~/types';

useHead({
  title: 'Shop - Yoga Studio',
  meta: [
    { name: 'description', content: 'Shop our collection of yoga apparel and accessories.' }
  ]
});

const { data: products, pending, error } = await useAsyncData<Product[]>(
  'products',
  () => $fetch('/api/products')
);
</script> 