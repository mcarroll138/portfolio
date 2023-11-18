import React from "react";
import Projects from "./Projects";
import CoffeeRoaster from "../assets/LanternRouge.png";

const mainProjectList = [
  {
    image: CoffeeRoaster,
    name: "Coffee Roaster Inventory Tracker",
    description:
      "A webpage application where a user can track the coffee inventory coming in and going out. Each incoming restock of beans is equal to 130 lbs while each sale of beans deducts one pound from the stock.",
    link: "https://github.com/mcarroll138/inventory-tracker.git",
  },
  {
    image: CoffeeRoaster,
    name: "Dr. Sillystringz's Factory",
    description:
      "A webpage application using C# to create and use a database to store both Engineers and Machinery in a database and link them by using many to many relationships.",
    link: "https://github.com/mcarroll138/Factory.Solution.git",
  },
  {
    image: CoffeeRoaster,
    name: "Pierres Treats",
    description:
      "A webpage application using C# to create and use a database to store both Treats and Flavors in a database and link them by using many to many relationships. This webpage uses authentication to allow users with an account to Create, Edit, and Delete items in the database. If a user is not logged in, the user can only view the treats and flavors stored in the database. Link to GH Page:",
    link: "https://github.com/mcarroll138/PierresTreats.Solution.git",
  },
];

function ProjectList() {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "flexEnd",
          flexWrap: "wrap",
          alignContent: 'spaceBetween',
        }}
      >
        {mainProjectList.map((projects, index) => (
          <Projects
            image={projects.image}
            name={projects.name}
            description={projects.description}
            link={projects.link}
            key={index}
          />
        ))}
      </div>
    </>
  );
}
export default ProjectList;
