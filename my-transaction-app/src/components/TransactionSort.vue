<template>
  <div class="mb-4">
    <select v-model="sortBy" class="border p-2 mr-2">
      <option value="">Sort By</option>
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
    <select v-model="sortOrder" class="border p-2">
      <option value="asc">Ascending</option>
      <option value="desc">Descending</option>
    </select>
    <button @click="applySort" class="bg-blue-500 text-white p-2 ml-2">Sort</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTransactionsStore } from '@/stores/transactionsStore';

const transactionsStore = useTransactionsStore();

const sortBy = ref('');
const sortOrder = ref('asc');

const applySort = () => {
  transactionsStore.setSort({
    by: sortBy.value,
    order: sortOrder.value,
  });
};
</script>