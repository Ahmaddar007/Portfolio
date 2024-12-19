import React from "react";
import pro from "../assets/project-1.png";
import pro2 from "../assets/project-2.png";
import pro3 from "../assets/project-3.png";

function Work() {
  return (
    <div
      id="work"
      className="flex flex-col justify-center items-center text-white my-20 bg-[#032543] mx-4 lg:mx-20 p-8 lg:p-10 rounded-xl font-Mont border-2 border-[#0287f4] shadow-lg"
    >
      {/* Title and Description */}
      <h1 className="text-4xl font-bold mb-6 border-b-2 border-[#0287f4] pb-2">
        Works & Projects
      </h1>
      <p className="text-xl text-center w-full lg:w-3/4">
        Check out some of my design projects, meticulously crafted with love and
        dedication, each one reflecting the passion and soul I poured into every
        detail.
      </p>

      {/* Project Cards */}
      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {/* Project 1 */}
        <div className="relative group">
          <img
            src={pro}
            className="w-72 h-48 rounded-lg shadow-md hover:scale-105 transition-transform duration-500 ease-in-out"
            alt="Project 1"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center rounded-lg">
            <h3 className="text-2xl font-semibold">Project 1</h3>
            <p className="text-lg">Description of Project 1</p>
          </div>
        </div>

        {/* Project 2 */}
        <div className="relative group">
          <img
            src={pro2}
            className="w-72 h-48 rounded-lg shadow-md hover:scale-105 transition-transform duration-500 ease-in-out"
            alt="Project 2"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center rounded-lg">
            <h3 className="text-2xl font-semibold">Project 2</h3>
            <p className="text-lg">Description of Project 2</p>
          </div>
        </div>

        {/* Project 3 */}
        <div className="relative group">
          <img
            src={pro3}
            className="w-72 h-48 rounded-lg shadow-md hover:scale-105 transition-transform duration-500 ease-in-out"
            alt="Project 3"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center rounded-lg">
            <h3 className="text-2xl font-semibold">Project 3</h3>
            <p className="text-lg">Description of Project 3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
