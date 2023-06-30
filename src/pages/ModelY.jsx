import React from 'react'
import Navbar from "../components/Nav";
import Sidebar from "../components/Sidebar";
import ModelYContent from "../components/ModelsPage";

import "../styles/modely.css";
const ModelY = () => {
  return (
    <div className='ModelY w-screen h-screen bg-cover bg-no-repeat'>
      <Navbar />
      <Sidebar />
      <ModelYContent heading="Model Y" class="modelY"/>
    </div>
  )
}

export default ModelY
