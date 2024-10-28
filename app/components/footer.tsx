import React from "react";
import styles from "./footer.module.css";

function FooterBar() {
  return (
    <div className={styles.footer}>
      <div className="row flex-nowrap">
        {/* SMUBIA - Join Now Section */}
        <div className={`col-6 col-md-2 px-5 ${styles.column}`}>
          <h3>SMUBIA - Join Now</h3>
        </div>

        {/* Centered Content Section */}
        <div className="col-md-6 d-none d-md-flex justify-content-center">
          <div className="row">
            <div className="col-4">
              <div className={styles.column}>
                <h3>Home Page</h3>
                <p>Mission</p>
                <p>Partners</p>
              </div>
            </div>
            <div className="col-4">
              <div className={styles.column}>
                <h3>What We Do</h3>
                <p>Workshops</p>
                <p>Data Associate Program</p>
              </div>
            </div>
            <div className="col-4">
              <div className={styles.column}>
                <h3>Datathon</h3>
                <p>Statement</p>
                <p>Prizes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="col-6 col-md-3">
          <div className={styles.column}>
            <h3>Contact</h3>
            <p>
              Institute of Innovation & Entrepreneurship <br />
              Singapore Management University <br />
              Level 5, SMU Connexion <br />
              40 Stamford Road <br />
              Singapore 178908
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterBar;
