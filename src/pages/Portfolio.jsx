// src/pages/Portfolio.jsx

import React from 'react';
import './Portfolio.css'; // Import the CSS file for Portfolio styles

export default function Portfolio() {
  const selectedProjects = [
    {
      id: 5, // Using original ID from Projects.jsx for consistency
      title: 'Income and Expenses Tracker',
      description: 'A personal finance application to track income and expenses, with categorization and reporting features.',
      image: 'https://placehold.co/400x250/BA55D3/FFFFFF?text=Income+Expenses',
      link: '#',
    },
    {
      id: 8, // Using original ID
      title: 'To Do List',
      description: 'A simple and intuitive application for managing daily tasks and to-do items.',
      image: 'https://placehold.co/400x250/FF4500/FFFFFF?text=To+Do+List',
      link: '#',
    },
    {
      id: 1, // Using original ID
      title: 'SnapCinema',
      description: 'A platform for browsing and discovering movies, with detailed information and user reviews.',
      image: 'https://placehold.co/400x250/FF6347/FFFFFF?text=SnapCinema',
      link: '#',
    },
    {
      id: 3, // Using original ID
      title: 'Hotel Booking App',
      description: 'A comprehensive system for searching, booking, and managing hotel reservations.',
      image: 'https://placehold.co/400x250/3CB371/FFFFFF?text=Hotel+Booking',
      link: '#',
    },
    {
      id: 4, // Using original ID
      title: 'MyEShop',
      description: 'An e-commerce storefront for selling various products, including shopping cart and order processing.',
      image: 'https://placehold.co/400x250/FFD700/333333?text=MyEShop',
      link: '#',
    },
  ];

  return (
    <div className="portfolio-page">
      <h1>My Featured Work</h1>
      <p>
        Here's a curated selection of my most impactful projects, showcasing my expertise and passion for software development.
      </p>

      <div className="portfolio-items-grid">
        {selectedProjects.map(project => (
          <div key={project.id} className="portfolio-item">
            <h2>{project.title}</h2>
            <img src={project.image} alt={project.title} />
            <p>{project.description}</p>
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
              View Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
