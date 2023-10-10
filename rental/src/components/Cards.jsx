import React from "react";
import LightCardTable from "./LightCardTable";
import DarkCardTable from "./DarkCardTable";
import { HiArrowsUpDown } from "react-icons/hi2";

const LightCard = () => {
  return (
    <div
      className="bg-[#61a7ff] p-4 rounded-lg shadow-lg w-[31rem] h-[17rem] mt-6 ml-10 mr-8 relative"
      style={{
        backgroundImage: 'url("./images/bg.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1
        className="text-2xl font-medium text-white mb-2"
        style={{ fontFamily: "Onest, sans-serif" }}
      >
        The Best Platform <br />
        for Car Rental
      </h1>
      <p
        className="text-sm text-white mb-1"
        style={{ fontFamily: "Onest, sans-serif" }}
      >
        Ease of doing a car rental safely and <br /> reliably.Of course at a low
        price.
      </p>
      <button
        className="bg-[#3d65eb] text-white px-3 py-2 text-sm mt-2 rounded"
        style={{ fontFamily: "Onest, sans-serif" }}
      >
        Rental Car
      </button>
      <img
        src="./images/p1_1.png"
        alt="Car"
        style={{
          width: "61%",
          position: "absolute",
          bottom: "-14px",
          left: "25%",
          right: "initial",
          margin: "auto",
        }}
      />
    </div>
  );
};

const DarkCard = () => {
  return (
    <div
      className="bg-[#303030] p-4 rounded-lg shadow-lg w-[31rem] h-[17rem] mt-6 ml-10 mr-8 relative"
      style={{
        backgroundImage: 'url("./images/pic.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <img
        src="./images/Bitmap.png"
        alt="Car"
        style={{
          width: "52%",
          position: "absolute",
          bottom: "-34px",
          right: "17%",
          left: "initial",
          margin: "auto",
        }}
      />
      <h1
        className="text-2xl font-medium text-white mb-2"
        style={{ fontFamily: "Onest, sans-serif" }}
      >
        Easy way to rent a <br /> car at a low price
      </h1>
      <p
        className="text-sm text-white mb-2"
        style={{ fontFamily: "Onest, sans-serif" }}
      >
        Providing cheap car rental services <br />
        and safe and comfortable facilities.
      </p>
      <button
        className="bg-[#61a7ff] text-white px-3 py-2 text-sm mt-2 rounded"
        style={{ fontFamily: "Onest, sans-serif" }}
      >
        Rental Car
      </button>
    </div>
  );
};

const Cards = () => {
  return (
    <div className="flex justify-center mt-6 relative">
      <div className="mr-[-1.5rem] flex flex-col items-start">
        <LightCard />
        <div>
          <LightCardTable />
        </div>
      </div>
      <div className="ml-[-1.5rem]">
        <DarkCard />
        <div className="ml-8">
          <DarkCardTable />
        </div>
      </div>
      <div className="absolute right-62 top-80">
        <button
          className="bg-blue-600 text-white px-0 py-2 mt-6 
          ml-[0.5rem] w-14 h-14 rounded-lg flex items-center justify-center
          shadow-md"
        >
          <HiArrowsUpDown className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Cards;
