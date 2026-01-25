import { useState } from "react";
import projectsData from "../data/projects.js";

const Projects = () => {
  const [expanded, setExpanded] = useState(() => new Set());

  const toggleProject = (title) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(title)) {
        next.delete(title);
      } else {
        next.add(title);
      }
      return next;
    });
  };

  return (
    <main>
      <section className="projects">
        <h2>Projects</h2>
        <div id="projects-list" className="projects-grid">
          {projectsData.map((project) => (
            <div
              key={project.title}
              className="project-card"
              onClick={() => window.open(project.url, "_blank", "noopener,noreferrer")}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  window.open(project.url, "_blank", "noopener,noreferrer");
                }
              }}
            >
              <h3>{project.title}</h3>
              <img src={project.image} alt={project.title} />
              <div className="description-container">
                <div className={`description-text${expanded.has(project.title) ? " expanded" : ""}`}>
                  {project.description}
                </div>
                <button
                  type="button"
                  className="more-button"
                  onClick={(event) => {
                    event.stopPropagation();
                    toggleProject(project.title);
                  }}
                >
                  {expanded.has(project.title) ? "Show less" : "Show more"}
                </button>
              </div>
              <div className="project-links">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => event.stopPropagation()}
                >
                  <i className="fas fa-external-link-alt"></i>
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Projects;
