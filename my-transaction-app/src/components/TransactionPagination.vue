<template>
  <div class="mt-4 flex justify-center">
    <button
      v-for="page in totalPages"
      :key="page"
      @click="setPage(page)"
      :class="{ 'bg-blue-500 text-white': currentPage === page }"
      class="border p-2 mx-1"
    >
      {{ page }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useTransactionsStore } from '@/stores/transactionsStore';

const transactionsStore = useTransactionsStore();

const totalPages = computed(() => {
  return Math.ceil(transactionsStore.filteredTransactions.length / 10);
});

const currentPage = computed(() => transactionsStore.currentPage);

const setPage = (page: number) => {
  transactionsStore.setCurrentPage(page);
};
</script>