import React from "react";

const Sidebar = ({ handleToggle }) => {
  return (
    <div className="hidden max-md:block">
      <main className="  fixed top-0 left-35 h-80 w-100 bg-blue-900 text-white z-30 px-6 py-10 shadow-lg mt-25">
        <ul className="flex flex-col gap-6   font-semibold text-2xl">
          <li>
            <a
              href="#hero"
              onClick={handleToggle}
              className="hover:text-purple-800"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={handleToggle}
              className="hover:text-purple-800"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={handleToggle}
              className="hover:text-purple-800"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={handleToggle}
              className="hover:text-purple-800"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={handleToggle}
              className="hover:text-purple-800"
            >
              Contact
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Sidebar;
