<template>
  <div class="bg-white">
    <LayoutTheHeader />
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <nav class="flex items-center text-lg">
        <NuxtLink to="/" class="text-[#4e7749] font-medium hover:underline">Home</NuxtLink>
        <span class="text-gray-500 mx-2">/</span>
        <span class="text-gray-800 font-medium">Activities</span>
      </nav>
    </div>

    <div class="max-w-7xl mx-auto text-center mt-4 mb-12">
      <h1 class="text-4xl sm:text-5xl font-bold text-black">Activity Arrangement</h1>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-12">
      <div 
        v-for="(activity, index) in activities"
        :key="activity.slug"
        class="flex flex-col lg:flex-row items-stretch gap-8"
        :class="{ 'lg:flex-row-reverse': index % 2 !== 0 }"
      >
        <div class="w-full lg:w-3/5 bg-cover bg-center rounded-lg min-h-[450px]" :style="{ backgroundImage: `url(${activity.image})` }"></div>
        
        <div 
          class="w-full lg:w-2/5 rounded-2xl p-8 relative flex flex-col justify-center"
          :style="{ backgroundColor: activity.bgColor }"
        >
          <div class="absolute top-4 right-4">
            <div v-if="activity.isFree" class="bg-white border border-[#4e7749] rounded-lg px-4 py-2">
              <NuxtLink to="/login" class="text-[#2d5a27] font-bold text-lg">Free Trial</NuxtLink>
            </div>
            <div v-if="!activity.isFree && !activity.isMembersOnly" class="bg-white border border-[#432963] rounded-lg px-4 py-2">
              <NuxtLink to="/signup" class="text-[#36254a] font-bold text-lg">Register</NuxtLink>
            </div>
          </div>
          <div v-if="activity.isMembersOnly" class="absolute top-4 left-4 bg-[#4d4d99] text-white rounded-full px-4 py-2">
            <span class="font-semibold">MEMBERS</span>
          </div>

          <div class="text-center mt-12">
            <NuxtLink :to="`/activities/${activity.slug}`" class="hover:opacity-80">
              <h3 class="font-semibold text-2xl mb-2" :style="{ color: activity.titleColor }">{{ activity.title }}</h3>
            </NuxtLink>
            <h4 class="text-3xl font-normal mb-2" :style="{ color: activity.subtitleColor }">{{ activity.subtitle }}</h4>
            <p class="text-xl mb-6" :style="{ color: activity.descriptionColor }">{{ activity.description }}</p>
            
            <div class="w-full max-w-lg h-px mx-auto mb-6" :style="{ backgroundColor: activity.dividerColor }"></div>
            
            <div class="mb-4">
              <p class="text-lg leading-relaxed" :style="{ color: activity.textColor }">
                <span class="font-semibold">👥 Suitable For:</span><br/>
                {{ activity.suitableFor }}
              </p>
            </div>
            
            <p class="text-lg mb-6" :style="{ color: activity.textColor }">🧘‍♀️ Instructor: {{ activity.instructor }}</p>
            
            <h5 class="font-semibold text-xl mb-3" :style="{ color: activity.titleColor }">✨ CLASS HIGHLIGHTS</h5>
            <ul class="text-lg space-y-2 text-left max-w-md mx-auto" :style="{ color: activity.textColor }">
              <li v-for="highlight in activity.highlights" :key="highlight">• {{ highlight }}</li>
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
  title: 'Yoga Activities - Class Schedule & Arrangement',
  meta: [
    { name: 'description', content: 'Explore our weekly yoga activities, from Monday Mindfulness to Sunday Sunrise Vinyasa. Find the perfect class for your practice.' }
  ]
})

