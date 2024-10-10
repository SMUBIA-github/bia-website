"use client";
import React, { useState } from 'react';
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

  const handleOverlayClick = () => {
    setShowOverlay(false);
  };

  return (
    <div className={`${styles['wordcard-container']} ${className}`}>
      <div className={styles['image-container']}>
        <img src={imageSrc} alt={title} className={styles['wordcard-image']} />
        <h2 className={styles['wordcard-title']}>{title}</h2>
        <button onClick={toggleOverlay} className={styles['wordcard-button']}></button>
      </div>
      



      {showOverlay && (
        <div className={styles['overlay']} onClick={handleOverlayClick}>
          <div className={styles['overlay-content']} onClick={(e) => e.stopPropagation()}>
            <span className={styles['close-overlay']} onClick={toggleOverlay}>&times;</span>
            <p>{overlayContent}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wordcard;
