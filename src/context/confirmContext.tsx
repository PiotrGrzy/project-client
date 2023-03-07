import React, { createContext, useCallback, useContext, useState } from 'react';

export interface IConfirmContext {
  isOpen: boolean;
  closeConfirm: () => void;
  openConfirm: (param: any) => void;
  param: any;
}

const ConfirmContext = createContext<IConfirmContext>({} as IConfirmContext);

const ConfirmContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [param, setParam] = useState(null);

  const closeConfirm = useCallback(() => {
    setParam(null);
    setIsOpen(false);
  }, []);

  const openConfirm = useCallback((param: any) => {
    setParam(param);
    setIsOpen(true);
  }, []);

  return (
    <ConfirmContext.Provider value={{ isOpen, closeConfirm, openConfirm, param }}>{children}</ConfirmContext.Provider>
  );
};

export const useConfirm = () => {
  const modal = useContext(ConfirmContext);
  if (modal === undefined) {
    throw new Error('modalContext must be used within ModalContextProvider');
  }
  return modal;
};

export default ConfirmContextProvider;
