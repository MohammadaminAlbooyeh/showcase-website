import * as React from 'react';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'SnapCinema',
      description: 'A platform for browsing and discovering movies, with detailed information and user reviews.',
      image: 'https://placehold.co/400x250/FF7676/FFFFFF?text=SnapCinema',
      link: '#',
      color: '#FF7676', // Modern coral red - perfect for entertainment
    },
    {
      id: 2,
      title: 'SmartLibrary',
      description: 'An application for managing library books, users, and borrowing history.',
      image: 'https://placehold.co/400x250/63B3ED/FFFFFF?text=SmartLibrary',
      link: '#',
      color: '#63B3ED', // Serene blue - ideal for learning and reading
    },
    {
      id: 3,
      title: 'Hotel Booking App',
      description: 'A comprehensive system for searching, booking, and managing hotel reservations.',
      image: 'https://placehold.co/400x250/68D391/FFFFFF?text=Hotel+Booking',
      link: '#',
      color: '#68D391', // Fresh green - represents hospitality and comfort
    },
    {
      id: 4,
      title: 'MyEShop',
      description: 'An e-commerce storefront for selling various products, including shopping cart and order processing.',
      image: 'https://placehold.co/400x250/F6AD55/333333?text=MyEShop',
      link: '#',
      color: '#F6AD55', // Warm orange - perfect for e-commerce
    },
    {
      id: 5,
      title: 'Income and Expenses Tracker',
      description: 'A personal finance application to track income and expenses, with categorization and reporting features.',
      image: 'https://placehold.co/400x250/4FD1C5/333333?text=Income+Expenses',
      link: '#',
      color: '#4FD1C5', // Teal - represents finance and stability
    },
    {
      id: 6,
      title: 'Algorithm Lab',
      description: 'A collection of implemented algorithms and data structures for educational purposes and performance testing.',
      image: 'https://placehold.co/400x250/805AD5/FFFFFF?text=Algorithm+Lab',
      link: '#',
      color: '#805AD5', // Rich purple - represents complexity and intelligence
    },
    {
      id: 7,
      title: 'Weather Dashboard',
      description: 'A dynamic dashboard displaying current weather conditions and forecasts for multiple locations.',
      image: 'https://placehold.co/400x250/4299E1/FFFFFF?text=Weather+Dashboard',
      link: '#',
      color: '#4299E1', // Sky blue - perfect for weather apps
    },
    {
      id: 8,
      title: 'To Do List',
      description: 'A simple and intuitive application for managing daily tasks and to-do items.',
      image: 'https://placehold.co/400x250/FBD38D/333333?text=To+Do+List',
      link: '#',
      color: '#FBD38D', // Soft yellow - represents productivity
    },
  ];

  return (
    <div className="projects-page">
      <h1>My Projects</h1>
      <div className="projects-list">
        {projects.map(project => (
          <div key={project.id} className="project-item">
            <div
              className="project-image-container"
              onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
              style={{
                position: 'relative',
                width: '180px',
                height: '110px',
                margin: '1rem auto',
                borderRadius: '18px',
                overflow: 'hidden',
                boxShadow: `0 10px 25px -10px ${project.color}66`,
                background: project.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid rgba(255, 255, 255, 0.9)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                transform: 'translateY(0) scale(1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
                e.currentTarget.style.boxShadow = `0 20px 30px -12px ${project.color}88`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = `0 10px 25px -10px ${project.color}66`;
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.92,
                  transition: 'all 0.4s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '0.92';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
            </div>
            <h2 style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5em', 
              fontWeight: 700,
              color: project.color,
              transition: 'color 0.3s ease',
              marginBottom: '0.5rem'
            }}>
              <FolderOpenIcon sx={{ 
                fontSize: 32,
                transition: 'transform 0.3s ease',
                transform: 'rotate(0deg)',
                '&:hover': {
                  transform: 'rotate(5deg)'
                }
              }} />
              {project.title}
            </h2>
            <p style={{
              color: '#666',
              fontSize: '0.95rem',
              lineHeight: 1.6
            }}>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}