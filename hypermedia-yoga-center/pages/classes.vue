<template>
  <div>
    <LayoutTheHeader />

    <main class="bg-white">
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <!-- Page Title -->
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Weekly Class Schedule
          </h1>
          <p class="mt-4 text-lg text-gray-600">
            Find your balance, one class at a time.
          </p>
        </div>

        <!-- Schedule -->
        <div class="mt-12">
          <div v-if="pending" class="text-center">
            <p>Loading schedule...</p>
          </div>
          <div v-else-if="error" class="text-center text-red-500">
            <p>Could not load the schedule. Please try again later.</p>
          </div>
          <div v-else class="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-5 bg-gray-200 border border-gray-200 rounded-lg overflow-hidden">
            <!-- Days -->
            <div v-for="day in schedule" :key="day.name" class="bg-white">
              <h2 class="bg-gray-100 p-4 text-lg font-semibold text-center text-gray-800 border-b">
                {{ day.name }}
              </h2>
              <ul class="divide-y divide-gray-200">
                <li v-for="slot in day.slots" :key="slot.time" class="p-4">
                  <p class="font-semibold text-gray-700">{{ slot.time }}</p>
                  <div v-if="slot.activity" class="mt-2">
                    <NuxtLink 
                      :to="`/activities/${slot.activity.id}`" 
                      class="text-green-700 hover:text-green-800 hover:underline"
                    >
                      {{ slot.activity.name }}
                    </NuxtLink>
                    <p class="text-sm text-gray-500 mt-1">{{ slot.activity.description }}</p>
                  </div>
                  <div v-else class="mt-2">
                    <p class="text-sm text-gray-400">No class scheduled</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>

    <LayoutTheFooter />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Activity } from '~/types';

useHead({
  title: 'Class Schedule - Yoga Studio',
  meta: [
    { name: 'description', content: 'View our weekly schedule for yoga classes.' }
  ]
});

const { data: activities, pending, error } = await useFetch<Activity[]>('/api/activities');

const schedule = computed(() => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const timeSlots = ['9:00 AM', '11:00 AM', '4:00 PM', '6:00 PM'];
  
  if (!activities.value) {
    return days.map(day => ({
      name: day,
      slots: timeSlots.map(time => ({ time, activity: null }))
    }));
  }

  const activityList = [...activities.value];

  return days.map(day => {
    return {
      name: day,
      slots: timeSlots.map(time => {
        // Pseudo-randomly assign an activity to a slot
        const hasActivity = Math.random() > 0.4; // 60% chance of having a class
        if (hasActivity && activityList.length > 0) {
          const activityIndex = Math.floor(Math.random() * activityList.length);
          const activity = activityList.splice(activityIndex, 1)[0];
          return { time, activity };
        }
        return { time, activity: null };
      })
    };
  });
});
</script> 