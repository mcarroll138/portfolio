import React from "react";
import ProfileCard from "./ProfileCard";
import HistoryBackgroundCard from "./BackgroundCard";
import Projects from "./Projects";
import ProjectList from "./ProjectList";

export default function LandingPage() {
  const mainDivContainerStyle = {
    border: "2px solid white",
    borderRadius: "4px",
    background: "black",
    height: "100%",
  };
  return (
    <div style={mainDivContainerStyle}>
      <div>
        <ProfileCard />
      </div>
      {/* <Projects /> */}
      <div style={{display: 'flex',
  justifyContent: 'flexEnd',}}>
        <ProjectList />
      </div>
      <HistoryBackgroundCard />
    </div>
  );
}
