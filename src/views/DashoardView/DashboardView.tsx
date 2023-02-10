import { useCallback, useState } from 'react';

import AddExpenseForm from '@/components/AddExpenseForm';
import ExpenseList from '@/components/ExpenseList';
import Modal from '@/components/ui/Modal';
import { useUserQuery } from '@/services/users.service';

const DashboardView = () => {
  const user = useUserQuery();
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = useCallback(() => {
    setModalOpen(false);
  }, []);
  const openModal = useCallback(() => {
    setModalOpen(true);
  }, []);
  return (
    <div>
      <h1>{user.data?.firstName}</h1>
      <ExpenseList />
      <button className="btn btn-primary" onClick={openModal}>
        open modal
      </button>

      <Modal isOpen={modalOpen} handleClose={closeModal}>
        <AddExpenseForm />
      </Modal>
    </div>
  );
};

export default DashboardView;
