import React from "react";
import myImage from "../assets/myImage.jpeg";

const Hero = () => {
  return (
    <div
      id="hero"
      className=" pt-30 flex px-11 justify-between items-center h-screen  max-md:flex-wrap "
    >
      <main className="flex  flex-col text-slate-700 max-md:text-center ">
        <p className="text-2xl max-md:text-lg ">Hey, i'm Joy👋</p>
        <h1 className=" font-extrabold mt-4 text-5xl  text-slate-700 max-md:text-2xl font-bold max-md:w-full">
          {" "}
          <span className="text-blue-900 ">Full</span>Stack Developer
        </h1>
        <p className="text-2xl  w-[60%] max-md:mx-auto pt-2 max-md:text-lg max-md:w-[70%] ">
          Passionate Full Stack Developer building seamless digital experiences
        </p>
        <div className="mt-6 max-w-[500px] ml-2  max-md:flex flex-col max-md:mx-auto  ">
          <a
            href="#contact"
            className="bg-blue-900 px-5 py-3 rounded-lg text-white mr-4  max-md:mb-4 ml-2 max-md:text-sm"
          >
            {" "}
            Get In Touch
          </a>
          <a
            href="#projects"
            className="px-5 py-3 rounded-lg border border-black  max-md:text-sm px-3 py-1.5"
          >
            {" "}
            Browse Project
          </a>
        </div>
      </main>
      <main className="mx-auto">
        <img
          src={myImage}
          alt="my image"
          className="h-100 rounded-full max-md:h-50  max-md:my-6"
        />
      </main>
    </div>
  );
};

export default Hero;
