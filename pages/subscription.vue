<template>
  <div class="bg-[#FBFBFA] min-h-screen font-inter">
    <div class="flex">
      <!-- Left Panel -->
      <div class="w-[743px] bg-[#F7F7F5] p-20">
        <NuxtLink to="/" class="flex items-center mb-12">
          <img src="/images/logos/yoga-logo.svg" alt="Yoga Icon" class="h-9 w-9 mr-2">
          <span class="text-5xl font-pacifico text-[#2D5A27]">Yoga</span>
        </NuxtLink>
        <p class="text-3xl font-semibold text-[#1A1A1A] mb-8">Start your 7-day free trial and 3 trial classes</p>

        <div class="space-y-5 mb-10">
          <div class="relative cursor-pointer" @click="selectedPlan = 'annual'">
            <div :class="['rounded-xl p-6 flex justify-between items-center h-[100px] transition-all', selectedPlan === 'annual' ? 'border-2 border-[#E5B280]' : 'border border-[#E6E6E6]']">
              <p class="text-3xl font-medium text-[#1A1A1A]">Annual – EUR 299 / year</p>
              <div :class="['w-6 h-6 rounded-full border-2 transition-all', selectedPlan === 'annual' ? 'border-[#FF994D] bg-[#FF994D]' : 'border-[#CCCCCC]']"></div>
            </div>
            <div v-if="selectedPlan === 'annual'" class="absolute -top-4 left-0">
              <div class="bg-[#FF994D] text-white text-base font-semibold px-4 py-1 rounded-full">Best Value!</div>
            </div>
          </div>
          <div class="relative cursor-pointer" @click="selectedPlan = 'monthly'">
            <div :class="['rounded-xl p-6 flex justify-between items-center h-[100px] transition-all', selectedPlan === 'monthly' ? 'border-2 border-[#E5B280]' : 'border border-[#E6E6E6]']">
              <p class="text-3xl font-medium text-[#1A1A1A]">Monthly – EUR 29.99 / month</p>
              <div :class="['w-6 h-6 rounded-full border-2 transition-all', selectedPlan === 'monthly' ? 'border-[#FF994D] bg-[#FF994D]' : 'border-[#CCCCCC]']"></div>
            </div>
          </div>
          <!-- Gift Selector -->
          <div class="bg-[#EBF2EB] rounded-xl p-6">
            <div 
              @click="toggleGift"
              class="flex justify-between items-center cursor-pointer"
            >
              <div>
                <p class="text-2xl font-medium text-[#333333]">Gift this subscription</p>
                <p v-if="!isGift" class="text-lg text-[#666666]">Activate to gift a subscription</p>
                <p v-else class="text-lg text-[#4e7749]">Gifting is active</p>
              </div>
              <div :class="['w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all', isGift ? 'border-[#4e7749] bg-[#D9E5D9]' : 'border-[#CCCCCC]']">
                <span v-if="isGift" class="text-[#4e7749] text-lg">✓</span>
              </div>
            </div>
            <!-- Month selector for gifting monthly plan -->
            <div v-if="isGift && selectedPlan === 'monthly'" class="mt-4">
              <label for="gift-months" class="block text-lg text-[#666666] mb-2">Number of months to gift:</label>
              <select id="gift-months" v-model="giftMonths" class="w-full p-3 border border-[#CCCCCC] rounded-lg text-xl h-[60px]">
                <option v-for="n in 12" :key="n" :value="n">{{ n }} month{{ n > 1 ? 's' : '' }}</option>
              </select>
            </div>
          </div>
        </div>

        <div class="border border-[#E6E6E6] rounded-xl p-10 mb-12">
          <p class="text-2xl text-[#1A1A1A] leading-tight">
            Say hello to yoga and fitness classes that will increase your strength, flexibility, and stability, plus improve your mental clarity and calmness.
          </p>
        </div>
        
      </div>

      <!-- Right Panel -->
      <div class="w-full px-20 py-10">
        <p class="text-3xl font-semibold text-[#1A1A1A] mb-2">Start your 7-day free trial and 3 trial classes</p>
        <p class="text-xl text-[#4D4D4D] mb-6">
          An account is required to access your purchases. 
          <span class="ml-4">Already have an account? <NuxtLink to="/login" class="text-[#E5B280]">Log in</NuxtLink></span>
        </p>

        <!-- Payment Form -->
        <form>
          <div class="grid grid-cols-1 gap-y-4">
            <input type="email" placeholder="Email" class="w-full p-4 border border-[#CCCCCC] rounded-lg text-xl h-[60px]">
            <input type="password" placeholder="Password" class="w-full p-4 border border-[#CCCCCC] rounded-lg text-xl h-[60px]">
          </div>
          <div class="flex items-center my-6">
            <input type="checkbox" id="newsletter" class="h-5 w-5 border border-[#B3B3B3] rounded-sm">
            <label for="newsletter" class="ml-2 text-lg text-[#4D4D4D]">I agree to receive newsletters and product updates from YogaWorks</label>
          </div>

          <button class="flex w-full h-16 justify-center items-center gap-2.5 px-6 py-4 my-6 rounded-lg bg-[#FF994D] text-white text-xl font-medium hover:bg-orange-500 transition-colors">
            Start Free Trial
          </button>

          <p class="text-3xl font-semibold text-[#1A1A1A] my-6">Payment details</p>
          <div class="grid grid-cols-2 gap-x-6 gap-y-4">
            <input type="text" placeholder="Card Name" class="col-span-2 w-full p-4 border border-[#CCCCCC] rounded-lg text-xl h-[60px]">
            <div class="col-span-2 relative">
                <input type="text" placeholder="Card Number" class="w-full p-4 border border-[#CCCCCC] rounded-lg text-xl h-[60px]">
                <span class="absolute right-4 top-4 text-xl text-[#1A1A1A]">(Card Icons)</span>
            </div>
            <input type="text" placeholder="Expiration Date" class="p-4 border border-[#CCCCCC] rounded-lg text-xl h-[60px]">
            <input type="text" placeholder="Security Code" class="p-4 border border-[#CCCCCC] rounded-lg text-xl h-[60px]">
            <input type="text" value="Italy" class="p-4 border border-[#CCCCCC] rounded-lg text-xl h-[60px] text-black">
            <input type="text" placeholder="Promotion code" class="p-4 border border-[#CCCCCC] rounded-lg text-xl h-[60px]">
          </div>
          
          <div class="mt-8 text-2xl text-[#4D4D4D] space-y-2">
            <div class="flex justify-between">
              <p>{{ summaryText }}</p>
              <p>EUR {{ planPrice }}</p>
            </div>
            <div class="flex justify-between">
              <p>Total</p>
              <p>EUR {{ planPrice }}</p>
            </div>
          </div>
          <div class="flex justify-between text-3xl font-semibold text-[#1A1A1A] mt-4">
            <p>Due today</p>
            <p>€{{ planPrice }}</p>
          </div>

          <div class="border border-[#D9E5D9] rounded-lg p-6 mt-6">
            <div class="flex items-start">
              <input type="checkbox" id="renewal" class="h-5 w-5 mt-1 border border-[#B3B3B3] rounded-sm">
              <div class="ml-4">
                <p class="text-xl font-semibold text-[#1A1A1A]">Automatic Renewal Details</p>
                <p class="text-sm text-[#333333]">Your subscription will automatically renew on the next billing date.</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const selectedPlan = ref('annual')
const isGift = ref(false)
const giftMonths = ref(1)

const toggleGift = () => {
  isGift.value = !isGift.value
  if (!isGift.value) {
    giftMonths.value = 1 // Reset on deactivation
  }
}

const planPrice = computed(() => {
  if (selectedPlan.value === 'annual') {
    return 299;
  }
  // If gifting, price is months * monthly_price
  if (isGift.value) {
    return (29.99 * giftMonths.value).toFixed(2);
  }
  return 29.99;
})

const summaryText = computed(() => {
  const giftPrefix = isGift.value ? 'Gift - ' : ''
  if (selectedPlan.value === 'annual') {
    return `${giftPrefix}Annual subscription`
  }
  
  if (isGift.value) {
    return `${giftPrefix}${giftMonths.value} x Monthly subscription`
  }
  
  return 'Monthly subscription'
})
</script>

<style scoped>
.font-pacifico {
  font-family: 'Pacifico', cursive;
}
</style> 