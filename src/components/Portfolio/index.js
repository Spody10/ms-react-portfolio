import React from 'react';
import Container from 'react-bootstrap/Container';


function Portfolio() {
  const projects = [
    
    
    {
      image: "screencapture-weather-dashboard.png",
      title: "Weather Dashboard",
      link: "https://spody10.github.io/weather-dashboard/",
      repo: "https://github.com/Spody10/weather-dashboard",
    },
    {
      image: "artfuldodgerscreenshot.png",
      title: "Artful Dodger",
      link: "https://guarded-caverns-91294.herokuapp.com/",
      repo: "https://github.com/Spody10/artfuldodger",
    },
    {
      image: "b-t-screenshot.png",
      title: "Budget Tracker (PWA)",
      link: "https://agile-tor-20302.herokuapp.com/",
      repo: "https://github.com/Spody10/budget-tracker",
    },
    {
      image: "screencapture-code-quiz.png",
      title: "Code Quiz",
      link: "https://spody10.github.io/code-quiz/",
      repo: "https://github.com/Spody10/code-quiz",
    },
    {
      image: "Vehicle_value_img.png",
      title: "Vehicle Value",
      link: "https://spody10.github.io/vehicle-value/",
      repo: "https://github.com/Spody10/vehicle-value",
    },
    {
      image: "run-buddy.png",
      title: "Run Buddy",
      link: "https://spody10.github.io/run-buddy/",
      repo: "https://github.com/Spody10/run-buddy",
    },
  ];
  return (
    <div>
      <div id="portfolio" className="d-flex">
        <div className="section-heading">
          <h3 className="">Portfolio</h3>
        </div>
      </div>
      <Container className="d-flex flex-wrap mt-5">
        {projects.map((project) => (
          <div>
            <div>
            <h2>{project.title}</h2>
              <img
                alt={project.title}
                className="screenshot"
                src={require(`../../assets/images/${project.image}`).default}
              />
            </div>
            
            
            <p>
              <a className="active-links" href={project.link}>Deployed Application</a>
            </p>
            <p>
              <a href={project.repo}>Project Repository</a>
            </p>
          </div>
        ))}
      </Container>
    </div>
  );
}

export default Portfolio;