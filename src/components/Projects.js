import React from "react";
import PropTypes from "prop-types";


function Projects(props) {
  console.log(props);
  const projectContainerStyle = {
    background: "#ffffff",
    borderRadius: "14px",
    display: "flex",
    flexDirection: "column",
    padding: "40px 38px",
    marginBottom: 80,
    maxWidth: props.isCapstone ? 1720 : 336,
    // marginRight: 22,
    // maxWidth: 336,
  };
  const projectImageStyle = {
    maxWidth: props.isCapstone ? 1720 : "100%",
    width: "100%",
    height: "auto",
    borderRadius: 20,
    background: "#F1EBFF",
    // maxWidth: 276,
  };
  const projectTitleStyle = {
    fontFamily: "inter",
    fontSize: 12,
    fontWeight: 800,
    textTransform: "uppercase",
    marginTop: 40,
    marginBottom: 16,
    maxWidth: 336,
    // maxWidth: "100%",
  };
  const projectNameStyle = {
    fontFamily: "inter",
    fontSize: 40,
    fontWeight: 400,
    letterSpacing: "-2px",
    maxWidth: "100%",
  };
  const projectDescriptionStyle = {
    fontFamily: "inter",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: "140%",
    letterSpacing: "-.48px",
    maxWidth: "100%",
    marginTop: 16,
    marginBottom: 40,
  };
  const projectLinkStyle = {
    fontFamily: "inter",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: "140%",
    letterSpacing: "-.48px",
    textDecorationLine: "underline",
  };
  return (
    <div>
      <div style={projectContainerStyle}>
        <img
          src={props.image}
          style={
            props.isCapstone
              ? { maxWidth: 720, ...projectImageStyle }
              : projectImageStyle
          }
          alt=""
        ></img>
        <div style={projectTitleStyle}>Project</div>{" "}
        <div style={projectNameStyle}>
          [{props.name}]
          <div style={projectDescriptionStyle}>{props.description}</div>
          <div style={projectLinkStyle}>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
              Link to project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

Projects.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.string,
  isCapstone: PropTypes.bool,
};
export default Projects;
