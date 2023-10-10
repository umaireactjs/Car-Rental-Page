import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const DarkCardTable = () => {
  return (
    <div className=" bg-white rounded-lg p-4 w-[29rem] h-[8rem] mt-6 mb-3 ml-[2.5rem] flex  relative">
      <div className="absolute ml-1 mt-1 top-2 left-2 h-6">
        <img src={"./images/down.png"} alt="Pick Up" className="h-full" />
      </div>
      <div
        className="absolute ml-1 mt-1 top-2 left-10 text-dark font-medium"
        style={{ fontFamily: "Onest, sans-serif" }}
      >
        Drop-Off
      </div>
      <div className="flex flex-col items-start ml-1 mt-8">
        <div
          className="text-dark mt-3 mr-10 text-md font-semibold text-black-700"
          style={{ fontFamily: "Onest, sans-serif" }}
        >
          Locations
        </div>
        <div className="text-light mt-1 flex items-center text-xs text-gray-400 space-x-2">
          Select your city{" "}
          <RiArrowDownSLine className="text-sm ml-3 text-black" />
        </div>
      </div>
      <div className="border-r border-gray-300 h-[3rem] ml-3 mb-6 mr-6 mt-11"></div>
      <div className="flex flex-col items-start ml-1 mt-8">
        <div
          className="text-dark mt-3 mr-10 text-md font-semibold text-black-700"
          style={{ fontFamily: "Onest, sans-serif" }}
        >
          Date
        </div>
        <div className="text-light mt-1 flex items-center text-xs text-gray-400 space-x-2">
          Select your date{" "}
          <RiArrowDownSLine className="text-sm ml-3 text-black" />
        </div>
      </div>
      <div className="border-r border-gray-300 h-[3rem] ml-3 mb-6 mr-6 mt-11"></div>
      <div className="flex flex-col items-start ml-1 mt-8">
        <div
          className="text-dark mt-3 mr-10 text-md font-semibold text-black-700"
          style={{ fontFamily: "Onest, sans-serif" }}
        >
          Time
        </div>
        <div className="text-light mt-1 flex items-center text-xs text-gray-400 space-x-2">
          Select your time{" "}
          <RiArrowDownSLine className="text-sm ml-3 text-black" />
        </div>
      </div>
    </div>
  );
};

export default DarkCardTable;
