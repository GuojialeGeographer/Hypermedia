<template>
  <div class="group relative flex flex-col">
    <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
      <img :src="product.image" :alt="product.imageAlt" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
    </div>
    <div class="mt-4 flex justify-between flex-grow">
      <div class="flex flex-col">
        <h3 class="text-sm text-gray-700">
          <NuxtLink :to="`/shop/${product.id}`">
            <span aria-hidden="true" class="absolute inset-0" />
            {{ product.name }}
          </NuxtLink>
        </h3>
        <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
      </div>
      <p class="text-sm font-medium text-gray-900">€{{ product.price.toFixed(2) }}</p>
    </div>
    <button @click="addToCart" class="relative z-10 mt-auto w-full bg-[#2D5A27] text-white font-semibold py-2 px-4 rounded-md text-sm hover:bg-opacity-90 transition-colors">
      Add to Cart
    </button>
  </div>
</template>

<script setup lang="ts">
import type { Product, CartItem } from '~/types';
import { useCartStore } from '~/stores/cart';

const props = defineProps<{
  product: Product;
}>();

const cartStore = useCartStore();

const addToCart = () => {
  const cartItem: CartItem = {
    id: props.product.id,
    name: props.product.name,
    price: props.product.price,
    quantity: 1,
    image: props.product.image,
    type: 'product'
  };
  cartStore.addItem(cartItem);
  alert(`${props.product.name} has been added to the cart.`);
};
</script> 