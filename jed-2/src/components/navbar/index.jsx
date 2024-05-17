import React, { useEffect, useState } from "react";
import h_logo from "/img/BLACK LOGO2x2 1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation } from "react-router-dom";

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
          } lg:relative lg:flex fixed z-10 w-full h-full lg:bg-black bg-slate-400  left-0 lg:top-0 top-[90px] text-center`}
        >
          <NavLink to="/" onClick={true}>
            <li className="relative lg:flex lg:px-4 lg:p-0 p-2 group lg:m-0 m-10 lg:hover:bg-transparent lg:hover:text-white lg:text-white hover:bg-white hover:text-black transition-[0.3s]">
              Esas sehife
              <span className="absolute right-1 top-3 w-11/12 h-[20px] group-hover:bg-[#9fb576] opacity-50"></span>
            </li>
          </NavLink>
          <NavLink to="/service" onClick={true}>
            <li className="relative lg:flex lg:px-4 lg:p-0 p-2 group lg:m-0 m-10 lg:hover:bg-transparent lg:hover:text-white lg:text-white hover:bg-white hover:text-black transition-[0.3s]">
              Xidmetlerimiz
              <span className="absolute right-1 top-3 w-11/12 h-[20px] group-hover:bg-[#9fb576] opacity-50"></span>
            </li>
          </NavLink>
          <NavLink to="/portfolio" onClick={true}>
            <li className="relative lg:flex lg:px-4 lg:p-0 p-2 group lg:m-0 m-10 lg:hover:bg-transparent lg:hover:text-white lg:text-white hover:bg-white hover:text-black transition-[0.3s]">
             Portfolio
              <span className="absolute right-1 top-3 w-11/12 h-[20px] group-hover:bg-[#9fb576] opacity-50"></span>
            </li>
          </NavLink>
          <NavLink to="/contact" onClick={true}>
            <li className="relative lg:flex lg:px-4 lg:p-0 p-2 group lg:m-0 m-10 lg:hover:bg-transparent lg:hover:text-white lg:text-white hover:bg-white hover:text-black transition-[0.3s]">
              Elaqe
              <span className="absolute right-1 top-3 w-11/12 h-[20px] group-hover:bg-[#9fb576] opacity-50"></span>
            </li>
          </NavLink>
          <NavLink to="/aboutUs" onClick={true}>
            <li className="relative lg:flex lg:px-4 lg:p-0 p-2 group lg:m-0 m-10 lg:hover:bg-transparent lg:hover:text-white lg:text-white hover:bg-white hover:text-black transition-[0.3s]">
              Haqqimizda
              <span className="absolute right-1 top-3 w-11/12 h-[20px] group-hover:bg-[#9fb576] opacity-50"></span>
            </li>
          </NavLink>
          <li className="relative lg:flex lg:px-4 lg:p-0 p-2 group lg:m-0 m-10 lg:hover:bg-transparent lg:hover:text-white lg:text-white hover:bg-white hover:text-black transition-[0.3s]">
            TI-amazing Academy
            <span className="absolute right-1 top-3 w-11/12 h-[20px] group-hover:bg-[#9fb576] opacity-50"></span>
          </li>
        </ul>
      </div>
      <div
        className="relative lg:hidden flex mr-4 bg-white"
        onClick={clickOpenMenu}
      >
        <FontAwesomeIcon icon={faBars} className="h-8 w-8" />
      </div>

      <div class="border w-[150px] h-[40px] lg:flex items-center justify-center  hidden">
        <a
          href="#_"
          class="relative px-6 py-3 flex  items-center justify-center h-full w-full  text-white group"
        >
          <span class="absolute inset-0 w-[95%] m-auto h-full transition duration-300 ease-out transform translate-y-3 bg-[#9fb576] group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span class="absolute inset-0  h-full border-2 border-white-100"></span>
          <span class="relative">
            Daha Etrafli
            <FontAwesomeIcon icon={faArrowRightLong} />
          </span>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
