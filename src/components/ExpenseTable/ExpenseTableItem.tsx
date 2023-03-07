import dayjs from 'dayjs';

import { useModal } from '@/context/modalContext';
import { Expense } from '@/services/expenses.service';
import { dateDisplayFormat } from '@/utils/dates';

interface ListItemProps {
  expense: Expense;
  openDeleteConfirm: (id: string) => void;
}

const ExpenseTableItem = ({ expense, openDeleteConfirm }: ListItemProps) => {
  const { openModal } = useModal();
  const { title, cost, category, type, createdAt } = expense;

  const handleEdit = () => {
    openModal(expense);
  };

  const handleDelete = () => {
    openDeleteConfirm(expense._id);
  };

  const date = dateDisplayFormat(createdAt);

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
      <td>
        <button className="btn btn-ghost btn-xs text-red-800" onClick={handleDelete}>
          delete
        </button>
      </td>
    </tr>
  );
};

export default ExpenseTableItem;
