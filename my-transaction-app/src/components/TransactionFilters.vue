<template>
  <div class="mb-4">
    <select v-model="filterType" class="border p-2 mr-2">
      <option value="">All</option>
      <option value="income">Income</option>
      <option value="expense">Expense</option>
    </select>
    <input type="date" v-model="startDate" class="border p-2 mr-2" />
    <input type="date" v-model="endDate" class="border p-2" />
    <button @click="applyFilters" class="bg-blue-500 text-white p-2 ml-2">Apply</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTransactionsStore } from '@/stores/transactionsStore';

const transactionsStore = useTransactionsStore();

const filterType = ref('');
const startDate = ref('');
const endDate = ref('');

const applyFilters = () => {
  transactionsStore.setFilters({
    type: filterType.value,
    startDate: startDate.value,
    endDate: endDate.value,
  });
};
</script>