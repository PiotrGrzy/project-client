import { Dispatch, SetStateAction, useEffect, useState } from 'react';

const PER_PAGE = 5;

interface PaginationProps<T, K> {
  setQueryParams: Dispatch<SetStateAction<T>>;
  hasNext: boolean;
  hasPrevious: boolean;
  next: string;
  previous: string;
  totalDocs: number;
  sortBy: K;
}

const Pagination = <T, K>({
  setQueryParams,
  sortBy,
  hasNext,
  hasPrevious,
  next,
  previous,
  totalDocs,
}: PaginationProps<T, K>) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [sortBy]);

  const totalPages = Math.ceil(totalDocs / PER_PAGE);

  const handleNextPage = () => {
    setQueryParams((prev: T) => ({ ...prev, next, previous: '' }));
    setCurrentPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    setQueryParams((prev: T) => ({ ...prev, previous, next: '' }));
    setCurrentPage((prev) => prev - 1);
  };

  if (totalDocs === 0) {
    return (
      <div className="m-4">
        <p className="text-center font-medium"> No data in selected range</p>
      </div>
    );
  }

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
