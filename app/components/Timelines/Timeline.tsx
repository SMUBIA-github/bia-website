'use client';
import React, { useState, useEffect, useRef } from 'react';
import styles from './timeline.module.css';
import EventCard from '../EventCard';

interface Event {
  title: string;
  description: string;
  date: Date;
  futureEvent: boolean;
  imageUrl: string;
}

const dummyEvents: Event[] = [
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
  // Add more events as needed
];

const Timeline: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timelineRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (event: WheelEvent) => {
    if (timelineRef.current && timelineRef.current.contains(event.target as Node)) {
      event.preventDefault(); // Prevent default scrolling behavior only within the component
      const delta = event.deltaY;

      if (delta > 30) {
        // Scroll down (threshold to reduce sensitivity)
        setCurrentIndex((prev) => (prev < dummyEvents.length - 1 ? prev + 1 : prev));
      } else if (delta < -30) {
        // Scroll up
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
      }
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => window.removeEventListener('wheel', handleScroll);
  }, []);

  return (
    <div ref={timelineRef} className={styles.timelineContainer}>
      <div className={styles.imageContainer}>
        {dummyEvents.map((event, index) => {
          const isCurrent = index === currentIndex;
          const isVisible = Math.abs(index - currentIndex) <= 1;

          return (
            isVisible && (
              <img
                key={index}
                src={event.imageUrl}
                alt={event.title}
                className={`${styles.image} ${isCurrent ? styles.currentImage : styles.hiddenImage}`}
              />
            )
          );
        })}
      </div>
      <div className={styles.eventDetailContainer}>
        <EventCard event={dummyEvents[currentIndex]} />
      </div>
    </div>
  );
};

export default Timeline;
