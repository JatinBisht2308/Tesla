import React from "react";
import Navbar from "../components/Nav";
import Sidebar from "../components/Sidebar";
import "../styles/home.css";
const Home = () => {
  return (
    <div className="Home w-screen h-screen bg-cover bg-no-repeat">
      <Navbar />
      <Sidebar />
    </div>
  );
};

export default Home;
