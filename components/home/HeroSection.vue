<template>
  <section class="relative min-h-screen overflow-hidden">
    <!-- 轮播背景图片 -->
    <div class="absolute inset-0">
      <div 
        v-for="(image, index) in backgroundImages" 
        :key="index"
        class="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
        :class="{ 'opacity-100': currentImageIndex === index, 'opacity-0': currentImageIndex !== index }"
        :style="`background-image: url('${image}');`"
      />
    </div>
    
    <!-- 遮罩层 -->
    <div class="absolute inset-0 bg-black bg-opacity-40"></div>
    
    <!-- Hero内容 -->
    <div class="relative flex items-center justify-center min-h-screen">
      <div class="text-center text-white px-6 max-w-6xl mx-auto">
        <!-- 主标题 -->
        <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Transform Your Life Through
          <span class="block">Mindful Movement</span>
        </h1>
        
        <!-- 副标题 -->
        <p class="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Join our expert-led yoga classes and discover a perfect balance of strength, 
          flexibility and inner peace. Start your journey today with our special offer.
        </p>
        
        <!-- CTA按钮 -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <NuxtLink
            to="/login"
            class="bg-[#2d5a27] hover:bg-[#2d5a27]/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 min-w-[200px]"
          >
            Start Free Trial
          </NuxtLink>
          <NuxtLink
            to="/activities"
            class="border border-[#2d5a27] hover:bg-[#2d5a27] hover:text-white text-[#2d5a27] bg-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 min-w-[200px]"
          >
            View Class Schedule
          </NuxtLink>
        </div>
        
        <!-- 限时优惠提示 -->
        <p class="text-sm md:text-base mt-6 text-gray-200">
          ✨ Limited Time: Get 7 Days Free Access
        </p>
      </div>
    </div>
    
    <!-- 轮播指示器 -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
      <button 
        v-for="(image, index) in backgroundImages" 
        :key="index"
        @click="setCurrentImage(index)"
        class="w-3 h-3 rounded-full transition-all duration-300"
        :class="{ 
          'bg-white': currentImageIndex === index, 
          'bg-white bg-opacity-50 hover:bg-opacity-75': currentImageIndex !== index 
        }"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// 轮播图片数组
const backgroundImages = [
  '/images/hero/hero-bg-1.png',
  '/images/hero/hero-bg-2.png', 
  '/images/hero/hero-bg-3.png'
]

// 当前图片索引
const currentImageIndex = ref(0)
let intervalId: number | null = null

// 设置当前图片
const setCurrentImage = (index: number) => {
  currentImageIndex.value = index
}

// 下一张图片
const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % backgroundImages.length
}

// 启动轮播
const startSlideshow = () => {
  intervalId = window.setInterval(nextImage, 5000) // 每5秒切换一张图片
}

// 停止轮播
const stopSlideshow = () => {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
}

// 组件挂载时启动轮播
onMounted(() => {
  startSlideshow()
})

// 组件卸载时清理定时器
onUnmounted(() => {
  stopSlideshow()
})
</script>

<style scoped>
/* 确保轮播图片平滑过渡 */
.transition-opacity {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
}
</style> 