import React, { useState } from "react";
import logo from "../assets/logo.png";

const NavBar = () => {
  const [navItems, setNavItems] = useState([
    "Emotions",
    "Manifesto",
    "Self-AwarenessTest",
    "Work With Us",
  ]);

  return (
    <div>
      <div className="navbar bg-base-100 mt-0 mb-3 pt-0 sticky top-0 z-10">
        <div className="navbar-start">
          <div className="w-36 rounded-full">
            <img alt="logo" src={logo} />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            {navItems.map((item, index) => (
              <li key={index}>
                <a>{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-active btn-neutral rounded-full px-6 py-3">
            Download App
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
