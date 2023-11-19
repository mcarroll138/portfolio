import React from "react";
import ProfileCard from "./ProfileCard";
import HistoryBackgroundCard from "./BackgroundCard";
import Projects from "./Projects";
import ProjectList from "./ProjectList";
import ExperienceCard from "./ExperienceCard";

export default function LandingPage() {
  const mainDivContainerStyle = {
    border: "2px solid white",
    borderRadius: "4px",
    background: "black",
    height: "100%",
  };
  return (
    <div style={mainDivContainerStyle}>
      <div style={{ marginRight: 400 }}>
        <ProfileCard />
      </div>
      {/* <Projects /> */}
      <div>
        <ProjectList />
      </div>
      <div>
        <ExperienceCard />
      </div>
      <div>
        <HistoryBackgroundCard />
      </div>
    </div>
  );
}
