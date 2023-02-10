import { useQuery } from '@tanstack/react-query';

import { CategoryType, ExpenseType, ExpenseUserInput } from '@/models/expense.schema';
import axios from '@/services/axios.instance';

export type Expense = {
  _id: string;
  user: string;
  title: string;
  description: string;
  category: CategoryType;
  type: ExpenseType;
  cost: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export const addExpense = async (payload: ExpenseUserInput) => axios.post('expenses', JSON.stringify(payload));
export const getExpenses = async (): Promise<Expense[]> => {
  const response = await axios.get('expenses');
  return response.data;
};

export const useExpenseQuery = () => {
  return useQuery({ queryKey: ['expenses'], queryFn: getExpenses, initialData: [] });
};
