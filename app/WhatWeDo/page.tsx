"use client";
import React, { useEffect} from "react";
import Wordcard from "../components/Wordcard";
import styles from "./WhatWeDo.module.css";
import Image from "next/image";
import DAP from '../components/DAP'
import TimelineMain from '../components/Timelines/TimelineMain';
import Divider from '../components/divider';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const Page: React.FC = () => {
  const { ref: workshopRef, inView: workshopInView } = useInView();
  const { ref: timelineRef, inView: timelineInView } = useInView();
  const { ref: dapRef, inView: dapInView } = useInView();

  const workshopControls = useAnimation();
  const timelineControls = useAnimation();
  const dapControls = useAnimation();

  useEffect(() => {
    if (workshopInView) {
      workshopControls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.6 }
      });
    } else {
      workshopControls.start({
        y: 50,
        opacity: 0
      });
    }
  }, [workshopInView, workshopControls]);

  useEffect(() => {
    if (timelineInView) {
      timelineControls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.6 }
      });
    } else {
      timelineControls.start({
        y: 50,
        opacity: 0
      });
    }
  }, [timelineInView, timelineControls]);

  useEffect(() => {
    if (dapInView) {
      dapControls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.6 }
      });
    } else {
      dapControls.start({
        y: 50,
        opacity: 0
      });
    }
  }, [dapInView, dapControls]);

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
            <p>This academic year, we&apos;re offering an exciting line-up of workshops open to everyone, regardless of skill levels or schools.</p>
          </div>
        </div>
      </div>

      {/* Wordcards Section */}
      <div className={styles["section1-cards"]}>
        <motion.div
          ref={workshopRef}
          initial={{ y: 50, opacity: 0 }}
          animate={workshopControls}
          className={styles.wordcard}
        >
          <Wordcard
            title="Data Handling"
            imageSrc="/images/SQLSCREEN.png"
            overlayContent="Insert description here."
          />
        </motion.div>
        <motion.div
          ref={workshopRef}
          initial={{ y: 50, opacity: 0 }}
          animate={workshopControls}
          className={styles.wordcard}
        >
          <Wordcard
            title="Data Visualisation"
            imageSrc="/images/SQLSCREEN.png"
            overlayContent="Insert description here."
          />
        </motion.div>
        <motion.div
          ref={workshopRef}
          initial={{ y: 50, opacity: 0 }}
          animate={workshopControls}
          className={styles.wordcard}
        >
          <Wordcard
            title="Data Science"
            imageSrc="/images/SQLSCREEN.png"
            overlayContent="Insert description here."
          />
        </motion.div>
      </div>

      <Divider />

      {/* Timeline Section */}
      <div className={styles["timeline-section"]}>
        <motion.div
          ref={timelineRef}
          initial={{ y: 50, opacity: 0 }}
          animate={timelineControls}
        >
          <TimelineMain />
        </motion.div>
      </div>

      <Divider />

      {/* DAP Section */}
      <div className={styles["dap-section"]}>
        <motion.div
          ref={dapRef}
          initial={{ y: 50, opacity: 0 }}
          animate={dapControls}
        >
          <DAP />
        </motion.div>
      </div>
    </div>
  );
};

export default Page;