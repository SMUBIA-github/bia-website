"use client";
import React, { useState } from 'react';
import CustomModal from './CustomModal';
import styles from './Wordcard.module.css';

interface WordCardProps {
  title: string;
  imageSrc: string;
  overlayContent: string;
  className?: string;
}

const Wordcard: React.FC<WordCardProps> = ({ title, imageSrc, overlayContent, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={`${styles['wordcard-container']} ${className}`}>
      <div className={styles['image-container']} onClick={toggleModal}>
        <img src={imageSrc} alt={title} className={styles['wordcard-image']} />
        <h2 className={styles['wordcard-title']}>{title}</h2>
      </div>

      <CustomModal open={isOpen} onClose={toggleModal}>
        <h2>{title}</h2>
        <img src={imageSrc} alt={title} className={styles.overlayImage} />
        <p>{overlayContent}</p>
      </CustomModal>
    </div>
  );
};

export default Wordcard;
