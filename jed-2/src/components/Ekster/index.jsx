import React from "react";
import "../../common/common.css";
import "./Ekster.css";

function Ekster() {
  return (
    <div className="bg-[#565656] text-center w-full">
      <div className="p-20">
        <div className="container grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          <div className="text-start  border border-none  flex justify-center items-center">
            <div className="p-10">
              <h1>Eksteryer və Landşaft dizayn</h1>
              <p>
                Eksteryer dedikde ilk öncə ağıla gələn layihənin fasad
                görünüşüdür. Fasad dizaynında mütləq olaraq bina ölçüləri nəzərə
                alınmalıdır. Bu ölçülərə əsasən də üslub və bu üsluba uyğun
                materialı düzgün seçmək lazımdır.
              </p>
              <div className="button">
                <button>Daha Etrafli</button>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="img-box1 border border-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ekster;
