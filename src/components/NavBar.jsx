// src/components/NavBar.jsx

import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">Amin Albooyeh</Link>
        </div>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          {/* About Me link removed */}
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/resume">Resume</Link>
        </div>
      </div>
    </nav>
  );
}
