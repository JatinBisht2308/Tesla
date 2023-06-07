import React from "react";
import "../styles/home.css";
const ModelsHome = (props) => {
  return (
    <div className="ModelsHome">
      <div className="Roadster w-screen h-screen bg-cover bg-no-repeat">
        <div className="content  flex flex-col justify-between pt-16">
          <div className="heading flex flex-col w-screen text-center  items-center justify-center mt-16">
            <h1 className="text-4xl items-center">{props.name}</h1>
            <a href="https://google.com">{props.lease}</a>
          </div>
          <div className="highlighted-specs  w-screen flex justify-center items-center text-center text-white">
            <div className="order-btn mr-5">
              <button className="py-3 px-20 font-semibold text-sm rounded-md tracking-wider">
                Order Now
              </button>
            </div>
            <div className="demo-btn">
              <button className="py-3 px-20 font-semibold text-sm rounded-md tracking-wider">
                {props.secondBtn}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelsHome;