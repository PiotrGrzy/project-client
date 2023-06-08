import { useQuery } from '@tanstack/react-query';

import { IntervalType } from '@/models/expense.schema';
import { IncomeUserInput } from '@/models/income.schema';
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
export const addIncome = async (payload: IncomeUserInput) => client.post('incomes', JSON.stringify(payload));

export const getIncomes = async (params: IIncomeQueryParams): Promise<IPaginateResult<Income>> => {
  const { asc, sortBy, limit, next, previous, search } = params;
  const queryString = new URLSearchParams({
    asc: asc.toString(),
    sortBy,
    limit: limit.toString(),
    next,
    previous,
    search,
  }).toString();
  const response = await client.get(`incomes?${queryString}`);
  return response.data;
};

export const updateIncome = async (payload: Partial<IncomeUserInput>, id: string) => {
  return client.patch(`incomes/${id}`, JSON.stringify(payload));
};

export const useIncomeQuery = (queryParams: IIncomeQueryParams) => {
  return useQuery({
    queryKey: ['incomes', queryParams],
    queryFn: () => getIncomes(queryParams),
    initialData: { docs: [], hasNext: false, hasPrevious: false, next: '', previous: '', totalDocs: 0 },
  });
};
