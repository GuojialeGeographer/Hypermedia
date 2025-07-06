<template>
  <div class="bg-white">
    <LayoutTheHeader />
    
    <!-- 面包屑导航 -->
    <div class="max-w-[1920px] mx-auto px-9 pt-6">
      <nav class="flex items-center text-[25px] space-x-2">
        <NuxtLink to="/" class="text-[#4e7749] font-medium">Home</NuxtLink>
        <span class="text-black font-normal">/</span>
        <span class="text-black font-medium">Activities</span>
      </nav>
    </div>

    <!-- 页面标题 -->
    <div class="max-w-[1920px] mx-auto text-center mt-8 mb-16">
      <h1 class="text-[48px] font-bold text-black leading-[20px]">Activity Arrangement</h1>
    </div>

    <!-- 活动安排网格 -->
    <div class="max-w-[1920px] mx-auto px-6 pb-16">
      <!-- Monday -->
      <div class="flex items-stretch justify-center mb-12 gap-6">
        <div class="w-[1058px] bg-cover bg-center rounded-none flex-shrink-0" style="background-image: url('/images/activities/activity-monday.png')"></div>
        <div class="bg-[#fafaf5] w-[800px] rounded-2xl p-8 relative flex-shrink-0">
          <!-- Free Trial Badge -->
          <NuxtLink to="/login" class="absolute top-3 right-12 bg-white border border-[#4e7749] rounded-[10px] px-6 py-3 hover:bg-gray-100 transition-colors">
            <span class="text-[#2d5a27] font-bold text-[24px]">Free Trial</span>
          </NuxtLink>
          
          <div class="mt-16">
            <NuxtLink to="/activities/monday-mindfulness" class="hover:opacity-80 transition-opacity">
              <h3 class="text-[#336666] font-semibold text-[22px] mb-2 text-center hover:underline cursor-pointer">Monday Mindfulness</h3>
            </NuxtLink>
            <h4 class="text-[#4d4d4d] text-[28px] font-normal mb-2 text-center">Awakening the Mind</h4>
            <p class="text-[#666666] text-[22px] mb-8 text-center">Yoga & Meditation Discovery Class</p>
            
            <!-- Divider -->
            <div class="w-[600px] h-px bg-[rgba(128,178,178,0.5)] mb-6 mx-auto"></div>
            
            <div class="text-center mb-4">
              <p class="text-[#4d4d4d] text-[22px] leading-[normal]">
                👥 Suitable For:<br/>
                Beginners | Office Workers | Stress Relief Seekers
              </p>
            </div>
            
            <p class="text-[#4d4d4d] text-[22px] mb-6 text-center">🧘‍♀️ Instructor: Ashley Lorenzo</p>
            
            <h5 class="text-[#336666] font-semibold text-[22px] mb-4 text-center">✨ CLASS HIGHLIGHTS</h5>
            <ul class="text-[#4d4d4d] text-[22px] space-y-2 text-left pl-20">
              <li>• Guided breathwork & mindfulness meditation</li>
              <li>• Gentle Hatha sequences to awaken and energize the body</li>
              <li>• Focus on relaxation and mental clarity</li>
              <li>• Present-moment awareness practices</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Tuesday -->
      <div class="flex items-stretch justify-center mb-12 gap-6 flex-row-reverse">
        <div class="w-[1058px] bg-cover bg-center rounded-none flex-shrink-0" style="background-image: url('/images/activities/activity-tuesday.png')"></div>
        <div class="bg-[#fafaf5] w-[800px] rounded-2xl p-8 relative flex-shrink-0">
          <!-- Free Trial Badge -->
          <NuxtLink to="/login" class="absolute top-0 right-12 bg-white border border-[#4e7749] rounded-[10px] px-6 py-3 hover:bg-gray-100 transition-colors">
            <span class="text-[#2d5a27] font-bold text-[24px]">Free Trial</span>
          </NuxtLink>
          
          <div class="mt-16">
            <NuxtLink to="/activities/tuesday-therapy" class="hover:opacity-80 transition-opacity">
              <h3 class="text-[#336666] font-semibold text-[22px] mb-2 text-center hover:underline cursor-pointer">Tuesday Therapy</h3>
            </NuxtLink>
            <h4 class="text-[#4d4d4d] text-[28px] font-normal mb-2 text-center">Shoulder & Neck Healing</h4>
            <p class="text-[#666666] text-[22px] mb-8 text-center">Therapeutic Yoga Masterclass</p>
            
            <!-- Divider -->
            <div class="w-[600px] h-px bg-[rgba(128,178,178,0.5)] mb-6 mx-auto"></div>
            
            <div class="text-center mb-4">
              <p class="text-[#4d4d4d] text-[22px] leading-[normal]">
                👥 Suitable For:<br/>
                Office workers | Neck/shoulder discomfort | Yoga therapy students
              </p>
            </div>
            
            <p class="text-[#4d4d4d] text-[22px] mb-6 text-center">🧘‍♀️ Instructor: Jivana Heyman</p>
            
            <h5 class="text-[#336666] font-semibold text-[22px] mb-4 text-center">✨ CLASS HIGHLIGHTS</h5>
            <ul class="text-[#4d4d4d] text-[22px] space-y-2 text-left pl-20">
              <li>• Yoga props and alignment techniques for safe recovery</li>
              <li>• Take-home techniques for daily tension relief</li>
              <li>• Meditative poses for shoulder and neck release</li>
              <li>• Restorative relaxation techniques</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Wednesday -->
      <div class="flex items-stretch justify-center mb-12 gap-6">
        <div class="w-[1058px] bg-cover bg-center rounded-none flex-shrink-0" style="background-image: url('/images/activities/activity-wednesday.png')"></div>
        <div class="bg-[#fafaf5] w-[802px] rounded-2xl p-8 relative flex-shrink-0">
          <!-- Free Trial Badge -->
          <NuxtLink to="/login" class="absolute top-2 right-12 bg-white border border-[#4e7749] rounded-[10px] px-6 py-3 hover:bg-gray-100 transition-colors">
            <span class="text-[#2d5a27] font-bold text-[24px]">Free Trial</span>
          </NuxtLink>
          
          <div class="mt-16">
            <NuxtLink to="/activities/wednesday-fusion" class="hover:opacity-80 transition-opacity">
              <h3 class="text-[#336666] font-semibold text-[22px] mb-2 text-center hover:underline cursor-pointer">Wednesday Fusion</h3>
            </NuxtLink>
            <h4 class="text-[#4d4d4d] text-[28px] font-normal mb-2 text-center">Balance Between Stillness & Motion</h4>
            <p class="text-[#666666] text-[22px] mb-8 text-center">Fusion Flow</p>
            
            <!-- Divider -->
            <div class="w-[600px] h-px bg-[rgba(128,178,178,0.5)] mb-6 mx-auto"></div>
            
            <div class="text-center mb-4">
              <p class="text-[#4d4d4d] text-[22px] leading-[normal]">
                👥 Suitable For:<br/>
                Intermediate practitioners | Strength & flexibility seekers
              </p>
            </div>
            
            <p class="text-[#4d4d4d] text-[22px] mb-6 text-center">🧘‍♀️ Instructor: Georgia Weibel</p>
            
            <h5 class="text-[#336666] font-semibold text-[22px] mb-4 text-center">✨ CLASS HIGHLIGHTS</h5>
            <ul class="text-[#4d4d4d] text-[22px] space-y-2 text-left pl-16">
              <li>• A blend of Yin and Yang yoga: dynamic flows plus deep holds</li>
              <li>• Strengthens endurance while encouraging deep tissue release</li>
              <li>• Ideal for body-mind balance and injury prevention</li>
              <li>• Combines active practice with restorative elements</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Thursday -->
      <div class="flex items-stretch justify-center mb-12 gap-6 flex-row-reverse">
        <div class="w-[1054px] bg-cover bg-center rounded-none flex-shrink-0" style="background-image: url('/images/activities/activity-thursday.png')"></div>
        <div class="bg-[#fafaf5] w-[786px] rounded-2xl p-8 relative flex-shrink-0">
          <!-- Free Trial Badge -->
          <NuxtLink to="/login" class="absolute top-2 right-12 bg-white border border-[#4e7749] rounded-[10px] px-6 py-3 hover:bg-gray-100 transition-colors">
            <span class="text-[#2d5a27] font-bold text-[24px]">Free Trial</span>
          </NuxtLink>
          
          <div class="mt-16">
            <NuxtLink to="/activities/thursday-specialty" class="hover:opacity-80 transition-opacity">
              <h3 class="text-[#336666] font-semibold text-[22px] mb-2 text-center hover:underline cursor-pointer">Thursday Specialty</h3>
            </NuxtLink>
            <h4 class="text-[#4d4d4d] text-[28px] font-normal mb-2 text-center">Prenatal Yoga Private Experience</h4>
            <p class="text-[#666666] text-[22px] mb-8 text-center">Specialty Class</p>
            
            <!-- Divider -->
            <div class="w-[600px] h-px bg-[rgba(128,178,178,0.5)] mb-6 mx-auto"></div>
            
            <div class="text-center mb-4">
              <p class="text-[#4d4d4d] text-[22px] leading-[normal]">
                👥 Suitable For:<br/>
                Expectant mothers | Postnatal recovery
              </p>
            </div>
            
            <p class="text-[#4d4d4d] text-[22px] mb-6 text-center">🧘‍♀️ Instructor: Tamika Caston-Miller</p>
            
            <h5 class="text-[#336666] font-semibold text-[22px] mb-4 text-center">✨ CLASS HIGHLIGHTS</h5>
            <ul class="text-[#4d4d4d] text-[22px] space-y-2 text-left pl-16">
              <li>• Safe movements tailored for pregnancy and postpartum</li>
              <li>• Focus on pelvic floor recovery and breath awareness</li>
              <li>• Emotional grounding techniques for motherhood</li>
              <li>• Personalized guidance in a supportive environment</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Friday -->
      <div class="flex items-stretch justify-center mb-12 gap-6">
        <div class="w-[1065px] bg-cover bg-center rounded-none flex-shrink-0" style="background-image: url('/images/activities/activity-friday.png')"></div>
        <div class="bg-[#fafaf5] w-[800px] rounded-2xl p-8 relative flex-shrink-0">
          <!-- Free Trial Badge -->
          <NuxtLink to="/login" class="absolute top-2 right-12 bg-white border border-[#4e7749] rounded-[10px] px-6 py-3 hover:bg-gray-100 transition-colors">
            <span class="text-[#2d5a27] font-bold text-[24px]">Free Trial</span>
          </NuxtLink>
          
          <div class="mt-16">
            <NuxtLink to="/activities/friday-masterclass" class="hover:opacity-80 transition-opacity">
              <h3 class="text-[#336666] font-semibold text-[22px] mb-2 text-center hover:underline cursor-pointer">Friday Masterclass</h3>
            </NuxtLink>
            <h4 class="text-[#4d4d4d] text-[28px] font-normal mb-2 text-center">Introduction to Ashtanga Fundamentals</h4>
            <p class="text-[#666666] text-[22px] mb-8 text-center">Advanced Practice</p>
            
            <!-- Divider -->
            <div class="w-[600px] h-px bg-[rgba(128,178,178,0.5)] mb-6 mx-auto"></div>
            
            <div class="text-center mb-4">
              <p class="text-[#4d4d4d] text-[21px] leading-[normal]">
                👥 Suitable For:<br/>
                Intermediate to advanced students | Physical challenge seekers
              </p>
            </div>
            
            <p class="text-[#4d4d4d] text-[22px] mb-6 text-center">🧘‍♀️ Instructor: Vytas Baskauskas</p>
            
            <h5 class="text-[#336666] font-semibold text-[22px] mb-4 text-center">✨ CLASS HIGHLIGHTS</h5>
            <ul class="text-[#4d4d4d] text-[22px] space-y-2 text-left pl-16">
              <li>• Introduction to the Primary Series of Ashtanga Yoga</li>
              <li>• Synchronized breath, movement, and gaze (Drishti)</li>
              <li>• Builds strength, stamina, and mental focus</li>
              <li>• Traditional approach to dynamic yoga practice</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Saturday -->
      <div class="flex items-stretch justify-center mb-12 gap-6 flex-row-reverse">
        <div class="w-[1058px] bg-cover bg-center rounded-none flex-shrink-0" style="background-image: url('/images/activities/activity-saturday.png')"></div>
        <div class="bg-[#fafaf5] w-[800px] rounded-2xl p-8 relative flex-shrink-0">
          <!-- Free Trial Badge -->
          <NuxtLink to="/login" class="absolute top-2 right-12 bg-white border border-[#4e7749] rounded-[10px] px-6 py-3 hover:bg-gray-100 transition-colors">
            <span class="text-[#2d5a27] font-bold text-[24px]">Free Trial</span>
          </NuxtLink>
          
          <div class="mt-16">
            <NuxtLink to="/activities/saturday-family" class="hover:opacity-80 transition-opacity">
              <h3 class="text-[#336666] font-semibold text-[22px] mb-2 text-center hover:underline cursor-pointer">Saturday Family Yoga</h3>
            </NuxtLink>
            <h4 class="text-[#4d4d4d] text-[28px] font-normal mb-2 text-center">Joyful Bonding & Movement</h4>
            
            <!-- Divider -->
            <div class="w-[600px] h-px bg-[rgba(128,178,178,0.5)] mb-6 mx-auto"></div>
            
            <div class="text-center mb-4">
              <p class="text-[#4d4d4d] text-[22px] leading-[normal]">
                👥 Suitable For:<br/>
                Parents & kids (ages 4-10) | Beginner-friendly
              </p>
            </div>
            
            <p class="text-[#4d4d4d] text-[22px] mb-6 text-center">🧘‍♀️ Instructor: Emily Carter</p>
            
            <h5 class="text-[#336666] font-semibold text-[22px] mb-4 text-center">✨ CLASS HIGHLIGHTS</h5>
            <ul class="text-[#4d4d4d] text-[22px] space-y-2 text-left pl-16">
              <li>• Fun and interactive yoga sequences for parents and children</li>
              <li>• Breathwork and mindfulness games for kids</li>
              <li>• Gentle partner yoga to enhance bonding</li>
              <li>• Introduction to relaxation techniques for families</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Sunday -->
      <div class="flex items-stretch justify-center mb-12 gap-6">
        <div class="w-[1058px] bg-cover bg-center rounded-none flex-shrink-0" style="background-image: url('/images/activities/activity-sunday.png')"></div>
        <div class="bg-[#fafaf5] w-[800px] rounded-2xl p-8 relative flex-shrink-0">
          <!-- Free Trial Badge -->
          <NuxtLink to="/login" class="absolute top-2 right-12 bg-white border border-[#4e7749] rounded-[10px] px-6 py-3 hover:bg-gray-100 transition-colors">
            <span class="text-[#2d5a27] font-bold text-[24px]">Free Trial</span>
          </NuxtLink>
          
          <div class="mt-16">
            <NuxtLink to="/activities/sunday-vinyasa" class="hover:opacity-80 transition-opacity">
              <h3 class="text-[#336666] font-semibold text-[22px] mb-2 text-center hover:underline cursor-pointer">Sunday Sunrise Vinyasa</h3>
            </NuxtLink>
            <h4 class="text-[#4d4d4d] text-[28px] font-normal mb-2 text-center">Energizing Flow to Start Your Day</h4>
            
            <!-- Divider -->
            <div class="w-[600px] h-px bg-[rgba(128,178,178,0.5)] mb-6 mx-auto"></div>
            
            <div class="text-center mb-4">
              <p class="text-[#4d4d4d] text-[22px] leading-[normal]">
                👥 Suitable For:<br/>
                All levels | Early risers | Outdoor enthusiasts
              </p>
            </div>
            
            <p class="text-[#4d4d4d] text-[22px] mb-6 text-center">🧘‍♀️ Instructor: Daniel Moreau</p>
            
            <h5 class="text-[#336666] font-semibold text-[22px] mb-4 text-center">✨ CLASS HIGHLIGHTS</h5>
            <ul class="text-[#4d4d4d] text-[22px] space-y-2 text-left pl-20">
              <li>• A dynamic flow to awaken the body and mind</li>
              <li>• Focus on breath-to-movement synchronization</li>
              <li>• Invigorating sun salutations to energize the day</li>
              <li>• Closing meditation with nature sounds</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Members Exclusive -->
      <div class="flex items-stretch justify-center mb-12 gap-6 flex-row-reverse">
        <div class="w-[1058px] bg-cover bg-center rounded-none flex-shrink-0" style="background-image: url('/images/activities/activity-special.png')"></div>
        <div class="bg-[#f2f2fa] w-[800px] rounded-2xl p-8 relative flex-shrink-0">
          <!-- Members Badge -->
          <div class="absolute top-5 left-3 bg-[#4d4d99] rounded-[20px] px-5 py-2">
            <span class="text-white font-semibold text-[16px]">MEMBERS</span>
          </div>
          
          <!-- Register Badge -->
          <div class="absolute top-3 right-12 bg-white border border-[#432963] rounded-[10px] px-6 py-3">
            <span class="text-[#36254a] font-bold text-[24px]">Register</span>
          </div>
          
          <div class="mt-16">
            <NuxtLink to="/activities/special-healing" class="hover:opacity-80 transition-opacity">
              <h3 class="text-[#4d4d99] font-semibold text-[22px] mb-2 text-center hover:underline cursor-pointer">Deep Stretch & Sound Healing</h3>
            </NuxtLink>
            <p class="text-[#666680] text-[22px] mb-8 text-center">Yoga Immersion Experience</p>
            
            <!-- Divider -->
            <div class="w-[600px] h-px bg-[rgba(102,102,178,0.5)] mb-6 mx-auto"></div>
            
            <div class="text-center mb-4">
              <p class="text-[#4d4d66] text-[22px] leading-[normal]">
                👥 Suitable For:<br/>
                Yoga members | Deep relaxation seekers
              </p>
            </div>
            
            <p class="text-[#4d4d66] text-[22px] mb-6 text-center">🧘‍♀️ Instructor: Sophia Lin</p>
            
            <h5 class="text-[#4d4d99] font-semibold text-[22px] mb-4 text-center">✨ CLASS HIGHLIGHTS</h5>
            <ul class="text-[#4d4d66] text-[22px] space-y-2 text-left pl-16">
              <li>• Gentle Yin yoga with extended holds for deep muscle release</li>
              <li>• Sound bath healing with Tibetan singing bowls</li>
              <li>• Guided meditation to restore energy balance</li>
              <li>• Aromatherapy-infused ambiance for full sensory relaxation</li>
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
    { name: 'description', content: 'Explore our weekly activity arrangement with specialized yoga classes for every day of the week.' }
  ]
})
</script>

<style scoped>
.font-pacifico {
  font-family: 'Pacifico', cursive;
}
</style>