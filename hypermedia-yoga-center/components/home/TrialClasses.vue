<template>
  <section class="bg-white py-16">
    <div class="mx-auto max-w-[1536px] px-6">
      <!-- 标题部分 -->
      <div class="text-center mb-16">
        <h2 class="text-[35.4375px] font-bold text-gray-900 leading-[40px] mb-4">
          Trial Classes
        </h2>
        <p class="text-[18.4375px] text-gray-600 leading-[28px]">
          Find the perfect class for your practice level
        </p>
      </div>

      <!-- 卡片网格 -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[1488px] mx-auto">
        <p v-if="pending" class="col-span-full text-center text-gray-500">Loading classes...</p>
        <p v-else-if="error" class="col-span-full text-center text-red-500">Could not load classes. Please try again later.</p>
        <template v-else-if="activities">
          <!-- Beginner Yoga Card -->
          <div class="bg-white rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] overflow-hidden h-[500px] flex flex-col">
            <div class="aspect-[478/256] bg-cover bg-center flex-shrink-0" style="background-image: url('/images/activities/beginner-yoga.png')"></div>
            <div class="p-6 pt-8 flex flex-col flex-grow">
              <h3 class="text-[19.375px] font-bold text-gray-900 leading-[28px] mb-4">
                Beginner Yoga
              </h3>
              <p class="text-[14.75px] text-gray-600 leading-[24px] mb-6 flex-grow">
                Based on traditional Hatha Yoga and incorporating a scientifically structured sequence, this course emphasizes breath control and proper body alignment.
              </p>
              <div class="flex items-center justify-between mt-auto">
                <span class="text-[12.9062px] text-gray-500 leading-[20px]">
                  60 min • All Levels
                </span>
                <NuxtLink to="/activities/1" class="text-[15.375px] text-[#2d5a27] leading-[24px] font-normal">
                  Learn More →
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Gentle Flow Yoga Card -->
          <div class="bg-white rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] overflow-hidden h-[500px] flex flex-col">
            <div class="aspect-[478/256] bg-cover bg-center flex-shrink-0" style="background-image: url('/images/activities/gentle-flow-yoga.png')"></div>
            <div class="p-6 pt-8 flex flex-col flex-grow">
              <h3 class="text-[19.375px] font-bold text-gray-900 leading-[28px] mb-4">
                Gentle Flow Yoga
              </h3>
              <p class="text-[14.75px] text-gray-600 leading-[24px] mb-6 flex-grow">
                Building upon alignment fundamentals, this course introduces basic vinyasa sequences with modified sun salutations.
              </p>
              <div class="flex items-center justify-between mt-auto">
                <span class="text-[12.9062px] text-gray-500 leading-[20px]">
                  60 min • All Levels
                </span>
                <NuxtLink to="/activities/2" class="text-[15.375px] text-[#2d5a27] leading-[24px] font-normal">
                  Learn More →
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Prenatal Yoga Card -->
          <div class="bg-white rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] overflow-hidden h-[500px] flex flex-col">
            <div class="aspect-[478/256] bg-cover bg-center flex-shrink-0" style="background-image: url('/images/activities/prenatal-yoga.png')"></div>
            <div class="p-6 pt-8 flex flex-col flex-grow">
              <h3 class="text-[19.375px] font-bold text-gray-900 leading-[28px] mb-4">
                Prenatal Yoga
              </h3>
              <p class="text-[14.75px] text-gray-600 leading-[24px] mb-6 flex-grow">
                Motherhood Preparation
              </p>
              <div class="flex items-center justify-between mt-auto">
                <span class="text-[12.9062px] text-gray-500 leading-[20px]">
                  60 min • Intermediate
                </span>
                <NuxtLink to="/activities/7" class="text-[15.375px] text-[#2d5a27] leading-[24px] font-normal">
                  Learn More →
                </NuxtLink>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Activity } from '~/types'

const { data: activities, pending, error } = await useFetch<Activity[]>('/api/activities')
</script> 