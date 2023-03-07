import React, { createContext, useCallback, useContext, useState } from 'react';

import { Expense } from '@/services/expenses.service';
import { Income } from '@/services/income.service';

export type Transaction = Expense | Income | null;
export interface IModalContext {
  isOpen: boolean;
  closeModal: () => void;
  openModal: (transaction?: Transaction) => void;
  setSelectedTransaction: (transaction: Transaction) => void;
  selectedTransaction: Transaction;
}

const ModalContext = createContext<IModalContext>({} as IModalContext);

const ModalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction>(null);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    if (selectedTransaction) {
      setSelectedTransaction(null);
    }
  }, [selectedTransaction]);

  const openModal = useCallback((transaction?: Transaction) => {
    if (transaction) {
      setSelectedTransaction(transaction);
    }
    setIsOpen(true);
  }, []);

  return (
    <ModalContext.Provider value={{ isOpen, closeModal, openModal, selectedTransaction, setSelectedTransaction }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const modal = useContext(ModalContext);
  if (modal === undefined) {
    throw new Error('modalContext must be used within ModalContextProvider');
  }
  return modal;
};

export default ModalContextProvider;
