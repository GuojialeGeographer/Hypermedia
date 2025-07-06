<template>
  <aside class="hidden lg:block">
    <h2 class="sr-only">Filters</h2>

    <div class="space-y-6">
      <div class="p-4 border rounded-lg">
        <h3 class="text-lg font-medium text-gray-900">Filters</h3>
        <p class="mt-2 text-sm text-gray-500">
          Full filtering functionality will be implemented with a backend.
        </p>
      </div>
      <div class="p-4 border rounded-lg">
        <h3 class="text-lg font-medium text-gray-900">Category</h3>
        <ul class="mt-2 space-y-2 text-sm">
          <li>
            <NuxtLink 
              to="/shop/apparel/top" 
              class="hover:text-green-700"
              :class="{'text-green-700 font-semibold': currentCategory === 'top'}"
            >
              Tops
            </NuxtLink>
          </li>
          <li>
            <NuxtLink 
              to="/shop/apparel/bottoms" 
              class="hover:text-green-700"
              :class="{'text-green-700 font-semibold': currentCategory === 'bottom'}"
            >
              Bottoms
            </NuxtLink>
          </li>
          <li>
            <NuxtLink 
              to="/shop/apparel/jacket" 
              class="hover:text-green-700"
               :class="{'text-green-700 font-semibold': currentCategory === 'jacket'}"
            >
              Jackets
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
defineProps<{
  currentCategory: 'top' | 'bottom' | 'jacket';
}>();
</script> 