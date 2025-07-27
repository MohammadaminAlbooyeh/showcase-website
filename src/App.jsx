// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Removed AboutMe import as its content is now part of Home
import Home from './pages/Home.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Projects from './pages/Projects.jsx';
import Resume from './pages/Resume.jsx';
import ContactUs from './pages/ContactUs.jsx';
// import ContactLinks from './pages/ContactLinks.jsx';
// import ContactMe from './pages/ContactMe.jsx';
import NavBar from './components/NavBar.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} /> {/* Render Home component for the root path */}
            {/* Removed the /about route as its content is now on the home page */}
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
