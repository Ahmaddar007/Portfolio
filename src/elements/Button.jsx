import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <div className="relative inline-block">
      <button
        onClick={onClick}
        className="relative overflow-hidden px-6 py-3 text-white font-bold text-lg border-2 border-gray-800 bg-gray-900 rounded-full cursor-pointer transition-all duration-400 hover:border-gray-500 hover:bg-gray-800 focus:outline-none font-Mont"
      >
        <span className="absolute inset-0 bg-gradient-radial from-white/25 to-transparent scale-0 transition-transform duration-500 hover:scale-150" />
        {text}
      </button>
    </div>
  );
};

export default Button;
