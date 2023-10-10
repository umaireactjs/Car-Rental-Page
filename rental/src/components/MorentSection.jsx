import React from "react";

const MorentSection = () => {
  const leftMargin = "60px";

  const morentTextStyle = {
    color: "#3d65eb",
    fontWeight: "600",
    fontSize: "28px",
    marginLeft: leftMargin,
    marginTop: "12px",
    fontFamily: "Onest, sans-serif",
    marginBottom: "20px",
  };

  const descriptionTextStyle = {
    color: "#666",
    fontSize: "14px",
    marginLeft: leftMargin,
    marginTop: "-0.7rem",
    fontFamily: "Arial, sans-serif",
  };

  const columnHeadingStyle = {
    color: "black",
    fontWeight: "bold",
    fontSize: "18px",
    marginBottom: "20px",
    fontFamily: "Arial, sans-serif",
  };

  const columnElementStyle = {
    color: "#666",
    fontSize: "14px",
    marginBottom: "25px",
    fontFamily: "Arial, sans-serif",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    marginLeft: "46rem",
    marginTop: "-5.5rem",
  };

  const columnContainerStyle = {
    marginRight: "30px",
  };

  const lineStyle = {
    backgroundColor: "#ccc",
    height: "0.075rem",
    margin: "40px 40px",
  };

  const copyrightTextStyle = {
    color: "#000",
    fontWeight: "500",
    fontSize: "18px",
    fontFamily: "Roboto, sans",
    margin: "30px 30px 12px",
    marginLeft: "52px",
  };

  const privacyTermsStyle = {
    color: "#000",
    fontWeight: "500",
    fontSize: "17px",
    fontFamily: "Roboto, sans",
    margin: "-40px 50px 0px 50px",
    display: "flex",
    justifyContent: "flex-end",
  };

  const spaceStyle = {
    margin: "30px 30px",
  };

  return (
    <div className="bg-[#ffffff] py-12">
      <div className="container mx-auto">
        <div className="text-gray-700">
          <h1 style={morentTextStyle} className="morent-text">
            MORENT
          </h1>
          <p className="morent-description" style={descriptionTextStyle}>
            Our vision is to provide convenience <br /> and help increase your
            sales business.
          </p>
        </div>

        <div className="flex space-x-12" style={containerStyle}>
          <div className="text-gray-700" style={columnContainerStyle}>
            <h2 style={columnHeadingStyle} className="font-semibold mb-2">
              About
            </h2>
            <p style={columnElementStyle} className="text-xs">
              How it works
            </p>
            <p style={columnElementStyle} className="text-xs">
              Featured
            </p>
            <p style={columnElementStyle} className="text-xs">
              Partnership
            </p>
            <p style={columnElementStyle} className="text-xs">
              Business Relation
            </p>
          </div>

          <div className="text-gray-700" style={columnContainerStyle}>
            <h2 style={columnHeadingStyle} className="font-semibold mb-2">
              Community
            </h2>
            <p style={columnElementStyle} className="text-xs">
              Events
            </p>
            <p style={columnElementStyle} className="text-xs">
              Blog
            </p>
            <p style={columnElementStyle} className="text-xs">
              Podcast
            </p>
            <p style={columnElementStyle} className="text-xs">
              Invite a friend
            </p>
          </div>

          <div className="text-gray-700" style={columnContainerStyle}>
            <h2 style={columnHeadingStyle} className="font-semibold mb-2">
              Social
            </h2>
            <p style={columnElementStyle} className="text-xs">
              Discord
            </p>
            <p style={columnElementStyle} className="text-xs">
              Instagram
            </p>
            <p style={columnElementStyle} className="text-xs">
              Twitter
            </p>
            <p style={columnElementStyle} className="text-xs">
              Facebook
            </p>
          </div>
        </div>

        <div style={lineStyle}></div>

        <p style={copyrightTextStyle}> ©2022 MORENT. All rights reserved </p>

        <div style={privacyTermsStyle}>
          <p>Privacy & Policy</p>
          <span style={spaceStyle}></span>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default MorentSection;
