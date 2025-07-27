// Place this image in your public/assets directory for best practice
import React from 'react';
import './Projects.css';
import devPic from '../assets/dev-pic.png'; // Adjust path if needed

export default function Projects() {
  const projects = [
    // ...existing projects array...
  ];

  return (
    <div className="projects-page">
      <h1>My Projects</h1>
      <p>Explore some of my recent work and see how I bring ideas to life.</p>
      <div className="projects-content">
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-item">
              <h2>{project.title}</h2>
              <img src={project.image} alt={project.title} />
              <p>{project.description}</p>
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
        <div className="projects-image-right">
          <img src={devPic} alt="Developer at work" style={{maxWidth:'350px', width:'100%', borderRadius:'1rem'}} />
        </div>
      </div>
    </div>
  );
}
