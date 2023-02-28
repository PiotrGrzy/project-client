import dayjs from 'dayjs';

import { Income } from '@/services/income.service';

interface ListItemProps {
  income: Income;
  openEditModal: (income: Income) => void;
}

const IncomeTableItem = ({ income, openEditModal }: ListItemProps) => {
  const { title, value, type, createdAt } = income;

  const handleEdit = () => {
    openEditModal(income);
  };

  const date = dayjs(createdAt).format('DD/MM/YYYY');

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
