import React, { createContext, useCallback, useContext, useState } from 'react';

export interface IModalContext {
  isOpen: boolean;
  closeModal: () => void;
  openModal: () => void;
}

const ModalContext = createContext<IModalContext>({} as IModalContext);

const ModalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);
  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  return <ModalContext.Provider value={{ isOpen, closeModal, openModal }}>{children}</ModalContext.Provider>;
};

export const useModal = () => {
  const modal = useContext(ModalContext);
  if (modal === undefined) {
    throw new Error('modalContext must be used within ModalContextProvider');
  }
  return modal;
};

export default ModalContextProvider;
