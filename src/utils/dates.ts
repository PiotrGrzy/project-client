import dayjs from 'dayjs';

import { IStatsParams } from '@/services/stats.service';

const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month, 0).getDate();
};

export function getLastDays(days: number): IStatsParams {
  const now = new Date();
  const lastDays = new Date(now.getFullYear(), now.getMonth(), now.getDate() - days);

  return { startDate: lastDays.toDateString(), endDate: now.toISOString() };
}

export function getLastMonthPeriod(): IStatsParams {
  const now = new Date();
  const month = now.getMonth() - 1;
  const year = now.getFullYear();
  const daysInMonth = getDaysInMonth(year, month);
  const lastMonthStart = new Date(year, month, 0);
  const lastMonthEnd = new Date(year, month, daysInMonth);
  return { startDate: lastMonthStart.toISOString(), endDate: lastMonthEnd.toISOString() };
}

export function getLastQuarterPeriod(): IStatsParams {
  const now = new Date();
  const monthStart = new Date(now.getFullYear(), now.getMonth() - 3, 0);
  return { startDate: monthStart.toISOString(), endDate: now.toISOString() };
}

export function getLastYear(): IStatsParams {
  const year = new Date().getFullYear() - 1;
  const firstDay = new Date(year, 0, 1);
  const lastDay = new Date(year, 11, 31);
  return { startDate: firstDay.toISOString(), endDate: lastDay.toISOString() };
}

export function getCurrentWeek(): IStatsParams {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const diff = now.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
  const weekStart = new Date(now.setDate(diff));
  return { startDate: weekStart.toDateString(), endDate: new Date().toDateString() };
}

export function getCurrentMonth(): IStatsParams {
  const now = new Date();
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
  return { startDate: monthStart.toDateString(), endDate: now.toDateString() };
}

export function getCurrentYear(): IStatsParams {
  const now = new Date();
  const yearStart = new Date(now.getFullYear(), 0, 1);
  return { startDate: yearStart.toDateString(), endDate: now.toDateString() };
}

export function dateDisplayFormat(date: string) {
  return dayjs(date).format('DD/MM/YYYY');
}
