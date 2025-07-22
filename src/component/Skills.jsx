import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiVercel,
  SiFigma,
  SiGit,
} from "react-icons/si";

const Skills = () => {
  return (
    <div>
      <section id="skills" className="py-16 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-8">Skills & Tools</h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 text-4xl text-gray-800 ">
          <div className="flex flex-col items-center gap-2 hover:transition-all hover:translate-3">
            <FaHtml5 className="text-orange-600" />
            <span className="text-sm">HTML5</span>
          </div>
          <div className="flex flex-col items-center gap-2 hover:transition-all hover:translate-3">
            <FaCss3Alt className="text-blue-600" />
            <span className="text-sm">CSS3</span>
          </div>
          <div className="flex flex-col items-center gap-2 hover:transition-all hover:translate-3">
            <FaJsSquare className="text-yellow-400" />
            <span className="text-sm">JavaScript</span>
          </div>
          <div className="flex flex-col items-center gap-2 hover:transition-all hover:translate-3">
            <SiTypescript className="text-blue-500" />
            <span className="text-sm">TypeScript</span>
          </div>
          <div className="flex flex-col items-center gap-2 hover:transition-all hover:translate-3">
            <FaReact className="text-blue-400 animate-spin-slow" />
            <span className="text-sm">React</span>
          </div>
          <div className="flex flex-col items-center gap-2 hover:transition-all hover:translate-3">
            <SiNextdotjs />
            <span className="text-sm">Next.js</span>
          </div>
          <div className="flex flex-col items-center gap-2 hover:transition-all hover:translate-3">
            <SiTailwindcss className="text-cyan-500" />
            <span className="text-sm">Tailwind CSS</span>
          </div>
          <div className="flex flex-col items-center gap-2 hover:transition-all hover:translate-3">
            <FaNodeJs className="text-green-600" />
            <span className="text-sm">Node.js</span>
          </div>
          <div className="flex flex-col items-center gap-2 hover:transition-all hover:translate-3">
            <SiMongodb className="text-green-700" />
            <span className="text-sm">MongoDB</span>
          </div>
          <div className="flex flex-col items-center gap-2 hover:transition-all hover:translate-3">
            <FaGithub />
            <span className="text-sm">GitHub</span>
          </div>
          <div className="flex flex-col items-center gap-2 hover:transition-all hover:translate-3">
            <SiExpress />
            <span className="text-sm">Express.js</span>
          </div>
          <div className="flex flex-col items-center gap-2 hover:transition-all hover:translate-3">
            <SiVercel className="text-black" />
            <span className="text-sm">Vercel</span>
          </div>
          <div className="flex flex-col items-center gap-2hover:transition-all hover:translate-3">
            <SiFigma className="text-pink-500" />
            <span className="text-sm">Figma</span>
          </div>
          <div className="flex flex-col items-center gap-2 hover:transition-all hover:translate-3">
            <SiGit className="text-red-500" />
            <span className="text-sm">Git</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
