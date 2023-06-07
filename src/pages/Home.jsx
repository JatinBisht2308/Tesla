import React from "react";
import Navbar from "../components/Nav";
import Sidebar from "../components/Sidebar";
import RoadsterHome from "../components/RoadsterHome";
import ModelsHome from "../components/ModelsHome";
import "../styles/home.css";
const Home = () => {
  return (
    <div className="Home">
       <Navbar />
        <Sidebar />
        <RoadsterHome />
        <ModelsHome name="Model S" lease="Lease from $429/mo" secondBtn="Demo Drive"/>
    </div>
  );
};

export default Home;
