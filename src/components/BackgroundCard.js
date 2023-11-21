import React from "react";
import Background from "../assets/Background.svg";
import { useIsMobile } from "./MobileContext.js";

export default function HistoryBackgroundCard() {
  const isMobile = useIsMobile();
  const historyContainerStyle = {
    maxWidth: 912,
    padding: "32px 32px 32px 40px",
    flexdirection: "column",
    alignitems: "flexStart",
    borderRadius: "24px",
    background: "#ffffff",
    border: "2px solid white",
    gap: "40px",
    margin: isMobile ? "80px 22px 80px 22px" : "80px auto 80px auto",
    marginTop: 80,
  };
  const historyTitleStyle = {
    fontFamily: "inter",
    fontSize: 40,
    fontStyle: "normal",
    fontWeight: 400,
    letterSpacing: "-2px",
    paddingBottom: 40,
    color: "#783afc",
  };
  const historyBodyStyle = {
    fontFamily: "inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "140%",
    letterSpacing: "-0.48px",
  };
  return (
    <div style={historyContainerStyle}>
      <div>
        <div style={historyTitleStyle}>
          <img
            style={{ paddingRight: 16 }}
            src={Background}
            alt="Puzzle Piece"
          ></img>
          background
        </div>
      </div>
      <div style={historyBodyStyle}>
        My education and career has always been technology based and somewhat
        coding adjacent. I have taken Cisco Networks courses, along with
        computer science classes.{" "}
        <p>
          For over a decade I was employed with Vanguard Security Inc., based
          out of Los Angeles, California. We designed and installed security
          systems for high-end residential homes and estates. I held many titles
          within the company from Lead Technician, Project Manager, and lastly,
          Director of Technology. My work at Vanguard involved several types of
          security and security adjacent systems, such as Alarm Systems, CCTV
          (Networked and analog), Access Control, Perimeter Detection and
          Deterrent, Intercoms, Phone Systems, Networking.
        </p>
        <p>
          I have alway been underwhelmed by the lack of cross communications
          between the security system technologies. Coding sounded like a
          solution that could potentially bridge this gap. To say these devices
          do not communicate with one another is inaccurate but the interface is
          cumbersome. I have done hundreds, if not thousands, of walkthroughs
          with clients on their properties and have noticed a pattern of
          complaints that I would love to fix.
        </p>
      </div>
    </div>
  );
}
