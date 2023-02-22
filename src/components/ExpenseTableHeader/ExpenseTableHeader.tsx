import classNames from 'classnames';
import { ReactNode } from 'react';

import DoubleChevronDown from '../icons/DoubleChevronDown';
import DoubleChevronUp from '../icons/DoubleChevronUp';

interface ExpenseTableHeaderProps {
  name: string;
  children: ReactNode;
  currentSort: string;
  asc: boolean;
  onSortChange: (event: React.MouseEvent<HTMLTableCellElement>) => void;
}

const ExpenseTableHeader = ({ children, onSortChange, name, currentSort, asc }: ExpenseTableHeaderProps) => {
  const isActive = name === currentSort;

  return (
    <th
      data-sort={name}
      onClick={onSortChange}
      className={classNames('cursor-pointer', isActive ? 'text-orange-400' : '')}
    >
      <div className="flex items-center">
        {children}
        {isActive && (asc ? <DoubleChevronUp /> : <DoubleChevronDown />)}
      </div>
    </th>
  );
};

export default ExpenseTableHeader;
