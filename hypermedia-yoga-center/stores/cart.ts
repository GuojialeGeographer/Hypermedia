import { defineStore } from 'pinia';

interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  size?: string;
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[],
  }),
  getters: {
    count(): number {
      return this.items.reduce((total, item) => total + item.quantity, 0);
    },
    subtotal(): number {
      return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  },
  actions: {
    addItem(item: CartItem) {
      const existingItem = this.items.find(i => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        this.items.push(item);
      }
    },
    removeItem(itemId: number) {
      const index = this.items.findIndex(item => item.id === itemId);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    },
  },
  persist: true,
}); 