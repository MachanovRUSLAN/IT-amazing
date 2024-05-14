import React from "react";

function Online() {
  return (
    <div className="text-center bg-[#555555] w-full">
      <h1 className="lg:p-10 p-0">
        Hər hansı bir sualınız var? <br />
        Online müraciət göndərin
      </h1>
      <div className="Online-Box lg:p-10 p-2 border border-white-500 lg:w-5/6 w-full m-auto h-full lg:flex items-center justify-center block">
        <div className="input h-[60px] w-[300px] m-auto border border-white-500 bg-transparent">
          <input
            type="text"
            placeholder="Ad,Soyad"
            className="w-full h-full bg-transparent p-2"
          />
        </div>
        <div className="input lg:h-[60px] lg:w-[300px] w-full m-auto border border-white-500">
          <input
            type="text"
            placeholder="Telefon nomresi"
            className="w-full h-full bg-transparent p-2"
          />
        </div>
        <div className="button lg:ml-10 m-10">
          <button>Gonder</button>
        </div>
      </div>
    </div>
  );
}

export default Online;
