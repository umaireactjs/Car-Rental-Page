import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsFuelPumpFill } from "react-icons/bs";
import { PiSteeringWheel } from "react-icons/pi";
import { HiMiniUsers } from "react-icons/hi2";

const CarCardsRow1 = () => {
  const cars = [
    {
      id: 1,
      name: "Koenigsegg",
      type: "Sport",
      price: "$99.00/",
      isFavorite: true,
      imageUrl: "./images/p1_1.png",
      imageStyles: {
        marginTop: "60px",
        width: "95%",
        marginRight: "10px",
      },
      icon1Text: "90L",
      icon2Text: "Manual",
      icon3Text: "2 People",
    },
    {
      id: 2,
      name: "Nissan GT - R",
      type: "Sport",
      price: "$80.00/",
      originalPrice: "$100.00",
      isFavorite: false,
      isReducedPrice: true,
      imageUrl: "./images/Bitmap.png",
      imageStyles: {
        marginTop: "65px",
        width: "85%",
        marginRight: "0px",
      },
      icon1Text: "80L",
      icon2Text: "Manual",
      icon3Text: "2 People",
    },
    {
      id: 3,
      name: "Rolls - Royce",
      type: "Sedan",
      price: "$96.00/",
      isFavorite: true,
      imageUrl: "./images/rolls.png",
      imageStyles: {
        marginTop: "89px",
        width: "83%",
        marginRight: "3px",
      },
      icon1Text: "70L",
      icon2Text: "Manual",
      icon3Text: "4 People",
    },
    {
      id: 4,
      name: "Nissan GT - R",
      type: "Sport",
      price: "$80.00/",
      originalPrice: "$100.00",
      isFavorite: false,
      isReducedPrice: true,
      imageUrl: "./images/car2.png",
      imageStyles: {
        marginTop: "89px",
        width: "83%",
        marginRight: "3px",
      },
      icon1Text: "80L",
      icon2Text: "Manual",
      icon3Text: "2 People",
    },
    {
      id: 5,
      name: "All New Rush",
      type: "SUV",
      price: "$72.00/",
      originalPrice: "$80.00",
      isFavorite: false,
      isReducedPrice: true,
      imageUrl: "./images/car4.png",
      imageStyles: {
        marginTop: "89px",
        width: "83%",
        marginRight: "3px",
      },
      icon1Text: "70L",
      icon2Text: "Manual",
      icon3Text: "6 People",
    },
    {
      id: 6,
      name: "CR - V",
      type: "SUV",
      price: "$80.00/",
      isFavorite: true,
      imageUrl: "./images/car5.png",
      imageStyles: {
        marginTop: "94px",
        width: "92%",
        marginRight: "1px",
      },
      icon1Text: "80L",
      icon2Text: "Manual",
      icon3Text: "6 People",
    },
    {
      id: 7,
      name: "All New Terios",
      type: "SUV",
      price: "$74.00/",
      isFavorite: false,
      imageUrl: "./images/car6.png",
      imageStyles: {
        marginTop: "84px",
        width: "84%",
        marginRight: "2px",
      },
      icon1Text: "90L",
      icon2Text: "Manual",
      icon3Text: "6 People",
    },
    {
      id: 8,
      name: "CR - V",
      type: "SUV",
      price: "$80.00/",
      isFavorite: true,
      imageUrl: "./images/car7.png",
      imageStyles: {
        marginTop: "91px",
        width: "93%",
        marginRight: "1px",
      },
      icon1Text: "80L",
      icon2Text: "Manual",
      icon3Text: "6 People",
    },
    {
      id: 9,
      name: "MG ZX Exclusice",
      type: "Hatchback",
      price: "$76.00/",
      originalPrice: "$80.00",
      isFavorite: true,
      isReducedPrice: true,
      imageUrl: "./images/car8.png",
      imageStyles: {
        marginTop: "95px",
        width: "100%",
        marginRight: "2px",
      },
      icon1Text: "70L",
      icon2Text: "Manual",
      icon3Text: "6 People",
    },
    {
      id: 10,
      name: "New MG ZS",
      type: "SUV",
      price: "$80.00/",
      isFavorite: false,
      imageUrl: "./images/car9.png",
      imageStyles: {
        marginTop: "125px",
        width: "182%",
        marginRight: "2px",
      },
      icon1Text: "80L",
      icon2Text: "Manual",
      icon3Text: "6 People",
    },
    {
      id: 11,
      name: "MG ZX Excite",
      type: "Hatchback",
      price: "$74.00/",
      isFavorite: true,
      imageUrl: "./images/car8.png",
      imageStyles: {
        marginTop: "95px",
        width: "98%",
        marginRight: "2px",
      },
      icon1Text: "90L",
      icon2Text: "Manual",
      icon3Text: "4 People",
    },
    {
      id: 12,
      name: "New MG ZS",
      type: "SUV",
      price: "$80.00/",
      isFavorite: false,
      imageUrl: "./images/car10.png",
      imageStyles: {
        marginTop: "121px",
        width: "115%",
        marginRight: "1px",
      },
      icon1Text: "80L",
      icon2Text: "Manual",
      icon3Text: "6 People",
    },
  ];

  cars.forEach((car) => {
    if (car.originalPrice) {
      car.originalPrice = car.originalPrice.replace("day", "");
    }
  });

  return (
    <div className="p-4">
      <div className="container mx-auto mb-20">
        <div className="flex flex-wrap justify-center">
          {cars.map((car, index) => (
            <div
              key={car.id}
              className="w-full sm:w-1/5 md:w-1/4 p-2 relative"
              style={{
                maxWidth: "calc(21% - 0.5rem)",
                marginRight: "0.3rem",
                marginLeft: "0.3rem",
                marginBottom: "1rem",
              }}
            >
              <div className="bg-white rounded-lg p-2 relative h-72">
                <div
                  className={`${
                    car.isFavorite ? "text-red-500" : "text-gray-400"
                  } absolute top-5 right-5 cursor-pointer`}
                  onClick={() => {}}
                >
                  {car.isFavorite ? (
                    <AiFillHeart size={24} />
                  ) : (
                    <AiOutlineHeart size={24} />
                  )}
                </div>
                <div className="w-full h-40 object-cover rounded-lg mb-2 flex items-center justify-center">
                  <img
                    src={car.imageUrl}
                    alt={car.name}
                    className="max-h-full max-w-full"
                    style={car.imageStyles}
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <h2 className="text-black-800 font-bold text-md font-sans  ">
                    {car.name}
                  </h2>
                  <p className="text-gray-400 text-sm font-semibold ">
                    {car.type}
                  </p>
                </div>
                <div
                  className={`flex flex-col items-start mt-2 ml-2 absolute left-2 ${
                    car.isReducedPrice ? "bottom-3" : "bottom-5"
                  }`}
                >
                  <div className="text-black font-semibold text-lg">
                    {car.price}
                    <span className="text-gray-400 font-mono text-xs">day</span>
                  </div>
                  {car.isReducedPrice && (
                    <div className="text-gray-500 text-xs">
                      <del>{car.originalPrice}</del>
                    </div>
                  )}
                </div>
                <div className="flex justify-center  mt-8  ml-2">
                  <div className="flex items-center">
                    <BsFuelPumpFill size={16} className="text-gray-500" />
                    <div className="ml-1 text-xs text-gray-500 font-sans">
                      {car.icon1Text}
                    </div>
                  </div>
                  <div className="mx-2" />
                  <div className="flex items-center">
                    <PiSteeringWheel size={16} className="text-gray-500" />
                    <div className="ml-1 text-xs text-gray-500 font-sans">
                      {car.icon2Text}
                    </div>
                  </div>
                  <div className="mx-2" />
                  <div className="flex items-center">
                    <HiMiniUsers size={16} className="text-gray-500" />
                    <div className="ml-1 text-xs text-gray-500 ">
                      {car.icon3Text}
                    </div>
                  </div>
                </div>
                <button
                  className="bg-blue-600 text-white px-2 py-2 mt-3 mr-3 rounded-md text-sm absolute right-2 bottom-4"
                  style={{
                    borderRadius: "0.25rem",
                    fontFamily: "Onest, sans-serif",
                  }}
                >
                  Rent Now
                </button>
              </div>
              {index === 0 && (
                <div className="text-gray-400 text-base font-semibold ml-4 mt-8">
                  Recommendation Car
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center mb-9 mt-[-3rem]">
        <div
          className="bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer"
          style={{ borderRadius: "0.25rem" }}
        >
          Show more car
        </div>
      </div>
      <div
        className="flex justify-end text-gray-400 font-Onest text-sm mr-24 pr-4 mt-[-70px]  "
        style={{ fontFamily: "Onest, sans-serif" }}
      >
        120 Car
      </div>
      <div style={{ height: "50px" }}></div>
    </div>
  );
};

export default CarCardsRow1;
