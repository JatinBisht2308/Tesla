import React from 'react'
import Navbar from "../components/Nav";
import Sidebar from "../components/Sidebar";

import "../styles/solarPanel.css";
const SolarPanels = () => {
  return (
    <div className='SolarPanels w-screen h-screen bg-cover bg-no-repeat'>
      <Navbar />
      <Sidebar />
    </div>
  )
}

export default SolarPanels
