<template>
  <div class="bg-white min-h-screen flex items-center justify-center bg-cover bg-center" style="background-image: url('/images/hero/hero-bg-2.png');">
    <div class="bg-white/90 backdrop-blur-sm p-8 sm:p-12 rounded-2xl shadow-2xl w-full max-w-lg mx-4">
      
      <div class="text-center mb-8">
        <div class="inline-block">
          <NuxtLink to="/" class="flex items-center space-x-2">
            <img class="h-10 w-10 sm:h-12 sm:w-12" src="/images/logos/yoga-logo.svg" alt="Yoga Logo" />
            <span class="font-pacifico text-3xl sm:text-4xl text-[#2d5a27]">Yoga</span>
          </NuxtLink>
        </div>
        <p class="text-gray-500 text-lg sm:text-xl mt-2 font-pacifico opacity-70">
          Your exclusive yoga sanctuary
        </p>
      </div>

      <!-- Toggle Switch -->
      <div class="flex justify-center mb-6">
        <div class="relative grid grid-cols-2 gap-x-1 w-full max-w-xs bg-gray-200 rounded-full p-1">
          <NuxtLink to="/login" class="relative block py-2 text-center z-10 rounded-full text-gray-600 transition">Login</NuxtLink>
          <NuxtLink to="/signup" class="relative block py-2 text-center z-10 rounded-full text-gray-600 transition">Sign Up</NuxtLink>
        </div>
      </div>
      
      <form class="space-y-6">
        <h2 class="text-3xl sm:text-4xl font-bold text-center text-gray-800">
          {{ isLogin ? 'Login' : 'Sign Up' }}
        </h2>

        <div v-if="!isLogin" class="relative">
          <input type="text" placeholder="User name" class="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-[#2d5a27] focus:border-transparent transition">
        </div>

        <div class="relative">
          <input type="email" placeholder="Email address" class="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-[#2d5a27] focus:border-transparent transition">
        </div>

        <div class="relative">
          <input type="password" placeholder="Password" class="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-[#2d5a27] focus:border-transparent transition">
        </div>
        
        <div v-if="isLogin" class="text-center">
          <a href="#" class="text-sm text-blue-600 hover:underline">
            Don't know your password? Never set one? <br> Reset your password
          </a>
        </div>

        <button type="submit" class="w-full bg-[#D9E5D9] text-gray-800 py-3 rounded-lg text-xl font-semibold hover:bg-[#c8d4c8] transition-colors duration-300 shadow-sm">
          {{ isLogin ? 'Login' : 'Sign Up' }}
        </button>

        <NuxtLink to="/subscription" class="block w-full text-center bg-transparent border border-gray-300 text-gray-600 py-3 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-sm">
          Go to Subscription
        </NuxtLink>
        
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  formType: {
    type: String,
    required: true,
    validator: (value: string) => ['login', 'signup'].includes(value)
  }
})

const isLogin = computed(() => props.formType === 'login')
</script>

<style scoped>
.font-pacifico {
  font-family: 'Pacifico', cursive;
}
.router-link-exact-active {
  background-color: white;
  color: #1f2937;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
}
</style> 