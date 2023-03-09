import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useCallback, useState } from 'react';

import ExpenseTableItem from '@/components/ExpenseTable/ExpenseTableItem';
import ExpenseTableHeader from '@/components/ExpenseTableHeader';
import Pagination from '@/components/Pagination';
import Search from '@/components/Search';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import { useConfirm } from '@/context/confirmContext';
import { deleteExpense, ExpenseSortKeys, IQueryParams, useExpenseQuery } from '@/services/expenses.service';

import ConfirmModal from '../ConfirmModal';

const initialQuery: IQueryParams = {
  sortBy: ExpenseSortKeys.date,
  asc: 0,
  limit: 5,
  next: '',
  previous: '',
  search: '',
};

const ExpenseTable = () => {
  const queryClient = useQueryClient();
  const [queryParams, setQueryParams] = useState<IQueryParams>(initialQuery);
  const expenses = useExpenseQuery(queryParams);
  const expense = useMutation({
    mutationFn: (id: string) => deleteExpense(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['expenses'] });
    },
  });
  const { openConfirm, param, closeConfirm } = useConfirm();
  const { asc, sortBy, next, previous } = queryParams;

  const handleSortChange = useCallback(
    (event: React.MouseEvent<HTMLTableCellElement>) => {
      const { dataset } = event.currentTarget;
      // TODO refactor
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
      setQueryParams((prev) => ({
        ...prev,
        asc: sortOrder,
        sortBy: (dataset.sort as ExpenseSortKeys) || (initialQuery.sortBy as ExpenseSortKeys),
        next: nextId,
        previous: prevId,
      }));
    },
    [queryParams],
  );

  const handleSearchChange = (searchText = '') => {
    setQueryParams((prev) => ({
      ...prev,
      search: searchText,
    }));
  };

  const handleDelete = () => {
    expense.mutate(param, { onSuccess: closeConfirm });
  };

  const { docs, ...meta } = expenses.data;

  return (
    <Section>
      <div className="overflow-x-auto w-full">
        <div className="flex justify-between items-center">
          <SectionTitle>Recent Transactions</SectionTitle>
          <Search onSearchChange={handleSearchChange} />
        </div>
        <table className="table w-full">
          <thead>
            <tr>
              {Object.values(ExpenseSortKeys).map((column) => {
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {docs.map((expense) => (
              <ExpenseTableItem expense={expense} key={expense._id} openDeleteConfirm={openConfirm} />
            ))}
          </tbody>
        </table>
        <Pagination<IQueryParams, ExpenseSortKeys> setQueryParams={setQueryParams} sortBy={sortBy} {...meta} />
        <ConfirmModal confirmText="Are you sure you want delete this exppense?" onConfirm={handleDelete} />
      </div>
    </Section>
  );
};

export default ExpenseTable;
