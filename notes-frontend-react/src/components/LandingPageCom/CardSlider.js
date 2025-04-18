import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles from the modules
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

export default function CardSlider() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper w-[240px] h-[320px]"
      >
        <SwiperSlide className="flex justify-center items-center rounded-md text-white font-bold text-xl">
          <div className="bg-btnColor flex justify-center items-center h-full">
            My Notes
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center rounded-md text-white font-bold text-xl">
          <div className="bg-rose-700  flex justify-center items-center h-full">
            Application
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center rounded-md text-white font-bold text-xl">
          <div className="bg-slate-900 flex justify-center items-center h-full">
            React as Frontend
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center rounded-md text-white font-bold text-xl">
          <div className="bg-purple-900 flex justify-center items-center h-full">
            SpringBoot as Backend
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center rounded-md text-white font-bold text-xl">
          <div className="bg-green-600 flex justify-center text-center items-center h-full">
            Basic Level App
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
