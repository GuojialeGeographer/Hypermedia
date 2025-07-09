<template>
  <div class="min-h-screen bg-white">
    <LayoutTheHeader />

    <!-- Main Content -->
    <div class="max-w-[1920px] mx-auto px-4 pt-20">
      <!-- Breadcrumb -->
      <div class="flex items-center space-x-2 text-[25px] pt-6 pb-8">
        <NuxtLink to="/" class="text-[#4e7749] font-medium">Home</NuxtLink>
        <span class="text-black">/</span>
        <NuxtLink to="/shop" class="text-[#4e7749] font-medium">Shop</NuxtLink>
        <span class="text-black">/</span>
        <NuxtLink to="/shop/apparel" class="text-[#4e7749] font-medium">Apparel</NuxtLink>
        <span class="text-black">/</span>
        <span class="text-black font-medium">Top</span>
      </div>

      <!-- Page Title -->
      <h1 class="text-[66px] font-bold text-black text-center mb-16">Top</h1>

      <!-- Main Layout -->
      <div class="flex">
        <!-- Left Sidebar - Filters -->
        <div class="w-[655px] pr-8">
          <!-- Filter Header -->
          <h2 class="text-[36px] font-normal text-black mb-8">Filter:</h2>
          
          <!-- Divider -->
          <div class="h-0.5 bg-[#cccccc] mb-8"></div>

          <!-- Product Filter -->
          <div class="mb-8">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-[36px] font-normal text-black">Product</h3>
              <button class="text-[36px] text-black rotate-180">︾</button>
            </div>
            
            <!-- Divider -->
            <div class="h-0.5 bg-[#cccccc] mb-6"></div>

            <!-- Filter Options -->
            <div class="space-y-4">
              <div>
                <NuxtLink 
                  to="/shop/apparel/top" 
                  class="text-xl font-bold text-black hover:text-[#4e7749] transition-colors"
                >
                  Top
                </NuxtLink>
              </div>
              
              <div>
                <NuxtLink 
                  to="/shop/apparel/bottoms" 
                  class="text-xl font-bold text-black hover:text-[#4e7749] transition-colors"
                >
                  Bottoms
                </NuxtLink>
              </div>
              
              <div>
                <NuxtLink 
                  to="/shop/apparel/jacket" 
                  class="text-xl font-bold text-black hover:text-[#4e7749] transition-colors"
                >
                  Jacket
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Content - Products -->
        <div class="flex-1">
          <!-- Sort and Product Count -->
          <div class="flex items-center justify-between mb-8">
            <div class="flex items-center space-x-4">
              <span class="text-[36px] font-bold text-[#666666]">Sort by:</span>
              <select class="text-[36px] font-light text-black bg-transparent border-none outline-none">
                <option>Best selling</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
              <span class="text-[36px] text-black">︾</span>
            </div>
            <span class="text-[36px] font-bold text-[#666666]">{{ topProducts.length }} products</span>
          </div>

          <!-- Product Grid -->
          <div class="grid grid-cols-3 gap-x-8 gap-y-16">
            <div v-for="product in topProducts" :key="product.id" class="group">
              <!-- Product Image -->
              <div class="relative mb-4 overflow-hidden bg-gray-100">
                <img 
                  :src="product.imageSrc" 
                  :alt="product.imageAlt"
                  class="w-full h-[497px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <!-- Product Info -->
              <div class="text-center">
                <h3 class="text-[16px] font-bold text-black mb-2 leading-normal">{{ product.name }}</h3>
                <div class="flex items-center justify-center space-x-2 text-[16px] text-black leading-normal">
                  <span class="font-normal">{{ product.color }}</span>
                  <span class="font-normal">→</span>
                  <span class="font-normal">{{ product.price }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <LayoutTheFooter />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Product } from '~/types';

const { data: products } = await useFetch<Product[]>('/api/products');

const topProducts = computed(() => {
  if (!products.value) return [];
  return products.value.filter(product => product.category === 'top');
});

useHead({
  title: 'Top - Yoga Studio Shop',
  meta: [
    { name: 'description', content: 'Shop our collection of yoga tops.' }
  ]
});
</script> 