<template>
  <div class="group relative">
    <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
      <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
    </div>
    <div class="mt-4">
      <h3 class="text-sm text-gray-700">
        <NuxtLink :to="product.href">
          <span aria-hidden="true" class="absolute inset-0" />
          {{ product.name }}
        </NuxtLink>
      </h3>
      <div class="flex items-center justify-between text-sm mt-1">
        <p class="text-gray-500">{{ product.color }}</p>
        <p class="font-medium text-gray-900">{{ product.price }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types';

defineProps<{
  product: Product;
}>();
</script> 