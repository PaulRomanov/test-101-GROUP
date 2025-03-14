<template>
  <div class="transaction-sort">
    <h2 class="transaction-sort__title">Sort</h2>
    <div class="transaction-sort__controls">
      <select v-model="sortBy" class="transaction-sort__select">
        <option value="">Sort By</option>
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
      <select v-model="sortOrder" class="transaction-sort__select">
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <button @click="applySort" class="transaction-sort__button">Sort</button>
    </div>
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

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';

.transaction-sort {
  margin-bottom: 20px;
  background-color: $color-secondary;
  border-radius: 8px;
  padding: 16px;

  &__title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
    color: $color-font-primary;
  }

  &__controls {
    display: flex;
    flex-direction: column;
  }

  &__select,
  &__button {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid $color-quaternary;
    border-radius: 4px;
    background-color: $color-tertiary;
    color: $color-font-secondary;
  }

  &__button {
    background-color: $color-accent;
    color: $color-primary;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: $color-accent-light;
    }
  }
}
</style>