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
        <span class="text-[#111827] font-medium">Kenji Tanaka</span>
      </nav>
    </div>

    <!-- Teacher Content -->
    <div class="max-w-6xl mx-auto px-6 py-8">
      <!-- Header Section -->
      <div class="mb-8">
        <div class="flex items-center gap-3 mb-4">
          <h1 class="text-2xl font-bold text-[#111827] font-inter">Kenji Tanaka</h1>
          <div class="bg-[#2d5a271a] border border-[#2d5a27] rounded-lg px-3 py-1">
            <span class="text-[#2d5a27] font-semibold text-sm">Ashtanga Master</span>
          </div>
        </div>
        <h2 class="text-lg font-medium text-[#374151] mb-2">Traditional Ashtanga & Power Yoga</h2>
        <p class="text-[#4b5563] text-[15px]">Brings authentic traditional practice with a focus on discipline, strength, and spiritual growth.</p>
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Left Column: Teacher Image -->
        <div class="lg:col-span-2">
          <div class="w-full h-80 bg-cover bg-center rounded-xl shadow-sm border" 
               style="background-image: url('/images/team/teacher-figma-4.png')">
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
                <span class="text-[#111827] text-[15px]">Ashtanga Yoga</span>
              </div>
              
              <div class="flex justify-between">
                <span class="text-[#4b5563] text-[15px] font-medium">Experience:</span>
                <span class="text-[#111827] text-[15px]">12+ Years</span>
              </div>
              
              <div class="flex justify-between">
                <span class="text-[#4b5563] text-[15px] font-medium">Certification:</span>
                <span class="text-[#111827] text-[15px]">Authorized Level 2</span>
              </div>
              
              <div class="flex justify-between">
                <span class="text-[#4b5563] text-[15px] font-medium">Teaching Style:</span>
                <span class="text-[#111827] text-[15px]">Traditional & Disciplined</span>
              </div>
              
              <div class="flex justify-between">
                <span class="text-[#4b5563] text-[15px] font-medium">Languages:</span>
                <span class="text-[#111827] text-[15px]">English, Japanese</span>
              </div>
            </div>
          </div>

          <!-- Book Class Button -->
          <button class="w-full bg-[#2d5a27] text-white py-3 rounded-lg text-[15.375px] font-medium hover:bg-[#25492a] transition-colors">
            Book a Class with Kenji
          </button>
        </div>
      </div>

      <!-- Description Section -->
      <div class="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Teaching Philosophy -->
        <div class="bg-[#f9fafb] rounded-xl p-6 border">
          <h3 class="text-lg font-bold text-[#111827] mb-4 font-inter">Teaching Philosophy</h3>
          <p class="text-[#4b5563] text-[15px] leading-relaxed">
            Kenji's approach to yoga is rooted in the traditional Ashtanga method, emphasizing the importance 
            of consistent practice, breath awareness, and inner discipline. He believes that through dedicated 
            practice, students can develop not only physical strength and flexibility but also mental clarity 
            and spiritual insight. His classes honor the lineage while making the practice accessible to modern practitioners.
          </p>
        </div>

        <!-- Teaching Highlights -->
        <div class="bg-[#f9fafb] rounded-xl p-6 border">
          <h3 class="text-lg font-bold text-[#111827] mb-4 font-inter">What to Expect</h3>
          <ul class="text-[#4b5563] text-[15px] space-y-2">
            <li class="flex items-start">
              <span class="text-[#2d5a27] mr-2 font-medium">•</span>
              <span>Traditional Ashtanga Primary Series instruction</span>
            </li>
            <li class="flex items-start">
              <span class="text-[#2d5a27] mr-2 font-medium">•</span>
              <span>Focus on Ujjayi breathing and bandhas</span>
            </li>
            <li class="flex items-start">
              <span class="text-[#2d5a27] mr-2 font-medium">•</span>
              <span>Precise alignment and adjustment techniques</span>
            </li>
            <li class="flex items-start">
              <span class="text-[#2d5a27] mr-2 font-medium">•</span>
              <span>Philosophy and meditation integration</span>
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
          
          <NuxtLink to="/teachers/isabella-costa" class="group text-center">
            <div class="aspect-square bg-cover bg-center rounded-lg shadow-sm border transition-transform group-hover:scale-105" 
                 style="background-image: url('/images/team/teacher-figma-5.png')">
            </div>
            <p class="mt-2 text-sm font-medium text-[#4b5563] group-hover:text-[#2d5a27]">Isabella Costa</p>
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
  title: 'Kenji Tanaka - Yoga Instructor',
  meta: [
    { name: 'description', content: 'Meet Kenji Tanaka, our Traditional Ashtanga and Power Yoga master with 12+ years of authentic practice experience.' }
  ]
})
</script> 