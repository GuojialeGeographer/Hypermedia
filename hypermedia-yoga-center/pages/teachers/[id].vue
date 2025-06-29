<template>
  <div class="bg-white">
    <LayoutTheHeader />
    
    <!-- Breadcrumb Navigation -->
    <div class="max-w-6xl mx-auto px-6 pt-6">
      <nav class="flex items-center text-sm space-x-2">
        <NuxtLink to="/" class="text-[#2d5a27] font-medium hover:underline">Home</NuxtLink>
        <span class="text-[#4b5563]">/</span>
        <NuxtLink to="/team" class="text-[#2d5a27] font-medium hover:underline">Team</NuxtLink>
        <span class="text-[#4b5563]">/</span>
        <span class="text-[#111827] font-medium">{{ teacher?.name || 'Teacher' }}</span>
      </nav>
    </div>

    <!-- Teacher Profile Card -->
    <div v-if="teacher" class="max-w-4xl mx-auto px-6 py-12">
      <div class="bg-white rounded-2xl shadow-lg border border-[#e5e7eb] p-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Teacher Image -->
          <div class="lg:col-span-1">
            <div class="aspect-square bg-cover bg-center rounded-xl" 
                 :style="`background-image: url('${teacher.image_url}')`">
            </div>
          </div>

          <!-- Teacher Info -->
          <div class="lg:col-span-2 space-y-6">
            <!-- Header -->
            <div>
              <h1 class="text-3xl font-bold text-[#111827] mb-2">{{ teacher.name }}</h1>
              <p class="text-lg text-[#2d5a27] font-semibold">{{ teacher.specialization }}</p>
            </div>

            <!-- Bio -->
            <div>
              <h2 class="text-xl font-bold text-[#111827] mb-3">About</h2>
              <p class="text-[#4b5563] leading-relaxed text-[15px]">
                {{ teacher.short_bio }}
              </p>
            </div>

            <!-- Specialization Details -->
            <div>
              <h2 class="text-xl font-bold text-[#111827] mb-3">Specialization</h2>
              <p class="text-[#4b5563] text-[15px]">
                {{ teacher.specialization }} - {{ getSpecializationDescription(teacher.specialization) }}
              </p>
            </div>

            <!-- Action Button -->
            <div class="pt-4">
              <button class="bg-[#2d5a27] text-white px-6 py-3 rounded-lg text-[15.375px] font-medium hover:bg-[#25492a] transition-colors">
                Book a Class
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Other Teachers Section -->
    <div v-if="teacher" class="max-w-6xl mx-auto px-6 pb-16">
      <h2 class="text-2xl font-bold text-[#111827] mb-8 text-center">Other Teachers</h2>
      
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <NuxtLink 
          v-for="otherTeacher in otherTeachers" 
          :key="otherTeacher.id"
          :to="`/teachers/${otherTeacher.id}`"
          class="group text-center"
        >
          <div class="aspect-square bg-cover bg-center rounded-lg shadow-md transition-transform group-hover:scale-105 mb-3" 
               :style="`background-image: url('${otherTeacher.image_url}')`">
          </div>
          <h3 class="font-semibold text-[#111827] text-sm mb-1">{{ otherTeacher.name }}</h3>
          <p class="text-[#4b5563] text-xs">{{ otherTeacher.specialization }}</p>
        </NuxtLink>
      </div>
    </div>

    <!-- Teacher Not Found -->
    <div v-else class="max-w-6xl mx-auto px-6 py-16 text-center">
      <h1 class="text-2xl font-bold text-[#111827] mb-4">Teacher Not Found</h1>
      <p class="text-[#4b5563] text-[15px] mb-8">Sorry, the teacher you're looking for doesn't exist.</p>
      <NuxtLink to="/team" 
                class="inline-block bg-[#2d5a27] text-white px-6 py-3 rounded-lg text-[15.375px] font-medium hover:bg-[#25492a] transition-colors">
        Back to Team
      </NuxtLink>
    </div>

    <LayoutTheFooter />
  </div>
</template>

<script setup lang="ts">
import type { Teacher } from '~/types'

const route = useRoute()
const teacherId = route.params.id as string

// Fetch specific teacher
const { data: teacher } = await useFetch<Teacher>(`/api/teachers/${teacherId}`)

// Fetch all teachers for "Other Teachers" section
const { data: allTeachers } = await useFetch<Teacher[]>('/api/teachers')

// Filter out current teacher from the list
const otherTeachers = computed(() => {
  if (!allTeachers.value || !teacher.value) return []
  return allTeachers.value.filter(t => t.id !== teacher.value?.id)
})

// Get specialization description
const getSpecializationDescription = (specialization: string) => {
  const descriptions: Record<string, string> = {
    'Vinyasa Flow': 'Dynamic sequences linking breath with movement',
    'Ashtanga Yoga': 'Traditional, disciplined practice building strength and flexibility',
    'Restorative Yoga': 'Gentle, healing practice focused on relaxation and restoration',
    'Zen Meditation': 'Mindful practice combining meditation with gentle movement',
    'Power Yoga': 'Energetic, strength-building sequences for fitness and confidence',
    'Hatha Yoga': 'Traditional approach focusing on alignment and therapeutic benefits'
  }
  return descriptions[specialization] || 'Specialized yoga instruction'
}

useHead({
  title: `${teacher.value?.name || 'Teacher'} - Yoga Studio`,
  meta: [
    { name: 'description', content: teacher.value?.short_bio || 'Meet our experienced yoga instructor.' }
  ]
})
</script>

<style scoped>
.prose {
  max-width: none;
}
</style> 