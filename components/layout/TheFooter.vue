<template>
  <footer class="bg-gray-50">
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div>
          <NuxtLink to="/" class="flex items-center space-x-2">
            <img class="h-5 w-5" src="/images/logos/yoga-logo.svg" alt="Yoga Logo" />
            <span class="font-pacifico text-xl text-[#2d5a27]">Yoga</span>
          </NuxtLink>
          <p class="mt-4 text-sm text-gray-600">
            Transform your life<br>through the power of yoga
          </p>
          <ul class="mt-8 flex gap-4">
            <!-- 社交媒体图标区域保持空白，与设计保持一致 -->
          </ul>
        </div>

        <div class="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-2">
          <div class="text-center sm:text-left">
            <p class="text-lg font-medium text-gray-900">Quick Links</p>
            <ul class="mt-4 space-y-2 text-sm">
              <li v-for="link in quickLinks" :key="link.name">
                <NuxtLink :to="link.href" class="text-gray-700 transition hover:opacity-75">{{ link.name }}</NuxtLink>
              </li>
            </ul>
          </div>

          <div class="text-center sm:text-left">
            <p class="text-lg font-medium text-gray-900">Support</p>
            <ul class="mt-4 space-y-2 text-sm">
              <li v-for="link in supportLinks" :key="link.name">
                <NuxtLink :to="link.href" class="text-gray-700 transition hover:opacity-75">{{ link.name }}</NuxtLink>
              </li>
            </ul>
          </div>
          
          <div class="text-center sm:text-left">
            <p class="text-lg font-medium text-gray-900">Connect With Us</p>
            <div class="mt-4 flex gap-2">
              <a href="#" class="flex items-center justify-center w-10 h-10 bg-[rgba(45,90,39,0.1)] rounded-full hover:bg-[rgba(45,90,39,0.2)] transition-colors">
                <svg class="w-4 h-4 text-[#2d5a27]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.219-.359-1.219c0-1.142.662-1.995 1.482-1.995.699 0 1.037.219 1.037 1.037 0 .631-.399 1.219-.399 2.188 0 .949.219 1.576.219 2.344 0 .662-.179 1.219-.179 1.599 0 .898.898 1.636 1.797 1.636 2.156 0 3.616-2.287 3.616-5.576 0-2.906-2.078-4.94-5.056-4.94-3.457 0-5.496 2.587-5.496 5.271 0 1.043.399 2.167.898 2.786.098.119.111.219.08.339-.088.359-.279 1.158-.319 1.318-.059.199-.198.239-.458.149-1.677-.779-2.725-3.236-2.725-5.214 0-4.243 3.077-8.13 8.888-8.13 4.663 0 8.29 3.317 8.29 7.76 0 4.623-2.917 8.34-6.964 8.34-1.358 0-2.636-.698-3.077-1.537l-.839 3.197c-.299 1.158-1.118 2.607-1.657 3.497C9.577 23.462 10.757 24 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
              <a href="#" class="flex items-center justify-center w-10 h-10 bg-[rgba(45,90,39,0.1)] rounded-full hover:bg-[rgba(45,90,39,0.2)] transition-colors">
                <svg class="w-4 h-4 text-[#2d5a27]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" class="flex items-center justify-center w-10 h-10 bg-[rgba(45,90,39,0.1)] rounded-full hover:bg-[rgba(45,90,39,0.2)] transition-colors">
                <svg class="w-4 h-4 text-[#2d5a27]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 border-t border-gray-200 pt-6">
        <p class="text-center text-sm text-gray-600">
          © {{ new Date().getFullYear() }} YogaStudio. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const quickLinks = [
  { name: 'Activities', href: '/activities' },
  { name: 'Highlights', href: '/highlights' },
  { name: 'Classes', href: '/classes' },
  { name: 'Team', href: '/team' },
  { name: 'About Us', href: '/about-us' },
];

const supportLinks = [
  { name: 'Contact Us', href: '/contact' },
  { name: 'FAQ', href: '/legal/faq' },
  { name: 'Privacy Policy', href: '/legal/privacy-policy' },
  { name: 'Terms of Service', href: '/legal/terms-of-service' },
];
</script>

<style scoped>
.font-pacifico {
  font-family: 'Pacifico', cursive;
}
</style> 