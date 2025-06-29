<template>
  <div class="bg-white min-h-screen">
    <LayoutTheHeader />
    
    <!-- Navigation Bar -->
    <div class="absolute left-[35px] top-[104px] text-[25px] text-center z-10">
      <div class="flex items-center space-x-2">
        <NuxtLink to="/Hypermedia/" class="font-medium text-[#4e7749] hover:underline">Home</NuxtLink>
        <span class="font-normal text-black">/</span>
        <NuxtLink to="/Hypermedia/team" class="font-medium text-[#4e7749] hover:underline">Team</NuxtLink>
        <span class="font-normal text-black">/</span>
        <span class="font-medium text-black">{{ teacher?.name }}</span>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-[1920px] mx-auto px-4 pt-32">
      <!-- Teacher Name Title -->
      <div class="text-center mb-16">
        <h1 class="text-[48px] font-bold text-black leading-[20px]">{{ teacher?.name }}</h1>
      </div>

      <!-- Teacher Profile Section -->
      <div class="flex gap-16 max-w-[1800px] mx-auto mb-32">
        <!-- Left Side - Teacher Image -->
        <div class="w-[500px] h-[750px] flex-shrink-0">
          <img 
            :src="teacher?.slug === 'ashley-lorenzo' ? '/images/team/ashley-lorenzo-large.png' : teacher?.image_url" 
            :alt="teacher?.name"
            class="w-full h-full object-cover bg-center"
          />
        </div>

        <!-- Right Side - Teacher Information -->
        <div class="flex-1 pt-8">
          <div class="text-[24px] text-black leading-[40px] space-y-6">
            <div>
              <p class="font-bold mb-2">ABOUT:</p>
              <p class="mb-4">
                {{ teacher?.name }} is an experienced yoga instructor who started practicing yoga in 2009. In 2012, she obtained her yoga teacher certification in the United States and has since deepened her expertise through studies in India and Southeast Asia. She holds a 500-hour Yoga Alliance certification and specializes in Hatha Yoga, Vinyasa Yoga, and meditation techniques.
              </p>
              <p class="mb-6">
                Her teaching integrates yoga postures, meditation, and breathwork, guiding students to achieve balance in body, mind, and spirit. She is currently a full-time instructor at Georgia Yoga Academy and excels in teaching Gentle Flow Yoga, meditation-based yoga, and personalized private sessions.
              </p>
            </div>

            <div>
              <p class="font-bold mb-2">Teaching Style:</p>
              <p class="mb-6">
                {{ teacher?.name }} emphasizes proper alignment and breath control, encouraging students to explore their potential at a comfortable pace. Her classes are warm and therapeutic, making them ideal for beginners and those seeking mental and physical harmony. She advocates that yoga is not just an exercise but a lifestyle.
              </p>
            </div>

            <div>
              <p class="font-bold mb-2">Yoga Philosophy:</p>
              <p class="mb-6">
                Yoga has provided me with a sanctuary of peace amid a busy life. It is not just a physical practice but also a journey of inner healing and awareness. I aim to help my students incorporate yoga into their daily lives, making each practice a moment of self-discovery and rejuvenation.
              </p>
            </div>

            <div>
              <p class="font-bold">Course: </p>
              <p class="leading-[40px]">{{ teacher?.specialization }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Other Teachers Section -->
      <div class="mb-20">
        <h2 class="text-[40px] font-bold text-black text-center mb-16 leading-[20px]">Other teachers</h2>
        
        <!-- Background gray area -->
        <div class="bg-[#d9d9d9] opacity-40 h-[520px] relative mb-8">
          <!-- Teacher images positioned absolutely within the gray area -->
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="flex gap-8 items-center">
              <div 
                v-for="otherTeacher in otherTeachers" 
                :key="otherTeacher.id"
                class="text-center"
              >
                <div class="cursor-pointer hover:scale-105 transition-transform mb-3">
                  <img 
                    :src="otherTeacher.image_url" 
                    :alt="otherTeacher.name"
                    class="w-[200px] h-[269px] object-cover"
                    @click="$router.push(`/Hypermedia/teachers/${otherTeacher.slug}`)"
                  />
                </div>
                <h3 
                  class="text-lg font-semibold text-black cursor-pointer hover:text-[#2d5a27] transition-colors"
                  @click="$router.push(`/Hypermedia/teachers/${otherTeacher.slug}`)"
                >
                  {{ otherTeacher.name }}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <LayoutTheFooter />
  </div>
</template>

<script setup>
// Get the teacher slug from the route
const route = useRoute()
const teacherSlug = String(route.params.slug)

// Fetch all teachers data
const { data: teachers } = await $fetch('/api/teachers')

// Find the current teacher by slug
const teacher = teachers.find(t => t.slug === teacherSlug)

// Get other teachers (excluding current one)
const otherTeachers = teachers.filter(t => t.slug !== teacherSlug)

// Handle case where teacher is not found
if (!teacher) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Teacher not found'
  })
}

// Set page meta
useHead({
  title: `${teacher.name} - Yoga Instructor | Yoga Studio`,
  meta: [
    {
      name: 'description',
      content: `Learn about ${teacher.name}, an experienced yoga instructor specializing in ${teacher.specialization}.`
    }
  ]
})
</script>

<style scoped>
/* Use Inter font family */
* {
  font-family: 'Inter', sans-serif;
}

/* Ensure proper text rendering */
p {
  margin-bottom: 0;
}
</style> 