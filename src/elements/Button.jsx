import React from 'react';

const Button = ({text}) => {
  return (
    <div className="relative inline-block p-1 bg-gradient-to-r from-blue-500 to-pink-500 rounded-lg transition-all duration-400 ease-in-out hover:before:blur-lg active:before:blur-sm">
      <button className="relative z-10 px-4 py-2 text-white bg-black rounded-md shadow-md hover:bg-opacity-90 focus:outline-none">
        {text}
      </button>
    </div>
  );
};

export default Button;
