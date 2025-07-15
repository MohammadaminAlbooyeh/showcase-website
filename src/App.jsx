
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import ContactUs from './pages/ContactUs';
import ContactLinks from './pages/ContactLinks';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/contact/links" element={<ContactLinks />} />
      </Routes>
    </Router>
  );
}

export default App;
