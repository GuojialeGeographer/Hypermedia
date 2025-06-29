<template>
  <div>
    <LayoutTheHeader />

    <main class="bg-white">
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div>
          <nav class="flex items-center space-x-2 text-sm text-gray-500">
            <NuxtLink to="/shop" class="hover:underline">Shop</NuxtLink>
            <span>/</span>
            <NuxtLink to="/shop/apparel" class="hover:underline">Apparel</NuxtLink>
            <span>/</span>
            <span class="text-gray-900">Bottoms</span>
          </nav>
          <h1 class="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Bottoms
          </h1>
        </div>

        <div class="mt-8 lg:grid lg:grid-cols-4 lg:gap-8">
          <ShopProductFilters current-category="bottom" />
          
          <div v-if="pending" class="lg:col-span-3">
             <p>Loading products...</p>
          </div>
          <div v-else-if="error" class="lg:col-span-3">
             <p>Could not load products. Please try again later.</p>
          </div>
          <ShopProductGrid v-else-if="bottoms" :products="bottoms" />
        </div>
      </div>
    </main>

    <LayoutTheFooter />
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types';

useHead({
  title: 'Bottoms - Apparel - Yoga Studio',
  meta: [
    { name: 'description', content: 'Shop our collection of yoga bottoms, including leggings and shorts.' }
  ]
});

const { data: products, pending, error } = await useFetch<Product[]>('/api/products');

const bottoms = computed(() => {
  if (!products.value) return [];
  return products.value.filter(p => p.category === 'bottom');
});
</script> 