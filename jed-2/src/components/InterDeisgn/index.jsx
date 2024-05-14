import React from "react";
import "../../common/common.css";
import "./interD.css";
import { Link } from "react-router-dom";

function InterDeisgn() {
  return (
    <div className="bg-[#565656] text-center w-full">
      <div className="lg:p-20 p-10">
        <h1 className="mb-2 border-t border-white  p-10">
          <span className="mt-[-75px] absolute ml-[-10%] bg-[#555555]">
            Xidmetlerimiz
          </span>
        </h1>
        <div className="container mt-5 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          <div className="relative">
            <div className="img-box border border-white w-[100%]"></div>
          </div>
          <div className="text-start  border border-none  flex justify-center items-center">
            <div className="p-0 lg:p-10">
              <h1>İnteryer dizayn</h1>
              <p>
                Hər bir məkanın daxili dizaynının ayrılmaz hissəsi gözəllik və
                funksionallıqdırsa orada istifadə olunan aksesuar, dekor, işıq
                sistemi isə o dizayna fərqlilik verməsi, yadda qalan etməsidir.
              </p>
              <div className="button">
                <Link to="/service/interPage">
                  <button>Daha Etrafli</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InterDeisgn;
