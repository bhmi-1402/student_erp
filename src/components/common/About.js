import "./About.css";
const backend_technologies = [
  {
    name: "NodeJS",
    image_url: "#",
    details: "Used to create server and to listen APIs.",
  },
  {
    name: "ExpressJS",
    image_url: "#",
    details: "Used to create server and to listen APIs.",
  },
];

const frontend_technologies = [
  {
    name: "ReactJS",
    image_url: "#",
    details: "Used to create server and to listen APIs.",
  },
  {
    name: "Axios",
    image_url: "#",
    details: "Used to create server and to listen APIs.",
  },
  {
    name: "Redux",
    image_url: "#",
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
            lorem asinrf anfiuan anfosn afjs aofio afsknet afas etfa afs
            aasfafedaeagf fds adfdasg ae efsda sadefe gsdfenfjdks efwfsdf
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
