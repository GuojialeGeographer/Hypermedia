<template>
  <div class="bg-gray-50 min-h-screen">
    <LayoutTheHeader />
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold text-center text-gray-800 mb-10">Your Cart</h1>
          
          <div class="mt-12">
            <section aria-labelledby="cart-heading">
              <h2 id="cart-heading" class="sr-only">Items in your shopping cart</h2>

              <ul role="list" class="divide-y divide-gray-200 border-b border-t border-gray-200">
                <li v-if="cartStore.items.length === 0" class="text-center py-12">
                  <p class="text-gray-500">Your cart is empty.</p>
                </li>
                <li v-else v-for="item in cartStore.items" :key="item.id" class="flex py-6">
                  <div class="flex-shrink-0">
                    <img :src="item.image" :alt="item.name" class="h-24 w-24 rounded-md object-cover object-center sm:h-32 sm:w-32">
                  </div>

                  <div class="ml-4 flex flex-1 flex-col">
                    <div>
                      <div class="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <NuxtLink :to="item.type === 'class' ? `/activities/${item.id}`: `/shop/${item.id}`">{{ item.name }}</NuxtLink>
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
              </ul>
            </section>

          <!-- Order summary -->
          <section aria-labelledby="summary-heading" class="mt-10">
            <h2 id="summary-heading" class="sr-only">Order summary</h2>

            <div>
              <dl class="space-y-4">
                <div class="flex items-center justify-between">
                  <dt class="text-base font-medium text-gray-900">Subtotal</dt>
                  <dd class="ml-4 text-base font-medium text-gray-900">{{ formatCurrency(cartStore.subtotal) }}</dd>
                </div>
              </dl>
              <p class="mt-1 text-sm text-gray-500">Shipping and taxes will be calculated at checkout.</p>
            </div>

            <div class="mt-10">
              <NuxtLink to="/login" class="w-full bg-[#2d5a27] border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-[#4e7749] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4e7749]">
                Checkout
              </NuxtLink>
            </div>

            <div class="mt-6 text-center text-sm">
              <p>
                or <NuxtLink to="/shop" class="font-medium text-[#4e7749] hover:text-[#2d5a27]">Continue Shopping<span aria-hidden="true"> &rarr;</span></NuxtLink>
              </p>
            </div>
          </section>

          <!-- Recommended products -->
          <section aria-labelledby="related-products-heading" class="mt-16">
            <h2 id="related-products-heading" class="text-lg font-medium text-gray-900">You may also like&hellip;</h2>

            <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              <div v-for="item in recommendedItems" :key="`${item.type}-${item.id}`" class="group relative flex flex-col">
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
          </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cart'
import type { Product, Activity, CartItem } from '~/types'

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

// Fetch both products and activities
const { data: products } = await useFetch<Product[]>('/api/products?limit=all');
const { data: activities } = await useFetch<Activity[]>('/api/activities');

const recommendedItems = computed((): RecommendedItem[] => {
  const combinedList: RecommendedItem[] = [];

  if (products.value) {
    products.value.forEach(p => {
      combinedList.push({
        id: p.id,
        name: p.name,
        price: p.price,
        image: p.image,
        description: p.color,
        href: `/shop/${slugify(p.name)}`,
        type: 'product',
      });
    });
  }

  if (activities.value) {
    activities.value.forEach(a => {
      combinedList.push({
        id: a.id,
        name: a.name,
        price: a.price,
        image: a.image_url,
        description: a.description,
        href: `/activities/${a.slug}`,
        type: 'class',
      });
    });
  }

  // Shuffle and return 4 items
  return combinedList.sort(() => 0.5 - Math.random()).slice(0, 4);
});

const addRecommendedToCart = (item: RecommendedItem) => {
  const cartItem: CartItem = {
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