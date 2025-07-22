// src/pages/Portfolio.jsx

import React from 'react';
import './Portfolio.css'; // Import the CSS file for Portfolio styles

export default function Portfolio() {
  return (
    <div className="portfolio-page">
      <h1>My Portfolio</h1>
      <p>
        Here you'll find a selection of my work, showcasing various projects and skills.
        Each project highlights my approach to problem-solving and development.
      </p>

      <div className="portfolio-items-grid">
        {/* Placeholder for individual portfolio items */}
        <div className="portfolio-item">
          <h2>Project Alpha</h2>
          <img src="https://placehold.co/300x200/aabbcc/ffffff?text=Project+Alpha" alt="Project Alpha Thumbnail" />
          <p>A brief description of Project Alpha, highlighting key technologies used.</p>
          <a href="#" className="project-link">View Project</a>
        </div>

        <div className="portfolio-item">
          <h2>Project Beta</h2>
          <img src="https://placehold.co/300x200/ccbbdd/ffffff?text=Project+Beta" alt="Project Beta Thumbnail" />
          <p>Details about Project Beta, focusing on challenges and solutions.</p>
          <a href="#" className="project-link">View Project</a>
        </div>

        <div className="portfolio-item">
          <h2>Project Gamma</h2>
          <img src="https://placehold.co/300x200/ddeeff/ffffff?text=Project+Gamma" alt="Project Gamma Thumbnail" />
          <p>An overview of Project Gamma, demonstrating specific features.</p>
          <a href="#" className="project-link">View Project</a>
        </div>

        {/* Add more portfolio items as needed */}
      </div>
    </div>
  );
}
