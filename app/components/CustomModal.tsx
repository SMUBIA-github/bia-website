import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Overlay.module.css';

interface CustomModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({ open, onClose, children }) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.overlayContent}>
        <span className={styles.closeOverlay} onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </>,
    document.getElementById('portal') || document.body
  );
};

export default CustomModal;
