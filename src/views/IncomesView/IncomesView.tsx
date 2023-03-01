import { useCallback, useState } from 'react';

import Plus from '@/components/icons/Plus';
import IncomeForm from '@/components/IncomeForm';
import IncomeTable from '@/components/IncomeTable';
import Modal from '@/components/ui/Modal';
import Tooltip from '@/components/ui/Tooltip';
import { useModal } from '@/context/modalContext';
import { Income } from '@/services/income.service';

const IncomesView = () => {
  const { openModal, closeModal } = useModal();
  const [selectedIncome, setSelectedIncome] = useState<Income | null>(null);

  const closeIncomeModal = useCallback(() => {
    closeModal();
    if (selectedIncome) {
      setSelectedIncome(null);
    }
  }, [selectedIncome]);

  const openIncomeModal = useCallback((income: Income) => {
    setSelectedIncome(income);
    openModal();
  }, []);

  return (
    <div>
      <IncomeTable openEditModal={openIncomeModal} />
      <Tooltip placement="top" content="Add transaction" animation="scale" duration={[500, 500]}>
        <button className="btn btn-primary " onClick={openModal}>
          <Plus />
        </button>
      </Tooltip>
      <Modal>
        <IncomeForm selectedIncome={selectedIncome} closeModal={closeIncomeModal} />
      </Modal>
    </div>
  );
};

export default IncomesView;
