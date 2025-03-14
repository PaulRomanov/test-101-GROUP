<template>
  <div class="transaction-pagination">
    <div class="transaction-pagination__controls">
      <button
        v-for="page in totalPages"
        :key="page"
        @click="setPage(page)"
        :class="{ 'transaction-pagination__button--active': currentPage === page }"
        class="transaction-pagination__button"
      >
        {{ page }}
      </button>
    </div>
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

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';

.transaction-pagination {
  margin-top: 20px;
  display: flex;
  justify-content: center;

  &__controls {
    display: flex;
    gap: 8px;
  }

  &__button {
    padding: 8px 12px;
    border: 1px solid $color-quaternary;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    background-color: $color-tertiary;
    color: $color-font-secondary;

    &--active {
      background-color: $color-accent;
      color: $color-primary;
      border-color: $color-accent;
    }

    &:hover {
      background-color: lighten($color-tertiary, 5%);
    }

    &--active:hover {
      background-color: $color-accent-light;
    }
  }
}
</style>