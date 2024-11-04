
import React from 'react';
import styles from './eventCard.module.css';
import SignUpButton from './SignUpButton';

interface Event {
  title: string;
  description: string;
  date: Date;
  futureEvent: boolean; // Include this if you need to use it
  imageUrl: string; // Include this if you need to use it
}

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const isFutureEvent = event.date > new Date();

  return (
    <div className={styles.eventCard}>
      <h2 className={styles.eventName}>{event.title}</h2>
      <p className={styles.eventDescription}>{event.description}</p>
      {isFutureEvent && <SignUpButton />}
    </div>
  );
};

export default EventCard;
