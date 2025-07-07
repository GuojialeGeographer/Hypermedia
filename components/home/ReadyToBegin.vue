<template>
  <section class="bg-emerald-50">
    <div class="p-8 md:p-12 lg:px-16 lg:py-24">
      <div class="mx-auto max-w-lg text-center">
        <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
          Ready to Begin Your Journey?
        </h2>

        <p class="hidden text-gray-600 sm:mt-4 sm:block">
          Start your transformation today with our special introductory offer.
        </p>
      </div>

      <div class="mx-auto mt-8 max-w-xl">
        <div class="flex flex-col sm:flex-row sm:justify-center gap-4">
          <NuxtLink
            class="block w-full rounded-md bg-green-800 px-12 py-3 text-sm font-medium text-white shadow hover:bg-green-700 focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
            to="/subscription"
          >
            Get 7 Days Free
          </NuxtLink>

          <NuxtLink
            class="block w-full rounded-md border border-green-800 px-12 py-3 text-sm font-medium text-green-800 shadow hover:text-green-700 focus:outline-none focus:ring active:text-green-500 sm:w-auto"
            to="/classes"
          >
            View Class Schedule
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template> 