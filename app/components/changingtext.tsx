"use client"; // Add this at the top
import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./changingtext.module.css"; // Import CSS for transition styles

const TextChanger = () => {
  const [index, setIndex] = useState(0);
  const [inProp, setInProp] = useState(true);

  const texts = [
    "Empowering individuals from all backgrounds",
    "Creating innovation and excellence in every project and partnership",
    "To be a leading platform for business intelligence and data analytics",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setInProp(false); // Trigger exit animation
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setInProp(true); // Trigger enter animation
      }, 2000); // Delay to match the exit animation duration
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <div className={styles.container}>
      <CSSTransition in={inProp} timeout={2000} classNames={styles}>
        <span className={styles.text}>{texts[index]}</span>
      </CSSTransition>
    </div>
  );
};

export default TextChanger;
