import React, { useState } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "./Sidebar";

const Header = () => {
  const [toggle, setToggle] = useState("false");
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div id="header" className="max-w-[1440px] mx-auto  ">
      {" "}
      <div className="fixed top-0 w-full bg-white shadow z-50 flex justify-between items-center p-7 text-slate-700">
        <div>
          <h1 className="text-3xl font-semibold">
            {" "}
            my<span className="text-blue-900">Portfolio</span>
          </h1>
        </div>
        <div className="hidden max-md:block">
          {toggle ? (
            <RxCross1 size={30} onClick={handleToggle} />
          ) : (
            <RxHamburgerMenu size={30} onClick={handleToggle} />
          )}
        </div>
        <div className="max-md:hidden">
          <ul className="flex gap-6   font-semibold text-2xl">
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
        </div>
      </div>
      <div>{toggle && <Sidebar handleToggle={handleToggle} />}</div>
    </div>
  );
};

export default Header;
