// TimelineMain.tsx
'use client';
import React from 'react';
// import { useMediaQuery } from 'react-responsive';
// import TimelineDesktop from './TimelineDesktop';
// import TimelineMobile from './TimelineMobile';
import Timeline from './Timeline';

const TimelineMain = () => {
  // const isMobile = useMediaQuery({ maxWidth: 768 });
  
  const events = [
    {
      title: 'Pandas Workshop',
      description: 'Explore the Pandas library in Python to manipulate and analyze data effectively. This hands-on workshop will cover data cleaning, transformation, and exploration techniques essential for any data scientist.',
      date: new Date('2024-08-30'),
      futureEvent: false,
      imageUrl: '/images/pandasWorkshop.jpg',
    },
    {
      title: 'Excel Workshop',
      description: 'Learn advanced Excel techniques to handle and analyze large datasets. This workshop will focus on creating impactful dashboards and leveraging Excel for business intelligence tasks.',
      date: new Date('2024-09-05'),
      futureEvent: false,
      imageUrl: '/images/dataHandling(Excel).jpg',
    },
    {
      title: 'Alumni Networking Night',
      description: 'An opportunity to network with DAP alumni, hear about their experiences in the data analytics industry, and gain valuable career insights that will help you succeed in the field.',
      date: new Date('2024-10-12'),
      futureEvent: false,
      imageUrl: '/images/ANN.jpg',
    },
    {
      title: 'Finals Welfare',
      description: 'A session designed to provide support and resources to help students prepare for their finals. Enjoy stress-relief activities, study tips, and guidance to help you succeed during exam season.',
      date: new Date('2024-12-01'),
      futureEvent: false,
      imageUrl: '/images/Welfare.png',
    },
    {
      title: 'Tea Session',
      description: 'Join us for an informal tea session where you can connect with mentors and fellow students. This is the perfect time to discuss data science topics, share ideas, and unwind.',
      date: new Date('2024-08-22'),
      futureEvent: false,
      imageUrl: '/images/TeaSession.jpg',
    },
    {
      title: 'BIA Picnic',
      description: 'Enjoy a relaxed afternoon with fellow DAP members at the BIA Picnic. Participate in informal discussions about data analytics, enjoy the outdoors, and build lasting connections with peers.',
      date: new Date('2024-11-15'),
      futureEvent: false,
      imageUrl: '/images/biaPicnic.jpg',
    },
  ];
  
  return <Timeline events={events}/>;
  // return isMobile ? (
  //   <TimelineMobile events={events} />  // Passing events as a prop
  // ) : (
  //   <TimelineDesktop events={events} />  // Passing events as a prop
  // );
};

export default TimelineMain;
