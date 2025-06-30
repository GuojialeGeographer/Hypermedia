<template>
  <div class="bg-white w-[1920px] mx-auto relative" style="height: 1860px;">
    <LayoutTheHeader />

    <!-- Breadcrumb Navigation -->
    <div class="absolute left-[35px] top-[104px]">
      <nav class="flex items-center text-[25px] space-x-2 font-inter">
        <NuxtLink to="/" class="text-[#4e7749] font-medium hover:underline">Home</NuxtLink>
        <span class="text-black">/</span>
        <span class="text-black font-medium">Team</span>
      </nav>
    </div>

    <!-- Hero Section -->
    <div 
      class="absolute top-[154px] left-0 w-[1920px] h-[948px] bg-cover bg-center"
      :style="{ backgroundImage: `url('/images/team/hero-background.png')` }"
    >
      <div class="w-full h-full bg-black bg-opacity-30 flex flex-col items-center justify-center space-y-8">
        <h1 class="text-[54px] font-bold text-white text-center leading-tight max-w-[1208px]">
          Join us to cultivate a healthy body and a free, balanced mind.
        </h1>
        <NuxtLink 
          to="/teachers/ashley-lorenzo" 
          class="bg-[#2d5a27] text-white px-12 py-4 rounded-md text-[16.875px] font-medium hover:bg-opacity-90 transition-colors"
        >
          READ MORE
        </NuxtLink>
      </div>
    </div>

    <!-- Team Members Section -->
    <div class="absolute top-[1150px] left-[45px] w-full">
      <h2 class="text-[54px] font-bold text-black mb-12">Our team</h2>
      <div class="relative h-[400px]">
        <div 
          v-for="teacher in teachers" 
          :key="teacher.slug" 
          @click="navigateToTeacher(teacher.slug)"
          class="group cursor-pointer text-center absolute"
          :style="{ left: teacher.position.left + 'px' }"
        >
          <img 
            :src="teacher.image_url" 
            :alt="teacher.name" 
            class="rounded-lg object-cover transition-transform duration-300 group-hover:scale-105" 
            :style="{ width: teacher.position.width + 'px', height: '270px' }" 
          />
          <p class="mt-4 font-semibold text-lg">{{ teacher.name }}</p>
        </div>
      </div>
    </div>

    <div class="absolute top-[1595px] w-full">
      <LayoutTheFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

interface Teacher {
  slug: string;
  name: string;
  image_url: string;
  position: {
    left: number;
    width: number;
  }
}

const teachers = ref<Teacher[]>([
  { slug: 'ashley-lorenzo', name: 'Ashley Lorenzo', image_url: '/images/team/teacher-1.png', position: { left: 39, width: 180 } },
  { slug: 'liam-oconnell', name: 'Liam O\'Connell', image_url: '/images/team/teacher-2.png', position: { left: 303, width: 194 } },
  { slug: 'seraphina-rossi', name: 'Seraphina Rossi', image_url: '/images/team/teacher-3.png', position: { left: 605, width: 230 } },
  { slug: 'kenji-tanaka', name: 'Kenji Tanaka', image_url: '/images/team/teacher-4.png', position: { left: 936, width: 196 } },
  { slug: 'isabella-costa', name: 'Isabella Costa', image_url: '/images/team/teacher-5.png', position: { left: 1227, width: 218 } },
  { slug: 'sophia-chen', name: 'Sophia Chen', image_url: '/images/team/teacher-6.png', position: { left: 1543, width: 216 } },
])

const router = useRouter()

const navigateToTeacher = (slug: string) => {
  router.push(`/teachers/${slug}`)
}

useHead({
  title: 'Our Team - Yoga Studio',
  meta: [
    { name: 'description', content: 'Meet our experienced and dedicated team of yoga instructors.' }
  ]
})
</script>

<style scoped>
.font-inter {
  font-family: 'Inter', sans-serif;
}
</style> 