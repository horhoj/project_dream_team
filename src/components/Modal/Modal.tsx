import { FC, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Portal } from '@components/Portal';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: FC<ModalProps> = ({ children, isOpen, onClose }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isOpen]);

  return (
    <Portal>
      <CSSTransition
        in={isOpen}
        nodeRef={ref}
        timeout={300}
        unmountOnExit
        classNames={{
          enter: 'app__modal-enter',
          enterActive: 'app__modal-enterActive',
          exit: 'app__modal-exit',
          exitActive: 'app__modal-exitActive',
        }}
      >
        <div className={'app__modal-wrap'} onClick={onClose} ref={ref}>
          {children}
        </div>
      </CSSTransition>
    </Portal>
  );
};
