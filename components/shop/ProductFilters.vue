<template>
  <aside class="lg:col-span-1">
    <!-- Filter Header -->
    <h2 class="text-2xl font-semibold text-gray-800 mb-4">Filter:</h2>
    
    <!-- Divider -->
    <div class="border-t border-gray-200 mb-6"></div>

    <!-- Product Filter -->
    <div class="mb-8">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-xl font-medium text-gray-900">Product</h3>
        <button class="text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      
      <!-- Divider -->
      <div class="border-t border-gray-200 mb-6"></div>

      <!-- Filter Options -->
      <div class="space-y-4">
        <NuxtLink 
          to="/shop/apparel/top" 
          class="block text-base font-medium text-gray-700 hover:text-green-800 transition-colors"
          :class="{ 'text-green-800 font-bold': $route.path.endsWith('/top') }"
        >
          Top
        </NuxtLink>
        <NuxtLink 
          to="/shop/apparel/bottoms" 
          class="block text-base font-medium text-gray-700 hover:text-green-800 transition-colors"
          :class="{ 'text-green-800 font-bold': $route.path.endsWith('/bottoms') }"
        >
          Bottoms
        </NuxtLink>
        <NuxtLink 
          to="/shop/apparel/jacket" 
          class="block text-base font-medium text-gray-700 hover:text-green-800 transition-colors"
          :class="{ 'text-green-800 font-bold': $route.path.endsWith('/jacket') }"
        >
          Jacket
        </NuxtLink>
        <NuxtLink 
          to="/shop/apparel/new-arrivals" 
          class="block text-base font-medium text-gray-700 hover:text-green-800 transition-colors"
          :class="{ 'text-green-800 font-bold': $route.path.endsWith('/new-arrivals') }"
        >
          New Arrivals
        </NuxtLink>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
// No script needed for this simple component yet.
</script> 