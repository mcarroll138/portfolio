import React from "react";
import Projects from "./Projects";
import CoffeeRoaster from "../assets/lanternrouge@2x.png";
import Bakery from "../assets/bakery@2x.png";
import TheCircuit from "../assets/TheCircuit.jpg";
import TheFactory from "../assets/factory@2x.png";
import { useIsMobile } from "./MobileContext.js";

const mainProjectList = [
  {
    image: CoffeeRoaster,
    name: "Lantern Rouge Coffee Roaster Inventory Tracker",
    description:
      "A webpage application where a user can track the coffee inventory coming in and going out. Each incoming restock of beans is equal to 130 lbs while each sale of beans deducts one pound from the stock.",
    link: "https://github.com/mcarroll138/inventory-tracker.git",
  },
  {
    image: TheFactory,
    name: "Dr. Sillystringz's Factory",
    description:
      "A webpage application using C# to create and use a database to store both Engineers and Machinery in a database and link them by using many to many relationships.",
    link: "https://github.com/mcarroll138/Factory.Solution.git",
  },
  {
    image: Bakery,
    name: "Pierres Treats",
    description:
      "A webpage application using C# to create and use a database to store both Treats and Flavors in a database and link them by using many to many relationships. This webpage uses authentication to allow users with an account to Create, Edit, and Delete items in the database. If a user is not logged in, the user can only view the treats and flavors stored in the database.",
    link: "https://github.com/mcarroll138/PierresTreats.Solution.git",
  },
];
const capstoneProject = {
  image: TheCircuit,
  name: "The Circuit",
  description:
    "A web app that allows users to create events and invite other users to attend. The main goal is connecting people to IRL events in their area. This is an ongoing passion project of mine and was built as my capstone at Epicodus. I have many features that I am looking to implement but the first first on my list is to change the backend from Firebase to Supabase as it will help me scale my features.",
  link: "https://github.com/mcarroll138/PierresTreats.Solution.git",
};

function ProjectList() {
  const isMobile = useIsMobile();
  return (
    <>
      <div
        id="Capstone Project Container"
        style={{
          display: "flex",
          flexDirection: "column",
          margin: isMobile ? "auto 22px auto 22px" : "auto",
          maxWidth: 986,
        }}
      >
        <Projects
          image={capstoneProject.image}
          name={capstoneProject.name}
          description={capstoneProject.description}
          link={capstoneProject.link}
          isCapstone={true}
        />
      </div>
      <div
        style={{
          display: !isMobile ? "flex" : "",
          justifyContent: "space-between",
          flexWrap: "wrap",
          borderRadius: "24px",
          maxWidth: 990,
          margin: isMobile ? "auto 22px auto 22px " : "auto",
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
      {/* </div> */}
    </>
  );
}
export default ProjectList;

