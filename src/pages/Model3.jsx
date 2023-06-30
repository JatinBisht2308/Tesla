import React from 'react'
import Navbar from "../components/Nav";
import Sidebar from "../components/Sidebar";
import Model3Content from "../components/ModelsPage";
import "../styles/model3.css";
const Model3 = () => {
  return (
    <div className='Model3 w-screen h-screen bg-cover bg-no-repeat'>
      <Navbar />
      <Sidebar />
      <Model3Content heading="Model 3" class="model3"/>
    </div>
  )
}

export default Model3
