import React from 'react';
import styles from './eventCard.module.css';

interface Event {
  title: string;
  description: string;
  date: Date;
  futureEvent: boolean;
  imageUrl: string;
}

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const isFutureEvent = event.date > new Date();

  return (
    <div className="w-full max-w-md text-white">
      <h2 className="text-4xl font-bold mb-4">{event.title}</h2>
      <p className="text-lg text-gray-300 mb-8">{event.description}</p>
      {isFutureEvent && (
        <button className="px-8 py-3 bg-transparent text-white border-2 border-white rounded-full hover:bg-white hover:text-black transition-colors duration-300">
          SIGN UP
        </button>
      )}
    </div>
  );
};

export default EventCard;

