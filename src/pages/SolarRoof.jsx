import React from 'react'
import Navbar from "../components/Nav";
import Sidebar from "../components/Sidebar";

import "../styles/solarRoof.css";
const SolarRoof = () => {
  return (
    <div className='SolarRoof w-screen h-screen bg-cover bg-no-repeat'>
      <Navbar />
      <Sidebar />
    </div>
  )
}

export default SolarRoof
