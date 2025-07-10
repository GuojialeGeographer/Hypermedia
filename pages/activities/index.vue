<template>
  <div class="bg-white">
    <LayoutTheHeader />
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <nav class="flex items-center text-lg">
        <NuxtLink to="/" class="text-[#4e7749] font-medium hover:underline">Home</NuxtLink>
        <span class="text-gray-500 mx-2">/</span>
        <span class="text-gray-800 font-medium">Activities</span>
      </nav>
    </div>

    <div class="max-w-7xl mx-auto text-center mt-4 mb-12">
      <h1 class="text-4xl sm:text-5xl font-bold text-black">Activity Arrangement</h1>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-12">
      <div 
        v-for="(activity, index) in activities"
        :key="activity.slug"
        class="flex flex-col lg:flex-row items-stretch gap-8"
        :class="{ 'lg:flex-row-reverse': index % 2 !== 0 }"
      >
        <div class="w-full lg:w-3/5 bg-cover bg-center rounded-lg min-h-[450px]" :style="{ backgroundImage: `url(${activity.image})` }"></div>
        
        <div 
          class="w-full lg:w-2/5 rounded-2xl p-8 relative flex flex-col justify-center"
          :style="{ backgroundColor: activity.bgColor }"
        >
          <div class="absolute top-4 right-4">
            <div v-if="activity.isFree" class="bg-white border border-[#4e7749] rounded-lg px-4 py-2">
              <NuxtLink to="/login" class="text-[#2d5a27] font-bold text-lg">Free Trial</NuxtLink>
            </div>
            <div v-if="!activity.isFree && !activity.isMembersOnly" class="bg-white border border-[#432963] rounded-lg px-4 py-2">
              <NuxtLink to="/signup" class="text-[#36254a] font-bold text-lg">Register</NuxtLink>
            </div>
          </div>
          <div v-if="activity.isMembersOnly" class="absolute top-4 left-4 bg-[#4d4d99] text-white rounded-full px-4 py-2">
            <span class="font-semibold">MEMBERS</span>
          </div>

          <div class="text-center mt-12">
            <NuxtLink :to="`/activities/${activity.slug}`" class="hover:opacity-80">
              <h3 class="font-semibold text-2xl mb-2" :style="{ color: activity.titleColor }">{{ activity.title }}</h3>
            </NuxtLink>
            <h4 class="text-3xl font-normal mb-2" :style="{ color: activity.subtitleColor }">{{ activity.subtitle }}</h4>
            <p class="text-xl mb-6" :style="{ color: activity.descriptionColor }">{{ activity.description }}</p>
            
            <div class="w-full max-w-lg h-px mx-auto mb-6" :style="{ backgroundColor: activity.dividerColor }"></div>
            
            <div class="mb-4">
              <p class="text-lg leading-relaxed" :style="{ color: activity.textColor }">
                <span class="font-semibold">👥 Suitable For:</span><br/>
                {{ activity.suitableFor }}
              </p>
            </div>
            
            <p class="text-lg mb-6" :style="{ color: activity.textColor }">🧘‍♀️ Instructor: {{ activity.instructor }}</p>
            
            <h5 class="font-semibold text-xl mb-3" :style="{ color: activity.titleColor }">✨ CLASS HIGHLIGHTS</h5>
            <ul class="text-lg space-y-2 text-left max-w-md mx-auto" :style="{ color: activity.textColor }">
              <li v-for="highlight in activity.highlights" :key="highlight">• {{ highlight }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <LayoutTheFooter />
  </div>
</template>

<script setup lang="ts">
import { activities } from '~/composables/useActivities';

useHead({
  title: 'Yoga Activities - Class Schedule & Arrangement',
  meta: [
    { name: 'description', content: 'Explore our weekly yoga activities, from Monday Mindfulness to Sunday Sunrise Vinyasa. Find the perfect class for your practice.' }
  ]
})

</script>

<style scoped>
/* Scoped styles can be added here if necessary */
</style>