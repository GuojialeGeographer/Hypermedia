<template>
  <div class="bg-white">
    <div class="bg-[#FAFAFA] py-16 sm:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl sm:text-5xl font-bold tracking-tight text-center text-gray-900">Shopping Cart</h1>
        
        <div class="mt-12">
          <section aria-labelledby="cart-heading">
            <ul role="list" class="divide-y divide-gray-200 border-b border-t border-gray-200">
              <li v-if="cartItems.length === 0" class="py-6 text-center text-gray-500">
                Your cart is empty.
              </li>
              <!-- Cart Items -->
              <li v-for="item in cartItems" :key="item.id" class="flex py-6 sm:py-10">
                <div class="flex-shrink-0">
                   <img :src="item.image" :alt="item.name" class="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48">
                </div>

                <div class="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                  <div class="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div>
                      <div class="flex justify-between">
                        <h3 class="text-xl font-semibold text-gray-900">
                          <a href="#" class="hover:text-gray-800">{{ item.name }}</a>
                        </h3>
                      </div>
                      <p class="mt-1 text-base text-gray-600">{{ item.description }}</p>
                      <p v-if="item.size" class="mt-1 text-base text-gray-600">Size {{ item.size }}</p>
                      <p class="mt-2 text-xl font-semibold text-gray-900">€{{ item.price }}</p>
                    </div>

                    <div class="mt-4 sm:mt-0 sm:pr-9">
                       <label v-if="item.quantity" :for="`quantity-${item.id}`" class="sr-only">Quantity, {{ item.name }}</label>
                        <select v-if="item.quantity" :id="`quantity-${item.id}`" v-model="item.quantity" name="quantity" class="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-green-700 focus:outline-none focus:ring-1 focus:ring-green-700 sm:text-sm">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      <div class="absolute right-0 top-0">
                        <button @click="cartStore.removeItem(item.id)" type="button" class="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500">
                          <span class="sr-only">Remove</span>
                           <svg class="h-5 w-5" x-description="Heroicon name: mini/x-mark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </section>

          <!-- Order summary -->
          <section aria-labelledby="summary-heading" class="mt-10">
            <div class="rounded-lg bg-gray-50 px-4 py-6 sm:p-8">
              <h2 id="summary-heading" class="text-2xl font-semibold text-gray-900">Order summary</h2>
              <dl class="mt-6 space-y-4">
                <div class="flex items-center justify-between">
                  <dt class="text-base text-gray-600">Subtotal</dt>
                  <dd class="text-base font-medium text-gray-900">€{{ subtotal }}</dd>
                </div>
              </dl>
              <div class="mt-6">
                <button type="submit" class="w-full rounded-md border border-transparent bg-[#2d5a27] px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2 focus:ring-offset-gray-50">Checkout</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useCartStore } from '~/stores/cart';
import { storeToRefs } from 'pinia';

const cartStore = useCartStore();
const { items: cartItems, subtotal } = storeToRefs(cartStore);

// Add initial data for demonstration purposes if the cart is empty.
onMounted(() => {
  if (cartStore.items.length === 0) {
    cartStore.addItem({
      id: 1,
      name: 'Monthly Unlimited Pass',
      description: 'Access to all studio classes for 30 days',
      price: 99,
      quantity: 1,
      image: '/images/activities/beginner-yoga.png',
    });
    cartStore.addItem({
      id: 2,
      name: 'Cross Back Performace Bra',
      description: 'Dewberry',
      price: 45,
      size: 'XS',
      quantity: 1,
      image: '/images/products/image-27.png',
    });
  }
});
</script>

<style scoped>
/* Scoped styles for the cart page */
</style> 