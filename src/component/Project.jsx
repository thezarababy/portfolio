import React from "react";
import piggydesktop from "../assets/piggydesktop.png";
import piggymobile from "../assets/piggymobile.png";
import recipedesktop from "../assets/recipedesktop.png";
import recipemobile from "../assets/recipemobile.png";
import portone from "../assets/portone.png";
import porttwo from "../assets/porttwo.png";

const Project = () => {
  return (
    <div id="projects" className=" max-w-[1440px]  ">
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Project Card */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="mt-4 flex flex-col md:flex-row gap-4">
              <img
                src={recipedesktop}
                alt="Project 1"
                className="w-full md:w-1/2 rounded-lg shadow-lg"
              />
              <img
                src={recipemobile}
                alt="Project 1"
                className="w-full md:w-1/2 rounded-lg shadow-lg"
              />
            </div>

            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Recipe Finder</h3>
              <p className="text-sm text-gray-600 mb-3">
                A web app to search for recipes using TheMealDB API. Built with
                React and Axios.
              </p>
              <div className="flex flex-wrap gap-2 text-sm text-blue-600 font-medium mb-3">
                <span>#React</span>
                <span>#Axios</span>
                <span>#API</span>
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://secret-recipe-finder.vercel.app"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/thezarababy/secret-recipe-finder.git"
                  target="_blank"
                  className="text-gray-700 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="mt-4 flex flex-col md:flex-row gap-4">
              <img
                src={piggydesktop}
                alt="Project 1"
                className="w-full md:w-1/2 rounded-lg shadow-lg"
              />
              <img
                src={piggymobile}
                alt="Project 1"
                className="w-full md:w-1/2 rounded-lg shadow-lg"
              />
            </div>

            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">
                PiggyVest Clone – Invest Page
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                As part of a collaborative project, I worked on replicating
                PiggyVest’s Invest page. My role involved building the full
                Invest page from scratch, focusing on responsive design,
                reusable components, and a clean UI/UX. This project helped
                strengthen my skills in React, component structuring, and
                working effectively as a team member.
              </p>
              <div className="flex flex-wrap gap-2 text-sm text-blue-600 font-medium mb-3">
                <span>#React</span>
                <span>#Tailwid CSS</span>
                <span>#React Router DOM</span>
                <span>#Git & GitHub</span>
                <span>#Vercel</span>
                <span>#Axios</span>
                <span>#API</span>
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://piggy-collab.vercel.app/"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/midestic/piggyCollab.git"
                  target="_blank"
                  className="text-gray-700 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="mt-4 flex flex-col md:flex-row gap-4">
              <img
                src={portone}
                alt="Project 3"
                className="w-full md:w-1/2 rounded-lg shadow-lg"
              />
              <img
                src={porttwo}
                alt="Project 3"
                className="w-full md:w-1/2 rounded-lg shadow-lg"
              />
            </div>

            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
              <p className="text-sm text-gray-600 mb-3">
                A responsive, single-page portfolio website built with React,
                JSX, Tailwind CSS, and React Router DOM. Features smooth scroll
                navigation, mobile toggle sidebar, and sections like About,
                Projects, Skills, and Contact.
              </p>
              <div className="flex flex-wrap gap-2 text-sm text-blue-600 font-medium mb-3">
                <span>#React</span>
                <span>#Tailwid CSS</span>
                <span>#React Router DOM</span>
                <span>#React Icons</span>
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://portfolio-xi-one-ebswhtv1cu.vercel.app/"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/thezarababy/portfolio.git"
                  target="_blank"
                  className="text-gray-700 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
