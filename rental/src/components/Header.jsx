import React from "react";
import { FaHeart, FaBell, FaCog } from "react-icons/fa";
import { SlMagnifier } from "react-icons/sl";
import { LuSettings2 } from "react-icons/lu";

const Header = () => {
  return (
    <div className="bg-white p-9 flex justify-between items-center border-b-2 border-[#e8edf6]">
      <div className="flex items-center">
        <div
          style={{
            color: "#3d65eb",
            fontWeight: "600",
            fontSize: "28px",
            marginLeft: "70px",
            fontFamily: "Onest, sans-serif",
            marginTop: "7px",
          }}
        >
          MORENT
        </div>
        <div className="relative ml-4">
          <input
            type="text"
            placeholder="Search something here"
            className="py-2 px-8 border rounded-full w-96 ml-24 pl-14 cursor-text"
            style={{
              "::placeholder": {
                color: "gray",
                fontWeight: "800",
              },
            }}
          />
          <span className="absolute inset-y-0 right-[17rem] flex items-center pr-3">
            <SlMagnifier
              style={{ marginRight: "65px", fontSize: "18px" }}
              color="gray"
            />
          </span>

          <span className="absolute inset-y-0 right-0 flex items-center pr-3 ">
            <LuSettings2 style={{ fontSize: "22px" }} color="gray" />
          </span>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-gray-300">
            <FaHeart className="text-gray-500" />
          </div>
        </div>
        <div className="relative">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-gray-300 relative">
            <FaBell className="text-gray-500" />
            <div className="w-2 h-2 bg-red-500 rounded-full absolute top-0 right-0 transform translate-x-50 -translate-y-50"></div>
          </div>
        </div>
        <div className="relative">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-gray-300 relative">
            <FaCog className="text-gray-500" />
          </div>
        </div>
        <div className="relative">
          <div className="w-9 h-9 bg-gray-300 rounded-full overflow-hidden">
            <img
              src="./images/p1_16.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
