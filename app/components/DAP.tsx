import React from 'react';
import Wordcard from './Wordcard';
import styles from './DAP.module.css';
import Image from 'next/image'; // Keep this for other images
// No need to import the GIF

const DAP: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Other Sections */}

      {/* Highlights Section */}
      <div className={styles.highlightsSection}>
        <h2 className={styles.highlightsTitle}>Highlights from DAP</h2>
        <div className={styles.projectsGrid}>
          <div className={styles.projectItem}>
            <div className={styles.imageContainer}>
              <Image 
                src="/images/ASL2.jpg" 
                alt="ASL Fingerspelling Detection Tool" 
                fill
                className={styles.projectImage}
                objectFit="cover"
              />
            </div>
            <div className={styles.projectDescription}>
              <h3 className={styles.projectTitle}>ASL Fingerspelling Detection Tool</h3>
              <p className={styles.projectTeam}>
                <strong>Team:</strong> Jolene Yeo, Regine Tan, Rheza Paleva, Vicky Qu<br />
                <strong>Mentor:</strong> Jowett
              </p>
              <p className={styles.projectText}>
                As part of our DAP project, we delved into the realm of American Sign Language (ASL), exploring how we could harness machine learning to create a model capable of detecting and spelling out the sign languages given by the user.
              </p>
            </div>
          </div>

          <div className={styles.projectItem}>
            <div className={styles.imageContainer}>
              <Image 
                src="/images/Help-Htoo-Resale.jpg" 
                alt="HDB Price Prediction Model" 
                fill
                className={styles.projectImage}
                objectFit="cover"
              />
            </div>
            <div className={styles.projectDescription}>
              <h3 className={styles.projectTitle}>HDB Price Prediction Model</h3>
              <p className={styles.projectTeam}>
                <strong>Team:</strong> Elijah Khor, Htoo Myat Naing, Ivan Yeo, Keng Boon<br />
                <strong>Mentors:</strong> King Yeh, Gabriel Sidik
              </p>
              <p className={styles.projectText}>
                We created new features for each individual flat using the OneMap API such as coordinate data, postal code, and distances from places of interest...
              </p>
            </div>
          </div>

          <div className={styles.projectItem}>
            <div className={styles.imageContainer}>
              {/* Use direct src path */}
              <img 
                src="/images/Lyrics-Machine.gif" 
                alt="Lyrics Machine" 
                className={styles.projectImage} 
              />
            </div>
            <div className={styles.projectDescription}>
              <h3 className={styles.projectTitle}>Lyrics Machine</h3>
              <p className={styles.projectTeam}>
                <strong>Team:</strong> Phyo, Rafe, Charmaine, Shu Rui<br />
                <strong>Mentors:</strong> Gabriel Sidik, Renata
              </p>
              <p className={styles.projectText}>
                Ever wondered how cool it would be if we could use machine learning to generate some sick lyrics? That was exactly what went through our minds while writing the project proposal for SMUBIA&apos;s Data Associate Programme.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DAP;
