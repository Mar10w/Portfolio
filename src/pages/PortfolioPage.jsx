export default function PortfolioPage() {
    const projects = [
      {
        title: "prework-study-guide",
        image: "/path/to/project1.jpg",
        deployedLink: "https://mar10w.github.io/1prework-study-guide/",
        githubLink: "https://github.com/Mar10w/1prework-study-guide",
      },
      //projects here
      {
        title: "Typescript-vehicle",
        image: "/path/to/project1.jpg",
        deployedLink: "Launched through terminal",
        githubLink: "https://github.com/Mar10w/TS-Vehicle",
      },
      {
        title: "Readme-generator",
        image: "/path/to/project1.jpg",
        deployedLink: "Launched through terminal",
        githubLink: "https://github.com/Mar10w/readme-generator",
      },
      {
        title: "Typescript-employee-tracker",
        image: "/path/to/project1.jpg",
        deployedLink: "launched through terminal",
        githubLink: "https://github.com/Mar10w/employee-tracker",
      },
    ];
  
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