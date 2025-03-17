import { useState, useEffect } from 'react';

export default function PortfolioPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Static data for six projects
    const data = [
      {
        title: "prework-study-guide",
        image: "https://pixabay.com/photos/dog-animal-small-small-dog-4777870/300x200.png?text=Prework-study-guide",
        githubLink: "https://github.com/Mar10w/1prework-study-guide",
      },
      {
        title: "typescript-vehicle-lab",
        image: "https://pixabay.com/photos/car-vintage-car-classic-car-4393990/300x200.png?text=Typescript-vehicle-lab",
        githubLink: "hhttps://github.com/Mar10w/TS-Vehicle",
      },
      {
        title: "readme-generator",
        image: "https://pixabay.com/illustrations/retro-flyers-70s-ads-80s-commercials-9038393/300x200.png?text=Readme-generator",
        githubLink: "https://github.com/Mar10w/readme-generator",
      },
      {
        title: "prework-card-quiz",
        image: "https://pixabay.com/illustrations/quiz-question-game-test-answer-2004350/300x200.png?text=Prework-card-quiz",
        githubLink: "https://github.com/Eldrish-Ramos/prework-card-quiz",
      },
      {
        title: "typescript-employee-tracker",
        image: "https://pixabay.com/illustrations/silhouettes-hierarchy-people-man-81830/300x200.png?text=Typescript-employee-tracker",
        githubLink: "https://github.com/Mar10w/employee-tracker",
      },
      {
        title: "Future-Projects",
        image: "https://pixabay.com/illustrations/future-road-path-straight-412761/300x200.png?text=Future-Projects",
        githubLink: "https://github.com/Mar10w",
      },
    ];
    setProjects(data);
  }, []);
  
    return (
      <div className="container pt-4">
        <h1>Portfolio</h1>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <img src={project.image} className="card-img-top" alt={project.title} />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <a href={project.deployedLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    View Deployed App
                  </a>
                  <a href={project.githubLink} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                    View GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }