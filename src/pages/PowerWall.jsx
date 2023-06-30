import React from 'react'
import Navbar from "../components/Nav";
import Sidebar from "../components/Sidebar";
import PowerWallContent from "../components/ModelsPage";

import "../styles/powerWall.css";
const PowerWall = () => {
  return (
    <div className='PowerWall w-screen h-screen bg-cover bg-no-repeat'>
      <Navbar />
      <Sidebar />
      <PowerWallContent heading="Powerwall" class="powerwall"/>
    </div>
  )
}

export default PowerWall
