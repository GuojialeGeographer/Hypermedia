<template>
  <div class="bg-white">
    <LayoutTheHeader />
    
    <!-- Breadcrumb Navigation -->
    <div class="max-w-6xl mx-auto px-6 pt-6">
      <nav class="flex items-center text-sm space-x-2">
        <NuxtLink to="/" class="text-[#2d5a27] font-medium hover:underline">Home</NuxtLink>
        <span class="text-[#4b5563]">/</span>
        <NuxtLink to="/activities" class="text-[#2d5a27] font-medium hover:underline">Activities</NuxtLink>
        <span class="text-[#4b5563]">/</span>
        <span class="text-[#111827] font-medium">{{ activity?.title || 'Activity' }}</span>
      </nav>
    </div>

    <!-- Activity Content -->
    <div v-if="activity" class="max-w-6xl mx-auto px-6 py-8">
      <!-- Header Section -->
      <div class="mb-8">
        <div class="flex items-center gap-3 mb-4">
          <h1 class="text-2xl font-bold text-[#111827] font-inter">{{ activity.title }}</h1>
          <div v-if="activity.isFree" class="bg-[#2d5a271a] border border-[#2d5a27] rounded-lg px-3 py-1">
            <span class="text-[#2d5a27] font-semibold text-sm">Free Trial</span>
          </div>
          <div v-else class="bg-[#4b5563] rounded-lg px-3 py-1">
            <span class="text-white font-semibold text-sm">Members Only</span>
          </div>
        </div>
        <h2 class="text-lg font-medium text-[#374151] mb-2">{{ activity.subtitle }}</h2>
        <p class="text-[#4b5563] text-[15px]">{{ activity.description }}</p>
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Left Column: Activity Image -->
        <div class="lg:col-span-2">
          <div class="w-full h-80 bg-cover bg-center rounded-xl shadow-sm border" 
               :style="`background-image: url('${activity.image}')`">
          </div>
        </div>

        <!-- Right Column: Activity Details -->
        <div class="space-y-6">
          <!-- Quick Info Card -->
          <div class="bg-[#f9fafb] rounded-xl p-6 border">
            <h3 class="text-lg font-bold text-[#111827] mb-4 font-inter text-center">Class Details</h3>
            
            <div class="space-y-3">
              <div class="flex justify-between">
                <span class="text-[#4b5563] text-[15px] font-medium">Instructor:</span>
                <span class="text-[#111827] text-[15px] text-center">{{ activity.instructor }}</span>
              </div>
              
              <div class="flex justify-between">
                <span class="text-[#4b5563] text-[15px] font-medium">Duration:</span>
                <span class="text-[#111827] text-[15px] text-center">{{ activity.duration || '60 min' }}</span>
              </div>
              
              <div class="flex justify-between">
                <span class="text-[#4b5563] text-[15px] font-medium">Location:</span>
                <span class="text-[#111827] text-[15px] text-center">{{ activity.location || 'Main Studio' }}</span>
              </div>
              
              <div class="flex justify-between">
                <span class="text-[#4b5563] text-[15px] font-medium">Schedule:</span>
                <span class="text-[#111827] text-[15px] text-center">{{ activity.schedule || 'Weekly' }}</span>
              </div>
              
              <div class="flex justify-between">
                <span class="text-[#4b5563] text-[15px] font-medium">Intensity:</span>
                <span class="text-[#111827] text-[15px] text-center">{{ activity.intensity || 'Moderate' }}</span>
              </div>
              
              <div class="flex justify-between">
                <span class="text-[#4b5563] text-[15px] font-medium">Capacity:</span>
                <span class="text-[#111827] text-[15px] text-center">{{ activity.capacity || '15 people' }}</span>
              </div>
            </div>
          </div>

          <!-- Book Now Button -->
          <button 
            @click="addToCart"
            class="w-full text-center bg-[#2d5a27] text-white py-3 rounded-lg text-[15.375px] font-medium hover:bg-[#25492a] transition-colors"
          >
            Book
          </button>
        </div>
      </div>

      <!-- Description Section -->
      <div class="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Suitable For -->
        <div class="bg-[#f9fafb] rounded-xl p-6 border">
          <h3 class="text-lg font-bold text-[#111827] mb-4 font-inter">Perfect For</h3>
          <p class="text-[#4b5563] text-[15px] leading-relaxed">
            {{ activity.suitableFor }}
          </p>
        </div>

        <!-- Class Highlights -->
        <div class="bg-[#f9fafb] rounded-xl p-6 border">
          <h3 class="text-lg font-bold text-[#111827] mb-4 font-inter">What You'll Experience</h3>
          <ul class="text-[#4b5563] text-[15px] space-y-2">
            <li v-for="highlight in activity.highlights" :key="highlight" class="flex items-start">
              <span class="text-[#2d5a27] mr-2 font-medium">•</span>
              <span>{{ highlight }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Activity Not Found -->
    <div v-else class="max-w-6xl mx-auto px-6 py-16 text-center">
      <h1 class="text-2xl font-bold text-[#111827] mb-4">Activity Not Found</h1>
      <p class="text-[#4b5563] text-[15px] mb-8">Sorry, the activity you're looking for doesn't exist.</p>
      <NuxtLink to="/activities" 
                class="inline-block bg-[#2d5a27] text-white px-6 py-3 rounded-lg text-[15.375px] font-medium hover:bg-[#25492a] transition-colors">
        Back to Activities
      </NuxtLink>
    </div>

    <LayoutTheFooter />
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cart';

const route = useRoute()
const activityId = route.params.id as string
const cartStore = useCartStore();

// Activity data with English content
const activityData: Record<string, any> = {
  'monday-mindfulness': {
    title: 'Monday Mindfulness',
    subtitle: 'Awakening the Mind',
    description: 'Yoga & Meditation Discovery Class',
    instructor: 'Ashley Lorenzo',
    image: '/images/activities/activity-monday.png',
    isFree: true,
    duration: '75 min',
    location: 'Meditation Room',
    schedule: 'Monday 7:00-8:15 AM',
    intensity: 'Beginner',
    capacity: 'Max 12 people',
    suitableFor: 'Beginners, office workers, and those seeking stress relief',
    highlights: [
      'Guided breathwork & mindfulness meditation',
      'Gentle Hatha sequences to awaken and energize the body',
      'Focus on relaxation and mental clarity',
      'Present-moment awareness practices'
    ],
    price: 0
  },
  'tuesday-therapy': {
    title: 'Tuesday Therapy',
    subtitle: 'Shoulder & Neck Healing',
    description: 'Therapeutic Yoga Masterclass',
    instructor: 'Jivana Heyman',
    image: '/images/activities/activity-tuesday.png',
    isFree: true,
    duration: '90 min',
    location: 'Therapy Room',
    schedule: 'Tuesday 7:00-8:30 PM',
    intensity: 'Restorative',
    capacity: 'Max 8 people',
    suitableFor: 'Office workers, those with neck/shoulder discomfort, yoga therapy students',
    highlights: [
      'Yoga props and alignment techniques for safe recovery',
      'Take-home techniques for daily tension relief',
      'Meditative poses for shoulder and neck release',
      'Restorative relaxation techniques'
    ],
    price: 0
  },
  'wednesday-fusion': {
    title: 'Wednesday Fusion',
    subtitle: 'Balance Between Stillness & Motion',
    description: 'Fusion Flow',
    instructor: 'Georgia Weibel',
    image: '/images/activities/activity-wednesday.png',
    isFree: true,
    duration: '90 min',
    location: 'Main Studio',
    schedule: 'Wednesday 6:30-8:00 PM',
    intensity: 'Intermediate',
    capacity: 'Max 15 people',
    suitableFor: 'Intermediate practitioners seeking strength & flexibility',
    highlights: [
      'A blend of Yin and Yang yoga: dynamic flows plus deep holds',
      'Strengthens endurance while encouraging deep tissue release',
      'Ideal for body-mind balance and injury prevention',
      'Combines active practice with restorative elements'
    ],
    price: 0
  },
  'thursday-specialty': {
    title: 'Thursday Specialty',
    subtitle: 'Prenatal Yoga Private Experience',
    description: 'Specialty Class',
    instructor: 'Tamika Caston-Miller',
    image: '/images/activities/activity-thursday.png',
    isFree: true,
    duration: '60 min',
    location: 'Private Studio',
    schedule: 'Thursday 2:00-3:00 PM',
    intensity: 'Gentle',
    capacity: 'Private Session',
    suitableFor: 'Expectant mothers and those in postnatal recovery',
    highlights: [
      'Safe movements tailored for pregnancy and postpartum',
      'Focus on pelvic floor recovery and breath awareness',
      'Emotional grounding techniques for motherhood',
      'Personalized guidance in a supportive environment'
    ],
    price: 0
  },
  'friday-masterclass': {
    title: 'Friday Masterclass',
    subtitle: 'Introduction to Ashtanga Fundamentals',
    description: 'Advanced Practice',
    instructor: 'Vytas Baskauskas',
    image: '/images/activities/activity-friday.png',
    isFree: true,
    duration: '120 min',
    location: 'Main Studio',
    schedule: 'Friday 7:00-9:00 PM',
    intensity: 'Advanced',
    capacity: 'Max 12 people',
    suitableFor: 'Intermediate to advanced students seeking physical challenge',
    highlights: [
      'Introduction to the Primary Series of Ashtanga Yoga',
      'Synchronized breath, movement, and gaze (Drishti)',
      'Builds strength, stamina, and mental focus',
      'Traditional approach to dynamic yoga practice'
    ],
    price: 0
  },
  'saturday-family': {
    title: 'Saturday Family Yoga',
    subtitle: 'Joyful Bonding & Movement',
    description: 'Family Class',
    instructor: 'Emily Carter',
    image: '/images/activities/activity-saturday.png',
    isFree: true,
    duration: '45 min',
    location: 'Community Hall',
    schedule: 'Saturday 10:00-10:45 AM',
    intensity: 'Beginner',
    capacity: 'Max 8 families',
    suitableFor: 'Parents & kids (ages 4-10), beginner-friendly',
    highlights: [
      'Fun and interactive yoga sequences for parents and children',
      'Breathwork and mindfulness games for kids',
      'Gentle partner yoga to enhance bonding',
      'Introduction to relaxation techniques for families'
    ],
    price: 25
  },
  'sunday-vinyasa': {
    title: 'Sunday Sunrise Vinyasa',
    subtitle: 'Energizing Flow to Start Your Day',
    description: 'Morning Flow',
    instructor: 'Daniel Moreau',
    image: '/images/activities/activity-sunday.png',
    isFree: true,
    duration: '75 min',
    location: 'Outdoor Deck (weather permitting)',
    schedule: 'Sunday 7:30-8:45 AM',
    intensity: 'Intermediate',
    capacity: 'Max 20 people',
    suitableFor: 'All levels, early risers, outdoor enthusiasts',
    highlights: [
      'A dynamic flow to awaken the body and mind',
      'Focus on breath-to-movement synchronization',
      'Invigorating sun salutations to energize the day',
      'Closing meditation with nature sounds'
    ],
    price: 0
  },
  'special-healing': {
    title: 'Deep Stretch & Sound Healing',
    subtitle: 'Yoga Immersion Experience',
    description: 'Members Exclusive',
    instructor: 'Sophia Lin',
    image: '/images/activities/activity-special.png',
    isFree: false,
    duration: '120 min',
    location: 'Meditation Room',
    schedule: 'First Sun of Mon 4:00-6:00 PM',
    intensity: 'Restorative',
    capacity: 'Max 10 people',
    suitableFor: 'Yoga members seeking deep relaxation',
    highlights: [
      'Gentle Yin yoga with extended holds for deep muscle release',
      'Sound bath healing with Tibetan singing bowls',
      'Guided meditation to restore energy balance',
      'Aromatherapy-infused ambiance for full sensory relaxation'
    ],
    price: 0
  },
  'special-event': {
    title: 'Special Event: Sound Bath Meditation',
    subtitle: 'Deep Relaxation & Healing Vibrations',
    description: 'Community Workshop',
    instructor: 'Liam O\'Connell',
    image: '/images/activities/activity-special.png',
    isFree: false,
    duration: '90 min',
    location: 'Main Studio',
    schedule: 'Last Sunday of the month, 7:00-8:30 PM',
    intensity: 'Restorative',
    capacity: 'Max 20 people',
    suitableFor: 'Anyone seeking deep relaxation and stress reduction, no yoga experience needed',
    highlights: [
      'Immersive experience with crystal bowls, gongs, and chimes',
      'Promotes deep meditative states and cellular healing',
      'Reduces stress, anxiety, and physical tension',
      'Guided by a certified sound healing practitioner'
    ],
    price: 35
  },
  'special-workshop': {
    title: 'Specialty Workshop',
    subtitle: 'Deepen Your Practice',
    description: 'In-depth Yoga Exploration',
    instructor: 'Guest Teacher',
    image: '/images/activities/activity-special.png',
    isFree: false,
    duration: '120 min',
    location: 'Workshop Space',
    schedule: 'Check Schedule for Dates',
    intensity: 'Advanced',
    capacity: 'Max 20 people',
    suitableFor: 'Experienced practitioners and yoga teachers',
    highlights: [
      'Themed workshops focusing on specific aspects of yoga',
      'Opportunities to learn from renowned guest instructors',
      'Advanced asanas, philosophy, and teaching methodologies',
      'Interactive and hands-on learning environment'
    ],
    price: 75
  }
};

const activity = activityData[activityId];

const addToCart = () => {
  if (!activity) return;

  cartStore.addItem({
    id: Date.now(), // Use a temporary ID for client-side only activities
    name: activity.title,
    price: activity.price || 0,
    image: activity.image,
    quantity: 1,
    type: 'class'
  });

  navigateTo('/cart');
};

useHead({
  title: `${activity.value?.title || 'Activity'} - Yoga Studio`,
  meta: [
    { name: 'description', content: activity.value?.description || 'Yoga activity details' }
  ]
})
</script>

<style scoped>
.font-inter {
  font-family: 'Inter', sans-serif;
}
</style> 