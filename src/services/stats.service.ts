import { useQuery } from '@tanstack/react-query';

import client from '@/services/axios.instance';

export interface IStatsParams {
  startDate: string;
  endDate: string;
}

export type Stats = {
  _id: string;
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
  return useQuery({
    queryKey: ['incomestats', queryParams],
    queryFn: () => getIncomeStats(queryParams),
    initialData: [],
  });
};

export const useExpenseStatsQuery = (queryParams: IStatsParams) => {
  return useQuery({
    queryKey: ['expensestats', queryParams],
    queryFn: () => getIncomeStats(queryParams),
    initialData: [],
  });
};
