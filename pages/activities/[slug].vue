<template>
  <div class="bg-white">
    <LayoutTheHeader />
    
    <div v-if="activity" class="font-inter">
      <!-- Breadcrumb -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav class="flex items-center text-lg">
          <NuxtLink to="/" class="text-[#4e7749] font-medium hover:underline">Home</NuxtLink>
          <span class="text-gray-500 mx-2">/</span>
          <NuxtLink to="/activities" class="text-[#4e7749] font-medium hover:underline">Activities</NuxtLink>
          <span class="text-gray-500 mx-2">/</span>
          <span class="text-gray-800 font-medium">{{ activity.title }}</span>
        </nav>
      </div>

      <!-- Page Title -->
      <div class="max-w-7xl mx-auto text-center mt-4 mb-12">
        <h1 class="text-4xl sm:text-5xl font-bold text-black">Activity Arrangement</h1>
      </div>

      <!-- Activity Details -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div class="flex flex-col lg:flex-row items-stretch gap-8">
          <!-- Image on the left -->
          <div class="w-full lg:w-3/5">
            <div class="bg-cover bg-center rounded-lg min-h-[600px] h-full" :style="{ backgroundImage: `url(${activity.image})` }"></div>
          </div>
          
          <!-- Details on the right -->
          <div 
            class="w-full lg:w-2/5 rounded-2xl p-8 flex flex-col justify-center"
            :style="{ backgroundColor: activity.bgColor }"
          >
            <div class="text-left max-w-md mx-auto w-full">
              <div class="flex justify-between items-start mb-1">
                <h3 class="font-semibold text-2xl" :style="{ color: activity.titleColor }">{{ activity.title }}</h3>
                <div v-if="activity.isFree" class="bg-white border border-[#4e7749] rounded-lg px-4 py-1 flex-shrink-0 ml-4">
                  <NuxtLink to="/login" class="text-[#2d5a27] font-bold text-base">Free Trial</NuxtLink>
                </div>
                <div v-else-if="activity.isMembersOnly" class="bg-white border border-[#432963] rounded-lg px-4 py-1 flex-shrink-0 ml-4">
                  <NuxtLink to="/subscription" class="text-[#36254a] font-bold text-base">Register</NuxtLink>
                </div>
              </div>
              
              <h4 class="text-3xl font-normal mb-2" :style="{ color: activity.subtitleColor }">{{ activity.subtitle }}</h4>
              <p class="text-xl mb-4" :style="{ color: activity.descriptionColor }">{{ activity.description }}</p>

              <p class="text-lg mb-2" :style="{ color: activity.textColor }">🕙 Time: {{ activity.time }}</p>
              <p class="text-lg mb-2" :style="{ color: activity.textColor }">👥 Suitable For: {{ activity.suitableFor }}</p>
              <p class="text-lg mb-6" :style="{ color: activity.textColor }">🧘‍♀️ Instructor: {{ activity.instructor }}</p>
              
              <div class="w-full h-px my-6" :style="{ backgroundColor: activity.dividerColor }"></div>
              
              <h5 class="font-semibold text-xl mb-3" :style="{ color: activity.titleColor }">✨ CLASS HIGHLIGHTS</h5>
              <ul class="text-lg space-y-2 mb-6" :style="{ color: activity.textColor }">
                <li v-for="highlight in activity.highlights" :key="highlight">• {{ highlight }}</li>
              </ul>

              <h5 class="font-semibold text-xl mb-3" :style="{ color: activity.titleColor }">🎯 CLASS GOAL</h5>
              <p class="text-lg" :style="{ color: activity.textColor }">{{ activity.goal }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div v-else class="text-center py-24">
      <h1 class="text-3xl font-bold text-gray-800">Activity not found</h1>
      <p class="text-gray-600 mt-4">The activity you are looking for does not exist.</p>
      <NuxtLink to="/activities" class="mt-8 inline-block bg-[#2d5a27] text-white px-8 py-3 rounded-lg hover:bg-[#4e7749]">
        Back to Activities
      </NuxtLink>
    </div>
    
    <LayoutTheFooter />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { activities } from '~/composables/useActivities';

const route = useRoute();
const slug = route.params.slug as string;

const activity = computed(() => {
  return activities.find(a => a.slug === slug);
});

useHead({
  title: activity.value ? `${activity.value.title} - Yoga Activity` : 'Activity Not Found',
  meta: [
    { name: 'description', content: activity.value?.description || 'Find details about our yoga activities.' }
  ]
});
</script> 