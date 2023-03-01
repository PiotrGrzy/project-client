import { ReactNode, useRef } from 'react';
import ReactDOM from 'react-dom';

import { useModal } from '@/context/modalContext';
import useEscapeKey from '@/hooks/useEscapeKey';
import useOutsideClick from '@/hooks/useOutsideClick';

interface ModalProps {
  children: ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  const { closeModal, isOpen } = useModal();
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(closeModal, ref);
  useEscapeKey(closeModal);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="top-0 left-0 fixed w-full h-full flex justify-center items-center z-40 bg-black/75 ">
      <div className="w-11/12 md:w-3/4 lg:w-1/2 max-w-lg" ref={ref}>
        <div className="relative">
          <button className="btn btn-sm btn-circle absolute right-0 -top-10" onClick={closeModal}>
            ✕
          </button>
          {children}
        </div>
      </div>
    </div>,
    document.getElementById('modal-root') as HTMLElement,
  );
};

export default Modal;
