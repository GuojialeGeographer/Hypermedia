<template>
  <div>
    <LayoutTheHeader />

    <main class="bg-white">
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <!-- Breadcrumb -->
        <div class="flex items-center space-x-2 text-sm text-gray-500">
          <NuxtLink to="/shop" class="hover:underline">Shop</NuxtLink>
          <span>/</span>
          <span class="text-gray-900">Apparel</span>
        </div>

        <!-- Page Title -->
        <div class="pt-8 text-center">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Apparel
          </h1>
          <p class="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Discover our collection of yoga wear, designed for comfort, performance, and style.
          </p>
        </div>

        <!-- Category Grid -->
        <div class="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <NuxtLink
            v-for="category in categories"
            :key="category.name"
            :to="category.href"
            class="group relative block"
          >
            <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
              <img :src="category.imageSrc" :alt="category.imageAlt" class="h-full w-full object-cover object-center" />
            </div>
            <h3 class="mt-4 text-xl font-semibold text-gray-900">{{ category.name }}</h3>
            <p class="mt-1 text-base text-gray-500">{{ category.description }}</p>
          </NuxtLink>
        </div>
      </div>
    </main>

    <LayoutTheFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Shop Apparel - Yoga Studio',
  meta: [
    { name: 'description', content: 'Browse our apparel collections including tops, bottoms, and jackets.' }
  ]
})

const categories = [
  {
    name: 'Tops',
    description: 'Performance bras and tees.',
    href: '/shop/apparel/top',
    imageSrc: '/images/products/image-15.png',
    imageAlt: 'A woman wearing a yoga top.',
  },
  {
    name: 'Bottoms',
    description: 'Leggings and shorts for every flow.',
    href: '/shop/apparel/bottoms',
    imageSrc: '/images/products/image-38.png',
    imageAlt: 'Close-up of a person wearing yoga leggings.',
  },
  {
    name: 'Jackets',
    description: 'Warm-ups and cool-downs.',
    href: '/shop/apparel/jacket',
    imageSrc: '/images/products/image-36.png',
    imageAlt: 'A woman wearing a zip-up yoga jacket.',
  },
]
</script> 