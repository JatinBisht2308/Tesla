import React from 'react'
import Navbar from "../components/Nav";
import Sidebar from "../components/Sidebar";
import ModelXContent from "../components/ModelsPage";

import "../styles/modelx.css";
const ModelX = () => {
  return (
    <div className='ModelX w-screen h-screen bg-cover bg-no-repeat'>
       <Navbar />
        <Sidebar />
        <ModelXContent heading="Model X" class="modelX"/>
    </div>
  )
}

export default ModelX
