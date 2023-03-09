import Trash from '@/components/icons/Trash';
import Tooltip from '@/components/ui/Tooltip';
import { useModal } from '@/context/modalContext';
import { Expense } from '@/services/expenses.service';
import { dateDisplayFormat } from '@/utils/dates';

interface ListItemProps {
  expense: Expense;
  openDeleteConfirm: (id: string) => void;
}

const ExpenseTableItem = ({ expense, openDeleteConfirm }: ListItemProps) => {
  const { openModal } = useModal();
  const { title, cost, category, type, createdAt, _id } = expense;

  const handleEdit = () => {
    openModal(expense);
  };

  const handleDelete = () => {
    openDeleteConfirm(_id);
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
        <Tooltip content="Delete expense">
          <button className="text-red-600/75 btn btn-ghost btn-sm" onClick={handleDelete}>
            <Trash className="h-5 w-5" />
          </button>
        </Tooltip>
      </td>
    </tr>
  );
};

export default ExpenseTableItem;
