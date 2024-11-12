// components/ContactUs.js
import React from "react";
import styles from "./page.module.css"; // Assuming you are still using CSS Modules

const ContactUs = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Contact Us</h1>
      <p className={styles.description}>
        Feel free to reach out to us on LinkedIn or download our information
        document.
      </p>

      <div className={styles.links}>
        <a
          href="https://www.linkedin.com/company/13402601/" // Replace with your LinkedIn URL
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Connect on LinkedIn
        </a>
        <a
          href="/files/SMUBIA.Prospectus.pdf" // Ensure this file is placed in the public/files folder
          download
          className={styles.link}
        >
          Download Prospectus
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
