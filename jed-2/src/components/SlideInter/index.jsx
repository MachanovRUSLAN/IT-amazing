import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

function InterSlide() {
  return (
    <div className="bg-[#565656] text-center pt-4 pb-4">
      <h1>Protfolio</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 2,
          depth: 100,
          modifier: 4,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/img/inter1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/inter4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/inter3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/inter2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/salon.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default InterSlide;
