import { useState, useEffect } from 'react';

export default function PortfolioPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // projects
    const data = [
      {
        title: "prework-study-guide",
        color: "#FF5733", // Orange
        githubLink: "https://github.com/Mar10w/1prework-study-guide",
      },
      {
        title: "typescript-vehicle-lab",
        color: "#33FF57", // Green
        githubLink: "hhttps://github.com/Mar10w/TS-Vehicle",
      },
      {
        title: "readme-generator",
        color: "#3357FF", // Blue
        githubLink: "https://github.com/Mar10w/readme-generator",
      },
      {
        title: "prework-card-quiz",
        color: "#FF33A1", // Pink
        githubLink: "https://github.com/Eldrish-Ramos/prework-card-quiz",
      },
      {
        title: "typescript-employee-tracker",
        color: "#FFC300", // Yellow
        githubLink: "https://github.com/Mar10w/employee-tracker",
      },
      {
        title: "Future-Projects",
        color: "#8E44AD", // Purple
        githubLink: "https://github.com/Mar10w",
      },
    ];
    setProjects(data);
  }, []);
  
    return (
        <div
        className="container-fluid text-white min-vh-100 pt-4"
        style={{
          background: "linear-gradient(to bottom, #d3d3d3, #696969)", // Light grey to dark grey gradient
        }}
      >
        <h1>Portfolio</h1>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div
              className="card text-center"
              style={{
                backgroundColor: project.color,
                color: "white",
                padding: "2rem",
                borderRadius: "8px",
              }}
            >
              <h5 className="card-title">{project.title}</h5>
              <a
                href={project.githubLink}
                className="btn btn-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                    View GitHub Repo
                  </a>
                </div>
              </div>
          ))}
        </div>
      </div>
    );
  }