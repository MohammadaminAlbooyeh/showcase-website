// src/pages/Home.jsx

import React from 'react';
import '../App.css'; // Assuming App.css contains general styles or home-section styles
// Import your profile image. If it's in 'public', you can reference it directly.
// If it's in 'src/assets', you might need to import it like:
// import profileImage from '../assets/profile.jpg'; 

export default function Home() {
  return (
    <div className="home-section">
      {/* Add your profile image here */}
      <img 
        src="/profile.jpg" // Path to your image in the public folder
        alt="Amin Albooyeh Profile" 
        className="profile-image" 
      />
      <h1>Welcome!</h1>
      <p>
        I am an experienced software developer with 2 years of background in Java development.
        In addition, I have over 3 years of professional experience as a Python developer, primarily working with Django.
        I have a strong understanding of backend architecture, RESTful APIs, and relational databases.
      </p>
      {/* You can add more content specific to your home page here */}
    </div>
  );
}
