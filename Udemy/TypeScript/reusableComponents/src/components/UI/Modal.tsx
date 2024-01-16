import { ReactNode, forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

export type ModalHandle = {
  open: () => void;
};

type ModalProps = {
  closeModal: () => void;
  children: ReactNode;
};

const Modal = forwardRef<ModalHandle, ModalProps>(function ({ children, closeModal }, ref) {
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        if (dialog.current) {
          dialog.current.showModal();
        }
      },
    };
  });
  return createPortal(
    <dialog ref={dialog} className="modal" onClose={closeModal}>
      {children}
    </dialog>,
    document.getElementById('modal-root')!
  );
});

export default Modal;
