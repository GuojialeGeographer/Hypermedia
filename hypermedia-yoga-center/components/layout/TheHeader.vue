<template>
  <header class="sticky top-0 z-50 backdrop-blur-[2px] backdrop-filter bg-[rgba(255,255,255,0.95)] shadow-sm">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="flex items-center space-x-2">
            <img class="h-8 w-8" src="/images/logos/yoga-logo.svg" alt="Yoga Logo" />
            <span class="font-pacifico text-2xl text-[#2d5a27]">Yoga</span>
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex md:items-center md:space-x-8">
          <NuxtLink v-for="link in navigation" :key="link.name" :to="link.href" class="text-base font-medium text-gray-700 hover:text-gray-900">
            {{ link.name }}
          </NuxtLink>
        </nav>

        <!-- Desktop Action Buttons -->
        <div class="hidden md:flex items-center justify-end space-x-4">
           <NuxtLink to="#" class="whitespace-nowrap rounded-md px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">
            Login
          </NuxtLink>
          <NuxtLink to="#" class="whitespace-nowrap rounded-md bg-[#2d5a27] px-6 py-2 text-base font-medium text-white shadow-sm hover:bg-opacity-90">
            Try For Free
          </NuxtLink>
          <!-- Shopping Cart Icon -->
          <NuxtLink to="/shop" class="flex items-center justify-center w-10 h-10 text-gray-700 hover:text-gray-900">
            <img src="/images/logos/cart-icon.svg" alt="Shopping Cart" class="w-6 h-6" />
          </NuxtLink>
        </div>
        
        <!-- Mobile menu button -->
        <div class="-mr-2 flex items-center md:hidden">
          <button @click="isMobileMenuOpen = !isMobileMenuOpen" type="button" class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-800" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg v-if="!isMobileMenuOpen" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-7.5 5.25h7.5" /></svg>
            <svg v-else class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-show="isMobileMenuOpen" class="md:hidden" id="mobile-menu">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <NuxtLink v-for="link in navigation" :key="link.name" :to="link.href" class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">
          {{ link.name }}
        </NuxtLink>
      </div>
      <div class="border-t border-gray-200 pt-4 pb-3">
        <div class="flex flex-col items-center space-y-2 px-2">
           <NuxtLink to="#" class="w-full text-center rounded-md px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">Login</NuxtLink>
           <div class="flex items-center space-x-2 w-full">
             <NuxtLink to="#" class="flex-1 text-center rounded-md bg-[#2d5a27] px-6 py-2 text-base font-medium text-white shadow-sm hover:bg-opacity-90">Try For Free</NuxtLink>
             <NuxtLink to="/shop" class="flex items-center justify-center w-10 h-10 text-gray-700 hover:text-gray-900">
               <img src="/images/logos/cart-icon.svg" alt="Shopping Cart" class="w-6 h-6" />
             </NuxtLink>
           </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const navigation = [
  { name: 'Activities', href: '/activities' },
  { name: 'Team', href: '/team' },
  { name: 'Classes', href: '/classes' },
  { name: 'Shop', href: '/shop' },
  { name: 'About Us', href: '/about-us' },
]
</script>

<style scoped>
/* 这是一个自定义字体，需要在使用前在项目中正确引入, 比如通过 nuxt.config.ts 中的 googleFonts 模块 */
.font-pacifico {
  font-family: 'Pacifico', cursive;
}

/* 为当前激活的导航链接添加下划线样式，以符合Figma设计 */
.router-link-exact-active {
  color: #374151; /* or a slightly darker gray */
  text-decoration: underline;
  text-underline-offset: 4px;
}
</style> 