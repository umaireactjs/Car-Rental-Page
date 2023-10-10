import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header.jsx";
import Cards from "./components/Cards.jsx";
import PopularCarSection from "./components/Tags.jsx";
import CarCards from "./components/CarCards.jsx";
import MorentSection from "./components/MorentSection.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <div className=" bg-[#f6f7f9]">
      <Header />
      <Cards />
      <PopularCarSection />
      <CarCards />
      <MorentSection />
    </div>
  </>
);
