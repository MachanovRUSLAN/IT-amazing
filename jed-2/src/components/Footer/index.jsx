import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="bg-gray-500 w-full">
      <div className="w-5/6 m-auto">
        <div className="nav">
          <ul className="lg:flex justify-center flex-wrap block text-center p-10">
            <li className="px-4">Esas sehife</li>
            <li className="px-4">Xidmetlerimiz</li>
            <li className="px-4">Portfolio</li>
            <li className="px-4">Elaqe</li>
            <li className="px-4">Haqqimizda</li>
            <li className="px-4">TI-Amazing academy</li>
          </ul>
          <hr />
          <ul className="lg:flex justify-center flex-wrap block text-center p-10">
            <li className="px-4 font-medium">+994 55 867 62 07</li>
            <li className="lg:flex px-4">+994 55 867 62 07</li>
            <li className="lg:flex px-4">ti_amazing@mail.ru</li>
            <li className="lg:flex px-4">Baku şəh., Cavadxan 14</li>
          </ul>
          <ul className="lg:flex justify-center flex-wrap block text-center p-10">
            <li className="px-4 font-medium">
              <FontAwesomeIcon icon={faInstagram} />
            </li>
            <li className=" px-4">
              <FontAwesomeIcon icon={faWhatsapp} />
            </li>
            <li className=" px-4">
              <FontAwesomeIcon icon={faFacebookF} />
            </li>
            <li className="px-4">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
