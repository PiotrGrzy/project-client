import ExpenseForm from '@/components/ExpenseForm';
import ExpenseTable from '@/components/ExpenseTable';
import Plus from '@/components/icons/Plus';
import Modal from '@/components/ui/Modal';
import Tooltip from '@/components/ui/Tooltip';
import { useModal } from '@/context/modalContext';

const ExpensesView = () => {
  const { openModal } = useModal();

  const handleOpenModal = () => {
    openModal();
  };

  return (
    <div>
      <ExpenseTable />
      <Tooltip placement="top" content="Add transaction" animation="scale" duration={[500, 500]}>
        <button className="btn btn-primary " onClick={handleOpenModal}>
          <Plus />
        </button>
      </Tooltip>
      <Modal>
        <ExpenseForm />
      </Modal>
    </div>
  );
};

export default ExpensesView;
