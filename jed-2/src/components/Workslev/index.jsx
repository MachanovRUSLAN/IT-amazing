import React from "react";
import LevData from "../../components/LevelData/index"

function WorkLev() {
  return (
    <div className="div bg-[#565656]">
      <div className="bg-[#565656] w-12/12 m-auto text-center">
        <h1>İşimizin mərhələləri</h1>
  <div className="grid grid-cols-12 w-10/12 m-auto">
  {LevData.map((item, id)=>(
          <div className="lg:col-span-3 md:col-span-6 col-span-12 p-2 m-2 text-start" key={id}>
            <p className="text-[36px]">0{item.id}</p>
            <hr className="w-[80%] my-2" />
            <h2 className="m-auto text-[24px]">{item.tittle}</h2>
            <p className="text-[14px]">
             {item.text}
            </p>
          </div>
  ))}
        </div>
      </div>
    </div>
  );
}

export default WorkLev;
