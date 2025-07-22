import React from "react";

const Header = () => {
  return (
    <div
      id="header"
      className="fixed top-0 w-full bg-white shadow z-50 max-w-[1440px] flex justify-between items-center  mx-auto p-7 text-slate-700"
    >
      <h1 className="text-3xl font-semibold">
        {" "}
        my<span className="text-blue-900">Portfolio</span>
      </h1>
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
  );
};

export default Header;
