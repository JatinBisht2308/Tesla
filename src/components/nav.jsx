import React from "react";
import Logo from "../assets/tesla-logo-hero.png";
const nav = () => {
  return (
    <div className="Navbar flex w-screen justify-between text-center items-center px-16 py-5">
      <div className="nav-left">
        <img src={Logo} alt="Tesla Logo" className="mr-9" />
      </div>
      <div className="nav-mid">
        <ul className="flex">
          <li className="mr-3 duration-500 px-3 py-1 font-semibold text-sm hover:px-2rounded-sm  hover:bg-black hover:bg-opacity-10 ">
            Model S
          </li>
          <li className="mr-3 px-3 duration-500 py-1 font-semibold text-sm  rounded-sm  hover:bg-black hover:bg-opacity-10 ">
            Model 3
          </li>
          <li className="mr-3 px-3 py-1 duration-500 font-semibold text-sm rounded-sm  hover:bg-black hover:bg-opacity-10 ">
            Model X
          </li>
          <li className="mr-3 px-3 py-1 duration-500 font-semibold text-sm rounded-sm  hover:bg-black hover:bg-opacity-10 ">
            Model Y
          </li>
          <li className="mr-3 px-3 py-1 duration-500 font-semibold text-sm  rounded-sm  hover:bg-black hover:bg-opacity-10 ">
            Solar Roof
          </li>
          <li className="px-3 mr-3 py-1 font-semibold duration-500  text-sm  rounded-sm  hover:bg-black hover:bg-opacity-10 ">
            Solar Panels
          </li>
          <li className="px-3 py-1 font-semibold text-sm duration-500 rounded-sm  hover:bg-black hover:bg-opacity-10 ">
            Powerwall
          </li>
        </ul>
      </div>
      <div className="right">
        <ul className="flex">
          <li className="mr-3 px-4 py-1 font-semibold duration-500 text-sm hover:bg-black hover:bg-opacity-10 rounded-sm">
            Shop
          </li>
          <li className="mr-3 px-4 py-1 font-semibold text-sm duration-500 hover:bg-black hover:bg-opacity-10 rounded-sm">
            Account
          </li>
          <li className="mr px-4 py-1 font-semibold text-sm  duration-500 hover:bg-black hover:bg-opacity-10 rounded-sm">
            Menu
          </li>
        </ul>
      </div>
    </div>
  );
};

export default nav;
