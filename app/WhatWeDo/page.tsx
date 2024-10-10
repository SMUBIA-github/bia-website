import React from 'react';
import Wordcard from '../components/Wordcard';
import styles from "./WhatWeDo.module.css";

const Page: React.FC = () => {
  return (
    <div className="page-container">
      {/* Section 1 */}
      <div className={styles['section1']}>
        <Wordcard
          title="Data Handling"
          imageSrc="/images/SQLSCREEN.png"
          overlayContent="Insert desciption here"
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
