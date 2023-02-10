import { BeakerIcon } from '@heroicons/react/24/solid';

import { Expense } from '@/services/expenses.service';

interface ListItemProps {
  expense: Expense;
}

const ExpenseListItem = ({ expense }: ListItemProps) => {
  const { title, cost, category, type } = expense;
  return (
    <li className="card border border-primary">
      <div className="card-body">
        <BeakerIcon className="h-4 w-4 " />
        <p className="card-title">{title}</p>
      </div>
    </li>
  );
};

export default ExpenseListItem;
