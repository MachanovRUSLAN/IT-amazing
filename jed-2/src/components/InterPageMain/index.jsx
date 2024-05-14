import React from "react";
import interImg from "../img/inter4.jpg";

function InterPageMain() {
  return (
    <div className="bg-[#565656] text-center w-full p-4">
      <div className="w-5/6 m-auto">
        <div className="container grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          <div className="relative">
            <div className="img-inter border border-white">
              <img src={interImg} className="w-full" />
            </div>
          </div>
          <div className="text-start  border border-none  flex justify-center items-start">
            <div className="p-2">
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
