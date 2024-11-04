import React from 'react';
import styles from './Overlay.module.css';

interface OverlayProps {
  isOpen: boolean;
  title: string;
  imageSrc: string;
  content: string;
  onClose: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ isOpen, title, imageSrc, content, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log("Overlay clicked:", e.target);
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.overlayContent}>
        <span className={styles.closeOverlay} onClick={onClose}>&times;</span>
        <img src={imageSrc} alt={title} className={styles.overlayImage} />
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Overlay;
