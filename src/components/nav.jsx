import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/tesla-logo-hero.png";
import "../styles/nav.css";
const nav = () => {
  const toggleMenuSidebar= () =>{
    const sidebar = document.querySelector(".Sidebar");
    sidebar.classList.toggle("-translate-x-full");
  }
  return (
    <div className="Navbar flex w-screen justify-between text-center items-center px-16 py-5">
      <Link to={"/"}>
        <div className="nav-left">
          <img src={Logo} alt="Tesla Logo" className="mr-9" />
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
          <li className="mr px-4 py-1 font-semibold text-sm  duration-500 hover:backdrop-sepia-0 hover:bg-black/10 rounded-sm" 
          onClick={toggleMenuSidebar}
          >
            Menu
          </li>
        </ul>
      </div>
    </div>
  );
};

export default nav;
