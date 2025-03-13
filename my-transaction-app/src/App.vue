<template>
  <div class="container mx-auto p-4">
    <TransactionFilters />
    <TransactionSort />
    <TransactionTable :transactions="transactionsStore.paginatedTransactions" />
    <TransactionPagination />
  </div>
</template>

<script setup lang="ts">
import { useTransactionsStore } from '@/stores/transactionsStore';
import { onMounted } from 'vue';
import TransactionTable from '@/components/TransactionTable.vue';
import TransactionFilters from '@/components/TransactionFilters.vue';
import TransactionPagination from '@/components/TransactionPagination.vue';
import TransactionSort from '@/components/TransactionSort.vue';

const transactionsStore = useTransactionsStore();

onMounted(() => {
  transactionsStore.fetchTransactions();
});
</script>