import { useCallback, useState } from 'react';

import ExpenseTableItem from '@/components/ExpenseTableItem';
import Pagination from '@/components/Pagination';
import { Expense, ExpenseDataKeys, IQueryParams, useExpenseQuery } from '@/services/expenses.service';

import ExpenseTableHeader from '../ExpenseTableHeader';

const initialQuery: IQueryParams = {
  sortBy: ExpenseDataKeys.date,
  asc: 0,
  limit: 5,
  next: '',
  previous: '',
};

const ExpenseList = ({ openEditModal }: { openEditModal: (Expense: Expense) => void }) => {
  const [queryParams, setQueryParams] = useState<IQueryParams>(initialQuery);
  const expenses = useExpenseQuery(queryParams);
  const { asc, sortBy, next, previous } = queryParams;

  const handleSortChange = useCallback((event: React.MouseEvent<HTMLTableCellElement>) => {
    const { dataset } = event.currentTarget;

    let sortOrder = asc;
    let nextId = next;
    let prevId = previous;
    if (sortBy === dataset.sort) {
      sortOrder = asc === 0 ? 1 : 0;
    }
    if (sortBy !== dataset.sort) {
      nextId = '';
      prevId = '';
    }

    console.log('newSortOrder', sortOrder);

    setQueryParams((prev) => ({
      ...prev,
      asc: sortOrder,
      sortBy: (dataset.sort as ExpenseDataKeys) || (initialQuery.sortBy as ExpenseDataKeys),
      next: nextId,
      previous: prevId,
    }));
  }, []);

  const { docs, ...meta } = expenses.data;
  console.log('meta', meta);

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            {Object.values(ExpenseDataKeys).map((column) => {
              return (
                <ExpenseTableHeader
                  key={column}
                  name={column}
                  onSortChange={handleSortChange}
                  currentSort={sortBy}
                  asc={!!asc}
                >
                  {column.toLocaleLowerCase()}
                </ExpenseTableHeader>
              );
            })}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {docs.map((expense) => (
            <ExpenseTableItem expense={expense} key={expense._id} openEditModal={openEditModal} />
          ))}
        </tbody>
      </table>
      <Pagination setQueryParams={setQueryParams} sortBy={sortBy} {...meta} />
    </div>
  );
};

export default ExpenseList;
