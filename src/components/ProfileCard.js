import React from "react";
import Arrow from "../assets/Arrow.svg";
import GitHub from "../assets/Github.svg";
import LinkedIn from "../assets/Linkedin.svg";
import ProfilePhoto from "../assets/ProfilePicture.png";
import { useIsMobile } from "./MobileContext.js";
export default function ProfileCard() {
  const isMobile = useIsMobile();

  const profileContainerStyle = {
    background: "#ffffff",
    border: "2px solid white",
    borderRadius: "24px",
    padding: "40px 38px",
    marginTop: isMobile ? "10px" : "80px",
    margin: " 60px auto 60px auto",
    maxWidth: 912,
    maxHeight: 340,
    display: "flex",
    alignitems: "left",
  };
  const profileImageStyle = {
    display: "flex",
    // maxHeight: 260,
    maxWidth: 260,
    paddingRight: 60,
    justifyContent: "center",
    alignitems: "center",
  };
  const profileNameStyle = {
    color: "black",
    // textAlign: "center",
    fontFamily: "inter",
    fontSize: 32,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "100%",
    letterSpacing: "-1.6px",
    width: "100",
  };
  const profileTitleStyle = {
    color: "black",
    // textAlign: "center",
    fontFamily: "inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "100%",
    letterSpacing: "-0.48px",
    paddingTop: 15,
    paddingBottom: 40,
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
    <div style={{ margin: "auto" }}>
      <div style={profileContainerStyle} id="profileContainerStyle">
        <div style={profileImageStyle} id="profileImageStyle">
          <img src={ProfilePhoto} alt="Git Hub"></img>
        </div>
        <div style={profileNameStyle} id="profileNameStyle">
          Michael Carroll
          <div style={profileTitleStyle}>Junior Developer</div>
          <div
            style={{
              display: "flex",
              // justifyContent: "center",
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
                style={{ color: "#783afc" }}
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
                //   justifyContent: "center",
                gap: 8,
                //   alignitems: "center",
                marginTop: 10,
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
                {" "}
                <a
                  href="https://www.linkedin.com/in/michaelgarycarroll/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#783afc" }}
                >
                  Linkedin
                  <img src={Arrow} alt="Arrow"></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
