// Timeline2.tsx
'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EventCard from '../EventCard';
import styles from './timeline2.module.css';

const Timeline2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const dummyEvents = [
    {
      title: 'BIA Picnic',
      description: 'Learn how to use PowerQuery in the Data Analytics Cycle...',
      date: new Date('2024-11-15'),
      futureEvent: true,
      imageUrl: '/images/9thdap.jpg',
    },
    {
      title: 'Data Workshop',
      description: 'Explore data visualization techniques...',
      date: new Date('2024-09-10'),
      futureEvent: false,
      imageUrl: '/images/Co-learning2022.jpg',
    },
    {
      title: 'Data Workshop2',
      description: 'Explore data visualization techniques...',
      date: new Date('2024-09-10'),
      futureEvent: false,
      imageUrl: '/images/9thdap.jpg',
    },
    {
      title: 'Data Workshop3',
      description: 'Explore data visualization techniques...',
      date: new Date('2024-09-10'),
      futureEvent: false,
      imageUrl: '/images/Co-learning2022.jpg',
    },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (isAnimating) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      const newIndex = direction > 0
        ? Math.min(activeIndex + 1, dummyEvents.length - 1)
        : Math.max(activeIndex - 1, 0);

      if (newIndex !== activeIndex) {
        setIsAnimating(true);
        setActiveIndex(newIndex);
        
        // Clear any existing timeout
        if (scrollTimeout.current) {
          clearTimeout(scrollTimeout.current);
        }

        // Set a new timeout to allow the next scroll after animation
        scrollTimeout.current = setTimeout(() => {
          setIsAnimating(false);
        }, 1000); // Match this with your animation duration
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      container.removeEventListener('wheel', handleWheel);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [activeIndex, dummyEvents.length, isAnimating]);

  return (
    <div className={`${styles.timelineContainer} relative h-screen w-full bg-black overflow-hidden`} ref={containerRef}>
      <h1 className={styles.timelineHeader}>Timeline</h1>
      
      <div className={styles.contentWrapper}>
        {/* Left side - Images */}
        <div className={styles.imageSection}>
          <div className={styles.imageWrapper}>
            {dummyEvents.map((event, index) => (
              <motion.div
                key={index}
                className={styles.imageCard}
                initial={false}
                animate={{
                  zIndex: dummyEvents.length - Math.abs(activeIndex - index),
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
                style={{
                  cursor: 'pointer',
                  filter: index !== activeIndex ? 'brightness(0.7)' : 'brightness(1)',
                }}
              >
                <motion.img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-full object-cover rounded-xl"
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right side - Event Content */}
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
                <h2>{dummyEvents[activeIndex].title}</h2>
                <p>{dummyEvents[activeIndex].description}</p>
              </div>
              
              {dummyEvents[activeIndex].futureEvent && (
                <button className={styles.signUpButton}>
                  SIGN UP
                </button>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation dots */}
      <div className={styles.navigation}>
        {dummyEvents.map((_, index) => (
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

export default Timeline2;