import React from "react";
import "../../common/common.css";
import "./sho.css";

function Shop() {
  return (
    <div className="bg-[#565656] text-center w-full">
      <div className="p-20">
        <h1 className="mb-3"></h1>
        <div className="container grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          <div className="relative">
            <div className="img-box3 border border-white"></div>
          </div>
          <div className="text-start  border border-none  flex justify-center items-center">
            <div className="p-10">
              <h1>İnteryer dizayn</h1>
              <p>
                Hər bir məkanın daxili dizaynının ayrılmaz hissəsi gözəllik və
                <br />
                funksionallıqdırsa orada istifadə olunan aksesuar, dekor, işıq
                <br />
                sistemi isə o dizayna fərqlilik verməsi, yadda qalan etməsidir.
              </p>
              <div className="button">
                <button>Daha Etrafli</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
