import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function ContactHead() {
  return (
    <div className="bg-[#555555] w-full">
      <div className="border-b border-white w-5/6 m-auto">
        <div className="w-[300px]  m-auto relative h-20">
          <h1 className="absolute mt-[50px] lg:ml-[120px] ml-[100px] bg-[#555555] text-[36px]">
            Elaqe
          </h1>
        </div>
      </div>
      <div className="w-5/6 m-auto">
        <div className="nav">
          <ul className="lg:flex justify-center flex-wrap block text-center p-10">
            <li className="px-4">+994 55 867 62 07</li>
            <li className="px-4">+994 55 867 62 07</li>
            <li className="px-4">ti_amazing@mail.ru</li>
            <li className="px-4">Baku şəh., Cavadxan 14</li>
          </ul>
          <ul className="lg:flex justify-center flex-wrap block text-center p-10">
            <li className="px-4 font-medium">
              <FontAwesomeIcon icon={faInstagram} className="mr-2" />
              Ti_amazing
            </li>
            <li className="px-4">
              <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
              +994 55 867 62 07
            </li>
            <li className="px-4">
              <FontAwesomeIcon icon={faFacebookF} className="mr-2" />
              Ti_amazing
            </li>
            <li className="px-4">
              <FontAwesomeIcon icon={faLinkedinIn} className="mr-2" />
              Ti_amazing
            </li>
            <li className="px-4">
              <FontAwesomeIcon icon={faLinkedinIn} className="mr-2" />
              Ti_amazing
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContactHead;
