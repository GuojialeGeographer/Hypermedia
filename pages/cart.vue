<template>
  <div class="bg-gray-50 min-h-screen">
    <LayoutTheHeader />
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold text-center text-gray-800 mb-10">Your Cart</h1>
          
      <div class="mt-12">
        <!-- Classes Section -->
        <section aria-labelledby="classes-heading">
          <h2 id="classes-heading" class="text-2xl font-semibold text-gray-800 mb-4">Classes & Workshops</h2>
          <ul role="list" class="divide-y divide-gray-200 border-b border-t border-gray-200">
            <li v-if="cartStore.classItems.length === 0" class="text-center py-12">
              <p class="text-gray-500">You have no classes in your cart.</p>
            </li>
            <CartItem v-for="item in cartStore.classItems" :key="item.id" :item="item" />
          </ul>
        </section>

        <!-- Classes Summary -->
        <section v-if="cartStore.classItems.length > 0" aria-labelledby="classes-summary-heading" class="mt-10">
          <h2 id="classes-summary-heading" class="sr-only">Classes Order summary</h2>
          <div>
            <dl class="space-y-4">
              <div class="flex items-center justify-between">
                <dt class="text-base font-medium text-gray-900">Subtotal (Classes)</dt>
                <dd class="ml-4 text-base font-medium text-gray-900">{{ formatCurrency(cartStore.classSubtotal) }}</dd>
              </div>
            </dl>
          </div>
          <div class="mt-10">
            <NuxtLink to="/login" class="w-full bg-[#2d5a27] border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-[#4e7749] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4e7749]">
              Checkout Classes
            </NuxtLink>
          </div>
        </section>

        <hr class="my-16 border-gray-300">

        <!-- Apparel Section -->
        <section aria-labelledby="apparel-heading">
          <h2 id="apparel-heading" class="text-2xl font-semibold text-gray-800 mb-4">Apparel & Gear</h2>
          <ul role="list" class="divide-y divide-gray-200 border-b border-t border-gray-200">
            <li v-if="cartStore.productItems.length === 0" class="text-center py-12">
              <p class="text-gray-500">You have no apparel in your cart.</p>
            </li>
            <CartItem v-for="item in cartStore.productItems" :key="item.id" :item="item" />
          </ul>
        </section>

        <!-- Apparel Summary -->
        <section v-if="cartStore.productItems.length > 0" aria-labelledby="apparel-summary-heading" class="mt-10">
          <h2 id="apparel-summary-heading" class="sr-only">Apparel Order summary</h2>
          <div>
            <dl class="space-y-4">
              <div class="flex items-center justify-between">
                <dt class="text-base font-medium text-gray-900">Subtotal (Apparel)</dt>
                <dd class="ml-4 text-base font-medium text-gray-900">{{ formatCurrency(cartStore.productSubtotal) }}</dd>
              </div>
            </dl>
            <p class="mt-1 text-sm text-gray-500">Shipping and taxes will be calculated at checkout.</p>
          </div>
          <div class="mt-10">
            <NuxtLink to="/login" class="w-full bg-[#2d5a27] border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-[#4e7749] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4e7749]">
              Checkout Apparel
            </NuxtLink>
          </div>
        </section>

        <div v-if="cartStore.items.length === 0" class="mt-6 text-center text-sm">
          <p>
            or <NuxtLink to="/shop" class="font-medium text-[#4e7749] hover:text-[#2d5a27]">Continue Shopping<span aria-hidden="true"> &rarr;</span></NuxtLink>
          </p>
        </div>
        
        <!-- Recommended products -->
        <section aria-labelledby="related-products-heading" class="mt-16">
            <h2 id="related-products-heading" class="text-lg font-medium text-gray-900">You may also like&hellip;</h2>

            <div v-if="recommendedProducts.length > 0" class="mt-12">
              <h3 class="text-md font-medium text-gray-800">Apparel & Gear</h3>
              <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                <div v-for="item in recommendedProducts" :key="`${item.type}-${item.id}`" class="group relative flex flex-col">
                  <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                    <img :src="item.image" :alt="item.name" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                  </div>
                  <div class="mt-4 flex flex-col flex-grow">
                    <div class="flex-grow">
                      <h3 class="text-sm text-gray-700">
                        <NuxtLink :to="item.href">
                          <span aria-hidden="true" class="absolute inset-0"></span>
                          {{ item.name }}
                        </NuxtLink>
                      </h3>
                      <p class="mt-1 text-sm text-gray-500 min-h-[40px] line-clamp-2">{{ item.description }}</p>
                    </div>
                    <div class="flex justify-between items-end">
                      <p class="text-sm font-medium text-gray-900">{{ formatCurrency(item.price) }}</p>
                    </div>
                  </div>
                  <button @click="addRecommendedToCart(item)" class="mt-4 w-full bg-white border border-[#4e7749] text-[#2d5a27] rounded-md py-2 px-4 hover:bg-gray-100">Add to cart</button>
                </div>
              </div>
            </div>
          </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cart'
import type { Product, Activity, CartItem as CartItemType } from '~/types'
import CartItem from '~/components/cart/CartItem.vue'

interface RecommendedItem {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  href: string;
  type: 'product' | 'class';
}

const cartStore = useCartStore()

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(amount)
}

const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '-and-');

// Fetch products
const { data: products } = await useFetch<Product[]>('/api/products?limit=all');

const recommendedProducts = computed((): RecommendedItem[] => {
  if (!products.value) return [];
  const productList: RecommendedItem[] = products.value.map(p => ({
    id: p.id,
    name: p.name,
    price: p.price,
    image: p.image,
    description: p.color,
    href: `/shop/${p.id}`,
    type: 'product',
  }));
  return productList.sort(() => 0.5 - Math.random()).slice(0, 4);
});

const addRecommendedToCart = (item: RecommendedItem) => {
  const cartItem: CartItemType = {
    id: item.id,
    name: item.name,
    price: item.price,
    image: item.image,
    quantity: 1,
    type: item.type,
    href: item.href,
  };
  cartStore.addItem(cartItem);
}
</script>

<style scoped>
/* Scoped styles for the cart page */
</style> 