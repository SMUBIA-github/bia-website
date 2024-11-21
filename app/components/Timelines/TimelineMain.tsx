// TimelineMain.tsx
'use client';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import TimelineDesktop from './TimelineDesktop';
import TimelineMobile from './TimelineMobile';

const TimelineMain = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  
  const events = [
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

  return isMobile ? (
    <TimelineMobile events={events} />  // Passing events as a prop
  ) : (
    <TimelineDesktop events={events} />  // Passing events as a prop
  );
};

export default TimelineMain;
