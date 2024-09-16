import React from 'react'
import styles from './nav.module.css'

const Navbar = () => {
    return (
    <div className={styles.navcontainer}>
      <nav className={styles.navbar}>
        <div className={styles.NavLinkContainer}>
            <span className={styles.smubia}>SMUBIA</span>
            <span className={styles.NavLink}>What we are</span>
            <span className={styles.NavLink}>What we do</span>
            <span className={styles.NavLink}>Datathon</span>
            <span className={styles.NavLink}>Merch</span>
            <span className={styles.NavLink}>Contact</span>
        </div>
      </nav>
    </div>
    );
  };

export default Navbar