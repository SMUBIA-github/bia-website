import React from 'react'
import styles from './nav.module.css'
import Link from 'next/link'

const Navbar = () => {
    return (
    <div className={styles.navcontainer}>
      <nav className={styles.navbar}>
        <div className={styles.NavLinkContainer}>
            <span className={styles.smubia}>SMUBIA</span>
            <Link href="./" className={styles.NavLink}>Who we are</Link>
            <Link href="/WhatWeDo" className={styles.NavLink}>What we do</Link>
            <Link href="/Datathon" className={styles.NavLink}>Datathon</Link>
            <Link href="/Merchandise" className={styles.NavLink}>Merch</Link>
            <Link href="/ContactUs" className={styles.NavLink}>Contact</Link>
        </div>
      </nav>
    </div>
    );
  };

export default Navbar