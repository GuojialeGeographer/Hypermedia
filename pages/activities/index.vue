<template>
  <div class="bg-white">
    <LayoutTheHeader />
    
    <!-- 面包屑导航 -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
      <nav class="flex items-center text-lg sm:text-xl md:text-2xl space-x-2">
        <NuxtLink to="/" class="text-[#4e7749] font-medium">Home</NuxtLink>
        <span class="text-gray-500">/</span>
        <span class="text-gray-800 font-medium">Activities</span>
      </nav>
    </div>

    <!-- 页面标题 -->
    <div class="max-w-7xl mx-auto text-center mt-8 mb-12 sm:mb-16">
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-black">Activity Arrangement</h1>
    </div>

    <!-- 活动安排网格 -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-12">
      <!-- Monday -->
      <div class="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8">
        <div class="w-full lg:w-3/5 bg-cover bg-center rounded-lg min-h-[400px]" style="background-image: url('/images/activities/activity-monday.png')"></div>
        <div class="bg-[#fafaf5] w-full lg:w-2/5 rounded-2xl p-6 sm:p-8 relative">
          <NuxtLink to="/login" class="absolute top-4 right-4 bg-white border border-[#4e7749] rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors">
            <span class="text-[#2d5a27] font-bold text-base sm:text-lg">Free Trial</span>
          </NuxtLink>
          
          <div class="mt-12">
            <NuxtLink to="/activities/monday-mindfulness" class="hover:opacity-80 transition-opacity">
              <h3 class="text-[#336666] font-semibold text-xl mb-1 text-center hover:underline">Monday Mindfulness</h3>
            </NuxtLink>
            <h4 class="text-[#4d4d4d] text-2xl font-normal mb-1 text-center">Awakening the Mind</h4>
            <p class="text-[#666666] text-lg mb-6 text-center">Yoga & Meditation Discovery Class</p>
            
            <div class="w-full max-w-md h-px bg-[rgba(128,178,178,0.5)] mb-6 mx-auto"></div>
            
            <div class="text-center mb-4">
              <p class="text-[#4d4d4d] text-base leading-relaxed">
                <span class="font-semibold">👥 Suitable For:</span><br/>
                Beginners | Office Workers | Stress Relief Seekers
              </p>
            </div>
            
            <p class="text-[#4d4d4d] text-base mb-6 text-center">🧘‍♀️ Instructor: Ashley Lorenzo</p>
            
            <h5 class="text-[#336666] font-semibold text-lg mb-3 text-center">✨ CLASS HIGHLIGHTS</h5>
            <ul class="text-[#4d4d4d] text-base space-y-2 text-left max-w-md mx-auto">
              <li>• Guided breathwork & mindfulness meditation</li>
              <li>• Gentle Hatha sequences to awaken and energize the body</li>
              <li>• Focus on relaxation and mental clarity</li>
              <li>• Present-moment awareness practices</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Tuesday -->
      <div class="flex flex-col lg:flex-row-reverse items-stretch gap-6 lg:gap-8">
        <div class="w-full lg:w-3/5 bg-cover bg-center rounded-lg min-h-[400px]" style="background-image: url('/images/activities/activity-tuesday.png')"></div>
        <div class="bg-[#fafaf5] w-full lg:w-2/5 rounded-2xl p-6 sm:p-8 relative">
          <NuxtLink to="/login" class="absolute top-4 right-4 bg-white border border-[#4e7749] rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors">
            <span class="text-[#2d5a27] font-bold text-base sm:text-lg">Free Trial</span>
          </NuxtLink>
          
          <div class="mt-12">
            <NuxtLink to="/activities/tuesday-therapy" class="hover:opacity-80 transition-opacity">
              <h3 class="text-[#336666] font-semibold text-xl mb-1 text-center hover:underline">Tuesday Therapy</h3>
            </NuxtLink>
            <h4 class="text-[#4d4d4d] text-2xl font-normal mb-1 text-center">Shoulder & Neck Healing</h4>
            <p class="text-[#666666] text-lg mb-6 text-center">Therapeutic Yoga Masterclass</p>
            
            <div class="w-full max-w-md h-px bg-[rgba(128,178,178,0.5)] mb-6 mx-auto"></div>
            
            <div class="text-center mb-4">
              <p class="text-[#4d4d4d] text-base leading-relaxed">
                <span class="font-semibold">👥 Suitable For:</span><br/>
                Office workers | Neck/shoulder discomfort | Yoga therapy students
              </p>
            </div>
            
            <p class="text-[#4d4d4d] text-base mb-6 text-center">🧘‍♀️ Instructor: Jivana Heyman</p>
            
            <h5 class="text-[#336666] font-semibold text-lg mb-3 text-center">✨ CLASS HIGHLIGHTS</h5>
            <ul class="text-[#4d4d4d] text-base space-y-2 text-left max-w-md mx-auto">
              <li>• Yoga props and alignment techniques for safe recovery</li>
              <li>• Take-home techniques for daily tension relief</li>
              <li>• Meditative poses for shoulder and neck release</li>
              <li>• Restorative relaxation techniques</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Wednesday -->
       <div class="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8">
        <div class="w-full lg:w-3/5 bg-cover bg-center rounded-lg min-h-[400px]" style="background-image: url('/images/activities/activity-wednesday.png')"></div>
        <div class="bg-[#fafaf5] w-full lg:w-2/5 rounded-2xl p-6 sm:p-8 relative">
          <NuxtLink to="/login" class="absolute top-4 right-4 bg-white border border-[#4e7749] rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors">
            <span class="text-[#2d5a27] font-bold text-base sm:text-lg">Free Trial</span>
          </NuxtLink>
          
          <div class="mt-12">
            <NuxtLink to="/activities/wednesday-fusion" class="hover:opacity-80 transition-opacity">
              <h3 class="text-[#336666] font-semibold text-xl mb-1 text-center hover:underline">Wednesday Fusion</h3>
            </NuxtLink>
            <h4 class="text-[#4d4d4d] text-2xl font-normal mb-1 text-center">Balance Between Stillness & Motion</h4>
            <p class="text-[#666666] text-lg mb-6 text-center">Fusion Flow</p>
            
            <div class="w-full max-w-md h-px bg-[rgba(128,178,178,0.5)] mb-6 mx-auto"></div>
            
            <div class="text-center mb-4">
              <p class="text-[#4d4d4d] text-base leading-relaxed">
                <span class="font-semibold">👥 Suitable For:</span><br/>
                Intermediate practitioners | Strength & flexibility seekers
              </p>
            </div>
            
            <p class="text-[#4d4d4d] text-base mb-6 text-center">🧘‍♀️ Instructor: Georgia Weibel</p>
            
            <h5 class="text-[#336666] font-semibold text-lg mb-3 text-center">✨ CLASS HIGHLIGHTS</h5>
            <ul class="text-[#4d4d4d] text-base space-y-2 text-left max-w-md mx-auto">
              <li>• A blend of Yin and Yang yoga: dynamic flows plus deep holds</li>
              <li>• Strengthens endurance while encouraging deep tissue release</li>
              <li>• Ideal for body-mind balance and injury prevention</li>
              <li>• Combines active practice with restorative elements</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Thursday -->
      <div class="flex flex-col lg:flex-row-reverse items-stretch gap-6 lg:gap-8">
        <div class="w-full lg:w-3/5 bg-cover bg-center rounded-lg min-h-[400px]" style="background-image: url('/images/activities/activity-thursday.png')"></div>
        <div class="bg-[#fafaf5] w-full lg:w-2/5 rounded-2xl p-6 sm:p-8 relative">
          <NuxtLink to="/login" class="absolute top-4 right-4 bg-white border border-[#4e7749] rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors">
            <span class="text-[#2d5a27] font-bold text-base sm:text-lg">Free Trial</span>
          </NuxtLink>
          
          <div class="mt-12">
            <NuxtLink to="/activities/thursday-specialty" class="hover:opacity-80 transition-opacity">
              <h3 class="text-[#336666] font-semibold text-xl mb-1 text-center hover:underline">Thursday Specialty</h3>
            </NuxtLink>
            <h4 class="text-[#4d4d4d] text-2xl font-normal mb-1 text-center">Prenatal Yoga Private Experience</h4>
            <p class="text-[#666666] text-lg mb-6 text-center">Specialty Class</p>
            
            <div class="w-full max-w-md h-px bg-[rgba(128,178,178,0.5)] mb-6 mx-auto"></div>
            
            <div class="text-center mb-4">
              <p class="text-[#4d4d4d] text-base leading-relaxed">
                <span class="font-semibold">👥 Suitable For:</span><br/>
                Expectant mothers | Postnatal recovery
              </p>
            </div>
            
            <p class="text-[#4d4d4d] text-base mb-6 text-center">🧘‍♀️ Instructor: Tamika Caston-Miller</p>
            
            <h5 class="text-[#336666] font-semibold text-lg mb-3 text-center">✨ CLASS HIGHLIGHTS</h5>
            <ul class="text-[#4d4d4d] text-base space-y-2 text-left max-w-md mx-auto">
              <li>• Safe movements tailored for pregnancy and postpartum</li>
              <li>• Focus on pelvic floor recovery and breath awareness</li>
              <li>• Emotional grounding techniques for motherhood</li>
              <li>• Personalized guidance in a supportive environment</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Friday -->
      <div class="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8">
        <div class="w-full lg:w-3/5 bg-cover bg-center rounded-lg min-h-[400px]" style="background-image: url('/images/activities/activity-friday.png')"></div>
        <div class="bg-[#fafaf5] w-full lg:w-2/5 rounded-2xl p-6 sm:p-8 relative">
          <NuxtLink to="/login" class="absolute top-4 right-4 bg-white border border-[#4e7749] rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors">
            <span class="text-[#2d5a27] font-bold text-base sm:text-lg">Free Trial</span>
          </NuxtLink>
          
          <div class="mt-12">
            <NuxtLink to="/activities/friday-masterclass" class="hover:opacity-80 transition-opacity">
              <h3 class="text-[#336666] font-semibold text-xl mb-1 text-center hover:underline">Friday Masterclass</h3>
            </NuxtLink>
            <h4 class="text-[#4d4d4d] text-2xl font-normal mb-1 text-center">Introduction to Ashtanga Fundamentals</h4>
            <p class="text-[#666666] text-lg mb-6 text-center">Advanced Practice</p>
            
            <div class="w-full max-w-md h-px bg-[rgba(128,178,178,0.5)] mb-6 mx-auto"></div>
            
            <div class="text-center mb-4">
              <p class="text-[#4d4d4d] text-base leading-relaxed">
                <span class="font-semibold">👥 Suitable For:</span><br/>
                Intermediate to advanced students | Physical challenge seekers
              </p>
            </div>
            
            <p class="text-[#4d4d4d] text-base mb-6 text-center">🧘‍♀️ Instructor: Vytas Baskauskas</p>
            
            <h5 class="text-[#336666] font-semibold text-lg mb-3 text-center">✨ CLASS HIGHLIGHTS</h5>
            <ul class="text-[#4d4d4d] text-base space-y-2 text-left max-w-md mx-auto">
              <li>• Introduction to the Primary Series of Ashtanga Yoga</li>
              <li>• Synchronized breath, movement, and gaze (Drishti)</li>
              <li>• Builds strength, stamina, and mental focus</li>
              <li>• Traditional approach to dynamic yoga practice</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Saturday -->
      <div class="flex flex-col lg:flex-row-reverse items-stretch gap-6 lg:gap-8">
        <div class="w-full lg:w-3/5 bg-cover bg-center rounded-lg min-h-[400px]" style="background-image: url('/images/activities/activity-saturday.png')"></div>
        <div class="bg-[#fafaf5] w-full lg:w-2/5 rounded-2xl p-6 sm:p-8 relative">
          <NuxtLink to="/login" class="absolute top-4 right-4 bg-white border border-[#4e7749] rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors">
            <span class="text-[#2d5a27] font-bold text-base sm:text-lg">Free Trial</span>
          </NuxtLink>
          
          <div class="mt-12">
            <NuxtLink to="/activities/saturday-family" class="hover:opacity-80 transition-opacity">
              <h3 class="text-[#336666] font-semibold text-xl mb-1 text-center hover:underline">Saturday Family Yoga</h3>
            </NuxtLink>
            <h4 class="text-[#4d4d4d] text-2xl font-normal mb-1 text-center">Joyful Bonding & Movement</h4>
            
            <div class="w-full max-w-md h-px bg-[rgba(128,178,178,0.5)] mb-6 mx-auto"></div>
            
            <div class="text-center mb-4">
              <p class="text-[#4d4d4d] text-base leading-relaxed">
                <span class="font-semibold">👥 Suitable For:</span><br/>
                Parents & kids (ages 4-10) | Beginner-friendly
              </p>
            </div>
            
            <p class="text-[#4d4d4d] text-base mb-6 text-center">🧘‍♀️ Instructor: Emily Carter</p>
            
            <h5 class="text-[#336666] font-semibold text-lg mb-3 text-center">✨ CLASS HIGHLIGHTS</h5>
            <ul class="text-[#4d4d4d] text-base space-y-2 text-left max-w-md mx-auto">
              <li>• Fun and interactive yoga sequences for parents and children</li>
              <li>• Breathwork and mindfulness games for kids</li>
              <li>• Gentle partner yoga to enhance bonding</li>
              <li>• Introduction to relaxation techniques for families</li>
            </ul>
          </div>
        </div>
      </div>
      
      <!-- Sunday -->
      <div class="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8">
        <div class="w-full lg:w-3/5 bg-cover bg-center rounded-lg min-h-[400px]" style="background-image: url('/images/activities/activity-sunday.png')"></div>
        <div class="bg-[#fafaf5] w-full lg:w-2/5 rounded-2xl p-6 sm:p-8 relative">
          <NuxtLink to="/login" class="absolute top-4 right-4 bg-white border border-[#4e7749] rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors">
            <span class="text-[#2d5a27] font-bold text-base sm:text-lg">Free Trial</span>
          </NuxtLink>
          
          <div class="mt-12">
            <NuxtLink to="/activities/sunday-flow" class="hover:opacity-80 transition-opacity">
              <h3 class="text-[#336666] font-semibold text-xl mb-1 text-center hover:underline">Sunday Slow Flow</h3>
            </NuxtLink>
            <h4 class="text-[#4d4d4d] text-2xl font-normal mb-1 text-center">Deep Relaxation & Gentle Stretching</h4>
            <p class="text-[#666666] text-lg mb-6 text-center">Restorative Yoga</p>
            
            <div class="w-full max-w-md h-px bg-[rgba(128,178,178,0.5)] mb-6 mx-auto"></div>
            
            <div class="text-center mb-4">
              <p class="text-[#4d4d4d] text-base leading-relaxed">
                <span class="font-semibold">👥 Suitable For:</span><br/>
                All levels | Stress reduction seekers | Deep relaxation lovers
              </p>
            </div>
            
            <p class="text-[#4d4d4d] text-base mb-6 text-center">🧘‍♀️ Instructor: Isabella Costa</p>
            
            <h5 class="text-[#336666] font-semibold text-lg mb-3 text-center">✨ CLASS HIGHLIGHTS</h5>
            <ul class="text-[#4d4d4d] text-base space-y-2 text-left max-w-md mx-auto">
              <li>• Gentle, slow-paced movements to release tension</li>
              <li>• Use of props (bolsters, blankets) for full support</li>
              <li>• Guided meditation for profound relaxation</li>
              <li>• Perfect for winding down and preparing for the week ahead</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Special Event -->
      <div class="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8">
        <div class="w-full lg:w-3/5 bg-cover bg-center rounded-lg min-h-[400px]" style="background-image: url('/images/activities/activity-special.png')"></div>
        <div class="bg-[#fafaf5] w-full lg:w-2/5 rounded-2xl p-6 sm:p-8 relative">
          <NuxtLink to="/login" class="absolute top-4 right-4 bg-white border border-[#4e7749] rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors">
            <span class="text-[#2d5a27] font-bold text-base sm:text-lg">Free Trial</span>
          </NuxtLink>
          
          <div class="mt-12">
            <NuxtLink to="/activities/special-event" class="hover:opacity-80 transition-opacity">
              <h3 class="text-[#336666] font-semibold text-xl mb-1 text-center hover:underline">Special Event</h3>
            </NuxtLink>
            <h4 class="text-[#4d4d4d] text-2xl font-normal mb-1 text-center">Community Outdoor Yoga</h4>
            <p class="text-[#666666] text-lg mb-6 text-center">All-levels welcome!</p>
            
            <div class="w-full max-w-md h-px bg-[rgba(128,178,178,0.5)] mb-6 mx-auto"></div>
            
            <div class="text-center mb-4">
              <p class="text-[#4d4d4d] text-base leading-relaxed">
                <span class="font-semibold">👥 Suitable For:</span><br/>
                Everyone! | Community lovers | Nature enthusiasts
              </p>
            </div>
            
            <p class="text-[#4d4d4d] text-base mb-6 text-center">🧘‍♀️ Instructor: Various</p>
            
            <h5 class="text-[#336666] font-semibold text-lg mb-3 text-center">✨ CLASS HIGHLIGHTS</h5>
            <ul class="text-[#4d4d4d] text-base space-y-2 text-left max-w-md mx-auto">
              <li>• Connect with nature and the community through yoga</li>
              <li>• Energizing flow suitable for all experience levels</li>
              <li>• A beautiful outdoor setting to enhance your practice</li>
              <li>• A great way to meet fellow yoga enthusiasts</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <LayoutTheFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Activity Arrangement - Yoga Studio',
  meta: [
    { name: 'description', content: 'Explore our weekly schedule of yoga classes and special events. Find the perfect session for you, from Monday Mindfulness to Sunday Slow Flow.' }
  ]
})
</script>

<style scoped>
/* Scoped styles can be added here if necessary */
</style>