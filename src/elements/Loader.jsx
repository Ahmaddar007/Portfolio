import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="grid grid-cols-3 gap-1 w-[156px] h-[156px]">
        <div className="loader-cell delay-0"></div>
        <div className="loader-cell delay-1"></div>
        <div className="loader-cell delay-2"></div>
        <div className="loader-cell delay-1"></div>
        <div className="loader-cell delay-2"></div>
        <div className="loader-cell delay-2"></div>
        <div className="loader-cell delay-3"></div>
        <div className="loader-cell delay-3"></div>
        <div className="loader-cell delay-4"></div>
      </div>
    </div>
  );
};

export default Loader;
