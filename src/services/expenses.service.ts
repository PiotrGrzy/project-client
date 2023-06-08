import { useQuery } from '@tanstack/react-query';

import { CategoryType, ExpenseUserInput, IntervalType } from '@/models/expense.schema';
import client from '@/services/axios.instance';

export type Expense = {
  _id: string;
  user: string;
  title: string;
  description: string;
  category: CategoryType;
  type: IntervalType;
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

export enum ExpenseSortKeys {
  title = 'title',
  category = 'category',
  type = 'type',
  date = 'createdAt',
  cost = 'cost',
}

export interface IQueryParams {
  sortBy: ExpenseSortKeys;
  asc: 0 | 1;
  limit: number;
  next: string;
  previous: string;
  search: string;
}

export const addExpense = async (payload: ExpenseUserInput) => client.post('expenses', JSON.stringify(payload));

export const getExpenses = async (params: IQueryParams): Promise<IPaginateResult<Expense>> => {
  const { asc, sortBy, limit, next, previous, search } = params;
  const queryString = new URLSearchParams({
    asc: asc.toString(),
    sortBy,
    limit: limit.toString(),
    next,
    previous,
    search,
  }).toString();
  const response = await client.get(`expenses?${queryString}`);
  return response.data;
};

export const updateExpense = async (payload: Partial<ExpenseUserInput>, id: string) => {
  return client.patch(`expenses/${id}`, JSON.stringify(payload));
};

export const deleteExpense = async (id: string) => {
  return client.delete(`expenses/${id}`);
};

export const useExpenseQuery = (queryParams: IQueryParams) => {
  return useQuery({
    queryKey: ['expenses', queryParams],
    queryFn: () => getExpenses(queryParams),
    initialData: { docs: [], hasNext: false, hasPrevious: false, next: '', previous: '', totalDocs: 0 },
  });
};
