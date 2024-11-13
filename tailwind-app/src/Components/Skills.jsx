import React from 'react'
import { IoStar } from "react-icons/io5";
import { IoStarHalfOutline } from "react-icons/io5";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
const Skills = () => {
  return (
    <div className="bg-white  md:min-h-[170vh] min-h-[170vh] lg:bg-white lg:min-h-0  md:max-w-[100%] ">
      <h1 className="text-[#32333c] font-poppins md:text-7xl text-2xl p-5   after:top-10  md:after:w-[30%] after:h-1 after:rounded-[20px]  after:top-10 after:bg-[#32333c] ">
        Skills/Education
      </h1>
      <div className="w-[100%] h-[100vh] lg:flex  justify-center items-center relative">
        <div
          className="w-[80%] top-12  lg:min-h-[10px] m-[auto] md:top-[10%]  lg:max-w-[40%] md:w-[70%] lg:w-[50%]   border md:border-[#f97316] border-[#f97316] rounded-2xl  p-8"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="2000"
        >
          <h1 className="text-[#32333c] text-HeadingClamp font-poppins p-5">
            Skills
          </h1>
          <ul className="w-full  text-[#32333c] text-2xl font-TimeRanges  px-3  flex flex-col gap-5 items-left justify-center ">
            <li className="hover:text-[#f97316] grid place-items-left grid-flow-col">
              <p className="text-clamp1">Html</p>
              <div className="grid place-items-left grid-flow-col">
                <IoStar className="text-clamp1" />
                <IoStar className="text-clamp1" />
                <IoStar className="text-clamp1" />
                <IoStar className="text-clamp1" />
                <IoStar className="text-clamp1" />
              </div>
            </li>
            <li className="hover:text-[#f97316] grid place-items-left grid-flow-col ">
              <p className="text-clamp1">Css</p>
              <div className="grid place-items-left grid-flow-col ">
                <IoStar className="text-clamp1" />
                <IoStar className="text-clamp1" />
                <IoStar className="text-clamp1" />
                <IoStar className="text-clamp1" />
                <IoStar className="text-clamp1" />
              </div>
            </li>
            <li className="hover:text-[#f97316] grid place-items-left grid-flow-col">
              <p className="text-clamp1">Java Script</p>
              <div className="grid place-items-left grid-flow-col ">
                <IoStar className="text-clamp1" />
                <IoStar className="text-clamp1" />
                <IoStar className="text-clamp1" />
                <IoStarHalfOutline className="text-clamp1" />
                <MdOutlineStarBorderPurple500 className="text-clamp1" />{" "}
              </div>
            </li>
            <li className="hover:text-[#f97316] grid place-items-left grid-flow-col items-left">
              <p className="text-clamp1">Node Js</p>
              <div className="grid place-items-left grid-flow-col ">
                <IoStar className="text-clamp1" />
                <IoStar className="text-clamp1" />
                <IoStar className="text-clamp1" />
                <IoStarHalfOutline className="text-clamp1" />
                <MdOutlineStarBorderPurple500 className="text-clamp1" />{" "}
              </div>
            </li>
            <li className="hover:text-[#f97316] grid place-items-left grid-flow-col items-left">
              <p className="text-clamp1">Express js</p>
              <div className="grid place-items-left grid-flow-col ">
                <IoStar className="text-clamp1" />
                <IoStar className="text-clamp1" />
                <MdOutlineStarBorderPurple500 className="text-clamp1" />{" "}
                <MdOutlineStarBorderPurple500 className="text-clamp1" />{" "}
                <MdOutlineStarBorderPurple500 className="text-clamp1" />{" "}
              </div>
            </li>
            <li className="hover:text-[#f97316] grid place-items-left grid-flow-col items-left">
              <p className="text-clamp1">Mongo DB</p>
              <div className="grid place-items-left grid-flow-col ">
                <IoStar className="text-clamp1" />
                <IoStar className="text-clamp1" />
                <MdOutlineStarBorderPurple500 className="text-clamp1" />{" "}
                <MdOutlineStarBorderPurple500 className="text-clamp1" />{" "}
                <MdOutlineStarBorderPurple500 className="text-clamp1" />{" "}
              </div>
            </li>
            <li className="hover:text-[#f97316] grid place-items-left grid-flow-col items-left">
              <p className="text-clamp1">Postman</p>
              <div className="grid place-items-left grid-flow-col ">
                <IoStar className="text-clamp1" />
                <IoStar className="text-clamp1" />
                <MdOutlineStarBorderPurple500 className="text-clamp1" />{" "}
                <MdOutlineStarBorderPurple500 className="text-clamp1" />{" "}
                <MdOutlineStarBorderPurple500 className="text-clamp1" />{" "}
              </div>
            </li>
            <li className="hover:text-[#f97316] grid place-items-left grid-flow-col ">
              <p className="text-clamp1">Figma (Basic)</p>
              <div className="grid place-items-left grid-flow-col ">
                <IoStar className="text-clamp1" />
                <IoStar className="text-clamp1" />
                <MdOutlineStarBorderPurple500 className="text-clamp1" />{" "}
                <MdOutlineStarBorderPurple500 className="text-clamp1" />{" "}
                <MdOutlineStarBorderPurple500 className="text-clamp1" />{" "}
              </div>
            </li>
          </ul>
        </div>
        <div
          className="w-[80%] top-20 sm:top-[30%] md:w-[70%] lg:max-w-[40%] m-[auto] md:top-[15%] lg:top-[10%] lg:min-h-[70vh] lg:min-h-[10px] border border-[#f97316] flex flex-col rounded-2xl flex flex-col items-center justify-center px-[1em] py-[1em]"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="2500"
        >
          <h1 className="text-[#32333c] text-HeadingClamp font-poppins p-5">
            Education
          </h1>
          <ul className="text-[#32333c] text-clamp1 font-TimeRanges grid place-items-center gap-4">
            <li className="hover:text-[#f97316]  ">
              <h2>
                BCA :
                <p className="text-[16px]">
                  {" "}
                  (Bachelor of Computer Application)
                </p>
              </h2>
              <div className="flex items-center justify-center">
                <ul>
                  <li>Jamal Mohamed College Tricy (2019-2022)</li>
                  <li>
                    <p>65%</p>
                  </li>
                </ul>
              </div>
            </li>
            <li className="hover:text-[#f97316] ">
              <h2>
                HSC :
                <p className="text-[16px]">
                  (Higher Secondary School Certificate)
                </p>
              </h2>
              <div className="flex items-center justify-center">
                <ul>
                  <li>New Sangeeth Metric.Hr.Secondary School</li>
                  <li>
                    {" "}
                    <p>55%</p>
                  </li>
                </ul>
              </div>
            </li>
            <li className="hover:text-[#f97316]">
              <h2>
                SSLC :{" "}
                <p className="text-[16px]">
                  (Secondary School Leaving Certificate)
                </p>
              </h2>
              <div className="flex items-center justify-evenly">
                <ul>
                  <li>
                    {" "}
                    <p>St.Arulanandar.hr.sec.school (2018-2019)</p>
                  </li>
                  <li></li>
                  <li>
                    {" "}
                    <p>76%</p>
                  </li>
                  <li></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills