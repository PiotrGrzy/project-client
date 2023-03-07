import { useCallback, useState } from 'react';

import ExpenseTableHeader from '@/components/ExpenseTableHeader';
import IncomeTableItem from '@/components/IncomeTable/IncomeTableItem';
import Pagination from '@/components/Pagination';
import Search from '@/components/Search';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import { IIncomeQueryParams, Income, IncomeDataKeys, useIncomeQuery } from '@/services/income.service';

const initialQuery: IIncomeQueryParams = {
  sortBy: IncomeDataKeys.date,
  asc: 0,
  limit: 5,
  next: '',
  previous: '',
  search: '',
};

const IncomeTable = () => {
  const [queryParams, setQueryParams] = useState<IIncomeQueryParams>(initialQuery);
  const incomes = useIncomeQuery(queryParams);
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
        sortBy: (dataset.sort as IncomeDataKeys) || (initialQuery.sortBy as IncomeDataKeys),
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

  const { docs, ...meta } = incomes.data;

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
              {Object.values(IncomeDataKeys).map((column) => {
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
            {docs.map((income) => (
              <IncomeTableItem income={income} key={income._id} />
            ))}
          </tbody>
        </table>
        <Pagination<IIncomeQueryParams, IncomeDataKeys> setQueryParams={setQueryParams} sortBy={sortBy} {...meta} />
      </div>
    </Section>
  );
};

export default IncomeTable;
