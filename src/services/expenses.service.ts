import { useQuery } from '@tanstack/react-query';

import { CategoryType, ExpenseType, ExpenseUserInput } from '@/models/expense.schema';
import client from '@/services/axios.instance';

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

export interface IPaginateResult<T> {
  hasNext: boolean;
  hasPrevious: boolean;
  next: string;
  previous: string;
  totalDocs: number;
  docs: T[];
}

export interface IQueryParams {
  sortBy: string;
  asc: 0 | 1;
  limit: number;
  next: string;
  previous: string;
}

export const addExpense = async (payload: ExpenseUserInput) => client.post('expenses', JSON.stringify(payload));

export const getExpenses = async (params: IQueryParams): Promise<IPaginateResult<Expense>> => {
  console.log('query params', params);
  const queryString = new URLSearchParams(params).toString();
  const response = await client.get(`expenses?${queryString}`);
  return response.data;
};

export const updateExpense = async (payload: Partial<ExpenseUserInput>, id: string) => {
  console.log('id', id);

  return client.patch(`expenses/${id}`, JSON.stringify(payload));
};

export const useExpenseQuery = (queryParams: IQueryParams) => {
  return useQuery({
    queryKey: ['expenses', queryParams],
    queryFn: () => getExpenses(queryParams),
    initialData: { docs: [], hasNext: false, hasPrevious: false, next: '', previous: '', totalDocs: 0 },
  });
};
