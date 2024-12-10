// TimelineMain.tsx
'use client';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import TimelineDesktop from './TimelineDesktop';
import TimelineMobile from './TimelineMobile';
import Timeline from './Timeline';

const TimelineMain = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  
  const events = [
    {
      title: 'BIA Picnic',
      description: 'Learn how to use PowerQuery in the Data Analytics Cycle to process data, transform it, and create insights for your projects.',
      date: new Date('2024-11-15'),
      futureEvent: true,
      imageUrl: '/images/9thdap.jpg',
    },
    {
      title: 'Data Workshop',
      description: 'Explore data visualization techniques and how to present your findings effectively using different tools and visual storytelling methods.',
      date: new Date('2024-09-10'),
      futureEvent: false,
      imageUrl: '/images/Co-learning2022.jpg',
    },
    {
      title: 'Data Workshop2',
      description: 'Dive deeper into data visualization concepts, including advanced techniques and tools to analyze large datasets for actionable insights.',
      date: new Date('2024-09-10'),
      futureEvent: false,
      imageUrl: '/images/9thdap.jpg',
    },
    {
      title: 'Data Workshop3',
      description: 'Understand how to apply complex statistical methods in data visualization and enhance your analytical approach to business intelligence.',
      date: new Date('2024-09-10'),
      futureEvent: false,
      imageUrl: '/images/Co-learning2022.jpg',
    },
  ];
  
  return <Timeline events= {events}/>
  // return isMobile ? (
  //   <TimelineMobile events={events} />  // Passing events as a prop
  // ) : (
  //   <TimelineDesktop events={events} />  // Passing events as a prop
  // );
};

export default TimelineMain;
