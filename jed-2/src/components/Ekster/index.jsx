import React from "react";
import "../../common/common.css";
import "./Ekster.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

function Ekster() {
  return (
    <div className="bg-[#565656] text-center w-full">
      <div className="lg:p-20 py-[50px] lg:w-full w-5/6 lg:m-0 m-auto">
        <div className="container grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          <div className="text-start  border border-none  flex justify-center items-center lg:order-1 order-2">
            <div className="lg:p-10 p-2">
              <h1 className="lg:text-[40px] text-[35px] mt-3">
                Eksteryer və Landşaft dizayn
              </h1>
              <p className="py-10">
                Eksteryer dedikde ilk öncə ağıla gələn layihənin fasad
                görünüşüdür. Fasad dizaynında mütləq olaraq bina ölçüləri nəzərə
                alınmalıdır. Bu ölçülərə əsasən də üslub və bu üsluba uyğun
                materialı düzgün seçmək lazımdır.
              </p>
              <div class="border w-[150px] h-[40px] flex items-center justify-center">
                <a
                  href="#_"
                  class="relative px-6 py-3 flex  items-center justify-center h-full w-full  text-white group"
                >
                  <span class="absolute inset-0 w-[95%] m-auto h-full transition duration-300 ease-out transform translate-y-3 bg-[#9fb576] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span class="absolute inset-0  h-full border-2 border-white-100"></span>
                  <span class="relative">
                    Daha Etrafli
                    <FontAwesomeIcon icon={faArrowRightLong} />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="relative lg:order-2 order-1">
            <div className="img-box1 border border-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ekster;
