import React, { useEffect, useState } from "react";
import axios from "axios";
import img from "../../components/img/ekster.jpg";
import { Link } from "react-router-dom";

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
      title: "interyer",
      categ: "interyer",
    },
    {
      id: 2,
      title: "landsaf",
      categ: "land",
    },
    {
      id: 3,
      title: "lanswaf",
      categ: "land",
    },
    {
      id: 4,
      title: "ticaret",
      categ: "shop",
    },
    {
      id: 5,
      title: "lanswaf",
      categ: "layihe",
    },
    {
      id: 6,
      title: "allll",
      categ: "",
    },
  ];

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="w-full bg-[#555555]">
        <div className="flex items-center justify-between bg-[#555555] w-5/6 m-auto">
          {CategButtons.map(({ id, title, categ }) => {
            return (
              <div
                className="border border-yellow-50 mt-3 justify-center items-center py-2 px-2 hidden lg:flex"
                key={id}
                data-cat={categ}
                onClick={clickHandleCateg}
              >
                {title}
              </div>
            );
          })}
          <div className="but lg:hidden flex">
            <button>salam</button>
          </div>
        </div>
      </div>
      <div className="bg-[#555555] w-full">
        <div className="grid grid-cols-3 gap-4 w-5/6 m-auto pt-10">
          {filteredData.map((item, id) => (
            <Link to={`/portfolio/${item.id}`}>
              <div className="box text-center" key={id}>
                <img src={item.postImg} />
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
