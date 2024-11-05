import React, { useState } from "react";
import { IoIosContact } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    console.log(open);
  };

  return (
    <div className="sticky top-0 z-50">
      {/* Navbar Container */}
      <nav
        className="flex justify-between px-10 md:justify-around items-center
       bg-white min-h-[10vh] shadow-md sticky top-0 z-50"
      >
        {/* Logo */}
        <div>
          <h1 className="text-3xl font-bold text-black">STA</h1>
        </div>

        {/* Menu for Larger Screens */}
        <div className="hidden md:flex space-x-8">
          <ul className="flex items-center space-x-6 text-lg text-black">
            <li className="hover:text-[#f97316] cursor-pointer">Home</li>
            <li className="hover:text-[#f97316] cursor-pointer">About</li>
            <li className="hover:text-[#f97316] cursor-pointer">Projects</li>
            <li className="hover:text-[#f97316] cursor-pointer">Blog</li>
            <li className="hover:text-[#f97316] cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {open ? (
            <IoCloseOutline
              className="text-3xl cursor-pointer"
              onClick={handleClick}
            />
          ) : (
            <CiMenuFries
              className="text-3xl cursor-pointer"
              onClick={handleClick}
            />
          )}
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={` ${
          open ? "block" : "hidden"
        } bg-yellow-300 min-h-[90vh] z-20 p-5 absolute w-full top-[10vh] left-0`}
      >
        <ul className="flex flex-col items-center space-y-4 text-lg text-black relative top-20 font-TimeRanges">
          <li className="hover:text-yellow-500 cursor-pointer">Home</li>
          <li className="hover:text-yellow-500 cursor-pointer">About</li>
          <li className="hover:text-yellow-500 cursor-pointer">Contact</li>
          <li className="hover:text-yellow-500 cursor-pointer">Blog</li>
          <li className="hover:text-yellow-500 cursor-pointer">Careers</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
