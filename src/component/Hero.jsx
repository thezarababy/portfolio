import React from "react";
import imageTwo from "../assets/imageTwo.jpeg";

const Hero = () => {
  return (
    <div
      id="hero"
      className="flex flex-col-reverse md:flex-row h-screen px-6 md:px-11 justify-between items-center "
    >
      <main className="h-1/2 md:h-full flex flex-col justify-center md:items-start items-center text-center md:text-left w-full ">
        <p className="text-2xl max-md:text-lg ">Hey, i'm Joy👋</p>
        <h1 className="  mt-4 text-5xl  text-slate-500 max-md:text-2xl font-bold max-md:w-full">
          {" "}
          <span className="text-blue-500 ">Full</span>Stack Developer
        </h1>
        <p className="text-2xl  w-[60%] max-md:mx-auto pt-2 max-md:text-lg max-md:w-[70%] ">
          Passionate Full Stack Developer building seamless digital experiences
        </p>
        <div className="mt-6 max-w-[500px] ml-2  max-md:flex flex-col max-md:mx-auto  ">
          <a
            href="#contact"
            className="bg-blue-500 hover:transition-all hover:translate-1.5 hover:bg-white hover:text-blue-500 px-5 py-3 rounded-lg text-white mr-4  max-md:mb-4 ml-2 max-md:text-sm"
          >
            {" "}
            Get In Touch
          </a>
          <a
            href="/JoyOkoduwaCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className=" rounded-lg border border-blue-500  hover:bg-white hover:text-black hover:transition-all hover:translate-1.5  max-md:text-sm px-3 py-1.5"
          >
            {" "}
            Download CV
          </a>
        </div>
      </main>
      <main className="h-1/2 md:h-full flex justify-center items-center w-full">
        <img
          src={imageTwo}
          alt="my image"
          className="h-100 rounded-full max-md:h-50  border-4 border-white shadow-xl object-cover hover:ring-4 hover:ring-blue-400 hover:scale-105 transition-all duration-300 max-md:my-6"
        />
      </main>
    </div>
  );
};

export default Hero;
