<template>
  <div class="bg-[#FBFBFA] min-h-screen font-inter">
    <div class="flex">
      <!-- Left Panel -->
      <div class="w-[743px] bg-[#F7F7F5] p-20">
        <div class="flex items-center mb-12">
          <img src="/images/logos/yoga-logo.svg" alt="Yoga Icon" class="h-9 w-9 mr-2">
          <span class="text-5xl font-pacifico text-[#2D5A27]">Yoga</span>
        </div>
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
          <div class="bg-[#EBF2EB] rounded-xl p-6 h-[80px]">
            <div class="flex justify-between items-center">
              <div>
                <p class="text-2xl font-medium text-[#333333]">Gift this subscription</p>
                <p class="text-lg text-[#666666]">Choose between 1-12 months</p>
              </div>
              <span class="text-2xl text-[#4D4D4D]">V</span>
            </div>
          </div>
        </div>

        <div class="border border-[#E6E6E6] rounded-xl p-10 mb-12">
          <p class="text-2xl text-[#1A1A1A] leading-tight">
            Say hello to yoga and fitness classes that will increase your strength, flexibility, and stability, plus improve your mental clarity and calmness.
          </p>
        </div>
        
        <button class="bg-[#D9E5D9] text-[#4D4D4D] font-medium text-xl rounded-lg px-8 py-4">
          Watch trailer
        </button>
      </div>

      <!-- Right Panel -->
      <div class="w-full px-20 py-10">
        <p class="text-3xl font-semibold text-[#1A1A1A] mb-2">Start your 7-day free trial and 3 trial classes</p>
        <p class="text-xl text-[#4D4D4D] mb-6">
          An account is required to access your purchases. 
          <span class="ml-20">Already have an account? <a href="#" class="text-[#E5B280]">Log in</a></span>
        </p>

        <form>
          <div class="grid grid-cols-1 gap-y-4">
            <input type="email" placeholder="Email" class="w-full p-4 border border-[#CCCCCC] rounded-lg text-xl h-[60px]">
            <input type="password" placeholder="Password" class="w-full p-4 border border-[#CCCCCC] rounded-lg text-xl h-[60px]">
          </div>
          <div class="flex items-center my-6">
            <input type="checkbox" id="newsletter" class="h-5 w-5 border border-[#B3B3B3] rounded-sm">
            <label for="newsletter" class="ml-2 text-lg text-[#4D4D4D]">I agree to receive newsletters and product updates from YogaWorks</label>
          </div>

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
              <p>Annual subscription</p>
              <p>EUR 299</p>
            </div>
            <div class="flex justify-between">
              <p>Total</p>
              <p>EUR 299</p>
            </div>
          </div>
          <div class="flex justify-between text-3xl font-semibold text-[#1A1A1A] mt-4">
            <p>Due today</p>
            <p>$299</p>
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
import { ref } from 'vue'

const selectedPlan = ref('annual') // Default to annual
</script>

<style scoped>
.font-pacifico {
  font-family: 'Pacifico', cursive;
}
</style> 