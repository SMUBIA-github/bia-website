"use client";
import React, { useState } from 'react';
import CustomModal from './CustomModal';
import styles from './Wordcard.module.css';

interface WordCardProps {
  title: string;
  imageSrc: string;
  overlayContent: React.ReactNode;
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
        <h2 className={styles['wordcard-title']}>
          <span className={styles['title-text']}>{title}</span>
        </h2>
      </div>

      <CustomModal
        isOpen={isOpen}
        onClose={toggleModal}
        title={title}
        imageSrc={imageSrc}
        overlayContent={overlayContent}
      />
    </div>
  );
};

export default Wordcard;
