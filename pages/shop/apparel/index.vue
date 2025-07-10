<template>
  <ShopLayout>
    <template #breadcrumb>
      <span>/</span>
      <span class="text-gray-700">Apparel</span>
    </template>
    
    <template #title>Apparel</template>

    <template #filters>
      <ProductFilters :active-filter="activeFilter" @update:filter="activeFilter = $event" />
    </template>

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
        <span class="text-base font-medium text-gray-600">{{ filteredProducts.length }} products</span>
      </div>

      <!-- Product Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
        <ProductCard 
          v-for="product in filteredProducts" 
          :key="product.id" 
          :product="product" 
        />
      </div>
    </div>
  </ShopLayout>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Product } from '~/types';
import ShopLayout from '~/components/shop/ShopLayout.vue';
import ProductCard from '~/components/shop/ProductCard.vue';
import ProductFilters from '~/components/shop/ProductFilters.vue';

const { data: products, pending, error } = await useFetch<Product[]>('/api/products', {
  query: { limit: 'all' } // Fetch all products
});

const activeFilter = ref('top'); // Default filter

const filteredProducts = computed(() => {
  if (!products.value) return [];
  if (activeFilter.value === 'new-arrivals') {
    return products.value.filter(p => p.tags?.includes('new-arrival'));
  }
  return products.value.filter(p => p.category === activeFilter.value);
});

useHead({
  title: 'Apparel - Yoga Studio Shop',
  meta: [
    { name: 'description', content: 'Shop our collection of yoga apparel.' }
  ]
});
</script> 