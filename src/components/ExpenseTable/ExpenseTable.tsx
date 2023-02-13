import { useState } from 'react';

import ExpenseTableItem from '@/components/ExpenseTableItem';
import Pagination from '@/components/Pagination';
import { Expense, IQueryParams, useExpenseQuery } from '@/services/expenses.service';

const ExpenseList = ({ openEditModal }: { openEditModal: (Expense: Expense) => void }) => {
  const [queryParams, setQueryParams] = useState<IQueryParams>({
    sortBy: 'createdAt',
    asc: 0,
    limit: 5,
    next: '',
    previous: '',
  });
  const expenses = useExpenseQuery(queryParams);
  const handleSortChange = (sortBy: string) => {
    setQueryParams((prev) => ({ ...prev, sortBy }));
  };
  const { docs, ...meta } = expenses.data;
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th onClick={() => handleSortChange('title')}>Title</th>
            <th>Date</th>
            <th onClick={() => handleSortChange('category')}>Category</th>
            <th>Type</th>
            <th>Amount</th>
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
