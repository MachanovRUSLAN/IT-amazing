import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import homeimg from "/img/Rectangle 3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./slide.css";

// import required modules
import { Pagination } from "swiper/modules";

function HomeSlide() {
  return (
    <div className="w-full bg-black relative">
      <div className="h-[200px] w-[100%] bg-[#555555] absolute bottom-0"></div>
      <div className="m-auto lg:w-5/6 w-full relative">
        <div className="imgHome lg:hidden block h-[400px]">
          <img
            className="object-cover h-full w-full"
            src="/public/img/ekster.jpg"
            alt=""
          />
          <h1 className="absolute lg:top-[30%] top-[20%] text-center md:left-[28%] left-[10%] text-[44px]">
            Interyer Dizayn
          </h1>
          <div className="absolute border  lg:w-[250px] w-[200px]  border-white top-[55%]   md:left-[35%]  left-[25%]">
            <div class="border w-full h-[60px] flex items-center justify-center">
              <a
                href="#_"
                class="relative px-6 py-3 flex  items-center justify-center h-full w-full text-[20px] text-white group"
              >
                <span class="absolute inset-0 w-[95%] m-auto h-full transition duration-300 ease-out transform translate-y-3 bg-[#9fb576] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span class="absolute inset-0  h-full border-2 border-white-100"></span>
                <span class="relative">
                  Daha Etrafli
                  <FontAwesomeIcon className="ml-6" icon={faArrowRightLong} />
                </span>
              </a>
            </div>
          </div>
        </div>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper lg:flex hidden"
        >
          <SwiperSlide className="relative">
            <img className="w-full" src={homeimg} alt="" />
            <h1 className="absolute top-[30%] left-[30%] text-[54px]">
              Interyer Dizayn
            </h1>

            <div className="absolute border  w-[300px] border-white top-[55%] left-[35%]">
              <div class="border w-full h-[60px] flex items-center justify-center">
                <a
                  href="#_"
                  class="relative px-6 py-3 flex  items-center justify-center h-full w-full text-[30px] text-white group"
                >
                  <span class="absolute inset-0 w-[95%] m-auto h-full transition duration-300 ease-out transform translate-y-3 bg-[#9fb576] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span class="absolute inset-0  h-full border-2 border-white-100"></span>
                  <span class="relative">
                    Daha Etrafli
                    <FontAwesomeIcon className="ml-6" icon={faArrowRightLong} />
                  </span>
                </a>
              </div>
            </div>
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
