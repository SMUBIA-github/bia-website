"use client";
import React, { useState } from 'react';
import Overlay from './Overlay';
import styles from './Wordcard.module.css';

interface WordCardProps {
  title: string;
  imageSrc: string;
  overlayContent: string;
  className?: string;
}

const Wordcard: React.FC<WordCardProps> = ({ title, imageSrc, overlayContent, className }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  const closeOverlay = () => {
    setShowOverlay(false);
  };

  return (
    <div className={`${styles['wordcard-container']} ${className}`}>
      <div className={styles['image-container']}>
        <img src={imageSrc} alt={title} className={styles['wordcard-image']} />
        <h2 className={styles['wordcard-title']}>{title}</h2>
        <button onClick={toggleOverlay} className={styles['wordcard-button']}></button>
      </div>

      {/* Overlay Component */}
      <Overlay
        isOpen={showOverlay}
        title={title}
        imageSrc={imageSrc}
        content={overlayContent}
        onClose={closeOverlay}
      />
    </div>
  );
};

export default Wordcard;
