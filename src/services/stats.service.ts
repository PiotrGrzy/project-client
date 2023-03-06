import { useQuery } from '@tanstack/react-query';

import client from '@/services/axios.instance';

export interface IStatsParams {
  startDate: string;
  endDate: string;
}

export type Stats = {
  _id: string | null;
  total: number;
};

export const getIncomeStats = async (params: IStatsParams) => {
  const queryString = new URLSearchParams(params).toString();
  const response = await client.get(`stats/income?${queryString}`);
  return response.data;
};

export const getExpenseStats = async (params: IStatsParams) => {
  const queryString = new URLSearchParams(params).toString();

  const response = await client.get(`stats/expense?${queryString}`);
  return response.data;
};

export const useIncomeStatsQuery = (queryParams: IStatsParams) => {
  return useQuery<Stats[]>({
    queryKey: ['incomestats', queryParams],
    queryFn: () => getIncomeStats(queryParams),
    initialData: [{ _id: null, total: 0 }],
  });
};

export const useExpenseStatsQuery = (queryParams: IStatsParams) => {
  return useQuery<Stats[]>({
    queryKey: ['expensestats', queryParams],
    queryFn: () => getExpenseStats(queryParams),
    initialData: [{ _id: null, total: 0 }],
    select: (data) => {
      const total = data.reduce((sum, category) => sum + category.total, 0);
      return [...data, { _id: null, total }];
    },
  });
};
