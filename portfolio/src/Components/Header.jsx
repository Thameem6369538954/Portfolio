import React from 'react'
import Mypic from "../images/mypic.png";
import graph from "../images/graph.png";

const Header = () => {
  return (
    <div>
      <div className="md:flex  items-center justify-around bg-[#FBFBFB] ">
        <div className="md:w-[50%] md:h-[100vh] w-[100%] h-[50vh] text-center flex items-center justify-center flex-col gap-5 px-10 relative top-10 ">
          <h1
            className="text-[#32333c] md:text-7xl text-4xl font-poppins "
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            Hi I'm Thameem
          </h1>
          <p
            className="text-black text-2xl font-TimeRanges "
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            A passionate Frontend Developer with a love for creating interactive
            and user-friendly web applications.
          </p>
          <button
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="2000"
            className="text-white bg-[#f97316] px-8 py-2 rounded border border-transparent hover:bg-white hover:text-[#f97316] hover:border-[#f97316] transition-all trasition-500"
          >
            Hire Me
          </button>
        </div>
        <div className="md:w-[50%] md:h-[100vh] min-h-[65vh] flex items-center justify-center relative">
          <img
            className="w-[100%] absolute z-0"
            src={graph}
            alt=""
            data-aos="fade-down-right"
            data-aos-duration="2000"
          />
          <img
            data-aos="fade-up-left"
            data-aos-duration="2000"
            className="w-[62%] z-10 rounded-[220px] relative top-7 left-5"
            src={Mypic}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Header