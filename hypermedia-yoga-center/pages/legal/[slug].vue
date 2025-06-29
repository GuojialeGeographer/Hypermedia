<template>
  <div>
    <LayoutTheHeader />

    <main class="bg-white">
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div v-if="pageContent">
          <!-- Page Title -->
          <div class="text-center">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {{ pageContent.title }}
            </h1>
            <p v-if="pageContent.subtitle" class="mt-4 text-lg text-gray-600">
              {{ pageContent.subtitle }}
            </p>
          </div>

          <!-- Content -->
          <div class="mt-12">
            <!-- FAQ Accordion -->
            <div v-if="pageContent.slug === 'faq'" class="space-y-4 max-w-4xl mx-auto">
              <div v-for="(item, index) in pageContent.content" :key="index" class="border rounded-lg">
                <button @click="toggleFaq(index)" class="w-full flex justify-between items-center p-4 text-left font-semibold text-gray-800">
                  <span>{{ (item as FaqItem).q }}</span>
                  <span>{{ openFaqIndex === index ? '-' : '+' }}</span>
                </button>
                <div v-if="openFaqIndex === index" class="p-4 border-t text-gray-600">
                  <p>{{ (item as FaqItem).a }}</p>
                </div>
              </div>
            </div>

            <!-- Standard Text Content -->
            <div v-else class="prose max-w-4xl mx-auto">
              <p v-for="(paragraph, index) in pageContent.content" :key="index">
                {{ paragraph }}
              </p>
            </div>
          </div>
        </div>
        <div v-else class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page Not Found
          </h1>
          <p class="mt-4 text-lg text-gray-600">
            The page you are looking for does not exist.
          </p>
        </div>
      </div>
    </main>

    <LayoutTheFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

// Type Definitions
interface FaqItem {
  q: string;
  a: string;
}

interface PageData {
  slug: string;
  title: string;
  subtitle?: string; // Made subtitle optional
  content: FaqItem[] | string[];
}

const route = useRoute();
const slug = route.params.slug as string;

const openFaqIndex = ref<number | null>(null);

const toggleFaq = (index: number) => {
  openFaqIndex.value = openFaqIndex.value === index ? null : index;
};

const legalContent: { [key: string]: PageData } = {
  faq: {
    slug: 'faq',
    title: 'Frequently Asked Questions',
    subtitle: 'Find answers to common questions about our studio.',
    content: [
      { q: 'How can I terminate my training plan?', a: 'You can terminate your plan through your account settings page. The termination will be effective at the end of your current billing cycle.' },
      { q: 'How to re-enable a suspended account?', a: 'Please contact our support team with your account details to re-enable a suspended account.' },
      { q: 'Why are the fees of YogaStudio classes different?', a: 'Fees vary based on the class type, duration, and the instructor\'s level. Specialized workshops may have different pricing.' },
      { q: 'Can I suspend my account for medical reasons?', a: 'Yes, you can request a medical suspension by providing a valid medical certificate. Please contact support for assistance.' },
    ],
  },
  'refund-policy': {
    slug: 'refund-policy',
    title: 'Refund Policy',
    subtitle: 'Our policy on refunds for classes and products.',
    content: [
      'All purchases for classes, class packages, and memberships are non-refundable.',
      'If you are unable to attend a class you have booked, you must cancel at least 24 hours in advance to receive a class credit. No-shows or late cancellations will not be credited.',
      'Workshop and special event tickets are non-refundable but may be transferable. Please contact us for details.',
    ],
  },
  'terms-of-service': {
    slug: 'terms-of-service',
    title: 'Terms of Service',
    subtitle: 'The terms and conditions for using our services.',
    content: [
      'By using our services, you agree to these terms. Please read them carefully.',
      'You must be at least 18 years old to create an account and attend classes.',
      'You agree to practice safely and inform your instructor of any injuries or medical conditions before class begins.',
      'We reserve the right to refuse service to anyone for any reason at any time.'
    ],
  },
  'privacy-policy': {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    subtitle: 'How we collect and use your data.',
    content: [
      'We collect personal information when you register for an account, book classes, and make purchases. This information is used to provide and improve our services.',
      'We will not share your personal information with third parties without your consent, except as required by law.',
      'We use cookies and similar technologies to enhance your experience on our website.'
    ],
  }
};

const pageContent = computed(() => {
  return legalContent[slug] || null;
});

useHead({
  title: pageContent.value ? `${pageContent.value.title} - Yoga Studio` : 'Page Not Found',
  meta: [
    { name: 'description', content: pageContent.value?.subtitle || 'Legal and information pages for Yoga Studio.' }
  ]
});
</script> 