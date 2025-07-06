<template>
  <div class="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out text-center bg-white">
    <img
      alt="Teacher photo"
      :src="teacher.photo_url"
      class="h-64 w-full object-cover"
    />

    <div class="p-6">
      <h3 class="text-xl font-bold text-gray-900">{{ teacher.name }}</h3>

      <p class="mt-2 text-sm text-gray-600">
        {{ teacher.short_bio }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Teacher } from '~/types'

defineProps<{
  teacher: Teacher
}>()
</script> 