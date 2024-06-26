import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

function PortfolioSlide() {
  return (
    <div className="bg-[#565656] text-center pt-4 pb-4">
      <h1>Protfoio</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 1,
          depth: 100,
          modifier: 4,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper p-4"
      >
        <SwiperSlide>
          <img src="./img/layihe4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/inter1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/inter4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/land1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/lands3.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default PortfolioSlide;
