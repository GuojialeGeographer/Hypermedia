<template>
  <div class="bg-white">
    <LayoutTheHeader />
    
    <!-- 面包屑导航 -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
      <nav class="flex items-center text-lg space-x-2 text-[#4e7749]">
        <NuxtLink to="/" class="font-medium hover:text-[#2d5a27]">Home</NuxtLink>
        <span class="text-gray-500">/</span>
        <NuxtLink to="/classes" class="font-medium hover:text-[#2d5a27]">Classes</NuxtLink>
        <span class="text-gray-500">/</span>
        <span class="text-gray-800 font-medium">Registration</span>
      </nav>
    </div>

    <!-- 页面标题 -->
    <div class="max-w-7xl mx-auto text-center mt-8 mb-12">
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-black">Classes Registration</h1>
    </div>

    <!-- 加载状态 -->
    <div v-if="pending" class="flex justify-center items-center py-20">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2d5a27]"></div>
    </div>

    <!-- 错误状态 -->
    <div v-else-if="error" class="text-center py-20">
      <div class="text-red-600 mb-4">
        <h3 class="text-xl font-semibold mb-2">Course not found</h3>
        <p class="text-gray-600">The requested course could not be loaded.</p>
      </div>
      <NuxtLink to="/classes" class="text-[#2d5a27] font-medium hover:underline">
        ← Back to Classes
      </NuxtLink>
    </div>

    <!-- 主要内容 -->
    <div v-else-if="course" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <!-- 左侧：课程图片 -->
        <div class="order-2 lg:order-1">
          <img 
            :src="course.imageUrl" 
            :alt="course.title" 
            class="w-full h-auto rounded-2xl shadow-lg"
          />
        </div>

        <!-- 右侧：课程信息和注册 -->
        <div class="order-1 lg:order-2 space-y-8">
          <!-- 免费试用标签 -->
          <div class="flex justify-end">
            <span class="bg-[#2d5a27] text-white px-4 py-2 rounded-lg font-semibold">
              Free Trial
            </span>
          </div>

          <!-- 课程标题 -->
          <div class="text-center lg:text-left">
            <div class="flex items-center justify-center lg:justify-start mb-2">
              <span class="text-2xl mr-2">🧘‍♀️</span>
              <h2 class="text-2xl font-bold text-black">{{ course.title }}</h2>
            </div>
            <div class="flex items-center justify-center lg:justify-start space-x-1 mb-4">
              <span class="text-sm text-gray-600">(Intensity Level:</span>
              <div class="flex">
                <span class="text-yellow-400">{{ '★'.repeat(course.intensity) }}</span>
                <span class="text-gray-300">{{ '★'.repeat(5 - course.intensity) }}</span>
              </div>
              <span class="text-sm text-gray-600">)</span>
            </div>
          </div>

          <!-- 课程描述 -->
          <div class="space-y-4">
            <h3 class="text-lg font-semibold text-[#336666]">Course Name: {{ course.courseName }}</h3>
            <p class="text-gray-700 leading-relaxed" v-html="course.description">
            </p>
          </div>

          <!-- 课程详情卡片 -->
          <div class="bg-[#fafaf5] rounded-2xl p-6 space-y-6">
            <!-- 课程时长 -->
            <div class="flex justify-between items-center">
              <span class="text-lg font-medium text-gray-800">1 semester/course</span>
              <span class="text-sm text-gray-600">open starting date: Valid from 01-03-2025 to 30-06-2025</span>
            </div>

            <!-- 价格和注册 -->
            <div class="flex justify-between items-center">
              <div class="flex items-center space-x-4">
                <span class="text-lg font-medium text-gray-800">1 Person</span>
                <span class="text-2xl font-bold text-black">€{{ course.price }},00</span>
              </div>
              <button 
                @click="handleRegistration"
                class="bg-[#2d5a27] hover:bg-[#4e7749] text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Firm payment
              </button>
            </div>
          </div>

          <!-- 额外信息 -->
          <div class="space-y-4 text-sm text-gray-600">
            <div class="flex items-center space-x-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Duration: 60 minutes per session</span>
            </div>
            <div class="flex items-center space-x-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span>Location: Studio A</span>
            </div>
            <div class="flex items-center space-x-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
              </svg>
              <span>Suitable for: Beginners, All levels welcome</span>
            </div>
            <div class="flex items-center space-x-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <span>Schedule: Mondays at 9:00 AM</span>
            </div>
          </div>

          <!-- 返回按钮 -->
          <div class="pt-4">
            <NuxtLink 
              to="/classes"
              class="inline-flex items-center text-[#2d5a27] font-medium hover:text-[#4e7749] transition-colors"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Back to Classes
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <LayoutTheFooter />
  </div>
</template>

<script setup lang="ts">
import type { Course } from '~/server/api/classes';

// 获取课程数据
const { data: course, pending, error } = await useFetch<Course>('/api/classes/beginner-yoga');

// SEO Meta Tags
useHead({
  title: computed(() => course.value ? `${course.value.title} Registration - Visionari Yoga` : 'Course Registration - Visionari Yoga'),
  meta: [
    {
      name: 'description',
      content: computed(() => course.value ? `Register for ${course.value.title}. ${course.value.courseName} - ${course.value.description.substring(0, 150)}...` : 'Register for our yoga courses at Visionari Yoga.')
    },
    {
      property: 'og:title',
      content: computed(() => course.value ? `${course.value.title} Registration - Visionari Yoga` : 'Course Registration - Visionari Yoga')
    },
    {
      property: 'og:description',
      content: computed(() => course.value ? `Register for ${course.value.title}. ${course.value.courseName}` : 'Register for our yoga courses at Visionari Yoga.')
    }
  ]
})

// 注册处理函数
const handleRegistration = () => {
  if (!course.value) return;
  
  // 这里可以集成真实的支付系统
  // 现在先显示一个确认对话框
  const confirmed = confirm(`Are you sure you want to register for ${course.value.title}? This will redirect you to the payment page.`)
  
  if (confirmed) {
    // 在真实应用中，这里会跳转到支付页面或集成支付系统
    alert(`Registration successful! You will receive a confirmation email shortly. Welcome to ${course.value.title}!`)
    
    // 可选：跳转到成功页面或用户仪表板
    // navigateTo('/dashboard')
  }
}
</script>

<style scoped>
/* 确保星级评分显示正确 */
.text-yellow-400 {
  color: #fbbf24;
}
</style> 