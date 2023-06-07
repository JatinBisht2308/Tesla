import React from 'react'
import "../styles/home.css";
const RoadsterHome = () => {
  return (
    <div className="Roadster w-screen h-screen bg-cover bg-no-repeat">
    <div className="content  flex flex-col justify-between pt-16">
      <div className="heading flex w-screen text-center items-center justify-center mt-16">
        <h1 className="text-4xl items-center">Roadster</h1>
      </div>
      <div className="highlighted-specs  w-screen flex justify-center items-center text-center text-white">
        <div className="spec zero-to-sixty mr-20">
          <h1>
            1.9 <span>s</span>
          </h1>
          <p>0-60 mph</p>
        </div>
        <div className="spec high-speed mr-20">
          <h1>
            +250 <span>mph</span>
          </h1>
          <p>Top Speed</p>
        </div>
        <div className="spec charge-range mr-20">
          <h1>
            620 <span>mi</span>
          </h1>
          <p>Range</p>
        </div>
        <div className="reserve-btn">
          <button className="border-2 border-white py-2 px-12 font-semibold text-sm rounded-sm tracking-wider hover:bg-white hover:text-black">
            Reserve Now
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default RoadsterHome
