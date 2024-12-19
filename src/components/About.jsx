import React from "react";
import profile2 from "../assets/pic.jpg";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaLaravel } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiMongodb } from "react-icons/si";

function About() {
  return (
    <div
      id="about"
      className="flex flex-col lg:flex-row justify-center items-center text-white my-20 bg-[#032543] mx-4 lg:mx-20 p-8 lg:p-10 rounded-xl gap-8 lg:gap-16 font-Mont border-2 border-[#0287f4] shadow-lg transition-transform duration-700 ease-in-out"
    >
      {/* Profile Image */}
      <div className="flex justify-center">
        <img
          src={profile2}
          className="h-72 w-72 lg:h-[30rem] lg:w-96 rounded-xl hover:scale-105 transition-transform duration-500 ease-in-out"
          alt="Profile"
        />
      </div>

      {/* About Content */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-3xl font-bold mb-4 border-b-2 border-[#0287f4] pb-2">
          About Me
        </h2>
        <h1 className="text-2xl font-semibold mb-4">I'm a Web Developer</h1>
        <p className="text-lg leading-relaxed">
          I am a passionate web developer with expertise in creating responsive
          and dynamic web applications using HTML, CSS, Tailwind CSS, and
          React.js. Currently, I am expanding my skills in back-end technologies
          like Node.js, Express, and MongoDB, with the goal of becoming a
          proficient MERN stack developer. I am also exploring mobile app
          development with React Native to build seamless cross-platform
          solutions.
        </p>
        <p className="mt-6 text-lg font-semibold">Frameworks & Libraries I've Worked With:</p>
        
        {/* Icons Section */}
        <div className="flex flex-wrap gap-4 mt-4">
          {/* First Row */}
          <button className="p-3 bg-gray-800 rounded-full hover:bg-[#E44D26] transition-colors duration-300">
            <FaHtml5 className="w-8 h-8 text-white" />
          </button>
          <button className="p-3 bg-gray-800 rounded-full hover:bg-[#1572B6] transition-colors duration-300">
            <FaCss3Alt className="w-8 h-8 text-white" />
          </button>
          <button className="p-3 bg-gray-800 rounded-full hover:bg-[#06B6D4] transition-colors duration-300">
            <BiLogoTailwindCss className="w-8 h-8 text-white" />
          </button>
          <button className="p-3 bg-gray-800 rounded-full hover:bg-[#7952B3] transition-colors duration-300">
            <FaBootstrap className="w-8 h-8 text-white" />
          </button>
          <button className="p-3 bg-gray-800 rounded-full hover:bg-[#F7DF1E] transition-colors duration-300">
            <IoLogoJavascript className="w-8 h-8 text-black" />
          </button>
          
          {/* Second Row */}
          <button className="p-3 bg-gray-800 rounded-full hover:bg-[#61DAFB] transition-colors duration-300">
            <FaReact className="w-8 h-8 text-black" />
          </button>
          <button className="p-3 bg-gray-800 rounded-full hover:bg-[#339933] transition-colors duration-300">
            <FaNodeJs className="w-8 h-8 text-white" />
          </button>
          <button className="p-3 bg-gray-800 rounded-full hover:bg-[#000000] transition-colors duration-300">
            <SiExpress className="w-8 h-8 text-white" />
          </button>
          <button className="p-3 bg-gray-800 rounded-full hover:bg-[#47A248] transition-colors duration-300">
            <SiMongodb className="w-8 h-8 text-white" />
          </button>
          <button className="p-3 bg-gray-800 rounded-full hover:bg-[#FF2D20] transition-colors duration-300">
            <FaLaravel className="w-8 h-8 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
