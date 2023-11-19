import React from "react";
import Projects from "./Projects";
import CoffeeRoaster from "../assets/lanternrouge@2x.png";
import Bakery from "../assets/bakery@2x.png";
import TheCircuit from "../assets/thecircuit@2x.png";
import TheFactory from "../assets/factory@2x.png";

const mainProjectList = [
  {
    image: CoffeeRoaster,
    name: "Coffee Roaster Inventory Tracker",
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
      "A webpage application using C# to create and use a database to store both Treats and Flavors in a database and link them by using many to many relationships. This webpage uses authentication to allow users with an account to Create, Edit, and Delete items in the database. If a user is not logged in, the user can only view the treats and flavors stored in the database. Link to GH Page:",
    link: "https://github.com/mcarroll138/PierresTreats.Solution.git",
  },
];
const capstoneProject = {
  image: TheCircuit,
  name: "The Circuit",
  description:
    "The Circuit is a social media web app that allows users to create events and invite other users to attend. The main goal is connecting people to events in their area. This is an ongoing project of mine and was built as my capstone at Epicodus. I have features that I am looking to implement but the first thing I would like to do is change backends from Firebase and move to Supabase as it will help me scale my features",
  link: "https://github.com/mcarroll138/PierresTreats.Solution.git",
};

function ProjectList() {
  return (
    <>
      <div
        style={{
          justifyContent: "right",
          marginTop: 80,
          marginLeft: 330,
          marginRight: 20,
          width: 720,
          // display: "flex",
          // alignItems: "flexEnd",
          // flexWrap: "wrap",
          // minWidth: 600,
          // alignContent: 'spaceBetween',
        }}
      >
        <Projects
          image={capstoneProject.image}
          name={capstoneProject.name}
          description={capstoneProject.description}
          link={capstoneProject.link}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flexEnd",
          // marginLeft: 330,
          // marginTop: 80,
          maxWidth: 336,
          // justifyContent: "spaceEvenly",
          //above is old
          // display: "inlineFlex",
          flexDirection: "row",
          // alignItems: "flexStart",
          // marginLeft: 330,
          // marginTop: 80,
          // width: 360,
          // justifyContent: "spaceBetween",
          // flexWrap: "wrap",
          // alignContent: 'spaceBetween',
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
