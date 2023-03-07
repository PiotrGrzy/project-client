import Plus from '@/components/icons/Plus';
import IncomeForm from '@/components/IncomeForm';
import IncomeTable from '@/components/IncomeTable';
import Modal from '@/components/ui/Modal';
import Tooltip from '@/components/ui/Tooltip';
import { useModal } from '@/context/modalContext';

const IncomesView = () => {
  const { openModal } = useModal();

  const handleOpenModal = () => {
    openModal();
  };

  return (
    <div>
      <IncomeTable />
      <Tooltip placement="top" content="Add transaction" animation="scale" duration={[500, 500]}>
        <button className="btn btn-primary " onClick={handleOpenModal}>
          <Plus />
        </button>
      </Tooltip>
      <Modal>
        <IncomeForm />
      </Modal>
    </div>
  );
};

export default IncomesView;
