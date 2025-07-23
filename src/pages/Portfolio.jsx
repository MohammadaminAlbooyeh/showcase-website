// src/pages/Portfolio.jsx

import React from 'react';
import './Portfolio.css'; // Import the CSS file for Portfolio styles

export default function Portfolio() {
  const selectedProjects = [
    {
      id: 5, // Using original ID from Projects.jsx for consistency
      title: 'Income and Expenses Tracker',
      description: 'This project includes two parts: Backend (Django + Django REST Framework with SQLite) and Frontend (React + Vite). It supports simultaneous execution with Docker and docker-compose, allowing for quick setup and deployment.',
      image: 'https://placehold.co/400x250/BA55D3/FFFFFF?text=Income+Expenses',
      link: 'https://github.com/MohammadaminAlbooyeh/income_and_expense.git', // Placeholder for README.md link
    },
    {
      id: 8, // Using original ID
      title: 'To Do List',
      description: 'A simple and intuitive application for managing daily tasks and to-do items.',
      image: 'https://placehold.co/400x250/FF4500/FFFFFF?text=To+Do+List',
      link: 'https://github.com/MohammadaminAlbooyeh/to_do_list.git', // Placeholder for README.md link
    },
    {
      id: 1, // Using original ID
      title: 'SnapCinema',
      description: 'A platform for browsing and discovering movies, with detailed information and user reviews.',
      image: 'https://placehold.co/400x250/FF6347/FFFFFF?text=SnapCinema',
      link: 'https://github.com/MohammadaminAlbooyeh/SnapCinema.git', // Placeholder for README.md link
    },
    {
      id: 3, // Using original ID
      title: 'Hotel Booking App',
      description: 'A comprehensive system for searching, booking, and managing hotel reservations.',
      image: 'https://placehold.co/400x250/3CB371/FFFFFF?text=Hotel+Booking',
      link: 'https://github.com/MohammadaminAlbooyeh/hotel_booking_app.git', // Placeholder for README.md link
    },
    {
      id: 4, // Using original ID
      title: 'MyEShop',
      description: 'An e-commerce storefront for selling various products, including shopping cart and order processing.',
      image: 'https://placehold.co/400x250/FFD700/333333?text=MyEShop',
      link: 'https://github.com/MohammadaminAlbooyeh/MyEshop.git', // Placeholder for README.md link
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
