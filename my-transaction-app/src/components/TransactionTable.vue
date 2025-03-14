<template>
  <div class="transaction-table">
    <table class="transaction-table__table">
      <thead class="transaction-table__header">
        <tr class="transaction-table__row">
          <th class="transaction-table__cell transaction-table__cell--header">Date</th>
          <th class="transaction-table__cell transaction-table__cell--header">Type</th>
          <th class="transaction-table__cell transaction-table__cell--header">Amount</th>
          <th class="transaction-table__cell transaction-table__cell--header">Description</th>
        </tr>
      </thead>
      <tbody class="transaction-table__body">
        <tr v-for="transaction in transactions" :key="transaction.id" class="transaction-table__row transaction-table__row--data">
          <td class="transaction-table__cell transaction-table__cell--data">{{ transaction.date }}</td>
          <td class="transaction-table__cell transaction-table__cell--data">{{ transaction.type }}</td>
          <td class="transaction-table__cell transaction-table__cell--data">{{ transaction.amount }}</td>
          <td class="transaction-table__cell transaction-table__cell--data">{{ transaction.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { TransactionType } from '@/types/transactionType';

defineProps<{
  transactions: TransactionType[];
}>();
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';

.transaction-table {
  &__table {
    width: 100%;
    border-collapse: collapse;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: $color-secondary;
    border-radius: 8px;
  }

  &__header {
    background-color: $color-tertiary;
    color: $color-font-primary;
  }

  &__row {
    border-bottom: 1px solid $color-quaternary;

    &--data:hover {
      background-color: $color-gray-dark;
    }
  }

  &__cell {
    padding: 10px 15px;
    text-align: left;
    color: $color-font-secondary;

    &--header {
      font-weight: bold;
    }
  }
}
</style>