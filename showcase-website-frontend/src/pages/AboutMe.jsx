import React from 'react';
import './HeroSection.css';

const AboutMe = () => {
  return (
    <div className="hero-section hero-section--wide">
      <img src="/profile.jpg" alt="Profile" className="hero-profile" />
      <div className="hero-content">
        <div className="hero-header">
          WELCOME TO MY WORLD
        </div>
        <h1 className="hero-header">
          Hi, I’m <span className="hero-highlight">Amin Albooyeh</span><br />
          a Developer.
        </h1>
        <div className="hero-desc">
          I am an experienced software developer with approximately 3 years of background in Java development. In addition, I have over 3 years of professional experience as a backend Python developer, primarily working with Django. I have a strong understanding of backend architecture, RESTful APIs, and relational databases.
        </div>
        <div className="hero-socials">
          <a href="#"><i className="fab fa-github"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
        </div>
        {/* Removed FIND WITH ME and BEST SKILL ON sections as requested */}
      </div>
    </div>
  );
};

export default AboutMe;
