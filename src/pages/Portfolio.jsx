import Project from "../components/Project";

function Portfolio() {
  const projects = [
    { title: "Project 1", link: "#", github: "#" },
    { title: "Project 2", link: "#", github: "#" },
    { title: "Project 3", link: "#", github: "#" },
    { title: "Project 4", link: "#", github: "#" },
    { title: "Project 5", link: "#", github: "#" },
    { title: "Project 6", link: "#", github: "#" },
  ];

  return (
    <section>
      <h2>My Portfolio</h2>
      <div className="portfolioGrid">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            link={project.link}
            github={project.github}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
