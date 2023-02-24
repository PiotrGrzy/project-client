import { useCallback, useState } from 'react';

import ExpenseTableHeader from '@/components/ExpenseTableHeader';
import ExpenseTableItem from '@/components/ExpenseTableItem';
import Pagination from '@/components/Pagination';
import Search from '@/components/Search';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import { Expense, ExpenseDataKeys, IQueryParams, useExpenseQuery } from '@/services/expenses.service';

const initialQuery: IQueryParams = {
  sortBy: ExpenseDataKeys.date,
  asc: 0,
  limit: 5,
  next: '',
  previous: '',
  search: '',
};

const ExpenseList = ({ openEditModal }: { openEditModal: (Expense: Expense) => void }) => {
  const [queryParams, setQueryParams] = useState<IQueryParams>(initialQuery);
  const expenses = useExpenseQuery(queryParams);
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
        sortBy: (dataset.sort as ExpenseDataKeys) || (initialQuery.sortBy as ExpenseDataKeys),
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
    </Section>
  );
};

export default ExpenseList;
