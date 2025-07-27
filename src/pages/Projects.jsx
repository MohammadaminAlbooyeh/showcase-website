// src/pages/Projects.jsx

import React from 'react';
import './Projects.css';
import devPic from '../assets/dev-pic.png';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'SnapCinema',
      description: 'A platform for browsing and discovering movies, with detailed information and user reviews.',
      image: 'https://placehold.co/400x250/FF6347/FFFFFF?text=SnapCinema',
      link: '#',
    },
    {
      id: 2,
      title: 'SmartLibrary',
      description: 'An application for managing library books, users, and borrowing history.',
      image: 'https://placehold.co/400x250/4682B4/FFFFFF?text=SmartLibrary',
      link: '#',
    },
    {
      id: 3,
      title: 'Hotel Booking App',
      description: 'A comprehensive system for searching, booking, and managing hotel reservations.',
      image: 'https://placehold.co/400x250/3CB371/FFFFFF?text=Hotel+Booking',
      link: '#',
    },
    {
      id: 4,
      title: 'MyEShop',
      description: 'An e-commerce storefront for selling various products, including shopping cart and order processing.',
      image: 'https://placehold.co/400x250/FFD700/333333?text=MyEShop',
      link: '#',
    },
    {
      id: 5,
      title: 'Income and Expenses Tracker',
      description: 'A personal finance application to track income and expenses, with categorization and reporting features.',
      image: 'https://placehold.co/400x250/BA55D3/FFFFFF?text=Income+Expenses',
      link: '#',
    },
    {
      id: 6,
      title: 'Algorithm Lab',
      description: 'A collection of implemented algorithms and data structures for educational purposes and performance testing.',
      image: 'https://placehold.co/400x250/8A2BE2/FFFFFF?text=Algorithm+Lab',
      link: '#',
    },
    {
      id: 7,
      title: 'Weather Dashboard',
      description: 'A dynamic dashboard displaying current weather conditions and forecasts for multiple locations.',
      image: 'https://placehold.co/400x250/20B2AA/FFFFFF?text=Weather+Dashboard',
      link: '#',
    },
    {
      id: 8,
      title: 'To Do List',
      description: 'A simple and intuitive application for managing daily tasks and to-do items.',
      image: 'https://placehold.co/400x250/FF4500/FFFFFF?text=To+Do+List',
      link: '#',
    },
    {
      id: 9,
      title: 'Snake Game',
      description: 'A classic Snake game implemented with modern web technologies.',
      image: 'https://placehold.co/400x250/6A5ACD/FFFFFF?text=Snake+Game',
      link: '#',
    },
    {
      id: 10,
      title: 'Task Tracker',
      description: 'An advanced task management tool with features for task assignment, progress tracking, and notifications.',
      image: 'https://placehold.co/400x250/DA70D6/FFFFFF?text=Task+Tracker',
      link: '#',
    },
    {
      id: 11,
      title: 'Tic Tac Toe Game',
      description: 'A simple, interactive Tic Tac Toe game for two players.',
      image: 'https://placehold.co/400x250/F08080/FFFFFF?text=Tic+Tac+Toe',
      link: '#',
    },
    {
      id: 12,
      title: 'Weather Check',
      description: 'A quick and easy tool to check weather conditions for any city worldwide.',
      image: 'https://placehold.co/400x250/40E0D0/FFFFFF?text=Weather+Check',
      link: '#',
    },
    {
      id: 13,
      title: 'Rock Paper Scissors Game',
      description: 'A digital version of the classic Rock Paper Scissors game against the computer.',
      image: 'https://placehold.co/400x250/FF69B4/FFFFFF?text=RPS+Game',
      link: '#',
    },
    {
      id: 14,
      title: 'Site Connectivity Checker',
      description: 'A utility to check the availability and response time of websites or network endpoints.',
      image: 'https://placehold.co/400x250/800080/FFFFFF?text=Connectivity+Checker',
      link: '#',
    },
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
