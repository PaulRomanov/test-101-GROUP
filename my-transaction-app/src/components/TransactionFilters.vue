<template>
  <div class="transaction-filters">
    <h2 class="transaction-filters__title">Filters</h2>
    <div class="transaction-filters__controls">
      <select v-model="filterType" class="transaction-filters__select">
        <option value="">All Types</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <input type="date" v-model="startDate" class="transaction-filters__input" ref="startDateInput" />
      <input type="date" v-model="endDate" class="transaction-filters__input" ref="endDateInput" />
      <button @click="applyFilters" class="transaction-filters__button">Apply Filters</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTransactionsStore } from '@/stores/transactionsStore';
import { onMounted } from 'vue';

const transactionsStore = useTransactionsStore();

const filterType = ref('');
const startDate = ref('');
const endDate = ref('');
const startDateInput = ref<HTMLInputElement | null>(null);
const endDateInput = ref<HTMLInputElement | null>(null);

const applyFilters = () => {
  transactionsStore.setFilters({
    type: filterType.value,
    startDate: startDate.value,
    endDate: endDate.value,
  });
};

onMounted(() => {
  if (startDateInput.value) {
    startDateInput.value.addEventListener('click', () => {
      startDateInput.value?.showPicker();
    });
  }
  if (endDateInput.value) {
    endDateInput.value.addEventListener('click', () => {
      endDateInput.value?.showPicker();
    });
  }

});

</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';

.transaction-filters {
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
  &__input,
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