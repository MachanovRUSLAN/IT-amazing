import React from "react";
import RegImg from "/img/salon.jpg";

function Register() {
  return (
    <div className="w-full bg-[#555555] text-center py-10">
      <h1>
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
        <button className="">salam</button>
      </div>
    </div>
  );
}

export default Register;
