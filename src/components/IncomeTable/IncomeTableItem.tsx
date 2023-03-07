import { useModal } from '@/context/modalContext';
import { Income } from '@/services/income.service';
import { dateDisplayFormat } from '@/utils/dates';

interface ListItemProps {
  income: Income;
}

const IncomeTableItem = ({ income }: ListItemProps) => {
  const { openModal } = useModal();
  const { title, value, type, createdAt } = income;

  const handleEdit = () => {
    openModal(income);
  };

  const date = dateDisplayFormat(createdAt);

  return (
    <tr>
      <td>{title}</td>
      <td>{type}</td>
      <td>{date}</td>
      <td>{value}</td>
      <td>
        <button className="btn btn-ghost btn-xs" onClick={handleEdit}>
          edit
        </button>
      </td>
    </tr>
  );
};

export default IncomeTableItem;
