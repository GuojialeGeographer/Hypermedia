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
            <span class="text-gray-900">New Arrivals</span>
          </nav>
          <h1 class="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            New Arrivals
          </h1>
           <p class="mt-4 text-lg text-gray-600">
            Check out the latest additions to our collection.
          </p>
        </div>

        <div class="mt-8">
           <div v-if="pending" class="lg:col-span-3">
             <p>Loading products...</p>
          </div>
          <div v-else-if="error" class="lg:col-span-3">
             <p>Could not load products. Please try again later.</p>
          </div>
          <div v-else-if="newArrivals">
            <ul class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              <ShopProductCard v-for="product in newArrivals" :key="product.id" :product="product" />
            </ul>
          </div>
        </div>
      </div>
    </main>

    <LayoutTheFooter />
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types';

useHead({
  title: 'New Arrivals - Apparel - Yoga Studio',
  meta: [
    { name: 'description', content: 'Shop the latest new arrivals from our yoga apparel collection.' }
  ]
});

const { data: products, pending, error } = await useFetch<Product[]>('/api/products');

const newArrivals = computed(() => {
  if (!products.value) return [];
  // Sort by ID descending and take the first 4
  return [...products.value].sort((a, b) => b.id - a.id).slice(0, 4);
});
</script> 