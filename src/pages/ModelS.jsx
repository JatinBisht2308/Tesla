import React from 'react'
import Navbar from "../components/Nav";
import Sidebar from "../components/Sidebar";
import ModelSContent from "../components/ModelsPage";
import "../styles/models.css";
const ModelS = () => {
  return (
    <div className='ModelS w-screen h-screen bg-cover bg-no-repeat'>
      <Navbar />
      <Sidebar />
      <ModelSContent heading="Model S" class="modelS"/>
    </div>
  )
}

export default ModelS
