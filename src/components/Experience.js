import React from "react";
import Tassle from "../assets/TassleHat.svg";
import PropTypes from "prop-types";

export default function Experience(props) {
  const profileContainerStyle = {
    background: "#ffffff",
    // border: "2px solid white",
    borderRadius: "14px",
    // display: "flex",
    // flexDirection: "column",
    // padding: "40px 38px",
    // // alignItems: "center",
    // gap: "40px",
    // marginLeft: 22,
    // // marginRight: 22,
    // // marginBottom: 80,
    // width: 720,
  };

  const experienceTypeStyle = {
    fontFamily: "inter",
    fontSize: 12,
    fontWeight: 800,
    textTransform: "uppercase",
    paddingTop: 40,
  };
  const experienceNameStyle = {
    fontFamily: "inter",
    fontSize: 40,
    fontWeight: 400,
    letterSpacing: "-2px",
    paddingTop: 16,
    paddingBottom: 16,
  };
  const experienceDescriptionStyle = {
    fontFamily: "inter",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: "140%",
    letterSpacing: "-.48px",
  };
  return (
    <>
      <div>
        <div style={profileContainerStyle} id="profileContainerStyle">
          <div style={experienceTypeStyle}> {props.type}</div>
          <div style={experienceNameStyle}>{props.name}</div>
          <div>{props.dates}</div>
          <div>{props.description}</div>
          <div>{props.link}</div>
        </div>{" "}
      </div>
    </>
  );
}

Experience.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
};
