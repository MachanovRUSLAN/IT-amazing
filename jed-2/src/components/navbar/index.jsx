import React, { useState } from "react";
import h_logo from "/img/BLACK LOGO2x2 1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const clickOpenMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="flex justify-between items-center bg-black w-5/6 m-auto">
      <div className="img-logo">
        <img src={h_logo} alt="" />
      </div>
      <div className="nav">
        <ul
          className={`${
            menu ? "lg:flex" : "hidden"
          } lg:relative lg:flex absolute z-10 w-full h-full lg:bg-black bg-slate-400  left-0 lg:top-0 top-[90px] text-center`}
        >
          <Link to="/">
            <li className="lg:px-4 lg:m-0 m-10 font-medium">Esas sehife</li>
          </Link>
          <a href="/service">
            <li className="lg:flex lg:px-4 lg:p-0 p-4 lg:m-0 m-10 lg:hover:bg-transparent lg:hover:text-white lg:text-white hover:bg-white hover:text-black transition-[0.3s]">
              Xidmetlerimiz
            </li>
          </a>
          <Link to="/portfolio">
            <li className="lg:flex lg:px-4 lg:p-0 p-4 lg:m-0 m-10 lg:hover:bg-transparent lg:hover:text-white lg:text-white hover:bg-white hover:text-black transition-[0.3s]">
              Portfolio
            </li>
          </Link>
          <Link to="/contact">
            <li className="lg:flex lg:px-4 lg:p-0 p-4 lg:m-0 m-10 lg:hover:bg-transparent lg:hover:text-white lg:text-white hover:bg-white hover:text-black transition-[0.3s]">
              Elaqe
            </li>
          </Link>
          <Link to="/aboutUs">
            <li className="lg:flex lg:px-4 lg:p-0 p-4 lg:m-0 m-10 lg:hover:bg-transparent lg:hover:text-white lg:text-white hover:bg-white hover:text-black transition-[0.3s]">
              Haqqimizda
            </li>
          </Link>
          <li className="lg:flex lg:px-4 lg:p-0 p-4 lg:m-0 m-10 lg:hover:bg-transparent lg:hover:text-white lg:text-white hover:bg-white hover:text-black transition-[0.3s]">
            TI-Amazing academy
          </li>
        </ul>
      </div>
      <div className="lg:hidden flex mr-4 bg-white" onClick={clickOpenMenu}>
        <FontAwesomeIcon icon={faBars} className="h-8 w-8" />
      </div>
      <div className="lg:flex p-2 items-center z-20 hidden">
        <p className="m-3">AZ</p>
        <button className="relative">
          Elaqe
          <span className="absolute right-2 top-2 w-10/12 h-full bg-green-500 opacity-50"></span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
