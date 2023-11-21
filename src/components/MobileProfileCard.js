import React from "react";
import Arrow from "../assets/Arrow.svg";
import GitHub from "../assets/Github.svg";
import LinkedIn from "../assets/Linkedin.svg";
import ProfilePhoto from "../assets/ProfilePicture.png";

export default function ProfileCard() {
  const profileContainerStyle = {
    background: "#ffffff",
    border: "2px solid white",
    borderRadius: "24px",
    padding: "40px 38px",
    marginTop: 80,
    margin: " 60px 22px 60px 22px",
    maxWidth: 912,
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
    marginTop: 40,
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
    marginTop: 15,
    marginBottom: 32,
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
  };
  return (
    <div>
      <div style={profileContainerStyle} id="profileContainerStyle">
        <div style={profileImageStyle} id="profileImageStyle">
          <img src={ProfilePhoto} alt="Head Shot"></img>
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
                justifyContent: "center",
                gap: 8,
                alignitems: "baseline",
                marginTop: 10,
              }}
            >
              <img
                src={LinkedIn}
                alt="Linkedin"
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
