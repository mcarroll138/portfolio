import React from "react";
import Experience from "./Experience";
import GraduationHat from "../assets/TassleHat.svg";
import { useIsMobile } from "./MobileContext.js";

const mainExperienceList = [
  {
    type: "WORK",
    name: "SimBco",
    dates: "October - December 2023",
    description:
      "During my internship at SimbCo, I contributed as a Junior Developer in a team of 2-3 members. We mainly focused on trouble tickets, front-end, and back-end development using React and Node. We implemented features for the web progressive app 'Vino Seeker,' demonstrating proficiency in Git, GitLab, Node.js, Amazon AWS, React, Sequelize, Docker, and Feathers.js. I successfully overcame challenges posed by the size of the code base, breaking it down into manageable components. This experience bolstered confidence and affirmed my capabilities as a developer. I actively participated in pushing multiple changes to production code after review from the team lead. Cultivated a sense of belonging within the team, receiving valuable mentorship that further solidified my belief in my potential as a developer. Overall, the internship not only enhanced technical skills but also instilled the confidence to navigate challenges and contribute effectively to a collaborative development environment.",
    link: "https://www.simb.co/",
    projectName: "Vino Seeker",
    projectLink: "https://vinoseeker.com/",
  },
  {
    type: "EDUCATION",
    name: "Epicodus",
    dates: "May - December 2023",
    description:
      "I am currently enrolled in 27-week program at Epicodus, where I am gaining comprehensive skills in C# and React. The program focuses on immersive learning, and I actively participate in pair programming to collaboratively tackle projects in C#, React, and JavaScript. This hands-on approach has allowed me to accumulate over 1000 coding hours, working on a variety of individual, pair, and group projects. One notable aspect of my learning journey is the commitment to building and contributing to over 80 repositories on GitHub. This experience at Epicodus not only hones my technical abilities but also nurtures a collaborative and solution-oriented and growth mindset, preparing me for success in field of software development",
    link: "https://www.epicodus.com/",
  },
];

export default function ExperienceList() {
  const isMobile = useIsMobile();
  return (
    <div
      style={{
        background: "#ffffff",
        border: "2px solid white",
        borderRadius: "24px",
        maxWidth: 912,
        padding: 32,
        margin: isMobile ? "auto 22px auto 22px" : "auto",
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
            projectName={experience.projectName}
            projectLink={experience.projectLink}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
