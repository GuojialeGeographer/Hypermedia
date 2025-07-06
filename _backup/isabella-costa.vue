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
        <span class="text-[#111827] font-medium">Isabella Costa</span>
      </nav>
    </div>

    <!-- Teacher Content -->
    <div class="max-w-6xl mx-auto px-6 py-8">
      <!-- Header Section -->
      <div class="mb-8">
        <div class="flex items-center gap-3 mb-4">
          <h1 class="text-2xl font-bold text-[#111827] font-inter">Isabella Costa</h1>
          <div class="bg-[#2d5a271a] border border-[#2d5a27] rounded-lg px-3 py-1">
            <span class="text-[#2d5a27] font-semibold text-sm">Prenatal Specialist</span>
          </div>
        </div>
        <h2 class="text-lg font-medium text-[#374151] mb-2">Prenatal & Family Yoga</h2>
        <p class="text-[#4b5563] text-[15px]">Dedicated to supporting women through their pregnancy journey and early motherhood with gentle, nurturing practices.</p>
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Left Column: Teacher Image -->
        <div class="lg:col-span-2">
          <div class="w-full h-80 bg-cover bg-center rounded-xl shadow-sm border" 
               style="background-image: url('/images/team/teacher-figma-5.png')">
          </div>
        </div>

        <!-- Right Column: Teacher Details -->
        <div class="space-y-6">
          <!-- Quick Info Card -->
          <div class="bg-[#f9fafb] rounded-xl p-6 border">
            <h3 class="text-lg font-bold text-[#111827] mb-4 font-inter">Teacher Profile</h3>
            
            <div class="space-y-3">
              <div class="flex justify-between">
                <span class="text-[#4b5563] text-[15px] font-medium">Specialization:</span>
                <span class="text-[#111827] text-[15px]">Prenatal Yoga</span>
              </div>
              
              <div class="flex justify-between">
                <span class="text-[#4b5563] text-[15px] font-medium">Experience:</span>
                <span class="text-[#111827] text-[15px]">7+ Years</span>
              </div>
              
              <div class="flex justify-between">
                <span class="text-[#4b5563] text-[15px] font-medium">Certification:</span>
                <span class="text-[#111827] text-[15px]">RPYT, Lamaze Certified</span>
              </div>
              
              <div class="flex justify-between">
                <span class="text-[#4b5563] text-[15px] font-medium">Teaching Style:</span>
                <span class="text-[#111827] text-[15px]">Gentle & Nurturing</span>
              </div>
              
              <div class="flex justify-between">
                <span class="text-[#4b5563] text-[15px] font-medium">Languages:</span>
                <span class="text-[#111827] text-[15px]">English, Portuguese</span>
              </div>
            </div>
          </div>

          <!-- Book Class Button -->
          <button class="w-full bg-[#2d5a27] text-white py-3 rounded-lg text-[15.375px] font-medium hover:bg-[#25492a] transition-colors">
            Book a Class with Isabella
          </button>
        </div>
      </div>

      <!-- Description Section -->
      <div class="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Teaching Philosophy -->
        <div class="bg-[#f9fafb] rounded-xl p-6 border">
          <h3 class="text-lg font-bold text-[#111827] mb-4 font-inter">Teaching Philosophy</h3>
          <p class="text-[#4b5563] text-[15px] leading-relaxed">
            Isabella believes that pregnancy is a sacred time that deserves gentle, mindful support. Her approach 
            to prenatal yoga focuses on creating a safe space for expectant mothers to connect with their bodies, 
            their babies, and their inner strength. She emphasizes the importance of breath work, gentle movement, 
            and community support throughout the transformative journey of motherhood.
          </p>
        </div>

        <!-- Teaching Highlights -->
        <div class="bg-[#f9fafb] rounded-xl p-6 border">
          <h3 class="text-lg font-bold text-[#111827] mb-4 font-inter">What to Expect</h3>
          <ul class="text-[#4b5563] text-[15px] space-y-2">
            <li class="flex items-start">
              <span class="text-[#2d5a27] mr-2 font-medium">•</span>
              <span>Safe modifications for every trimester</span>
            </li>
            <li class="flex items-start">
              <span class="text-[#2d5a27] mr-2 font-medium">•</span>
              <span>Breathing techniques for labor preparation</span>
            </li>
            <li class="flex items-start">
              <span class="text-[#2d5a27] mr-2 font-medium">•</span>
              <span>Pelvic floor strengthening and recovery</span>
            </li>
            <li class="flex items-start">
              <span class="text-[#2d5a27] mr-2 font-medium">•</span>
              <span>Supportive community and partner involvement</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Other Team Members -->
      <div class="mt-12">
        <h3 class="text-xl font-bold text-[#111827] mb-6 text-center">Other Team Members</h3>
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
          <NuxtLink to="/teachers/ashley-lorenzo" class="group text-center">
            <div class="aspect-square bg-cover bg-center rounded-lg shadow-sm border transition-transform group-hover:scale-105" 
                 style="background-image: url('/images/team/ashley-lorenzo-figma.png')">
            </div>
            <p class="mt-2 text-sm font-medium text-[#4b5563] group-hover:text-[#2d5a27]">Ashley Lorenzo</p>
          </NuxtLink>
          
          <NuxtLink to="/teachers/liam-oconnell" class="group text-center">
            <div class="aspect-square bg-cover bg-center rounded-lg shadow-sm border transition-transform group-hover:scale-105" 
                 style="background-image: url('/images/team/teacher-figma-2.png')">
            </div>
            <p class="mt-2 text-sm font-medium text-[#4b5563] group-hover:text-[#2d5a27]">Liam O'Connell</p>
          </NuxtLink>
          
          <NuxtLink to="/teachers/seraphina-rossi" class="group text-center">
            <div class="aspect-square bg-cover bg-center rounded-lg shadow-sm border transition-transform group-hover:scale-105" 
                 style="background-image: url('/images/team/teacher-figma-3.png')">
            </div>
            <p class="mt-2 text-sm font-medium text-[#4b5563] group-hover:text-[#2d5a27]">Seraphina Rossi</p>
          </NuxtLink>
          
          <NuxtLink to="/teachers/kenji-tanaka" class="group text-center">
            <div class="aspect-square bg-cover bg-center rounded-lg shadow-sm border transition-transform group-hover:scale-105" 
                 style="background-image: url('/images/team/teacher-figma-4.png')">
            </div>
            <p class="mt-2 text-sm font-medium text-[#4b5563] group-hover:text-[#2d5a27]">Kenji Tanaka</p>
          </NuxtLink>
          
          <NuxtLink to="/teachers/sophia-chen" class="group text-center">
            <div class="aspect-square bg-cover bg-center rounded-lg shadow-sm border transition-transform group-hover:scale-105" 
                 style="background-image: url('/images/team/teacher-figma-1.png')">
            </div>
            <p class="mt-2 text-sm font-medium text-[#4b5563] group-hover:text-[#2d5a27]">Sophia Chen</p>
          </NuxtLink>
        </div>
      </div>
    </div>

    <LayoutTheFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Isabella Costa - Yoga Instructor',
  meta: [
    { name: 'description', content: 'Meet Isabella Costa, our Prenatal and Family Yoga specialist dedicated to supporting mothers through their journey.' }
  ]
})
</script> 