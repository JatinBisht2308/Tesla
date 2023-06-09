import React from "react";
import Navbar from "../components/Nav";
import Sidebar from "../components/Sidebar";
import RoadsterHome from "../components/RoadsterHome";
import ModelsHome from "../components/ModelsHome";
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import "../styles/home.css";
const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <Sidebar />
      <RoadsterHome />
      <ModelsHome
        name="Model 3"
        lease="Starting at $32,740"
        secondBtn="Demo Drive"
        class="model3"
      />
      <ModelsHome
        name="Model Y"
        lease="Starting at $39,990"
        secondBtn="Demo Drive"
        class="modelY"
      />
      <ModelsHome
        name="Model S"
        lease="Lease from $429/mo"
        secondBtn="Demo Drive"
        class="modelS"
      />
      <ModelsHome
        name="Model X"
        lease="View Inventory"
        secondBtn="Demo Drive"
        class="modelX"
      />
      <ModelsHome
        name="Solar Panels"
        lease="Schedule a Virtual Consultation"
        secondBtn="Learn More"
        class="solarPanels"
      />
      <ModelsHome
        name="Solar Roof"
        lease="Produce Clean Energy From Your Roof"
        secondBtn="Learn More"
        class="solarRoof"
      />
      <ModelsHome
      name="Accessories"
      class="accessories"
      />
    </div>
  );
};

export default Home;
