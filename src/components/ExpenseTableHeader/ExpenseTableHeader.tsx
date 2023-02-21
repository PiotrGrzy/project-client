import classNames from 'classnames';
import { ReactNode } from 'react';

interface ExpenseTableHeaderProps {
  name: string;
  children: ReactNode;
  currentSort: string;
  asc: boolean;
  onSortChange: (event: React.MouseEvent<HTMLTableCellElement>) => void;
}

const ExpenseTableHeader = ({ children, onSortChange, name, currentSort }: ExpenseTableHeaderProps) => {
  const isActive = name === currentSort;
  return (
    <th data-sort={name} onClick={onSortChange} className={classNames(isActive ? 'text-orange-400' : '')}>
      {children}
    </th>
  );
};

export default ExpenseTableHeader;
