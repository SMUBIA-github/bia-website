"use client";
import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

function FooterBar() {
  return (
    <div className={styles.footer}>
      <div className="row flex-nowrap">
        {/* SMUBIA - Join Now Section */}
        <div className={`col-6 col-md-3`}>
          <div className={styles.column}>
            <div className={styles.namecontainer}>
              <Image
                src="/images/logo.png"
                alt="logo"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "35%",
                  height: "auto",
                  minWidth: "100px",
                  margin: "auto",
                }}
              />
            </div>
          </div>
        </div>
        {/* Centered Content Section */}
        <div className={`row ${styles.tagcontainer}`}>
          <div className="col-md-6 d-none d-md-flex justify-content-end">
            <div className="row">
              <div className="col-6">
                <div className={styles.column}>
                  <h3>
                    <Link href="./">Home Page</Link>
                  </h3>
                  <p>
                    <Link
                      href="/#mission"
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById("mission");
                        console.log(element);
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      Mission
                    </Link>
                  </p>
                  <p>
                    {" "}
                    <Link
                      href="/#vision"
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById("vision");
                        console.log(element);
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      Vision
                    </Link>
                  </p>
                  <p>
                    {" "}
                    <Link
                      href="/#alumni"
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById("alumni");
                        console.log(element);
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      Alumni
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div className={styles.column}>
                  <h3>
                    <Link href="/WhatWeDo">What We Do</Link>
                  </h3>
                  <p>
                    <Link href="/WhatWeDo#workshop">Workshops</Link>
                  </p>
                  <p>
                    <Link href="/WhatWeDo#dap">Data Associate Program</Link>
                  </p>
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
    </div>
  );
}

export default FooterBar;
