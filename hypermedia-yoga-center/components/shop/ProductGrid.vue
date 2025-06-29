<template>
  <div class="lg:col-span-3">
    <div class="border-b border-gray-200 pb-4 flex justify-between items-center">
      <p class="text-sm text-gray-500">{{ products.length }} products</p>
      <div class="flex items-center space-x-2">
        <span class="text-sm font-medium text-gray-700">Sort by:</span>
        <span class="text-sm text-gray-500">Best Selling</span>
      </div>
    </div>

    <ul class="mt-8 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
      <ShopProductCard v-for="product in products" :key="product.id" :product="product" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types';

defineProps<{
  products: Product[];
}>();
</script> 