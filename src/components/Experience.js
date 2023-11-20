import React from "react";
import PropTypes from "prop-types";

export default function Experience(props) {
  const profileContainerStyle = {
    background: "#ffffff",
    borderRadius: "24px",
    margin: "auto",
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
  const experienceDateStyle = {
    fontFamily: "inter",
    fontSize: 16,
    fontStyle: "italic",
    fontWeight: 400,
    lineHeight: "140%",
    letterSpacing: "-.48px",
    paddingBottom: 16,
  };
  const experienceDescriptionStyle = {
    fontFamily: "inter",
    fontSize: 16,
    fontWeight: 400,
    fontStyle: "normal",
    lineHeight: "140%",
    letterSpacing: "-.48px",
    paddingBottom: 16,
  };
  const experienceLinkStyle = {
    fontFamily: "inter",
    fontSize: 16,
    fontWeight: 400,
    fontStyle: "normal",
    lineHeight: "140%",
    letterSpacing: "-.48px",
    textDecorationLine: "underline",
  };
  return (
    <>
      <div>
        <div style={profileContainerStyle} id="profileContainerStyle">
          <div style={experienceTypeStyle}> {props.type}</div>
          <div style={experienceNameStyle}>{props.name}</div>
          <div style={experienceDateStyle}>{props.dates}</div>
          <div style={experienceDescriptionStyle}>{props.description}</div>
          <div style={experienceLinkStyle}>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
              {props.name} Website
            </a>
          </div>
        </div>{" "}
      </div>
    </>
  );
}

Experience.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  dates: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
};
