import React from "react";
import LinkedIn from "../assets/Linkedin.svg";
import PropTypes from "prop-types";

function Projects(props) {
  const profileContainerStyle = {
    background: "#ffffff",
    // color: "white",
    border: "2px solid white",
    borderRadius: "14px",
    // display: "flex",
    flexDirection: "column",
    justifyContent: "right",
    padding: "40px 38px",
    alignItems: "center",
    gap: "40px",
    marginLeft: 22,
    marginRight: 22,
    marginTop: 80,
    maxWidth: 320,
  };
  const projectImageStyle = {
    width: 272,
    height: 272,
    borderRadius: 20,
    background: "#F1EBFF",
  };
  return (
    <>
      <div style={profileContainerStyle} id="profileContainerStyle">
        <div style={projectImageStyle} id="projectImageStyle">
          <img src={LinkedIn} alt="Git Hub"></img>
        </div>
        <div>Project </div>
        <div>{props.name}</div>
        <div>{props.description}</div>
        <div>
          <a href="https://github.com/mcarroll138/Factory.Solution.git">
            Link to Project
          </a>
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
