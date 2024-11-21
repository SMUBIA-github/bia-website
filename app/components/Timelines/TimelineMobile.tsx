// TimelineMobile.tsx
'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import styles from './timeline2.module.css';

const TimelineMobile = ({ events }) => {
  return (
    <div className={styles.mobileContainer}>
      <h1 className={styles.timelineHeader}>Timeline</h1>
      
      <div className={styles.carouselSection}>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className={styles.swiper}
        >
          {events.map((event, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <img src={event.imageUrl} alt={event.title} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={styles.mobileContent}>
        <Swiper
          className={styles.textSwiper}
          slidesPerView={1}
          onSlideChange={(swiper) => {
            // You can sync this with the card swiper if needed
          }}
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <div className={styles.mobileEventContent}>
                <h2>{event.title}</h2>
                <p>{event.description}</p>
                {event.futureEvent && (
                  <button className={styles.signUpButton}>
                    SIGN UP
                  </button>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

// Export the component
export default TimelineMobile;
