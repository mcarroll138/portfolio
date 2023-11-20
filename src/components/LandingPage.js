import React from "react";
import ProfileCard from "./ProfileCard";
import HistoryBackgroundCard from "./BackgroundCard";
import ProjectList from "./ProjectList";
import ExperienceList from "./ExperienceList";
import SkillInterestList from "./SkillInterestList";

export default function LandingPage() {
  const mainDivContainerStyle = {
    border: "2px solid white",
    // borderRadius: "44px",
    background: "#D9D9D9",
    // height: "2000vh",
  };

  return (
    <div style={mainDivContainerStyle}>
      <ProfileCard />
      <ProjectList />
      <ExperienceList />
      <HistoryBackgroundCard />
      <SkillInterestList />
    </div>
  );
}
