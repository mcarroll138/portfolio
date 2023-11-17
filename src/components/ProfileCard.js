import React from "react";
import Arrow from "../assets/Arrow.svg";
import GitHub from "../assets/Github.svg";
import LinkedIn from "../assets/linkedin-svgrepo-com.svg";

export default function ProfileCard() {
  const profileContainerStyle = {
    background: "#ffffff",
    // color: "white",
    border: "2px solid white",
    borderRadius: "14px",
    display: "inline-grid",
    padding: "40px 38px",
    flexdirection: "column",
    alignitems: "center",
    gap: "40px",
    marginLeft: 22,
    marginTop: 80,
  };
  const profileImageStyle = {
    display: "flex",
    height: 180,
    padding: "60px, 42px, 60px, 42px",
    justifyContent: "center",
    alignitems: "center",
  };
  const profileNameStyle = {
    color: "black",
    textAlign: "center",
    fontFamily: "inter",
    fontSize: 32,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "100%",
    letterSpacing: "-1.6px",
  };
  const profileTitleStyle = {
    color: "black",
    textAlign: "center",
    fontFamily: "inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "100%",
    letterSpacing: "-0.48px",
    paddingTop: 15,
  };
  const githubLinkStyle = {
    color: "#783AFC",
    textAlign: "center",
    fontFamily: "inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "100%",
    letterSpacing: "-0.48px",
    alignitems: "center",
    textDecoration: "underline",
    paddingTop: 4,
  };
  return (
    <div style={profileContainerStyle} id="profileContainerStyle">
      <div style={profileImageStyle} id="profileImageStyle">
        <img src={GitHub} alt="Git Hub"></img>
      </div>
      <div style={profileNameStyle} id="profileNameStyle">
        Michael Carroll
        <div style={profileTitleStyle} id="profileTitleStyle">
          Junior Developer
        </div>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
            alignitems: "center",
          }}
        >
          <img src={GitHub} alt="Git Hub"></img>
          <div style={githubLinkStyle} id="githubLinkStyle">
            {" "}
            <a
              href="https://github.com/mcarroll138"
              target="_blank"
              rel="noopener noreferrer"
            >
              github portfolio
              <img src={Arrow} alt="Arrow"></img>
            </a>
          </div>
        </div>

        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 8,
              alignitems: "center",
            }}
          >
            <img
              src={LinkedIn}
              alt="Linked In"
              style={{
                height: 24,
              }}
            ></img>
            <div style={githubLinkStyle} id="githubLinkStyle">
              <a
                href="https://www.linkedin.com/in/michaelgarycarroll/"
                target="_blank"
                rel="noopener noreferrer"
              >
              {" "}
                Linked in
                <img src={Arrow} alt="Arrow"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
