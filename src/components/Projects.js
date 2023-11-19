import React from "react";
import LinkedIn from "../assets/Linkedin.svg";
import PropTypes from "prop-types";
import CoffeeRoaster from "../assets/Frame 3.svg";

function Projects(props) {
  console.log(props);
  const profileContainerStyle = {
    // background: "#ffffff",
    // border: "2px solid white",
    // borderRadius: "14px",
    // display: "flex",
    // flexDirection: "column",
    // padding: "40px 38px",
    // marginBottom: 80,
    // alignItems: "center",
    // gap: "40px",
    // marginLeft: 22,
    // marginRight: 22,
    // width: 320,
  };
  const projectImageStyle = {
    width: "100%",
    height: "auto",
    borderRadius: 20,

    // height: 1272,
    // borderRadius: 20,
    // background: "#F1EBFF",
  };
  const projectTitleStyle = {
    fontFamily: "inter",
    fontSize: 12,
    fontWeight: 800,
    textTransform: "uppercase",
  };
  const projectNameStyle = {
    fontFamily: "inter",
    fontSize: 40,
    fontWeight: 400,
    letterSpacing: "-2px",
  };
  const projectDescriptionStyle = {
    fontFamily: "inter",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: "140%",
    letterSpacing: "-.48px",
  };
  return (
    <div>
      <div style={projectImageStyle} id="projectImageStyle">
        <img src={props.image} style={projectImageStyle} alt=""></img>
      </div>
      <div style={projectTitleStyle}>Project</div>
      <div style={projectNameStyle}>[{props.name}]</div>
      <div style={projectDescriptionStyle}>{props.description}</div>
      <div>
        <a href={props.link}>Link to Project</a>
      </div>
    </div>
  );
}

Projects.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.string,
};
export default Projects;
