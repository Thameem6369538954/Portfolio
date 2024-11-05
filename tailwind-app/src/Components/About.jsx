import React from 'react'
import Aboutani from "../animations/Aboutani.json"
import Lottie from 'lottie-react';

const About = () => {
  return (
    <div>
      <div className="items-center justify-around bg-[#f97316] w-full min-h-[100vh] relative">
        <h1
          data-aos="zoom-in-right"
          data-aos-duration="2000"
          className="lg:text-7xl md:text-4xl font-bold font-poppins text-black absolute left-11 top-20 text-white after:content-[''] after:block after:absolute after:top-2 lg:after:top-6 md:after:left-[14rem] lg:after:left-[28rem] md:after:w-full after:h-1 after:rounded-[20px] after:left-0  after:bg-white after:mt-2 text-3xl font-bold text-center"
        >
          About Me
        </h1>
        <div className="md:flex justify-around items-center relative md:top-60 top-40 m-[auto]">
          <div
            className="w-[50%] flex justify-center items-center m-[auto]"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <Lottie className="w-[70%]" animationData={Aboutani} loop={true} />
          </div>
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="w-[100%] m-[auto] flex flex-col justify-center items-center px-10"
          >
            <p className="text-white text-responsive2 font-TimeRanges text-center">
              Hello there, Folks! I'm Thameem Ansari S, a dedicated Full Stack
              Web Developer with a penchant for crafting digital solutions that
              elevate everyday experiences. I thrive on engaging projects that
              push the boundaries of my knowledge and skills. Proficient in the
              MERN stack, I specialize in JavaScript for web development,
              delivering comprehensive solutions as a Full Stack Developer. I'm
              eagerly seeking compelling and challenging opportunities in the
              field.
            </p>
            <div className="mt-10">
              <button className="text-white border border-emerald-50 bg-[#f97316] px-14 py-2 rounded border border-transparent hover:bg-white hover:text-[#f97316] hover:border-[#f97316] transition-all trasition-500">
                More....
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About