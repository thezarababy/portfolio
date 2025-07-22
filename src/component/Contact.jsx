import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact">
      <section className="py-10 px-5 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
        <p className="text-center text-lg mb-8">
          Let's connect and build something great!
        </p>

        <div className="flex flex-col items-center gap-6">
          <a
            href="tel:+2348106227153"
            className="flex items-center gap-3 text-green-700 hover:underline"
          >
            <FaPhoneAlt size={20} /> +234 8106227153
          </a>
          <a
            href="mailto:jyokoduwa@gmail.com"
            className="flex items-center gap-3 text-blue-600 hover:underline"
          >
            <FaEnvelope size={24} /> jyokoduwa@gmail.com
          </a>
          <a
            href="https://github.com/thezarababy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-black hover:underline"
          >
            <FaGithub size={24} /> github.com/thezarababy
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/joy-okoduwa/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-blue-700 hover:underline"
          >
            <FaLinkedin size={24} /> linkedin.com/in/joy-okoduwa
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
