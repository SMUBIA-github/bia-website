// TimelineMobile.tsx
'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Controller } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-cards';
import styles from './timeline2.module.css';

// Define the Event type
interface Event {
  imageUrl: string;
  title: string;
  description: string;
  futureEvent?: boolean; // optional field
}

const TimelineMobile = ({ events }: { events: Event[] }) => {  // Type events prop
  const [firstSwiper, setFirstSwiper] = useState<SwiperType | null>(null);
  const [secondSwiper, setSecondSwiper] = useState<SwiperType | null>(null);

  return (
    <div className={styles.mobileContainer}>
      <h1 className={styles.timelineHeader}>Timeline</h1>
      
      <div className={styles.carouselSection}>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards, Controller]}
          className={styles.swiper}
          onSwiper={setFirstSwiper}
          controller={{ control: secondSwiper }}
          cardsEffect={{
            perSlideOffset: 8,
            perSlideRotate: 2,
            rotate: true,
            slideShadows: true,
          }}
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
          modules={[Controller]}
          onSwiper={setSecondSwiper}
          controller={{ control: firstSwiper }}
          className={styles.textSwiper}
          slidesPerView={1}
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

export default TimelineMobile;
