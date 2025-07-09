import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { CartItem } from '~/types';

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>([]);

  const count = computed(() => items.value.reduce((total, item) => total + item.quantity, 0));
  const subtotal = computed(() => items.value.reduce((total, item) => total + item.price * item.quantity, 0));

  function addItem(item: CartItem) {
    const existingItem = items.value.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      items.value.push(item);
    }
  }

  function removeItem(itemId: number) {
    const index = items.value.findIndex(item => item.id === itemId);
    if (index !== -1) {
      items.value.splice(index, 1);
    }
  }

  function updateQuantity(itemId: number, quantity: number) {
    if (quantity <= 0) {
      removeItem(itemId);
      return;
    }
    const item = items.value.find(i => i.id === itemId);
    if (item) {
      item.quantity = quantity;
    }
  }

  return { items, count, subtotal, addItem, removeItem, updateQuantity };
}, {
  persist: true,
});