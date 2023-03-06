import { useState } from 'react';

import DachboardCard from '@/components/DashboardCard';
import { IStatsParams, useExpenseStatsQuery, useIncomeStatsQuery } from '@/services/stats.service';
import { getLastDays } from '@/utils/dates';

const initialParams: IStatsParams = getLastDays(7);

const DashboardView = () => {
  const [queryParams, setQueryParams] = useState<IStatsParams>(initialParams);
  const expenseStats = useExpenseStatsQuery(queryParams);
  const incomeStats = useIncomeStatsQuery(queryParams);

  console.log('expenseStats.data', expenseStats.data);
  console.log('incomeStats.stats', incomeStats.data);

  return (
    <div>
      <h1>DASHBOARD</h1>
      <div className="grid gap-4 grid-cols-3 grid-rows-2">
        <DachboardCard title="Last Expenses" stats={expenseStats.data} color="text-red-600" />
        <DachboardCard title="Last Incomes" stats={incomeStats.data} color="text-green-600" />
      </div>
    </div>
  );
};

export default DashboardView;
