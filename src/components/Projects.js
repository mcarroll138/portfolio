import React from "react";
import LinkedIn from "../assets/Linkedin.svg";
import PropTypes from "prop-types";
import CoffeeRoaster from "../assets/CoffeeRoaster.png";

function Projects(props) {
  console.log(props);
  const profileContainerStyle = {
    background: "#ffffff",
    border: "2px solid white",
    borderRadius: "14px",
    display: "flex",
    flexDirection: "column",
    padding: "40px 38px",
    // alignItems: "center",
    gap: "40px",
    marginLeft: 22,
    marginRight: 22,
    marginBottom: 80,
    maxWidth: 320,
  };
  const projectImageStyle = {
    // width: 272,
    // height: 272,
    borderRadius: 20,
    background: "#F1EBFF",
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
    letterSpacing: '-2px',
  };
    const projectDescriptionStyle = {
      fontFamily: "inter",
      fontSize: 16,
      fontWeight: 400,
      lineHeight: '140%',
      letterSpacing: "-.48px",
    };
  return (
    <>
      <div
        style={{
          display: "-ms-inline-flexbox",
          flexDirection: "row",
        }}
      >
        <div style={profileContainerStyle} id="profileContainerStyle">
          <div style={projectImageStyle} id="projectImageStyle">
            {/* <img src={LinkedIn} alt="Git Hub"></img> */}
            <img
              src={props.image}
              style={{
                width: "90%",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 14,
              }}
              alt=""
            ></img>
          </div>
          <div style={projectTitleStyle}>Project</div>
          <div style={projectNameStyle}>[{props.name}]</div>
          <div style={projectDescriptionStyle}>{props.description}</div>
          <div>
            <a href={props.link}>Link to Project</a>
          </div>
        </div>
      </div>
    </>
  );
}

Projects.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
};
export default Projects;
