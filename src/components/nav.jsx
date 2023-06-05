import React from "react";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import logoDark from "../assets/logo-dark.png"
import logoWhite from "../assets/logo-white.png";
import "../styles/nav.css";
const Nav = () => {
   const [logo, setLogo] = useState(logoDark);
  const toggleMenuSidebar= () => {
    const sidebar = document.querySelector(".Sidebar");
    sidebar.classList.toggle("translate-x-full");
  }
  const location = useLocation();
  useEffect(() => {
    if(location.pathname === "/model3" || location.pathname === "/modelY" || location.pathname === "/solarRoof" || location.pathname === "/powerWall"){
      setLogo(logoWhite);
      // setTextColor("text-white");
      document.querySelector(".Navbar").classList.remove("text-black");
      document.querySelector(".Navbar").classList.add("text-white");
    }
    else{
      setLogo(logoDark);
      document.querySelector(".Navbar").classList.remove("text-white");
      document.querySelector(".Navbar").classList.add("text-black");
    }
  },[location.pathname])
  
  return (
    <div className="Navbar flex w-screen justify-between text-center items-center px-6 py-4">
      <Link to={"/"}>
        <div className="nav-left mr-28 ml-5">
          <img src={logo} alt="Tesla Logo"  />
        </div>
      </Link>

      <div className="nav-mid">
        <ul className="flex">
          <Link to={"/modelS"}>
            <li className="mr-3 duration-500 px-3 py-1 font-semibold text-sm hover:px-2rounded-sm  hover:backdrop-sepia-0  hover:bg-black/10">
              Model S
            </li>
          </Link>
          <Link to={"/model3"}>
            <li className="mr-3 px-3 duration-500 py-1 font-semibold text-sm  rounded-sm  hover:backdrop-sepia-0  hover:bg-black/10">
              Model 3
            </li>
          </Link>
          <Link to={"/modelX"}>
            <li className="mr-3 px-3 py-1 duration-500 font-semibold text-sm rounded-sm  hover:backdrop-sepia-0  hover:bg-black/10">
              Model X
            </li>
          </Link>
          <Link to={"/modelY"}>
            <li className="mr-3 px-3 py-1 duration-500 font-semibold text-sm rounded-sm hover:backdrop-sepia-0  hover:bg-black/10">
              Model Y
            </li>
          </Link>
          <Link to={"/solarRoof"}>
            <li className="mr-3 px-3 py-1 duration-500 font-semibold text-sm  rounded-sm  hover:backdrop-sepia-0  hover:bg-black/10">
              Solar Roof
            </li>
          </Link>
          <Link to={"/solarPanels"}>
            <li className="px-3 mr-3 py-1 font-semibold duration-500  text-sm  rounded-sm hover:backdrop-sepia-0  hover:bg-black/10">
              Solar Panels
            </li>
          </Link>
          <Link to={"/powerWall"}>
            <li className="px-3 py-1 font-semibold text-sm duration-500 rounded-sm  hover:backdrop-sepia-0  hover:bg-black/10">
              Powerwall
            </li>
          </Link>
        </ul>
      </div>
      <div className="right">
        <ul className="flex">
          <li className="mr-3 px-4 py-1 font-semibold duration-500 text-sm hover:backdrop-sepia-0  hover:bg-black/10 rounded-sm">
            Shop
          </li>
          <li className="mr-3 px-4 py-1 font-semibold text-sm duration-500 hover:backdrop-sepia-0  hover:bg-black/10 rounded-sm">
            Account
          </li>
          <li className="px-4 py-1 font-semibold text-sm  duration-500 hover:backdrop-sepia-0 hover:bg-black/10 rounded-sm" 
          onClick={toggleMenuSidebar}
          >
            Menu
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
