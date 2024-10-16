import React from 'react';
import Wordcard from '../components/Wordcard';
import styles from "./WhatWeDo.module.css";

const Page: React.FC = () => {
  return (
    <div className={styles['page-container']}>
      {/* Section 1: Cat image and Text */}
      <div className={styles['section1']}>
        <div className={styles['catimg-container']}>
          <img src='/images/BIAMASCOT.png' alt="BIAMascot" className={styles.catimg} />
        </div>
        <div className={styles['text-container']}>
          <div className={styles.header}>
            <h1>Workshops</h1>
          </div>
          <div className={styles['para-text']}>
            <p>This academic year, we're offering an exciting line-up of workshops open to everyone, regardless of skill levels or schools.</p>
          </div>
        </div>
      </div>

      {/* Wordcards Section */}
      <div className={styles['section1-cards']}>
        <Wordcard
          title="Data Handling"
          imageSrc="/images/SQLSCREEN.png"
          overlayContent="Insert description here."
          className={styles.wordcard}
        />
        <Wordcard
          title="Data Visualisation"
          imageSrc="/images/SQLSCREEN.png"
          overlayContent="Insert description here."
          className={styles.wordcard}
        />
        <Wordcard
          title="Data Science"
          imageSrc="/images/SQLSCREEN.png"
          overlayContent="Insert description here."
          className={styles.wordcard}
        />
      </div>
    </div>
  );
};

export default Page;
