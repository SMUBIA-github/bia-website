import React from 'react'
import styles from './footer.module.css'

function FooterBar() {
    return (
      <div className={styles.footer}>
        <div className={styles.columnbia}>
          <h3>SMUBIA - Join Now</h3>
        </div>
        <div className={styles.column}>
          <h3>Home Page</h3>
            <p>Mission</p>
            <p>Partners</p>
        </div>
        <div className={styles.column}>
          <h3>What We Do</h3>
            <p>Workshops</p>
            <p>Data Associate Program</p>
        </div>
        <div className={styles.column}>
          <h3>Datathon</h3>
            <p>Statement</p>
            <p>Prizes</p>
        </div>
        <div className={styles.column}>
          <h3>Contact</h3>
          <p>Institute of Innovation & Entrepreneurship
                Singapore Management University
                Level 5, SMU Connexion
                40 Stamford Road
                Singapore 178908
          </p>
        </div>
      </div>
    );
  }

export default FooterBar