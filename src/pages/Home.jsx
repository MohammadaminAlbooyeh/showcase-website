// src/pages/Home.jsx

import React from 'react';
import '../App.css'; 

export default function Home() {
  return (
    <div className="home-section">
      <img 
        src="/profile.jpg" 
        alt="Amin Albooyeh Profile" 
        className="profile-image" 
      />
      <div className="home-text-content">
        <h1>Welcome!</h1>
        <p>
          I am an experienced software developer with 2 years of background
          in Java development. In addition, I have over 3 years of professional
          experience as a Python developer, primarily working with Django. I have
          a strong understanding of backend architecture, RESTful APIs, and relational databases.
        </p>
      </div>
    </div>
  );
}
