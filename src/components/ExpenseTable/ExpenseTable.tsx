import { useCallback, useState } from 'react';

import ExpenseTableItem from '@/components/ExpenseTableItem';
import Pagination from '@/components/Pagination';
import { Expense, IQueryParams, useExpenseQuery } from '@/services/expenses.service';

import ExpenseTableHeader from '../ExpenseTableHeader';

const initialQuery: IQueryParams = {
  sortBy: 'createdAt',
  asc: 0,
  limit: 5,
  next: '',
  previous: '',
};

const ExpenseList = ({ openEditModal }: { openEditModal: (Expense: Expense) => void }) => {
  const [queryParams, setQueryParams] = useState<IQueryParams>(initialQuery);
  const expenses = useExpenseQuery(queryParams);
  const { asc, sortBy } = queryParams;
  const handleSortChange = useCallback((event: React.MouseEvent<HTMLTableCellElement>) => {
    const { dataset } = event.currentTarget;
    const newSortOrder = sortBy === dataset.sort && asc === 0 ? 1 : 0;
    setQueryParams((prev) => ({ ...prev, asc: newSortOrder, sortBy: dataset.sort || '' }));
  }, []);

  const { docs, ...meta } = expenses.data;
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <ExpenseTableHeader name="title" onSortChange={handleSortChange} currentSort={sortBy} asc={!!asc}>
              Title
            </ExpenseTableHeader>
            <ExpenseTableHeader
              name="createdAt"
              onSortChange={handleSortChange}
              currentSort={queryParams.sortBy}
              asc={!!queryParams.asc}
            >
              Date
            </ExpenseTableHeader>
            <ExpenseTableHeader
              name="category"
              onSortChange={handleSortChange}
              currentSort={queryParams.sortBy}
              asc={!!queryParams.asc}
            >
              Category
            </ExpenseTableHeader>
            <ExpenseTableHeader
              name="type"
              onSortChange={handleSortChange}
              currentSort={queryParams.sortBy}
              asc={!!queryParams.asc}
            >
              Type
            </ExpenseTableHeader>
            <ExpenseTableHeader
              name="cost"
              onSortChange={handleSortChange}
              currentSort={queryParams.sortBy}
              asc={!!queryParams.asc}
            >
              Amount
            </ExpenseTableHeader>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {docs.map((expense) => (
            <ExpenseTableItem expense={expense} key={expense._id} openEditModal={openEditModal} />
          ))}
        </tbody>
      </table>
      <Pagination setQueryParams={setQueryParams} {...meta} />
    </div>
  );
};

export default ExpenseList;
