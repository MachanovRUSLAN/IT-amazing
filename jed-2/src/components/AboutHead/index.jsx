import React from "react";
import interImg from "/img/inter2.jpg";

function AboutHead() {
  return (
    <div className="bg-[#565656] text-center w-full p-4">
      <div className="mb-10">
        <div className="border-b border-white w-5/6 m-auto">
          <div className="w-[300px]  m-auto relative h-20">
            <h1 className="absolute mt-[50px]  bg-[#555555] text-[36px]">
             Haqqimizda
            </h1>
          </div>
        </div>
      </div>

      <div className="w-5/6 m-auto py-10">
        <div className="container grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          <div className="relative">
            <div className="img-inter border border-white">
              <img src={interImg} className="w-full" />
            </div>
          </div>
          <div className="text-start  border border-none  flex justify-center items-start">
            <div className="p-2">
              <p className="lg:px-4 px-0">
                Toğrul İlyas Fəxrioğlu tərəfindən 2014-cü ildə təməli qoyulan
                Tİ-AMAZİNG şirkətinin əsas məqsədlərindən biri bu sahəyə həm
                dizayn layihələrində həm də təhsildə yeniliklər gətirməkdir.
                <br />
                <br />
                Dizayn, memarlıq layihələrimizdə daim yeniliklər edərək hər
                zaman müştərilərin rəğbətini, inamını qazanmışıq. Ölkə daxili və
                xarici layihələrdə məqsəd daim müştərilərin rahatlığını,
                məmnuniyyətini göz önündə tutmaqdır. Hər mövsümdə rəng
                çalarlarının, mebel üslublarının, divar kağızlarının,
                aksesuarlarının deyişkənliyini müştəriyə çatdırmaq və
                funksionallığı da əsas tutaraq layihələri bu yöndə reallaşdırmaq
                bizim mütləq iş prinsipimiz olmuşdur.
              </p>
            </div>
          </div>
        </div>
        <p className="text-start py-10">
          {" "}
          Dizayn, memarlıq layihələrimizdə daim yeniliklər edərək hər zaman
          müştərilərin rəğbətini, inamını qazanmışıq. Ölkə daxili və xarici
          layihələrdə məqsəd daim müştərilərin rahatlığını, məmnuniyyətini göz
          önündə tutmaqdır. Hər mövsümdə rəng çalarlarının, mebel üslublarının,
          divar kağızlarının, aksesuarlarının deyişkənliyini müştəriyə çatdırmaq
          və funksionallığı da əsas tutaraq layihələri bu yöndə reallaşdırmaq
          bizim mütləq iş prinsipimiz olmuşdur.
        </p>
      </div>
    </div>
  );
}

export default AboutHead;
