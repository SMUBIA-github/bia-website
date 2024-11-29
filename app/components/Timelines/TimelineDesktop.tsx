// TimelineDesktop.tsx
'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './timeline2.module.css';

// Define the Event type
interface Event {
  imageUrl: string;
  title: string;
  description: string;
  futureEvent?: boolean; // optional field
}

const TimelineDesktop = ({ events }: { events: Event[] }) => {  // Type events prop
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let lastScrollTime = Date.now();
    const scrollCooldown = 1000; // 1 second cooldown

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      const currentTime = Date.now();
      if (currentTime - lastScrollTime < scrollCooldown || isAnimating) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      const newIndex = direction > 0
        ? Math.min(activeIndex + 1, events.length - 1)
        : Math.max(activeIndex - 1, 0);

      if (newIndex !== activeIndex) {
        setIsAnimating(true);
        setActiveIndex(newIndex);
        lastScrollTime = currentTime;

        setTimeout(() => {
          setIsAnimating(false);
        }, scrollCooldown);
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [activeIndex, events.length, isAnimating]);

  return (
    <div className={styles.timelineContainer} ref={containerRef}>
      <h1 className={styles.timelineHeader}>Timeline</h1>
      
      <div className={styles.contentWrapper}>
        <div className={styles.imageSection}>
          <div className={styles.imageWrapper}>
            {events.map((event, index) => (
              <motion.div
                key={index}
                className={styles.imageCard}
                initial={false}
                animate={{
                  zIndex: events.length - Math.abs(activeIndex - index),
                  y: `${(index - activeIndex) * 30}%`,
                  scale: index === activeIndex ? 1 : 0.8,
                  opacity: 1 - Math.abs(activeIndex - index) * 0.3,
                  rotateX: '45deg',
                  rotateY: '25deg',
                  rotateZ: '-30deg',
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut"
                }}
                onClick={() => !isAnimating && setActiveIndex(index)}
              >
                <motion.img
                  src={event.imageUrl}
                  alt={event.title}
                  className={styles.cardImage}
                  style={{
                    filter: index !== activeIndex ? 'brightness(0.7)' : 'brightness(1)',
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div className={styles.contentSection}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={styles.eventContent}
            >
              <div className={styles.eventText}>
                <h2>{events[activeIndex].title}</h2>
                <p>{events[activeIndex].description}</p>
              </div>
              
              {events[activeIndex].futureEvent && (
                <button className={styles.signUpButton}>
                  SIGN UP
                </button>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className={styles.navigation}>
        {events.map((_, index) => (
          <button
            key={index}
            onClick={() => !isAnimating && setActiveIndex(index)}
            className={`${styles.navDot} ${index === activeIndex ? styles.active : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

// Export the component
export default TimelineDesktop;
