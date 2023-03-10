import { useRef } from 'react';
import ReactDOM from 'react-dom';

import { useConfirm } from '@/context/confirmContext';
import useEscapeKey from '@/hooks/useEscapeKey';
import useOutsideClick from '@/hooks/useOutsideClick';

interface ConfirmModalProps {
  confirmText: string;
  onConfirm: (param: any) => void;
}

const ConfirmModal = ({ confirmText, onConfirm }: ConfirmModalProps) => {
  const { closeConfirm, isOpen, param } = useConfirm();
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(closeConfirm, ref);
  useEscapeKey(closeConfirm);

  const handleConfirm = () => {
    onConfirm(param);
    closeConfirm();
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="top-0 left-0 fixed w-full h-full flex justify-center items-center z-40 bg-black/75 ">
      <div className="w-11/12 md:w-3/4 lg:w-1/2 max-w-lg" ref={ref}>
        <div className="relative">
          <button className="btn btn-sm btn-circle absolute right-0 -top-10" onClick={closeConfirm}>
            ✕
          </button>
          <div className="card w-full max-w-lg shadow-2xl bg-base-100">
            <div className="card-body gap-0">
              <h2 className="mb-14 text-lg font-semibold text-center">{confirmText}</h2>
              <div className="flex justify-between">
                <button className="btn btn-sm btn-secondary" onClick={closeConfirm}>
                  Cancel
                </button>
                <button className="btn btn-sm btn-primary" onClick={handleConfirm}>
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('confirm') as HTMLElement,
  );
};

export default ConfirmModal;
