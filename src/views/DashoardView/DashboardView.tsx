import { useCallback, useState } from 'react';

import ExpenseForm from '@/components/ExpenseForm';
import ExpenseTable from '@/components/ExpenseTable';
import Plus from '@/components/icons/Plus';
import Modal from '@/components/ui/Modal';
import { Expense } from '@/services/expenses.service';

const DashboardView = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedExpense, setSelectedExpense] = useState<Expense | null>(null);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    if (selectedExpense) {
      setSelectedExpense(null);
    }
  }, [selectedExpense]);

  const openModal = useCallback(() => {
    setModalOpen(true);
  }, []);

  const openEditModal = useCallback((expense: Expense) => {
    setSelectedExpense(expense);
    setModalOpen(true);
  }, []);

  return (
    <div>
      <ExpenseTable openEditModal={openEditModal} />
      <button className="btn btn-primary " onClick={openModal}>
        <Plus />
      </button>
      <Modal isOpen={modalOpen} handleClose={closeModal}>
        <ExpenseForm closeModal={closeModal} selectedExpense={selectedExpense} />
      </Modal>
    </div>
  );
};

export default DashboardView;
