import { useQuery } from '@tanstack/react-query';

import client from '@/services/axios.instance';

export const getIncomeStats = async (params) => {
  const queryString = new URLSearchParams(params).toString();
  const response = await client.get(`stats/income?${queryString}`);
  return response.data;
};

export const getExpenseStats = async (params) => {
  const queryString = new URLSearchParams(params).toString();
  const response = await client.get(`stats/expense?${queryString}`);
  return response.data;
};
