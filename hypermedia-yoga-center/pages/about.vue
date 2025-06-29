<template>
  <div>
    <LayoutTheHeader />

    <section class="bg-white">
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <!-- Page Title -->
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            About Us
          </h1>
          <p class="mt-4 text-gray-600">
            Discover the heart and soul behind our studio.
          </p>
        </div>

        <!-- Main Image -->
        <div class="mt-12">
          <img
            src="/images/team/hero-background.png"
            alt="Our peaceful yoga studio environment"
            class="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        <!-- Story Section -->
        <div class="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div class="lg:py-24">
            <div class="prose max-w-none text-gray-700">
              <h2 class="text-3xl font-bold">The YogaStudio Story</h2>
              <p>
                In 1987, we opened our first studio with a mission: to provide people from all walks of life with a happy place to connect through mindful movement.
              </p>
              <p>
                Today, our mission remains. YogaStudio is a destination for those who approach their practice — both on and off the mat — with intention and authenticity.
              </p>
            </div>
          </div>
          <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full">
            <img
              alt="Our Story"
              src="/images/activities/activity-3.png"
              class="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>

        <!-- Mission/Apparel Section -->
        <div class="mt-16 prose max-w-none text-center">
           <h2 class="text-3xl font-bold">Move with Us</h2>
           <p class="mx-auto mt-4 max-w-3xl text-gray-700">
              Our apparel is crafted with tech-forward, studio-tested materials and designed with an emphasis on simplicity and utility. Each piece supports the dynamic flow of yoga and offers elevated style that goes beyond the mat. We don't just sell clothing. We create apparel that brings harmony and balance — to reflect, and make possible, an inner journey of mindfulness.
           </p>
        </div>

        <!-- About Content -->
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p class="text-gray-600 mb-4">
              Founded in 2010, our studio has been a sanctuary of peace and wellness for our community. We believe that yoga is more than just physical exercise—it's a journey of self-discovery and inner transformation.
            </p>
            <p class="text-gray-600 mb-4">
              Our mission is to create an inclusive space where people of all backgrounds and abilities can explore the ancient practice of yoga, find balance in their lives, and connect with a supportive community.
            </p>
            <p class="text-gray-600">
              Whether you're a complete beginner or an experienced practitioner, our expert instructors are here to guide you on your unique yoga journey with compassion, knowledge, and genuine care.
            </p>
          </div>
          
          <img
            src="/images/activities/activity-1.png"
            alt="Students practicing yoga in our studio"
            class="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>

    <LayoutTheFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'About Us - Yoga Studio',
  meta: [
    { name: 'description', content: 'Learn about the story, mission, and values of our yoga studio.' }
  ]
})
</script>