const activities = [
  {
    slug: 'monday-mindfulness',
    title: 'MONDAY MINDFULNESS',
    subtitle: 'Awakening the Mind',
    description: 'Yoga & Meditation Discovery Class',
    suitableFor: 'Beginners | Office Workers | Stress Relief Seekers',
    instructor: 'Ashley Lorenzo',
    highlights: [
      'Guided breathwork & mindfulness meditation',
      'Gentle Hatha sequences to awaken and energize the body',
      'Focus on relaxation and mental clarity',
      'Present-moment awareness practices'
    ],
    image: '/images/activities/activity-monday.png',
    isFree: true,
    bgColor: '#fafaf5',
    titleColor: '#336666',
    subtitleColor: '#4d4d4d',
    descriptionColor: '#666666',
    textColor: '#4d4d4d',
    dividerColor: 'rgba(128,178,178,0.5)',
  },
  {
    slug: 'tuesday-therapy',
    title: 'TUESDAY THERAPY',
    subtitle: 'Shoulder & Neck Healing',
    description: 'Therapeutic Yoga Masterclass',
    suitableFor: 'Office workers | Neck/shoulder discomfort | Yoga therapy students',
    instructor: 'Jivana Heyman',
    highlights: [
      'Yoga props and alignment techniques for safe recovery',
      'Take-home techniques for daily tension relief',
      'Meditative poses for shoulder and neck release',
      'Restorative relaxation techniques'
    ],
    image: '/images/activities/activity-tuesday.png',
    isFree: true,
    bgColor: '#fafaf5',
    titleColor: '#336666',
    subtitleColor: '#4d4d4d',
    descriptionColor: '#666666',
    textColor: '#4d4d4d',
    dividerColor: 'rgba(128,178,178,0.5)',
  },
  {
    slug: 'wednesday-fusion',
    title: 'WEDNESDAY FUSION',
    subtitle: 'Balance Between Stillness & Motion',
    description: 'Fusion Flow',
    suitableFor: 'Intermediate practitioners | Strength & flexibility seekers',
    instructor: 'Georgia Weibel',
    highlights: [
      'A blend of Yin and Yang yoga: dynamic flows plus deep holds',
      'Strengthens endurance while encouraging deep tissue release',
      'Ideal for body-mind balance and injury prevention',
      'Combines active practice with restorative elements'
    ],
    image: '/images/activities/activity-wednesday.png',
    isFree: true,
    bgColor: '#fafaf5',
    titleColor: '#336666',
    subtitleColor: '#4d4d4d',
    descriptionColor: '#666666',
    textColor: '#4d4d4d',
    dividerColor: 'rgba(128,178,178,0.5)',
  },
  {
    slug: 'thursday-specialty',
    title: 'THURSDAY SPECIALTY',
    subtitle: 'Prenatal Yoga Private Experience',
    description: 'Specialty Class',
    suitableFor: 'Expectant mothers | Postnatal recovery',
    instructor: 'Tamika Caston-Miller',
    highlights: [
      'Safe movements tailored for pregnancy and postpartum',
      'Focus on pelvic floor recovery and breath awareness',
      'Emotional grounding techniques for motherhood',
      'Personalized guidance in a supportive environment'
    ],
    image: '/images/activities/activity-thursday.png',
    isFree: true,
    bgColor: '#fafaf5',
    titleColor: '#336666',
    subtitleColor: '#4d4d4d',
    descriptionColor: '#666666',
    textColor: '#4d4d4d',
    dividerColor: 'rgba(128,178,178,0.5)',
  },
    {
    slug: 'friday-masterclass',
    title: 'FRIDAY MASTERCLASS',
    subtitle: 'Introduction to Ashtanga Fundamentals',
    description: 'Advanced Practice',
    suitableFor: 'Intermediate to advanced students | Physical challenge seekers',
    instructor: 'Vytas Baskauskas',
    highlights: [
      'Introduction to the Primary Series of Ashtanga Yoga',
      'Synchronized breath, movement, and gaze (Drishti)',
      'Builds strength, stamina, and mental focus',
      'Traditional approach to dynamic yoga practice'
    ],
    image: '/images/activities/activity-friday.png',
    isFree: true,
    bgColor: '#fafaf5',
    titleColor: '#336666',
    subtitleColor: '#4d4d4d',
    descriptionColor: '#666666',
    textColor: '#4d4d4d',
    dividerColor: 'rgba(128,178,178,0.5)',
  },
  {
    slug: 'saturday-family',
    title: 'SATURDAY FAMILY YOGA',
    subtitle: 'Joyful Bonding & Movement',
    description: '',
    suitableFor: 'Parents & kids (ages 4-10) | Beginner-friendly',
    instructor: 'Emily Carter',
    highlights: [
      'Fun and interactive yoga sequences for parents and children',
      'Breathwork and mindfulness games for kids',
      'Gentle partner yoga to enhance bonding',
      'Introduction to relaxation techniques for families'
    ],
    image: '/images/activities/activity-saturday.png',
    isFree: true,
    bgColor: '#fafaf5',
    titleColor: '#336666',
    subtitleColor: '#4d4d4d',
    descriptionColor: '#666666',
    textColor: '#4d4d4d',
    dividerColor: 'rgba(128,178,178,0.5)',
  },
  {
    slug: 'sunday-sunrise',
    title: 'SUNDAY SUNRISE VINYASA',
    subtitle: 'Energizing Flow to Start Your Day',
    description: '',
    suitableFor: 'All levels | Early risers | Outdoor enthusiasts',
    instructor: 'Daniel Moreau',
    highlights: [
      'A dynamic flow to awaken the body and mind',
      'Focus on breath-to-movement synchronization',
      'Invigorating sun salutations to energize the day',
      'Closing meditation with nature sounds'
    ],
    image: '/images/activities/activity-sunday.png',
    isFree: true,
    bgColor: '#fafaf5',
    titleColor: '#336666',
    subtitleColor: '#4d4d4d',
    descriptionColor: '#666666',
    textColor: '#4d4d4d',
    dividerColor: 'rgba(128,178,178,0.5)',
  },
  {
    slug: 'members-exclusive',
    title: 'Deep Stretch & Sound Healing',
    subtitle: '',
    description: 'Yoga Immersion Experience',
    suitableFor: 'Yoga members | Deep relaxation seekers',
    instructor: 'Sophia Lin',
    highlights: [
      'Gentle Yin yoga with extended holds for deep muscle release',
      'Sound bath healing with Tibetan singing bowls',
      'Guided meditation to restore energy balance',
      'Aromatherapy-infused ambiance for full sensory relaxation'
    ],
    image: '/images/activities/activity-special.png',
    isMembersOnly: true,
    bgColor: '#f2f2fa',
    titleColor: '#4d4d99',
    subtitleColor: '#4d4d66',
    descriptionColor: '#666680',
    textColor: '#4d4d66',
    dividerColor: 'rgba(102,102,178,0.5)',
  }
]
</script>

<style scoped>
/* Scoped styles can be added here if necessary */
</style>