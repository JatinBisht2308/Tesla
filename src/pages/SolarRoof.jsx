import React from 'react'
import Navbar from "../components/Nav";
import Sidebar from "../components/Sidebar";
import SolarRoofContent from "../components/ModelsPage";
import "../styles/solarRoof.css";
const SolarRoof = () => {
  return (
    <div className='SolarRoof w-screen h-screen bg-cover bg-no-repeat'>
      <Navbar />
      <Sidebar />
      <SolarRoofContent heading="Solar Roof" class="solarRoofs"/>

    </div>
  )
}

export default SolarRoof
