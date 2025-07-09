<template>
  <div class="bg-white">
    <LayoutTheHeader />
    
    <!-- 面包屑导航 -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
      <nav class="flex items-center text-lg sm:text-xl md:text-2xl space-x-2">
        <NuxtLink to="/" class="text-[#4e7749] font-medium">Home</NuxtLink>
        <span class="text-gray-500">/</span>
        <span class="text-gray-800 font-medium">Highlights</span>
      </nav>
    </div>

    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-[#2d5a27] to-[#4e7749] text-white py-20">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
          Highlighted Classes
        </h1>
        <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Discover our most popular and transformative yoga experiences, carefully selected for their unique benefits and exceptional quality.
        </p>
        <div class="w-24 h-1 bg-white mx-auto"></div>
      </div>
    </section>

    <!-- Featured Activities Section -->
    <section class="py-16 bg-[#fafaf5]">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Most Popular Classes
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            These carefully curated classes represent the best of what our yoga center offers, 
            each designed to provide unique benefits for your body, mind, and spirit.
          </p>
        </div>

        <!-- Loading State -->
        <div v-if="pending" class="flex justify-center items-center py-20">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2d5a27]"></div>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="text-center py-20">
          <div class="text-red-600 mb-4">
            <svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 class="text-xl font-semibold mb-2">Unable to load highlighted classes</h3>
            <p class="text-gray-600">{{ error.message || 'Please try again later' }}</p>
          </div>
        </div>

        <!-- Activities Grid -->
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div
            v-for="activity in highlightedActivities"
            :key="activity.id"
            class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <!-- Activity Image -->
            <div class="relative h-64 bg-gray-300">
              <img
                v-if="activity.image_url"
                :src="activity.image_url"
                :alt="`${activity.name} yoga class`"
                class="w-full h-full object-cover"
              />
              <div class="absolute top-4 left-4">
                <span class="bg-[#2d5a27] text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </span>
              </div>
            </div>

            <!-- Activity Content -->
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-3">
                {{ activity.name }}
              </h3>
              
              <p class="text-gray-600 mb-4 line-clamp-3">
                {{ activity.description }}
              </p>

              <!-- Activity Details -->
              <div class="space-y-2 mb-6">
                <div class="flex items-center text-sm text-gray-500">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>Duration: {{ activity.duration ? `${activity.duration} minutes` : '60 minutes' }}</span>
                </div>
                
                <div class="flex items-center text-sm text-gray-500">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span>Level: {{ activity.intensity || 'All Levels' }}</span>
                </div>

                <div v-if="activity.schedule" class="flex items-center text-sm text-gray-500">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <span>{{ activity.schedule.day }}s at {{ activity.schedule.time }}</span>
                </div>
              </div>

              <!-- Teachers -->
              <div v-if="activity.teachers && activity.teachers.length > 0" class="mb-6">
                <h4 class="text-sm font-semibold text-[#336666] mb-2">Instructors:</h4>
                <div class="flex flex-wrap gap-2">
                  <NuxtLink
                    v-for="teacher in activity.teachers"
                    :key="teacher.slug"
                    :to="`/teachers/${teacher.slug}`"
                    class="inline-flex items-center px-3 py-1 bg-green-100 text-[#2d5a27] rounded-full text-sm hover:bg-green-200 transition-colors"
                  >
                    {{ teacher.name }}
                  </NuxtLink>
                </div>
              </div>

              <!-- Action Button -->
              <div class="flex">
                <button
                  @click="bookClass(activity)"
                  class="w-full bg-[#2d5a27] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#4e7749] transition-colors"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="text-center mt-16">
          <div class="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h3 class="text-2xl font-bold text-gray-800 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p class="text-gray-600 mb-6">
              Join thousands of students who have transformed their lives through our yoga practice. 
              Start with any of these highlighted classes today.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <NuxtLink
                to="/classes"
                class="bg-[#2d5a27] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#4e7749] transition-colors"
              >
                View All Classes
              </NuxtLink>
              <NuxtLink
                to="/contact"
                class="bg-white text-[#2d5a27] border-2 border-[#2d5a27] px-8 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors"
              >
                Contact Us
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <LayoutTheFooter />
  </div>
</template>

<script setup lang="ts">
import type { Activity } from '~/types'

// SEO Meta Tags
useHead({
  title: 'Highlighted Classes - Visionari Yoga',
  meta: [
    {
      name: 'description',
      content: 'Discover our most popular and transformative yoga classes. Carefully selected featured classes for the best yoga experience at Visionari Yoga Center.'
    },
    {
      property: 'og:title',
      content: 'Highlighted Classes - Visionari Yoga'
    },
    {
      property: 'og:description',
      content: 'Discover our most popular and transformative yoga classes. Carefully selected featured classes for the best yoga experience at Visionari Yoga Center.'
    }
  ]
})

// Fetch all activities and teachers
const { data: activities, pending, error } = await useFetch<Activity[]>('/api/activities')
const { data: teachers } = await useFetch<any[]>('/api/teachers')

// Select 4 highlighted activities with teacher information
const highlightedActivities = computed(() => {
  if (!activities.value || !teachers.value) return []
  
  // Select featured activities (first 4)
  const featured = activities.value.slice(0, 4)
  
  // Add teacher information to each activity
  return featured.map(activity => ({
    ...activity,
    teachers: activity.teacher_ids.map(teacherId => 
      teachers.value?.find(teacher => teacher.id === teacherId)
    ).filter(Boolean) // Remove any undefined teachers
  }))
})

// Book class function
import { useCartStore } from '~/stores/cart'

const bookClass = (activity: Activity) => {
  const cartStore = useCartStore()
  cartStore.addItem({
    id: activity.id,
    name: activity.name,
    price: activity.price || 50,
    image: activity.image_url,
    quantity: 1,
    type: 'class'
  })
  navigateTo('/cart')
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style> 