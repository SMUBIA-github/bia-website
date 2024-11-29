"use client"; // Add this at the top
import React, { useState, useEffect, useMemo } from "react";  // Import useMemo
import { CSSTransition } from "react-transition-group";
import styles from "./changingtext.module.css"; // Import CSS for transition styles

const TextChanger = () => {
  const [index, setIndex] = useState(0);
  const [inProp, setInProp] = useState(true);

  // Memoize the texts array to prevent unnecessary re-creations on every render
  const texts = useMemo(() => [
    "Empowering individuals from all backgrounds",
    "Creating innovation and excellence in every project and partnership",
    "To be a leading platform for business intelligence and data analytics",
  ], []); // Empty array ensures it is only created once

  useEffect(() => {
    const interval = setInterval(() => {
      setInProp(false); // Trigger exit animation
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setInProp(true); // Trigger enter animation
      }, 2000); // Delay to match the exit animation duration
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [texts]);  // Keep texts as a dependency

  return (
    <div className={styles.containers}>
      <CSSTransition in={inProp} timeout={2000} classNames={styles}>
        <span className={styles.text}>{texts[index]}</span>
      </CSSTransition>
    </div>
  );
};

export default TextChanger;
