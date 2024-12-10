import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Controller } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-cards';

interface Event {
  imageUrl: string;
  title: string;
  description: string;
  futureEvent?: boolean;
}

const Timeline = ({ events }: { events: Event[] }) => {
  const [imageSwiper, setImageSwiper] = useState<SwiperType | null>(null);
  const [contentSwiper, setContentSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
<div className="relative w-full min-h-screen bg-black flex flex-col items-center px-4 md:px-8">
  {/* Content Container */}
  <div className="relative w-full max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col items-center">
    <h1 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-white mt-8 mb-4">
      Timeline
    </h1>

        {/* Main Content Wrapper */}
        <div className="w-full flex flex-col items-center gap-8 py-8">
          {/* Image Section with Larger Sizing */}
          <div className="w-full relative">
            <div className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] xl:max-w-[70%] mx-auto aspect-[16/9]">
              <Swiper
                effect="cards"
                grabCursor={true}
                modules={[EffectCards, Controller]}
                className="w-full h-full"
                onSwiper={setImageSwiper}
                controller={{ control: contentSwiper }}
                cardsEffect={{
                  perSlideOffset: 8,
                  perSlideRotate: 2,
                  rotate: true,
                  slideShadows: true,
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              >
                {events.map((event, index) => (
                  <SwiperSlide key={index} className="rounded-xl overflow-hidden">
                    <div className="relative w-full h-full">
                      <img
                        src={event.imageUrl}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <div
                        className={`absolute inset-0 ${
                          index !== activeIndex ? 'bg-black/30' : ''
                        }`}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Navigation Buttons - Original Style */}
            <div className="flex justify-center gap-6 mt-8">
              <button
                onClick={() => imageSwiper?.slidePrev()}
                className="bg-transparent text-white rounded-full p-3 hover:bg-white hover:text-black transition-colors"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={() => imageSwiper?.slideNext()}
                className="bg-transparent text-white rounded-full p-3 hover:bg-white hover:text-black transition-colors"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>
          </div>

          {/* Content Section with Larger Text */}
          <div className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] xl:max-w-[70%] mx-auto">
            <Swiper
              modules={[Controller]}
              onSwiper={setContentSwiper}
              controller={{ control: imageSwiper }}
              className="w-full"
              allowTouchMove={false}
            >
              {events.map((event, index) => (
                <SwiperSlide key={index}>
                  <div className="text-center p-8">
                    <h2 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
                      {event.title}
                    </h2>
                    <p className="text-md md:text-xl lg:text-2xl xl:text-3xl text-white/80 mb-8 max-w-[90%] mx-auto">
                      {event.description}
                    </p>
                    {event.futureEvent && (
                      <button className="bg-transparent text-white font-semibold 
                                     px-8 py-3 rounded-full border-2 border-white
                                     hover:bg-white hover:text-black transition-colors
                                     text-lg md:text-xl lg:text-2xl
                                     uppercase tracking-wider">
                        SIGN UP
                      </button>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
