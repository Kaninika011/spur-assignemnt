import React from "react";
import { MdLocationOn } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import apple from "../assets/apple-logo.svg";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="divider flex flex-col w-full ">
      <footer className="footer footer-center p-10 bg-base-100 ">
        <aside>
          <img src={logo} alt="logo" className="w-40" />
          <p className="font-bold text-indigo-600 text-3xl">ahead</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a className="flex items-center">
              <div className="h-8 w-8 flex items-center justify-center rounded-full bg-green-100">
                <MdLocationOn className="h-5 w-5 text-green-400" />
              </div>
              <p className="font-xs font-medium ml-3 text-gray-700">
                {" "}
                Auguststraße, 26 10117 Berlin{" "}
              </p>
            </a>

            <a className="flex items-center">
              <div className="h-8 w-8 flex items-center justify-center rounded-full bg-green-100">
                <IoMail className="h-5 w-5 text-green-400" />
              </div>
              <p className="font-xs font-medium ml-3 text-gray-700">
                hi@ahead-app.com
              </p>
            </a>
          </div>
          <img src={apple} alt="apple-logo" className="w-28 h-28 " />{" "}
          <p> © 2022 Ahead app. All rights reserved</p>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
