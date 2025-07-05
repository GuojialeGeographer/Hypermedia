<template>
  <main>
    <LayoutTheHeader />

    <!-- Breadcrumbs -->
    <div class="bg-white py-4 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto flex items-center space-x-2 text-sm font-medium text-gray-500">
        <NuxtLink to="/" class="text-green-700 hover:text-green-800">Home</NuxtLink>
        <span>/</span>
        <span>About Us</span>
      </div>
    </div>

    <!-- About Us Hero Section -->
    <section class="relative py-16 text-center bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">About Us</h1>
      </div>
      <div class="mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <img :src="imgVinyasaFlow1" alt="Vinyasa Flow" class="w-full h-auto object-cover rounded-lg shadow-xl" />
      </div>
    </section>

    <!-- The YogaStudio Story Section -->
    <section class="bg-emerald-50 py-20 px-4 text-center">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900">The YogaStudio story</h2>
        <p class="mt-6 text-lg text-gray-700 leading-relaxed">
          In 1987, we opened our first studio with a mission: to provide people from all walks of life
          with a happy place to connect through mindful movement.
          Today, our mission remains, YogaStudio is a destination for those who approach their practice — both on and off the mat — with intention and authenticity.
        </p>
      </div>
    </section>

    <!-- Apparel Section -->
    <section class="py-20 px-4">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="text-left">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 leading-snug">
            Our apparel is crafted with tech-forward, studio-tested materials and
            designed with an emphasis on simplicity and utility. Each piece
            supports the dynamic flow of yoga and offers elevated style that goes
            beyond the mat. We don't just sell clothing. We create apparel that
            brings harmony and balance — to reflect, and make possible, an inner
            journey of mindfulness.
          </h2>
          <button class="mt-8 px-8 py-3 bg-[#2d5a27] text-white text-lg font-semibold rounded-lg shadow-md hover:bg-opacity-90 transition-colors">SUBMIT</button>
        </div>
        <div>
          <img :src="imgVinyasaFlow" alt="Vinyasa Flow Apparel" class="w-full h-auto object-cover rounded-lg shadow-xl" />
        </div>
      </div>
    </section>

    <!-- Move With Us Section -->
    <section class="py-20 px-4 text-center bg-gray-50">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900">Move with Us</h2>
        <p class="mt-6 text-lg text-gray-700 leading-relaxed">
          New students can participate in 3 Yoga trial courses for free.
        </p>
        <NuxtLink to="/classes" class="inline-block mt-8 px-8 py-3 bg-[#2d5a27] text-white font-semibold rounded-lg shadow-md hover:bg-opacity-90 transition-colors">
          Try For Free
        </NuxtLink>
      </div>
    </section>

    <LayoutTheFooter />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const imgVinyasaFlow = "/images/about/vinyasa-flow.png";
const imgVinyasaFlow1 = "/images/about/vinyasa-flow-1.png";

// Although the original Figma code included these, they are part of the header/footer
// which are now separate components. Keeping them here for completeness from Figma output
// but they are not directly used in the main content of this refactored page.
const imgIcon = "/images/about/icon.svg"; // Yoga logo icon
const img = "/images/about/cart.svg"; // Cart icon
const imgIcon1 = "/images/about/icon-1.svg"; // Footer Yoga logo icon
const imgIcon2 = "/images/about/icon-2.svg"; // Social media icon (e.g., Facebook)
const imgIcon3 = "/images/about/icon-3.svg"; // Social media icon (e.g., Twitter)
const imgIcon4 = "/images/about/icon-4.svg"; // Social media icon (e.g., Google)

// SEO and other page logic can go here
useHead({
  title: 'About Us - YogaStudio',
  meta: [
    { name: 'description', content: 'Learn about the YogaStudio story, our mission, and our crafted apparel.' }
  ],
});
</script>

<style scoped>
/* Custom styles if needed, but primarily use Tailwind CSS */
.tracking-\[-1\.3px\] {
  letter-spacing: -1.3px;
}
</style> 