import React from "react";
import Projects from "./Projects";

const mainProjectList = [
  {
    name: "Dr. Sillystringz's Factory",
    description:
      "A webpage application using C# to create and use a database to store both Engineers and Machinery in a database and link them by using many to many relationships.",
    link: "https://github.com/mcarroll138/Factory.Solution.git",
  },
  {
    name: "p2 name",
    description: "p2 Desc",
    link: "p2 issue",
  },
  {
    name: "p3 name",
    description: "p3 Desc",
    link: "p3 issue",
  },
];

function ProjectList() {
  return (
    <>
      <hr />
      {mainProjectList.map((projects, index) => (
        <Projects
          name={projects.name}
          description={projects.description}
          link={projects.link}
          key={index}
        />
      ))}
    </>
  );
}
export default ProjectList;
