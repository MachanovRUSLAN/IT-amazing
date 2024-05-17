
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

function ParamsGalery() {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3000/Data/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [id]);

  return (
    <div className="gallery bg-[#555555]">
      <div className="border-b relative border-white w-5/6 m-auto">
        {data && (
          <p className="absolute left-0 top-2">
            Esas sehife
            <FontAwesomeIcon className="px-2" icon={faArrowRightLong} />
            Portfolio
            <FontAwesomeIcon className="px-2" icon={faArrowRightLong} />
            {data.title}
          </p>
        )}
        {data && (
          <div className="w-[300px] m-auto relative h-20">
            <h1 className="absolute lg:mt-[50px] mt-[65px] bg-[#555555] text-[26px]">
              {data.title}
            </h1>
          </div>
        )}
      </div>
      <div className="w-4/6 m-auto mt-20">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eum
          perspiciatis dolorum, doloremque excepturi sapiente iusto placeat
          quidem ipsam architecto dicta minima reiciendis ut? Quis aspernatur
          consequatur dolor obcaecati ipsum?
        </p>
      </div>
      <div className="mb-10"></div>
      <div className="w-5/6 m-auto grid lg:grid-cols-3 md:grid-cols-2 pb-10">
        {data?.imgs?.map(({ img, title, id }) => (
          <div className="m-[5px]" key={id}>
            <img className="w-full h-full" src={img} alt={title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ParamsGalery;
