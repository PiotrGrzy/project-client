import { useQuery } from '@tanstack/react-query';

import { IntervalType } from '@/models/expense.schema';
import client from '@/services/axios.instance';

import { IPaginateResult } from './expenses.service';

export type Income = {
  _id: string;
  user: string;
  title: string;
  type: IntervalType;
  value: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export enum IncomeDataKeys {
  title = 'title',
  type = 'type',
  date = 'createdAt',
  value = 'value',
}

export interface IIncomeQueryParams {
  sortBy: IncomeDataKeys;
  asc: 0 | 1;
  limit: number;
  next: string;
  previous: string;
  search: string;
}

export const getIncomes = async (params: IIncomeQueryParams): Promise<IPaginateResult<Income>> => {
  const queryString = new URLSearchParams(params).toString();
  const response = await client.get(`incomes?${queryString}`);
  return response.data;
};

export const useIncomeQuery = (queryParams: IIncomeQueryParams) => {
  return useQuery({
    queryKey: ['incomes', queryParams],
    queryFn: () => getIncomes(queryParams),
    initialData: { docs: [], hasNext: false, hasPrevious: false, next: '', previous: '', totalDocs: 0 },
  });
};
