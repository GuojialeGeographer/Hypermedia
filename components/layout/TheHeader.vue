<template>
  <header class="bg-white">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <NuxtLink to="/" class="-m-1.5 p-1.5 flex items-center">
          <span class="sr-only">Yoga Studio</span>
          <img
            class="h-8 w-auto"
            src="/images/logos/yoga-logo.svg"
            alt="Yoga Studio"
          />
          <span class="ml-3 text-2xl font-pacifico text-gray-900">Yoga</span>
        </NuxtLink>
      </div>

      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      <div class="hidden lg:flex lg:gap-x-12">
        <NuxtLink
          v-for="item in navigation"
          :key="item.name"
          :to="item.href"
          class="text-base font-medium leading-6 text-gray-700 hover:text-gray-900"
          >{{ item.name }}</NuxtLink
        >
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center">
        <NuxtLink
          to="/login"
          class="text-base font-medium leading-6 text-gray-700 hover:text-gray-900"
          >Log in</NuxtLink
        >
        <NuxtLink
          to="/subscription"
          class="ml-8 inline-block rounded-md bg-[#2d5a27] px-5 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >Try For Free</NuxtLink
        >
        
        <div class="ml-8 flow-root">
          <NuxtLink to="/cart" class="group -m-2 flex items-center p-2">
            <svg class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" viewBox="0 0 35 35" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.7918 26.2498C25.5654 26.2498 26.3072 26.5571 26.8542 27.1041C27.4012 27.6511 27.7085 28.393 27.7085 29.1665C27.7085 29.9401 27.4012 30.6819 26.8542 31.2289C26.3072 31.7759 25.5654 32.0832 24.7918 32.0832C24.0183 32.0832 23.2764 31.7759 22.7294 31.2289C22.1825 30.6819 21.8752 29.9401 21.8752 29.1665C21.8752 27.5478 23.1731 26.2498 24.7918 26.2498ZM1.4585 2.9165H6.22725L7.59808 5.83317H29.1668C29.5536 5.83317 29.9245 5.98682 30.198 6.26031C30.4715 6.5338 30.6252 6.90473 30.6252 7.2915C30.6252 7.53942 30.5522 7.78734 30.4502 8.02067L25.2293 17.4561C24.7335 18.3457 23.771 18.9582 22.6772 18.9582H11.8127L10.5002 21.3353L10.4564 21.5103C10.4564 21.6069 10.4948 21.6997 10.5632 21.7681C10.6316 21.8364 10.7243 21.8748 10.821 21.8748H27.7085V24.7915H10.2085C9.43495 24.7915 8.69308 24.4842 8.1461 23.9372C7.59912 23.3902 7.29183 22.6484 7.29183 21.8748C7.29183 21.3644 7.42308 20.8832 7.64183 20.4748L9.62516 16.9019L4.37516 5.83317H1.4585V2.9165ZM10.2085 26.2498C10.982 26.2498 11.7239 26.5571 12.2709 27.1041C12.8179 27.6511 13.1252 28.393 13.1252 29.1665C13.1252 29.9401 12.8179 30.6819 12.2709 31.2289C11.7239 31.7759 10.982 32.0832 10.2085 32.0832C9.43495 32.0832 8.69308 31.7759 8.1461 31.2289C7.59912 30.6819 7.29183 29.9401 7.29183 29.1665C7.29183 27.5478 8.58975 26.2498 10.2085 26.2498ZM23.3335 16.0415L27.3877 8.74984H8.95433L12.396 16.0415H23.3335Z" />
            </svg>
            <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{{ cartCount }}</span>
            <span class="sr-only">items in cart, view bag</span>
          </NuxtLink>
        </div>
      </div>
    </nav>

    <!-- Mobile menu -->
    <div
      class="lg:hidden"
      v-if="mobileMenuOpen"
      role="dialog"
      aria-modal="true"
    >
      <div class="fixed inset-0 z-10"></div>
      <div
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <NuxtLink to="/" class="-m-1.5 p-1.5 flex items-center">
            <span class="sr-only">Yoga Studio</span>
            <img
              class="h-8 w-auto"
              src="/images/logos/yoga-logo.svg"
              alt="Yoga Studio"
            />
             <span class="ml-3 text-2xl font-pacifico text-gray-900"
            >Yoga</span
          >
          </NuxtLink>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <NuxtLink
                v-for="item in navigation"
                :key="item.name"
                :to="item.href"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >{{ item.name }}</NuxtLink
              >
            </div>
            <div class="py-6">
              <NuxtLink
                to="/login"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >Log in</NuxtLink
              >
              <NuxtLink
                to="/subscription"
                class="mt-2 -mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white bg-[#2d5a27] hover:bg-green-700"
                >Try For Free</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useCartStore } from '~/stores/cart';

const mobileMenuOpen = ref(false)

const navigation = [
  { name: 'Activities', href: '/activities' },
  { name: 'Team', href: '/team' },
  { name: 'Classes', href: '/classes' },
  { name: 'Shop', href: '/shop' },
  { name: 'About Us', href: '/about-us' },
]

const cartStore = useCartStore();
const cartCount = computed(() => cartStore.count);
</script>

<style scoped>
.font-pacifico {
  font-family: 'Pacifico', cursive;
}
</style> 