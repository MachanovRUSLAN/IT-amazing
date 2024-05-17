import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

function Online() {
  return (
    <div className="text-center bg-[#555555] w-full lg:py-10 py-10">
      <h1 className="lg:p-10 p-0 lg:text-[40px] text-[30px]">
        Hər hansı bir sualınız var? <br />
        Online müraciət göndərin
      </h1>
      <div className="Online-Box lg:p-10 p-2 border border-white-500 lg:w-5/6 w-full m-auto h-full lg:flex items-center justify-center block">
        <div className="input m-2 lg:h-[60px] h-[70px] lg:w-[300px]  border border-white-500 bg-transparent">
          <input
            type="text"
            placeholder="Ad,Soyad"
            className="w-full h-full bg-transparent p-2"
          />
        </div>
        <div className="input m-2 lg:h-[60px] h-[70px] lg:w-[300px]  lg:m-10 border border-white-500">
          <input
            type="text"
            placeholder="Telefon nomresi"
            className="w-full h-full bg-transparent p-2"
          />
        </div>
        <div class="border lg:w-[150px] h-[40px] lg:flex items-center justify-center">
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
  );
}

export default Online;
