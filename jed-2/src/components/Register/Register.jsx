import React from "react";
import RegImg from "/img/salon.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

function Register() {
  return (
    <div className="w-full bg-[#555555] text-center py-10">
      <h1 className="lg:text-[40px] text-[30px]">
        Layihə sifariş etmək istəyirsiniz? <br />
        Online müraciət göndərin
      </h1>
      <div className="grid lg:grid-cols-2 w-5/6 m-auto">
        <div className="imgReg m-3 border border-white">
          <img src={RegImg} className="w-full h-full" />
        </div>
        <div className="rgForm flex flex-col border border-white m-3">
          <div className="grid  lg:grid-cols-12 border-black p-2">
            <input
              type="text"
              placeholder="email"
              className="border  border-white bg-transparent  lg:col-span-6 col-span-6  m-2 p-3"
            />
            <input
              type="text"
              placeholder="email"
              className="border  border-white bg-transparent lg:col-span-6 col-span-6  m-2 p-3"
            />
            <input
              type="text"
              placeholder="email"
              className="border  border-white bg-transparent lg:col-span-6  col-span-6 m-2 p-3"
            />
            <input
              type="text"
              placeholder="email"
              className="border  border-white bg-transparent lg:col-span-6  col-span-6 m-2 p-3"
            />
          </div>
          <div className="area m-auto h-[140px] pb-1 w-[95%]  bg-white">
            <input
              type="text"
              className="w-full p-1 outline-none"
              placeholder="Layiheniz haqqinda bize melumat verin"
            />
          </div>
        </div>
      </div>
      <div className="button w-5/6 flex justify-end p-2 m-auto">
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
  );
}

export default Register;
