<template>
  <div class="group relative">
    <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
      <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
    </div>
    <div class="mt-4 flex justify-between">
      <div>
        <h3 class="text-sm text-gray-700">
          <NuxtLink :to="product.href">
            <span aria-hidden="true" class="absolute inset-0" />
            {{ product.name }}
          </NuxtLink>
        </h3>
        <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
      </div>
      <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
    </div>
    <button @click="addToCart" class="mt-2 w-full bg-[#2D5A27] text-white font-semibold py-2 px-4 rounded-md text-sm hover:bg-opacity-90 transition-colors">
      Book
    </button>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types';
import { useCartStore } from '~/stores/cart';

const props = defineProps<{
  product: Product;
}>();

const { addItem } = useCartStore();

const addToCart = () => {
  addItem({
    id: props.product.id,
    name: props.product.name,
    price: parseFloat(props.product.price.replace('€', '')),
    quantity: 1,
    image: props.product.imageSrc,
    description: props.product.color,
  });
  alert(`${props.product.name} has been added to your cart!`);
};
</script> 