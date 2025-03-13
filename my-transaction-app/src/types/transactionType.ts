export interface TransactionType {
  id: number;
  date: string;
  type: 'income' | 'expense';
  amount: number;
  description: string;
}