import React from "react";
import Experience from "./Experience";
import GraduationHat from "../assets/TassleHat.svg";

const mainExperienceList = [
  {
    type: "WORK",
    name: "SimBco",
    dates: "October - December 2023",
    description:
      "Internship blh hfhdkls jfdklsLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    link: "https://www.simb.co/",
  },
  {
    type: "EDUCATION",
    name: "Epicodus",
    dates: "May - December 2023",
    description:
      "Coding bootcamp, C#/ React Track Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    link: "https://www.epicodus.com/",
  },
];

export default function ExperienceList() {
  return (
    <div
      style={{
        background: "#ffffff",
        border: "2px solid white",
        borderRadius: "24px",
        maxWidth: 990,
        padding: 32,
        margin: "auto",
      }}
    >
      <div
        style={{
          color: "#783afc",
          fontFamily: "inter",
          fontSize: 40,
          fontWeight: 400,
          lineHeight: "100%",
          letterSpacing: "-2px",
        }}
      >
        {" "}
        <img
          src={GraduationHat}
          style={{ paddingRight: 16 }}
          alt="Graduation Cap"
        ></img>
        experience
      </div>
      <div>
        {mainExperienceList.map((experience, index) => (
          <Experience
            type={experience.type}
            name={experience.name}
            dates={experience.dates}
            description={experience.description}
            link={experience.link}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
