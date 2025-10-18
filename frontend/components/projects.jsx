import React from 'react';
import "./projects.css";
import { useProjectStore } from '../projectStore/project.js';

const Projects = () => {
  const { projects } = useProjectStore();

  return (
    <div className="projects-section">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image || "/default-project.png"} alt={project.name} className="project-image" />
            <div className="project-content">
              <h3 className="project-title">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-btn">
                  View Project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
