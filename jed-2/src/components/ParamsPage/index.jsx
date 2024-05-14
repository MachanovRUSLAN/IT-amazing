import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

function ParamsGalery() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/Data/${id}`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [id]);

  return (
    <div className="gallery bg-slate-700">
      <div className="img-b" key={data.id}>
        <p>{data.title}</p>
        {data.imgs.map(({img, id}) => {
         
             <div className="img" key={id}>
            <img src={img.img} alt="" />
          </div>
        
         
       } )}
      </div>
    </div>
  );
}

export default ParamsGalery;
