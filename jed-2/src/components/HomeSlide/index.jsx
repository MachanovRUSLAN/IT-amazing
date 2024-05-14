import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import homeimg from "../../components/img/Rectangle 3.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./slide.css";

// import required modules
import { Pagination } from "swiper/modules";

function HomeSlide() {
  return (
    <div className="w-full bg-black">
      <div className="m-auto w-5/6">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="w-full" src={homeimg} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full" src={homeimg} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full" src={homeimg} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full" src={homeimg} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default HomeSlide;
