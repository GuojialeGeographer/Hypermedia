<template>
  <div class="bg-white w-[1920px] mx-auto relative font-inter" style="height: 2057px;">
    <LayoutTheHeader />

    <!-- Navigation Bar -->
    <div class="absolute left-[35px] top-[104px] text-[25px]">
      <NuxtLink to="/" class="text-[#4e7749] font-medium hover:underline">Home</NuxtLink>
      <span class="text-black"> / </span>
      <NuxtLink to="/team" class="text-[#4e7749] font-medium hover:underline">Team</NuxtLink>
      <span class="text-black"> / </span>
      <span class="text-black font-medium">Ashley Lorenzo</span>
    </div>
    
    <!-- Main Image -->
    <div 
      class="absolute left-[67px] top-[327px] h-[750px] w-[500px] bg-cover bg-center"
      style="background-image: url('/images/team/ashley-lorenzo-large.png');"
    ></div>

    <!-- Title -->
    <h1 class="absolute left-1/2 transform -translate-x-1/2 top-[200px] text-[48px] font-bold text-center w-[565px]" style="left: calc(50% + 282.5px - 322.5px);">
      Ashley Lorenzo
    </h1>

    <!-- About Section -->
    <div class="absolute left-[628px] top-[384px] w-[1184px] text-[24px] leading-[40px] space-y-6">
      <div>
        <p class="font-bold">ABOUT:</p>
        <p>
          Ashley Lorenzo is an experienced yoga instructor who started practicing yoga in 2009. In 2012, she obtained her yoga teacher certification in the United States and has since deepened her expertise through studies in India and Southeast Asia. She holds a 500-hour Yoga Alliance certification and specializes in Hatha Yoga, Vinyasa Yoga, and meditation techniques.
        </p>
      </div>
      <div>
        <p class="font-bold">Teaching Style:</p>
        <p>
          Ashley emphasizes proper alignment and breath control, encouraging students to explore their potential at a comfortable pace. Her classes are warm and therapeutic, making them ideal for beginners and those seeking mental and physical harmony. She advocates that yoga is not just an exercise but a lifestyle.
        </p>
      </div>
      <div>
        <p class="font-bold">Yoga Philosophy:</p>
        <p>
          Yoga has provided me with a sanctuary of peace amid a busy life. It is not just a physical practice but also a journey of inner healing and awareness. I aim to help my students incorporate yoga into their daily lives, making each practice a moment of self-discovery and rejuvenation.
        </p>
      </div>
      <div>
        <p class="font-bold">Course:</p>
        <NuxtLink to="/classes/gentle-flow-yoga" class="hover:underline">Gentle Flow Yoga</NuxtLink>
      </div>
    </div>
    
    <!-- Other Teachers Section -->
    <!-- Background -->
    <div class="absolute bg-[#d9d9d9] h-[451px] left-[45px] opacity-40 top-[1298px] w-[1798px]"></div>
    
    <!-- Title -->
    <h2 class="absolute left-1/2 transform -translate-x-1/2 top-[1196px] text-[40px] font-bold text-center" style="width: 575px;">
      Other teachers
    </h2>

    <!-- Teacher Images with precise absolute positioning -->
    <NuxtLink to="/teachers/liam-oconnell" class="absolute left-[126px] top-[1389px] group">
      <img src="/images/team/teacher-2.png" alt="Liam O'Connell" class="w-[194px] h-[269px] object-cover rounded-lg group-hover:scale-105 transition-transform" />
    </NuxtLink>
    <NuxtLink to="/teachers/seraphina-rossi" class="absolute left-[457px] top-[1381px] group">
      <img src="/images/team/teacher-3.png" alt="Seraphina Rossi" class="w-[230px] h-[269px] object-cover rounded-lg group-hover:scale-105 transition-transform" />
    </NuxtLink>
    <NuxtLink to="/teachers/kenji-tanaka" class="absolute left-[846px] top-[1389px] group">
      <img src="/images/team/teacher-4.png" alt="Kenji Tanaka" class="w-[196px] h-[269px] object-cover rounded-lg group-hover:scale-105 transition-transform" />
    </NuxtLink>
    <NuxtLink to="/teachers/isabella-costa" class="absolute left-[1180px] top-[1389px] group">
      <img src="/images/team/teacher-5.png" alt="Isabella Costa" class="w-[218px] h-[269px] object-cover rounded-lg group-hover:scale-105 transition-transform" />
    </NuxtLink>
    <NuxtLink to="/teachers/sophia-chen" class="absolute left-[1536px] top-[1381px] group">
      <img src="/images/team/teacher-6.png" alt="Sophia Chen" class="w-[216px] h-[277px] object-cover rounded-lg group-hover:scale-105 transition-transform" />
    </NuxtLink>

    <!-- Footer -->
    <div class="absolute top-[1792px] w-full">
      <LayoutTheFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Ashley Lorenzo - Yoga Instructor',
  meta: [
    { name: 'description', content: 'Meet Ashley Lorenzo, our experienced Gentle Flow Yoga and Meditation specialist.' }
  ]
})
</script>

<style scoped>
.font-inter {
  font-family: 'Inter', sans-serif;
}
</style> 