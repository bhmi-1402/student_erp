import "./About.css";
import nodejs from "./../../assets/nodejs.jpg"
import express from "./../../assets/express.jpeg"
import react from "./../../assets/reactjs.png"
import mongo from "./../../assets/mongodb.jpeg"
import redux from "./../../assets/redux.png"


const backend_technologies = [
  {
    name: "NodeJS",
    image_url: nodejs,
    details: "Used to create server and to listen APIs.",
  },
  {
    name: "ExpressJS",
    image_url: express,
    details: "Used to create server and to listen APIs.",
  },
];

const frontend_technologies = [
  {
    name: "ReactJS",
    image_url: react,
    details: "Used to create server and to listen APIs.",
  },
  {
    name: "MongoDB",
    image_url: mongo,
    details: "Used to create server and to listen APIs.",
  },
  {
    name: "Redux",
    image_url: redux,
    details: "Used to create server and to listen APIs.",
  },
];
const About = () => {
  return (
    <>
      <div className="about-main-container">
        <div className="about-alpha">
          <h1>Project Details</h1>
          <span>Our Motive</span>
          <p>
          Developed an innovative web application using Node.js,
           Express.js, React.js, and Materialize CSS, leveraging MongoDB for 
           data management .
          </p>
        </div>
        <div className="about-beta">
          <h1>Technologies we used </h1>
          <span>Backend</span>
          <div className="about-tech-card-container">
            {backend_technologies.map((tech) => {
              return (
                <>
                  <div className="about-tech-card">
                    <img src={tech.image_url}></img>
                    <p>{tech.name}</p>
                    <span>{tech.details}</span>
                  </div>
                </>
              );
            })}
          </div>
          <span>Frontend</span>
          <div className="about-tech-card-container">
            {frontend_technologies.map((tech) => {
              return (
                <>
                  <div className="about-tech-card">
                    <img src={tech.image_url}></img>
                    <p>{tech.name}</p>
                    <span>{tech.details}</span>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="about-gemma"></div>
      </div>
    </>
  );
};
export default About;
