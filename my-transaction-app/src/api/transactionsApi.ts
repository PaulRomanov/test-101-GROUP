import axios from 'axios';
import type { TransactionType } from '@/types/transactionType';

export const getTransactions = async (): Promise<TransactionType[]> => {
  const response = await axios.get('/mock/transactions.json');
  return response.data;
};