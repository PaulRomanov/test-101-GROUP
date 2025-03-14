import { defineStore } from 'pinia';
import type { TransactionType } from '@/types/transactionType';
import { getTransactions } from '@/api/transactionsApi';

interface TransactionsState {
  transactions: TransactionType[];
  filteredTransactions: TransactionType[];
  loading: boolean;
  error: string | null;
  filters: {
    type: string;
    startDate: string;
    endDate: string;
  };
  currentPage: number;
  sort: {
    by: string;
    order: string;
  };
}

export const useTransactionsStore = defineStore('transactions', {
  state: (): TransactionsState => ({
    transactions: [],
    filteredTransactions: [],
    loading: false,
    error: null,
    filters: {
      type: '',
      startDate: '',
      endDate: '',
    },
    currentPage: 1,
    sort: {
      by: '',
      order: 'asc',
    },
  }),
  actions: {
    async fetchTransactions() {
      this.loading = true;
      try {
        this.transactions = await getTransactions();        
        this.filteredTransactions = [...this.transactions];
        this.loading = false;
        this.applyFilters();
      } catch (error: any) {
        this.error = error.message;
        this.loading = false;
      }
    },
    setFilters(filters: { type: string; startDate: string; endDate: string }) {
      this.filters = filters;
      this.applyFilters();
    },
    applyFilters() {
      this.filteredTransactions = this.transactions.filter((transaction) => {
        const typeMatch = !this.filters.type || transaction.type === this.filters.type;
        const startDateMatch = !this.filters.startDate || transaction.date >= this.filters.startDate;
        const endDateMatch = !this.filters.endDate || transaction.date <= this.filters.endDate;
        return typeMatch && startDateMatch && endDateMatch;
      });
    },
    setCurrentPage(page: number) {
      this.currentPage = page;
    },
    setSort(sort: { by: string; order: string }) {
      this.sort = sort;
      this.applySort();
    },
    applySort() {
      if (!this.sort.by) {
        return;
      }
      this.filteredTransactions.sort((a, b) => {
        let comparison = 0;
        if (this.sort.by === 'date') {
          comparison = a.date.localeCompare(b.date);
        } else if (this.sort.by === 'amount') {
          comparison = a.amount - b.amount;
        }
        return this.sort.order === 'asc' ? comparison : -comparison;
      });
    },
  },
  getters: {
    paginatedTransactions: (state): TransactionType[] => {
      const startIndex = (state.currentPage - 1) * 10;
      const endIndex = startIndex + 10;
      return state.filteredTransactions.slice(startIndex, endIndex);
    },
  },
});