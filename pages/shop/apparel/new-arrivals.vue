<template>
  <ShopLayout>
    <template #breadcrumb>
      <span>/</span>
      <NuxtLink to="/shop/apparel" class="hover:text-green-700">Apparel</NuxtLink>
      <span>/</span>
      <span class="text-gray-700">New Arrivals</span>
    </template>
    
    <template #title>New Arrivals</template>

    <div>
      <!-- Sort and Product Count -->
      <div class="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
        <div class="flex items-center space-x-2">
          <span class="text-base font-medium text-gray-600">Sort by:</span>
          <select class="text-base text-gray-800 bg-transparent border-none focus:ring-0 focus:outline-none">
            <option>Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>
        </div>
        <span class="text-base font-medium text-gray-600">{{ displayedProducts.length }} products</span>
      </div>

      <!-- Product Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
        <ProductCard 
          v-for="product in displayedProducts" 
          :key="product.id" 
          :product="product" 
        />
      </div>
    </div>
  </ShopLayout>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Product } from '~/types';
import ShopLayout from '~/components/shop/ShopLayout.vue';
import ProductCard from '~/components/shop/ProductCard.vue';

const { data: products } = await useFetch<Product[]>('/api/products');

const displayedProducts = computed(() => {
  if (!products.value) return [];
  // Assuming the last 4 added products are the newest arrivals
  return products.value.slice(-4);
});

useHead({
  title: 'New Arrivals - Yoga Apparel',
  meta: [
    { name: 'description', content: 'Shop our latest collection of yoga apparel.' }
  ]
});
</script> 