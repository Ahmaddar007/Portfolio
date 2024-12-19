import React from "react";

function Experience() {
  return (
    <div
      id="experience"
      className="flex flex-col justify-center items-center text-white my-20 bg-[#032543] mx-4 lg:mx-20 p-8 lg:p-10 rounded-xl font-Mont border-2 border-[#0287f4] shadow-lg"
    >
      {/* Title */}
      <h1 className="text-4xl font-bold mb-8 border-b-2 border-[#0287f4] pb-2">
        Work Experience
      </h1>

      {/* Responsive Table */}
      <div className="overflow-x-auto w-full">
        <table className="min-w-[1100px] w-full border-collapse border border-gray-300 text-sm md:text-base">
          {/* Table Header */}
          <thead className="bg-sky-400">
            <tr>
              <th className="border border-gray-500 px-4 py-2 text-left text-black">
                Company Name
              </th>
              <th className="border border-gray-500 px-4 py-2 text-left text-black">
                Duration
              </th>
              <th className="border border-gray-500 px-4 py-2 text-left text-black">
                Expertise
              </th>
              <th className="border border-gray-500 px-4 py-2 text-left text-black">
                Location
              </th>
              <th className="border border-gray-500 px-4 py-2 text-left text-black">
                Job-Type
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {/* Row 1 */}
            <tr className="odd:bg-white even:bg-gray-100 hover:bg-gray-200 transition-colors duration-300">
              <td className="border border-gray-300 px-4 py-2 text-black">SMIT</td>
              <td className="border border-gray-300 px-4 py-2 text-black">
                Jan 2021 - Dec 2021
              </td>
              <td className="border border-gray-300 px-4 py-2 text-black">
                Front-end Development
              </td>
              <td className="border border-gray-300 px-4 py-2 text-black">
                Faisalabad, Pakistan
              </td>
              <td className="border border-gray-300 px-4 py-2 text-black">
                Student
              </td>
            </tr>

            {/* Row 2 */}
            <tr className="odd:bg-white even:bg-gray-100 hover:bg-gray-200 transition-colors duration-300">
              <td className="border border-gray-300 px-4 py-2 text-black">
                Bit-Brick Technologies
              </td>
              <td className="border border-gray-300 px-4 py-2 text-black">
                Mar 2022 - Sep 2023
              </td>
              <td className="border border-gray-300 px-4 py-2 text-black">
                Front-end Development
              </td>
              <td className="border border-gray-300 px-4 py-2 text-black">
                Faisalabad, Pakistan
              </td>
              <td className="border border-gray-300 px-4 py-2 text-black">
                Internship
              </td>
            </tr>

            {/* Row 3 */}
            <tr className="odd:bg-white even:bg-gray-100 hover:bg-gray-200 transition-colors duration-300">
              <td className="border border-gray-300 px-4 py-2 text-black">
                Aim Sol Technologies
              </td>
              <td className="border border-gray-300 px-4 py-2 text-black">
                Mar 2024 - May 2024
              </td>
              <td className="border border-gray-300 px-4 py-2 text-black">
                Full-Stack Development
              </td>
              <td className="border border-gray-300 px-4 py-2 text-black">
                Faisalabad, Pakistan
              </td>
              <td className="border border-gray-300 px-4 py-2 text-black">
                Internee
              </td>
            </tr>

            {/* Row 4 */}
            <tr className="odd:bg-white even:bg-gray-100 hover:bg-gray-200 transition-colors duration-300">
              <td className="border border-gray-300 px-4 py-2 text-black">
                Meganum Solutions
              </td>
              <td className="border border-gray-300 px-4 py-2 text-black">
                Oct 2024 - Continue
              </td>
              <td className="border border-gray-300 px-4 py-2 text-black">
                Mern-Stack
              </td>
              <td className="border border-gray-300 px-4 py-2 text-black">
                Faisalabad, Pakistan
              </td>
              <td className="border border-gray-300 px-4 py-2 text-black">
                Internee
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Experience;
