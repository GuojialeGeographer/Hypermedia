<template>
  <div>
    <LayoutTheHeader />

    <main>
      <!-- Hero Section with Background Image -->
      <section 
        class="relative bg-cover bg-center bg-no-repeat py-32"
        :style="{ backgroundImage: `url('/images/team/hero-background.png')` }"
      >
        <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div class="mx-auto max-w-3xl text-center">
            <h1
              class="text-3xl font-extrabold sm:text-5xl"
            >
              Enjoy 30 Days of Free Yoga
              <span class="sm:block"> With Your Purchase. </span>
            </h1>

            <p class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
             Elevate your practice with our performance-tested apparel.
            </p>

            <div class="mt-8 flex flex-wrap justify-center gap-4">
              <a
                class="block w-full rounded border border-green-700 bg-green-700 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="#new-arrivals"
              >
                Shop The Collection
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- New Arrivals Section -->
      <section id="new-arrivals" class="bg-white">
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="text-center">
            <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              New Arrivals
            </h2>
          </div>

          <ul class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <li v-for="product in newArrivals" :key="product.id">
              <a href="#" class="group block overflow-hidden">
                <img
                  :src="product.image_url"
                  :alt="product.name"
                  class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div class="relative bg-white pt-3">
                  <h3
                    class="text-md text-gray-700 group-hover:underline group-hover:underline-offset-4"
                  >
                    {{ product.name }}
                  </h3>

                  <p class="mt-2">
                    <span class="sr-only"> Regular Price </span>
                    <span class="tracking-wider text-gray-900"> {{ product.price }} </span>
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>

       <!-- Marketing Section -->
      <section class="bg-gray-50">
        <div class="mx-auto max-w-screen-xl px-4 py-24 lg:flex lg:items-center">
          <div class="mx-auto max-w-4xl text-center">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              From the mat, to the world.
            </h2>
            <p class="mt-4 text-gray-600 sm:text-xl">
               Since YogaWorks first opened in 1987, we've advocated for wellness that starts from within. Now, decades after we paved the way for modern yoga, we're taking things further. In addition to streaming classes, YogaWorks now offers elevated apparel designed to make whole-body wellness a way of life.
            </p>
          </div>
        </div>
      </section>

    </main>

    <LayoutTheFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Shop - Yoga Studio',
  meta: [
    { name: 'description', content: 'Shop our collection of yoga apparel and accessories.' }
  ]
});

const newArrivals = ref([
  {
    id: 1,
    name: 'Cross Back Performance Bra',
    price: '€45.00',
    image_url: '/images/products/image-26.png',
  },
  {
    id: 2,
    name: 'Curved Seam Side Legging',
    price: '€65.00',
    image_url: '/images/products/image-38.png',
  },
  {
    id: 3,
    name: 'Long Sleeve Zip Front Jacket',
    price: '€85.00',
    image_url: '/images/products/image-36.png',
  },
  {
    id: 4,
    name: 'Short Sleeve Fitted Tee',
    price: '€42.00',
    image_url: '/images/products/image-15.png',
  },
]);
</script> 