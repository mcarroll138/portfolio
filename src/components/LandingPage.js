import React from "react";
import ProfileCard from "./ProfileCard";

export default function LandingPage() {
  const mainDivContainerStyle = {
    border: "2px solid white",
    borderRadius: "4px",
    background: '#F8F8F8',
  };
  return (
    <div style={mainDivContainerStyle}>
      <ProfileCard />
    </div>
  );
}
