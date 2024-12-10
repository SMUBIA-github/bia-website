"use client";
import React, { useEffect } from "react";
import Wordcard from "../components/Wordcard";
import styles from "./WhatWeDo.module.css";
import Image from "next/image";
import DAP from '../components/DAP'
import TimelineMain from '../components/Timelines/TimelineMain';
import Divider from '../components/divider';

const Page: React.FC = () => {
  useEffect(() => {
    // Check if there's a hash in the URL when the page loads
    if (window.location.hash) {
      // Remove the # from the hash to get the ID
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
  return (
    <div className={styles["page-container"]}>
      {/* Section 1: Cat image and Text */}
      <div className={styles['section1']}>
        <div className={styles['catimg-container']}>
          <Image src='/images/BIAMASCOT.png' alt="BIAMascot" className={styles.catimg} width={500} height={500} />
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
      <div className={styles["section1-cards"]}>
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
      <Divider/>
      <TimelineMain />
      <Divider/>
      <DAP />
    </div>
  );
};

export default Page;