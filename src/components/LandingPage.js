import React from "react";
import MobileProfileCard from "./MobileProfileCard";
import HistoryBackgroundCard from "./BackgroundCard";
import ProjectList from "./ProjectList";
import ExperienceList from "./ExperienceList";
import ProfileCard from "./ProfileCard.js";
import { useIsMobile } from "./MobileContext.js";

export default function LandingPage() {
  const isMobile = useIsMobile();
  const mainDivContainerStyle = {
    border: "2px solid white",
    background: "#D9D9D9",
  };

  return (
    <div style={mainDivContainerStyle}>
      {isMobile ? <MobileProfileCard /> : <ProfileCard />}
      <ProjectList />
      <ExperienceList />
      <HistoryBackgroundCard />
    </div>
  );
}
