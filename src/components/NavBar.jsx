// src/components/NavBar.jsx

import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  // This function adds an "active" class to the active NavLink
  const getNavLinkClass = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <NavLink to="/">Amin Albooyeh</NavLink>
        </div>
        <div className="navbar-links">
          <NavLink to="/" className={getNavLinkClass}>Home</NavLink>
          <NavLink to="/portfolio" className={getNavLinkClass}>Portfolio</NavLink>
          <NavLink to="/projects" className={getNavLinkClass}>Projects</NavLink>
          <NavLink to="/resume" className={getNavLinkClass}>Resume</NavLink>
          <NavLink to="/contact" className={getNavLinkClass}>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}
