<template>
  <table class="w-full text-left">
    <thead>
      <tr>
        <th class="py-2 px-4">Date</th>
        <th class="py-2 px-4">Type</th>
        <th class="py-2 px-4">Amount</th>
        <th class="py-2 px-4">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="transaction in transactions" :key="transaction.id">
        <td class="py-2 px-4">{{ transaction.date }}</td>
        <td class="py-2 px-4">{{ transaction.type }}</td>
        <td class="py-2 px-4">{{ transaction.amount }}</td>
        <td class="py-2 px-4">{{ transaction.description }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { TransactionType } from '@/types/transactionType';

defineProps<{
  transactions: TransactionType[];
}>();
</script>