<template>
  <div class="bg-white">
    <LayoutTheHeader />

    <!-- Hero Section -->
    <div class="relative h-[600px] bg-cover bg-center" style="background-image: url('/images/hero/hero-bg-2.png');">
      <div class="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-center items-center text-center text-white p-4">
        <h1 class="text-4xl md:text-5xl font-extrabold leading-tight mb-4 max-w-2xl">Enjoy 30 Days of Free Yoga Classes with Your Purchase</h1>
        <NuxtLink to="/shop/apparel" class="mt-6 inline-block bg-[#2d5a27] text-white font-semibold py-3 px-10 rounded-full text-base hover:bg-opacity-90 transition-all">
          SHOP THE COLLECTION
        </NuxtLink>
      </div>
    </div>
    
    <!-- Breadcrumb is removed as it's not in the new design -->

    <!-- New Arrivals Section -->
    <section class="py-20 bg-[#fafaf5]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl font-bold text-gray-900 mb-12">New Arrivals</h2>
        <div v-if="pending" class="text-center py-10">Loading...</div>
        <div v-else-if="error" class="text-center text-red-500 py-10">Error loading products.</div>
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          <!-- Product Card -->
          <div v-for="product in products" :key="product.id" class="text-left group">
            <NuxtLink :to="`/shop/${product.id}`" class="block bg-gray-200 rounded-lg overflow-hidden mb-4">
              <img :src="product.image" :alt="product.name" class="w-full h-96 object-cover object-center group-hover:opacity-90 transition-opacity">
            </NuxtLink>
            <div class="px-1">
              <h3 class="font-semibold text-base text-gray-800 h-12">{{ product.name }}</h3>
              <div class="flex justify-between items-center mt-2">
                <span class="font-bold text-gray-900">€{{ product.price.toFixed(2) }}</span>
                <NuxtLink :to="`/shop/${product.id}`" class="text-green-800 font-medium text-sm hover:underline">
                  Learn More →
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="bg-white py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row items-center justify-center gap-16">
          <div class="lg:w-5/12">
            <img src="/images/about/vinyasa-flow-1.png" alt="About YogaWorks" class="rounded-lg w-full h-auto">
          </div>
          <div class="lg:w-5/12">
            <h2 class="text-2xl font-medium text-gray-700 leading-relaxed">
              Since YogaWorks first opened in 1987, we’ve advocated for wellness that starts from within. Now, decades after we paved the way for modern yoga, we’re taking things further. In addition to streaming classes, YogaWorks now offers elevated apparel designed to make whole-body wellness a way of life.
            </h2>
          </div>
        </div>
      </div>
    </section>

    <LayoutTheFooter />
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types'

useHead({
  title: 'Shop - Modern Yoga & Elevated Apparel',
  meta: [
    { name: 'description', content: 'Discover our collection of elevated apparel and modern yoga accessories. Shop now and enjoy 30 days of free yoga classes.' }
  ]
})

const { data: products, pending, error } = useFetch<Product[]>('/api/products', {
  query: {
    limit: 4,
    tags: 'new-arrival'
  }
})
</script> 