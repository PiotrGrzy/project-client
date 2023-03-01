import { useCallback, useState } from 'react';

import ExpenseForm from '@/components/ExpenseForm';
import ExpenseTable from '@/components/ExpenseTable';
import Plus from '@/components/icons/Plus';
import Modal from '@/components/ui/Modal';
import Tooltip from '@/components/ui/Tooltip';
import { useModal } from '@/context/modalContext';
import { Expense } from '@/services/expenses.service';

const ExpensesView = () => {
  const { openModal, closeModal } = useModal();
  const [selectedExpense, setSelectedExpense] = useState<Expense | null>(null);

  const closeExpenseModal = useCallback(() => {
    closeModal();
    if (selectedExpense) {
      setSelectedExpense(null);
    }
  }, [selectedExpense]);

  const openExpenseModal = useCallback((expense: Expense) => {
    setSelectedExpense(expense);
    openModal();
  }, []);

  return (
    <div>
      <ExpenseTable openEditModal={openExpenseModal} />
      <Tooltip placement="top" content="Add transaction" animation="scale" duration={[500, 500]}>
        <button className="btn btn-primary " onClick={openModal}>
          <Plus />
        </button>
      </Tooltip>
      <Modal>
        <ExpenseForm closeModal={closeExpenseModal} selectedExpense={selectedExpense} />
      </Modal>
    </div>
  );
};

export default ExpensesView;
