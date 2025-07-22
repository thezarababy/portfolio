import React from "react";

const Hero = () => {
  return (
    <div
      id="hero"
      className=" pt-30 flex px-11 justify-between items-center h-screen max-w-[1440px] max-md:flex-wrap "
    >
      <main className="flex  flex-col text-slate-700 max-md:text-center ">
        <p className="text-2xl ">Hey, i'm Joy👋</p>
        <h1 className=" font-extrabold mt-4 text-5xl  text-slate-700">
          {" "}
          <span className="text-blue-900">Full</span>Stack Developer
        </h1>
        <p className="text-2xl w-2/3 max-md:mx-auto py-4">
          Passionate Full Stack Developer building seamless digital experiences
        </p>
        <div className="mt-6">
          <a
            href="#contact"
            className="bg-blue-900 px-5 py-3 rounded-lg text-white mr-4 "
          >
            {" "}
            Get In Touch
          </a>
          <a
            href="#projects"
            className="px-5 py-3 rounded-lg border border-black "
          >
            {" "}
            Browse Project
          </a>
        </div>
      </main>
      <main className="mx-auto">my image</main>
    </div>
  );
};

export default Hero;
