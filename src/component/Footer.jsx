import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer" className="max-w-[1440px] bg-blue-900 mx-auto ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 pt-6 pb-4">
        <a href="#about" className="text-2xl font-semibold text-white">
          Joy Okoduwa
        </a>
        <div className="flex gap-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>

      <div className="text-center text-sm text-white mt-4 pb-5">
        &copy; {new Date().getFullYear()} Joy Okoduwa. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
