import React from "react";
import h_logo from "/img/BLACK LOGO2x2 1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between items-center bg-black w-5/6 m-auto">
      <div className="img-logo">
        <img src={h_logo} alt="" />
      </div>
      <div className="nav">
        <ul className="lg:flex hidden">
          <Link to="/">
            <li className="px-4 font-medium">Esas sehife</li>
          </Link>
          <Link to="/service">
            <li className="lg:flex px-4">Xidmetlerimiz</li>
          </Link>
          <Link to="/portfolio">
            <li className="lg:flex px-4">Portfolio</li>
          </Link>
          <Link to="/contact">
            <li className="lg:flex px-4">Elaqe</li>
          </Link>

          <li className="lg:flex px-4">Haqqimizda</li>
          <li className="lg:flex px-4">TI-Amazing academy</li>
        </ul>
      </div>
      <div className="lg:hidden blok mr-4">
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
