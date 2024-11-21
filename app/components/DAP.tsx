import React from 'react';
import Wordcard from './Wordcard';
import styles from './DAP.module.css';

const DAP: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.headerSection}>
        <h1 className={styles.title}>Data Associates Programme</h1>
        <p className={styles.subtitle}>SMU BIA's flagship academic programme</p>
        <p className={styles.description}>
          DAP is a project-oriented learning programme where mentees can learn through self-initiated 
          projects in small groups and weekly theory sessions in tandem.
        </p>
        <p className={styles.additionalInfo}>
          Through mentoring, DAP aims to equip our associates with important data science knowledge 
          and skills by creating a co-learning community.
        </p>
        <button className={styles.slideDeckButton}>
          Slide Deck
        </button>
      </div>

      {/* Program Cards Section */}
      <div className={styles.cardsSection}>
        <Wordcard
          title="Co-learning"
          imageSrc="/images/SQLSCREEN.png"
          overlayContent="Insert description here."
          className={styles.programCard}
        />
        <Wordcard
          title="Project"
          imageSrc="/images/SQLSCREEN.png"
          overlayContent="Insert description here."
          className={styles.programCard}
        />
        <Wordcard
          title="Community"
          imageSrc="/images/SQLSCREEN.png"
          overlayContent="Insert description here."
          className={styles.programCard}
        />
      </div>

      {/* Highlights Section */}
      <div className={styles.highlightsSection}>
        <h2 className={styles.highlightsTitle}>Highlights from the 10th DAP</h2>
        <div className={styles.projectsGrid}>
          <div className={styles.projectItem}>
            <div className={styles.projectImage}>
              PROJECT PICTURE?
            </div>
            <div className={styles.projectDescription}>
              Project Description
            </div>
          </div>
          <div className={styles.projectItem}>
            <div className={styles.projectDescription}>
              Project Description
            </div>
            <div className={styles.projectImage}>
              PROJECT PICTURE?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DAP;
