import React, { useState } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "./Sidebar";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div id="header" className=" h-[100px] px-5 pt-4 text-white">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div>
          <h1 className="text-3xl font-semibold max-md:text-2xl">
            my<span className="text-blue-500">Portfolio</span>
          </h1>
        </div>
        {/* Desktop Navigation */}
        <nav className="max-md:hidden">
          <ul className="flex gap-6 font-semibold text-2xl">
            <li>
              <a href="#hero" className="hover:text-purple-800">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-purple-800">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-purple-800">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-purple-800">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-purple-800">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="hidden max-md:block p-3">
          {toggle ? (
            <RxCross1 size={30} onClick={handleToggle} />
          ) : (
            <RxHamburgerMenu size={30} onClick={handleToggle} />
          )}
        </div>
      </div>
      {/* Sidebar for Mobile */}
      {toggle && <Sidebar handleToggle={handleToggle} />}
    </div>
  );
};

export default Header;
