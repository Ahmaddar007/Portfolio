import React, { useState, useEffect } from "react";
import Button from "../elements/Button";

function Navbar() {
  const [active, setActive] = useState("Home");
  const [isLoaded, setIsLoaded] = useState(false); // Track when the page is loaded
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Track if the mobile menu is open

  // Function to handle active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "work", "experience", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActive(section.charAt(0).toUpperCase() + section.slice(1));
          }
        }
      });
    };

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);

    // Ensure that the active section is set to "Home" when the page is loaded or refreshed
    handleScroll(); // Call this to check the initial position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Trigger fade-in effect on page load
  useEffect(() => {
    setIsLoaded(true); // Set isLoaded to true when the component mounts
  }, []);

  return (
    <div
      className={`flex justify-between items-center my-4 text-white sticky top-0 z-50 shadow-md bg-inherit transition-opacity duration-1000 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="pb-2 mx-6">
        <h1
          className={`text-3xl font-poppins font-thin transition-transform duration-1000 ${
            isLoaded ? "translate-y-0" : "-translate-y-10"
          }`}
        >
          Ahmad Sajjad
        </h1>
      </div>

      {/* Mobile Hamburger Menu Icon */}
      <div className="block lg:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-3xl"
        >
          &#9776; {/* Hamburger icon */}
        </button>
      </div>

      {/* Navbar Links */}
      <div className="pb-2 hidden lg:block">
        <ul
          className={`flex gap-8 font-Mont transition-transform duration-1000 ${
            isLoaded ? "translate-y-0" : "-translate-y-10"
          }`}
        >
          <li
            className={`text-xl cursor-pointer transition-colors duration-300 ${
              active === "Home" ? "border-b-2 border-blue-500" : ""
            }`}
          >
            <a href="#home">Home</a>
          </li>
          <li
            className={`text-xl transition-colors duration-300 ${
              active === "About" ? "border-b-2 border-blue-500" : ""
            }`}
          >
            <a href="#about">About</a>
          </li>
          <li
            className={`text-xl transition-colors duration-300 ${
              active === "Projects" ? "border-b-2 border-blue-500" : ""
            }`}
          >
            <a href="#work">Projects</a>
          </li>
          <li
            className={`text-xl transition-colors duration-300 ${
              active === "Experience" ? "border-b-2 border-blue-500" : ""
            }`}
          >
            <a href="#experience">Experience</a>
          </li>
          <li
            className={`text-xl transition-colors duration-300 ${
              active === "Contact" ? "border-b-2 border-blue-500" : ""
            }`}
          >
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden w-full bg-black absolute top-20 left-0 transition-all duration-300 ${
          isMobileMenuOpen ? "h-60" : "h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col gap-6 items-center pt-6 text-xl">
          <li
            className={`cursor-pointer transition-colors duration-300 ${
              active === "Home" ? "border-b-2 border-blue-500" : ""
            }`}
          >
            <a href="#home">Home</a>
          </li>
          <li
            className={`transition-colors duration-300 ${
              active === "About" ? "border-b-2 border-blue-500" : ""
            }`}
          >
            <a href="#about">About</a>
          </li>
          <li
            className={`transition-colors duration-300 ${
              active === "Projects" ? "border-b-2 border-blue-500" : ""
            }`}
          >
            <a href="#work">Projects</a>
          </li>
          <li
            className={`transition-colors duration-300 ${
              active === "Experience" ? "border-b-2 border-blue-500" : ""
            }`}
          >
            <a href="#experience">Experience</a>
          </li>
          <li
            className={`transition-colors duration-300 ${
              active === "Contact" ? "border-b-2 border-blue-500" : ""
            }`}
          >
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      <div className="pb-2 mr-8 hidden lg:block">
        <a href="https://wa.me/+923013656698"><Button
          text="Let's Chat"
          className={`transition-transform duration-1000 ${
            isLoaded ? "translate-y-0" : "-translate-y-10"
          }`}
        />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
