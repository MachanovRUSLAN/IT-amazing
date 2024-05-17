import React from "react";
import "../../common/common.css";
import "./sho.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

function Shop() {
  return (
    <div className="bg-[#565656] text-center w-full">
      <div className="lg:p-20 p-0 lg:w-full w-5/6 lg:m-0 m-auto">
        <div className="container grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          <div className="relative">
            <div className="img-box3 border border-white"></div>
          </div>
          <div className="text-start  border border-none  flex justify-start items-center">
            <div className="lg:p-10 p-2">
              <h1 className="lg:text-[40px] text-[35px] mt-3">
                İnteryer dizayn
              </h1>
              <p className="lg:py-10">
                Hər bir məkanın daxili dizaynının ayrılmaz hissəsi gözəllik və
                funksionallıqdırsa orada istifadə olunan aksesuar, dekor, işıq
                sistemi isə o dizayna fərqlilik verməsi, yadda qalan etməsidir.
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
        </div>
      </div>
    </div>
  );
}

export default Shop;
