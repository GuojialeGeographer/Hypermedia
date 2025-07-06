<template>
  <div>
    <LayoutTheHeader />

    <section class="bg-white">
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <!-- Page Title -->
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Contact Us
          </h1>
          <p class="mt-4 text-lg text-gray-600">
            We'd love to hear from you. Get in touch with us for any queries.
          </p>
        </div>

        <!-- Main Grid -->
        <div class="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
          
          <!-- Contact Form -->
          <div class="rounded-lg bg-gray-50 p-8 shadow-lg lg:p-12">
            <form action="" class="space-y-6">
              <div>
                <label class="sr-only" for="name">Name</label>
                <input
                  class="w-full rounded-lg border-gray-200 p-4 text-sm"
                  placeholder="Your Name"
                  type="text"
                  id="name"
                />
              </div>

              <div>
                <label class="sr-only" for="email">Email</label>
                <input
                  class="w-full rounded-lg border-gray-200 p-4 text-sm"
                  placeholder="Your Email Address"
                  type="email"
                  id="email"
                />
              </div>

              <div>
                <label class="sr-only" for="message">Message</label>
                <textarea
                  class="w-full rounded-lg border-gray-200 p-4 text-sm"
                  placeholder="Write your message"
                  rows="8"
                  id="message"
                ></textarea>
              </div>

              <div class="mt-4">
                <button
                  type="submit"
                  class="inline-block w-full rounded-lg bg-green-700 px-5 py-3 font-medium text-white sm:w-auto"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <!-- Contact Information -->
          <div class="space-y-8">
            <h2 class="text-2xl font-bold text-gray-900">Get in Touch</h2>
            <div class="space-y-4 text-gray-600">
              <p>
                Our studio is a sanctuary for all who seek balance and peace. Visit us, give us a call, or send an email.
              </p>
              <div class="flex items-start space-x-4">
                <span class="mt-1 h-6 w-6 text-green-700">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </span>
                <p>123 Yoga Street, Serenity Ville, 90210</p>
              </div>
              <div class="flex items-start space-x-4">
                 <span class="mt-1 h-6 w-6 text-green-700">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.211-.998-.584-1.35l-3.952-3.696a2.25 2.25 0 00-3.163.013l-1.01 1.016a.75.75 0 01-1.06 0l-3.952-3.952a.75.75 0 010-1.06l1.016-1.01a2.25 2.25 0 00.013-3.162l-3.696-3.952A2.25 2.25 0 006.75 2.25H5.25A2.25 2.25 0 003 4.5v2.25z" />
                  </svg>
                 </span>
                <p>+1 (555) 123-4567</p>
              </div>
              <div class="flex items-start space-x-4">
                <span class="mt-1 h-6 w-6 text-green-700">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </span>
                <p>hello@yogastudiopro.com</p>
              </div>
            </div>
          </div>

        </div>

         <!-- FAQ Section -->
        <div class="mt-20">
          <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div class="mt-10 max-w-4xl mx-auto space-y-6">
            <div class="p-6 rounded-lg border bg-gray-50">
              <h3 class="font-semibold text-gray-900">What should I bring to my first class?</h3>
              <p class="mt-2 text-gray-600">
                We recommend bringing a water bottle and wearing comfortable clothing. We provide yoga mats and all other props free of charge for your first visit.
              </p>
            </div>
             <div class="p-6 rounded-lg border bg-gray-50">
              <h3 class="font-semibold text-gray-900">Do you offer beginner classes?</h3>
              <p class="mt-2 text-gray-600">
                Absolutely! We have a variety of beginner-friendly classes, including "Gentle Flow" and "Yoga Basics." Check our schedule for the latest offerings.
              </p>
            </div>
             <div class="p-6 rounded-lg border bg-gray-50">
              <h3 class="font-semibold text-gray-900">How do I book a class?</h3>
              <p class="mt-2 text-gray-600">
                You can book classes directly through our website on the "Activities" page or by downloading our mobile app. We recommend booking in advance to secure your spot.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>

    <LayoutTheFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Contact Us - Yoga Studio',
  meta: [
    { name: 'description', content: 'Get in touch with Yoga Studio. Ask questions, get directions, or just say hello.' }
  ]
})
</script> 