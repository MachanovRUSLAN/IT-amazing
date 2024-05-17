import React from "react";
import interImg from "/img/inter4.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

function InterPageMain() {
  return (
    <div className="bg-[#565656] text-center w-full p-4">
      <div className="border-b border-white w-5/6 m-auto relative mb-20">
        <p className="absolute left-18 top-2">
          Esas sehife
          <FontAwesomeIcon className="px-2" icon={faArrowRightLong} />
          Xidmetlerimiz
          <FontAwesomeIcon className="px-2" icon={faArrowRightLong} />
          Interyer Dizayni
        </p>
        <div className="w-[300px]  m-auto relative h-20">
          <h1 className="absolute lg:mt-[50px] mt-[65px] bg-[#555555] lg:text-[36px] text-[30px]">
            Xidmetlerimiz
          </h1>
        </div>
      </div>
      <div className="w-5/6 m-auto">
        <div className="container grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          <div className="relative">
            <div className="img-inter border border-white">
              <img src={interImg} className="w-full" />
            </div>
          </div>
          <div className="text-start  border border-none  flex justify-center items-start">
            <div className="lg:px-10 py-10">
              <p>
                Hər bir məkanın daxili dizaynının ayrılmaz hissəsi gözəllik və
                funksionallıqdırsa orada istifadə olunan aksesuar, dekor, işıq
                sistemi isə o dizayna fərqlilik verməsi, yadda qalan etməsidir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InterPageMain;
