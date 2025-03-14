<template>
  <Header />
  <div class="container">
    <div class="transaction-history">
      <h1 class="transaction-history__title">Transaction History</h1>
      <div class="transaction-history__content">
        <div class="transaction-history__sidebar">
          <TransactionFilters />
          <TransactionSort />
        </div>
        <div class="transaction-history__main">
          <TransactionTable :transactions="transactionsStore.paginatedTransactions" />
          <TransactionPagination />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTransactionsStore } from '@/stores/transactionsStore';
import { onMounted } from 'vue';
import TransactionTable from '@/components/TransactionTable.vue';
import TransactionFilters from '@/components/TransactionFilters.vue';
import TransactionPagination from '@/components/TransactionPagination.vue';
import TransactionSort from '@/components/TransactionSort.vue';
import Header from '@/components/Header.vue'; 

const transactionsStore = useTransactionsStore();

onMounted(() => {
  transactionsStore.fetchTransactions();
});
</script>