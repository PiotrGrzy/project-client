import { useCallback, useState } from 'react';

import AddExpenseForm from '@/components/AddExpenseForm';
import ExpenseTable from '@/components/ExpenseTable';
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
      <button className="btn btn-primary" onClick={openModal}>
        Add expense
      </button>
      <Modal isOpen={modalOpen} handleClose={closeModal}>
        <AddExpenseForm closeModal={closeModal} selectedExpense={selectedExpense} />
      </Modal>
    </div>
  );
};

export default DashboardView;
