<template>
  <li class="flex py-6">
    <div class="flex-shrink-0">
      <img :src="item.image" :alt="item.name" class="h-24 w-24 rounded-md object-cover object-center sm:h-32 sm:w-32">
    </div>

    <div class="ml-4 flex flex-1 flex-col">
      <div>
        <div class="flex justify-between text-base font-medium text-gray-900">
          <h3>
            <NuxtLink :to="item.href || (typeof item.id === 'string' ? `/activities/${item.id}` : `/shop/${item.id}`)">{{ item.name }}</NuxtLink>
          </h3>
          <p class="ml-4">{{ formatCurrency(item.price) }}</p>
        </div>
      </div>
      <div class="flex flex-1 items-end justify-between text-sm">
        <div class="flex items-center">
          <button @click="cartStore.updateQuantity(item.id, item.quantity - 1)" class="text-gray-500 hover:text-gray-700 disabled:opacity-50" :disabled="item.quantity <= 1">-</button>
          <p class="text-gray-500 mx-2">{{ item.quantity }}</p>
          <button @click="cartStore.updateQuantity(item.id, item.quantity + 1)" class="text-gray-500 hover:text-gray-700">+</button>
        </div>

        <div class="flex">
          <button @click="cartStore.removeItem(item.id)" type="button" class="font-medium text-[#4e7749] hover:text-[#2d5a27]">Remove</button>
        </div>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cart'
import type { CartItem } from '~/types'

defineProps<{
  item: CartItem
}>()

const cartStore = useCartStore()

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(amount)
}
</script> 