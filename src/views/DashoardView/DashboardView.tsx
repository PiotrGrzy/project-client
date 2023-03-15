import { useMemo, useState } from 'react';

import DachboardCard from '@/components/DashboardCard';
import Balance from '@/components/icons/Balance';
import Income from '@/components/icons/Income';
import Outcome from '@/components/icons/Outcome';
import PieChart from '@/components/PieChart';
import { IStatsParams, Stats, useExpenseStatsQuery, useIncomeStatsQuery } from '@/services/stats.service';
import { getLastDays } from '@/utils/dates';

const DAYS_FOR_DASHBOARD_DATA = 30;
const initialParams: IStatsParams = getLastDays(DAYS_FOR_DASHBOARD_DATA);

const getBalanceStats = (expenses: Stats[], incomes: Stats[]): Stats[] => {
  const incomeTotal = incomes.find((stat) => stat._id === null)?.total || 0;
  const expenseTotal = expenses.find((stat) => stat._id === null)?.total || 0;
  return [{ _id: null, total: incomeTotal - expenseTotal }];
};

const DashboardView = () => {
  const [queryParams, setQueryParams] = useState<IStatsParams>(initialParams);
  const expenseStats = useExpenseStatsQuery(queryParams);
  const incomeStats = useIncomeStatsQuery(queryParams);
  const balanceStats = useMemo(
    () => getBalanceStats(expenseStats.data, incomeStats.data),
    [expenseStats.data, incomeStats.data],
  );
  console.log(queryParams);
  console.log('Test ninja');

  return (
    <div>
      <h1 className="my-4 font-semibold text-lg">CURRENT MONTH DATA</h1>
      <div className="grid gap-4 md:grid-cols-3 ">
        <DachboardCard title="Expenses" stats={expenseStats.data} color="text-red-600">
          <Outcome className="w-12 h-12" />
        </DachboardCard>
        <DachboardCard title="Incomes" stats={incomeStats.data} color="text-green-600">
          <Income className="w-12 h-12" />
        </DachboardCard>
        <DachboardCard
          title="Balance"
          stats={balanceStats}
          color={balanceStats[0].total < 0 ? 'text-red-600' : 'text-green-600'}
        >
          <Balance className="w-12 h-12" />
        </DachboardCard>
      </div>
      <div className="h-96 w-full md:w-1/2 ">
        <PieChart data={expenseStats.data} dataKey="cost" />
      </div>
    </div>
  );
};

export default DashboardView;
