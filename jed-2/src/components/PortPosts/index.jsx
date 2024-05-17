import React, { useEffect, useState } from "react";
import axios from "axios";
import img from "/img/ekster.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

function PortPosts() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);

  function clickHandleCateg(event) {
    const selectedCategory = event.target.dataset.cat;
    setCategory(selectedCategory);
    console.log(selectedCategory);
  }

  useEffect(() => {
    axios
      .get("http://localhost:3000/Data")
      .then((res) => {
        setData(res.data);
        setFilteredData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (category) {
      const myData = data.filter((item) => item.category === category);
      setFilteredData(myData);
      console.log("Filtered Data:", myData);
    } else {
      setFilteredData(data);
    }
  }, [category, data]);

  let CategButtons = [
    {
      id: 1,
      title: "Interyer Dizayn",
      categ: "interyer",
    },
    {
      id: 2,
      title: "Eksteryer ve Landsaf",
      categ: "land",
    },
    {
      id: 3,
      title: "Ticaret obyektlerin dizayni",
      categ: "shop",
    },
    {
      id: 4,
      title: "Layiheler",
      categ: "layihe",
    },
    {
      id: 5,
      title: "Butun Layiheler",
      categ: "",
    },
  ];

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="w-full bg-[#555555]">
        <div className="border-b relative border-white w-5/6 m-auto">
          <p className="absolute left-0 top-2">
            Esas sehife
            <FontAwesomeIcon className="px-2" icon={faArrowRightLong} />
            Portfolio
          </p>
          <div className="w-[300px]  m-auto relative h-20">
            <h1 className="absolute mt-[50px] ml-[50px] bg-[#555555] text-[36px]">
              Portfolio
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-between py-[50px] bg-[#555555] w-5/6 m-auto">
          {CategButtons.map(({ id, title, categ }) => {
            return (
              <div class="border w-[210px] h-[40px] lg:flex items-center justify-center text-center hidden">
                <p
                  href="#_"
                  class="relative px-6 py-3 flex  items-center justify-center h-full w-full  text-white group"
                >
                  <span class="absolute inset-0 w-[95%] m-auto h-full transition duration-300 ease-out transform translate-y-3 bg-[#9fb576] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span
                    class="absolute inset-0  h-full border-2 border-white-100"
                    key={id}
                    data-cat={categ}
                    onClick={clickHandleCateg}
                  >
                    <span class="relative text-[16px]">{title}</span>
                  </span>
                </p>
              </div>
            );
          })}
          <div className="but border h-[50px] border-white lg:hidden text-center w-full bg-[#9fb576] flex">
            <button className="m-auto font-bold text-white">
              Butun Layiheler
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#555555] w-full">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 w-5/6 m-auto pt-10 pb-10">
          {filteredData.map((item, id) => (
            <Link key={id} to={`/portfolio/${item.id}`}>
              <div className="box text-center" key={id}>
                <img className="w-full" src={item.postImg} />
                <h3>{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default PortPosts;
