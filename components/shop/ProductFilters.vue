<template>
  <aside class="lg:col-span-1">
    <!-- Filter Header -->
    <h2 class="text-2xl font-semibold text-gray-800 mb-4">Filter:</h2>
    
    <!-- Divider -->
    <div class="border-t border-gray-200 mb-6"></div>

    <!-- Product Filter -->
    <div class="mb-8">
      <!-- Filter Options -->
      <div class="space-y-4">
        <button
          v-for="filter in filters"
          :key="filter.id"
          @click="emit('update:filter', filter.id)"
          class="block w-full text-left text-base font-medium text-gray-700 hover:text-green-800 transition-colors"
          :class="{ 'text-green-800 font-bold border-l-2 border-green-800 pl-3': activeFilter === filter.id }"
        >
          {{ filter.name }}
        </button>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
defineProps<{
  activeFilter: string;
}>();

const emit = defineEmits(['update:filter']);

const filters = [
  { id: 'top', name: 'Top' },
  { id: 'bottom', name: 'Bottoms' },
  { id: 'jacket', name: 'Jacket' },
];
</script> 