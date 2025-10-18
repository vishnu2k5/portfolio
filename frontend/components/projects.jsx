import React from 'react';
import "./projects.css";
import { useProjectStore } from '../projectStore/project.js';
import { useOngoingStore } from '../projectStore/ongoing.js';// ✅ new store for ongoing projects

const Projects = () => {
  const { projects } = useProjectStore();
  const { ongoing } = useOngoingStore();

  return (
    <div className="projects-section">
      {/* ✅ Completed Projects */}
      <h1 className="projects-title">Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.name}
              className="project-image"
            />
            <div className="project-content">
              <h3 className="project-title">{project.name}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-buttons">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn github-btn"
                  >
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn live-btn"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Ongoing Projects */}
      {ongoing.length > 0 && (
        <>
          <h1 className="projects-title ongoing-title">Ongoing Projects</h1>
          <div className="projects-grid">
            {ongoing.map((project, index) => (
              <div key={index} className="project-card">
                <img
                  src={project.image || "/default-project.png"}
                  alt={project.name}
                  className="project-image"
                />
                <div className="project-content">
                  <h3 className="project-title">{project.name}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-buttons">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn github-btn"
                      >
                        GitHub
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn live-btn"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Projects;
