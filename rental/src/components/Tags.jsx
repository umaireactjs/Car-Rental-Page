import React from "react";

const PopularCarSection = () => {
  return (
    <div className="bg-[#f6f7f9] p-4 mt-6">
      <div className="flex justify-between items-center">
        <div
          className="text-gray-400 ml-32 text-base font-medium"
          style={{ fontFamily: "Onest, sans-serif" }}
        >
          Popular Car
        </div>
        <div
          className="text-blue-600 mr-32 mt-1 text-base font-medium cursor-pointer"
          style={{ fontFamily: "Onest, sans-serif" }}
        >
          View All
        </div>
      </div>
    </div>
  );
};

export default PopularCarSection;
