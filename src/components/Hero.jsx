import React, { useState, useEffect } from "react";
import profile from "../assets/img.jpg";
import Button from "../elements/Button";

function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  const handleDownload = () => {
  
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // File must be in the `public` folder
    link.download = "Ahmad_Sajjad.pdf"; // Custom download file name
    link.click();
  };

  return (
    <div
      className={`flex flex-col items-center text-white my-10 bg-[#032543] mx-5 md:mx-20 p-10 md:p-20 rounded-xl border-2 border-[#0287f4] transition-all duration-1000 ease-in-out ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="relative mb-10">
        <img
          src={profile}
          className={`rounded-full h-40 w-40 md:h-80 md:w-80 bg-cover shadow-xl transition-transform duration-1000 ease-in-out ${
            isLoaded ? "scale-100" : "scale-75"
          }`}
          alt="Profile"
        />
      </div>
      <div
        className={`flex flex-col justify-center items-center my-8 transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-2xl md:text-4xl font-Mont text-center">
          Hi, My name is{" "}
          <span className="text-indigo-800 font-poppins">Ahmad Sajjad</span>
        </h1>
        <p
          className={`text-lg md:text-xl text-center font-Mont mt-4 transition-transform duration-1000 ${
            isLoaded ? "translate-y-0" : "translate-y-5"
          }`}
        >
          I am a web developer skilled in HTML, CSS, Tailwind CSS, React.js, and
          currently expanding into back-end development with Node.js, Express,
          and MongoDB. I aim to become a MERN stack developer and mobile app
          creator with React Native.
        </p>
      </div>
      <div
        className={`flex gap-10 mt-6 font-Mont transition-transform duration-1000 ${
          isLoaded ? "translate-y-0" : "translate-y-10"
        }`}
      >
        
        {/* Button with Download Functionality */}
        <Button text="Download CV" onClick={handleDownload} />
      </div>
    </div>
  );
}

export default Hero;
