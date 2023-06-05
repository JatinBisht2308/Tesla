import React from 'react'
import Navbar from "../components/Nav";
import Sidebar from "../components/Sidebar";

import "../styles/powerWall.css";
const PowerWall = () => {
  return (
    <div className='PowerWall w-screen h-screen bg-cover bg-no-repeat'>
      <Navbar />
      <Sidebar />
    </div>
  )
}

export default PowerWall
