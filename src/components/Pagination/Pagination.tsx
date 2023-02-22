import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { ExpenseDataKeys, IQueryParams } from '@/services/expenses.service';

const PER_PAGE = 5;

interface PaginationProps {
  setQueryParams: Dispatch<SetStateAction<IQueryParams>>;
  hasNext: boolean;
  hasPrevious: boolean;
  next: string;
  previous: string;
  totalDocs: number;
  sortBy: ExpenseDataKeys;
}

const Pagination = ({ setQueryParams, sortBy, hasNext, hasPrevious, next, previous, totalDocs }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [sortBy]);

  const totalPages = Math.ceil(totalDocs / PER_PAGE);

  const handleNextPage = () => {
    setQueryParams((prev) => ({ ...prev, next, previous: '' }));
    setCurrentPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    setQueryParams((prev: IQueryParams) => ({ ...prev, previous, next: '' }));
    setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="flex justify-center">
      <div className="btn-group my-2">
        <button className="btn" onClick={handlePreviousPage} disabled={!hasPrevious}>
          «
        </button>
        <button className="btn">
          {currentPage}/{totalPages}
        </button>
        <button className="btn" onClick={handleNextPage} disabled={!hasNext}>
          »
        </button>
      </div>
    </div>
  );
};

export default Pagination;
