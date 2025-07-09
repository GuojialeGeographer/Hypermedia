<template>
  <div class="min-h-screen bg-white">
    <LayoutTheHeader />

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Breadcrumb -->
      <div class="flex items-center space-x-2 text-sm text-gray-500 mb-8">
        <NuxtLink to="/" class="hover:text-green-700">Home</NuxtLink>
        <span>/</span>
        <NuxtLink to="/shop" class="hover:text-green-700">Shop</NuxtLink>
        <slot name="breadcrumb" />
      </div>

      <!-- Page Title -->
      <h1 class="text-4xl font-extrabold text-gray-900 text-center mb-12">
        <slot name="title">Apparel</slot>
      </h1>

      <!-- Main Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-x-8">
        <!-- Left Sidebar - Filters -->
        <ProductFilters />

        <!-- Right Content - Products -->
        <div class="lg:col-span-4">
          <slot />
        </div>
      </div>
    </main>

    <LayoutTheFooter />
  </div>
</template>

<script setup lang="ts">
import ProductFilters from './ProductFilters.vue';
</script> 