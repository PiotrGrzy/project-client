import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}
const Modal = ({ children, isOpen, handleClose }: ModalProps) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className="top-0 left-0 fixed w-full h-full flex justify-center items-center z-40">
      <div className="w-11/12 md:w-3/4 lg:w-1/2 max-w-lg">
        <div className="relative">
          <button className="btn btn-sm btn-circle absolute right-0 -top-10" onClick={handleClose}>
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
