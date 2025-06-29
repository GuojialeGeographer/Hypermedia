<template>
  <div class="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
    <img
      alt="Yoga class"
      :src="activity.image_url"
      class="h-56 w-full object-cover"
    />

    <div class="p-6 bg-white">
      <h3 class="text-xl font-bold text-gray-900">{{ activity.name }}</h3>

      <p class="mt-2 text-sm text-gray-600">
        {{ activity.description }}
      </p>

      <div class="mt-4 flex items-center justify-between text-xs text-gray-500">
        <span>{{ activity.duration }} min • {{ activity.intensity }}</span>
        <NuxtLink :to="`/activities/${activity.id}`" class="inline-block font-medium text-[#2d5a27] hover:text-[#2d5a27]/80">
          Learn More →
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Activity } from '~/types'

defineProps<{
  activity: Activity
}>()
</script> 