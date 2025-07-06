<template>
  <div class="bg-white">
    <LayoutTheHeader />

    <main v-if="product" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Main content will go here -->
      <div class="grid md:grid-cols-2 gap-12">
        <!-- Product Image -->
        <div>
          <img :src="product.imageSrc" :alt="product.imageAlt" class="w-full rounded-lg shadow-lg">
        </div>
        
        <!-- Product Info -->
        <div>
          <h1 class="text-4xl font-bold tracking-tight text-gray-900">{{ product.name }}</h1>
          <p class="text-3xl text-gray-700 mt-4">{{ product.price }}</p>
          <p class="mt-6 text-gray-600">{{ product.description }}</p>

          <!-- Add to cart -->
          <div class="mt-10">
            <button class="w-full bg-[#2d5a27] text-white font-semibold py-4 px-10 rounded-lg text-lg hover:bg-opacity-90 transition">
              Add to Cart
            </button>
          </div>
          
          <!-- Details -->
          <div class="mt-8">
            <h3 class="text-lg font-medium text-gray-900">Details</h3>
            <p class="mt-2 text-gray-600">{{ product.details }}</p>
          </div>

          <!-- Materials -->
          <div class="mt-8">
            <h3 class="text-lg font-medium text-gray-900">Materials</h3>
            <p class="mt-2 text-gray-600">{{ product.materials }}</p>
          </div>
        </div>
      </div>
    </main>
    <div v-else class="text-center py-24">
      <p>Loading product...</p>
    </div>

    <LayoutTheFooter />
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types';
const route = useRoute();
const productId = computed(() => route.params.id as string);

const { data: product, error } = await useAsyncData<Product>(
  `product-${productId.value}`,
  () => $fetch(`/api/products?id=${productId.value}`)
);

if (error.value) {
  console.error('Failed to fetch product:', error.value);
  // Optionally, redirect to a 404 page
  // await navigateTo('/404');
}

useHead({
  title: product.value?.name || 'Product Details',
  meta: [
    { name: 'description', content: `Details for ${product.value?.name}` }
  ]
});
</script> 