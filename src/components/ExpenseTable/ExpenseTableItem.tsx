import dayjs from 'dayjs';

import { Expense } from '@/services/expenses.service';

interface ListItemProps {
  expense: Expense;
  openEditModal: (expense: Expense) => void;
}

const ExpenseTableItem = ({ expense, openEditModal }: ListItemProps) => {
  const { title, cost, category, type, createdAt } = expense;

  const handleEdit = () => {
    openEditModal(expense);
  };

  const date = dayjs(createdAt).format('DD/MM/YYYY');

  return (
    <tr>
      <td>{title}</td>
      <td>{category}</td>
      <td>{type}</td>
      <td>{date}</td>
      <td>{cost}</td>
      <td>
        <button className="btn btn-ghost btn-xs" onClick={handleEdit}>
          edit
        </button>
      </td>
    </tr>
  );
};

export default ExpenseTableItem;
