// src/App.jsx

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaSun, FaMoon, FaHome } from 'react-icons/fa';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
// import AboutPage from './pages/AboutPage';
import TreatiesPage from './pages/TreatiesPage';
import TimelinePage from './pages/secondary featured/TimelineSecondaryPage';
import AccessibilityPage from './pages/secondary featured/AccessibilitySecondaryPage';
import RightsPage from './pages/secondary featured/RigthsSecondaryPage';
// import ResourcesPage from './pages/ResourcesPage';
// import JoinUsPage from './pages/JoinUsPage';
import './App.css';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme);
    document.body.classList.toggle('light-theme', !isDarkTheme);
  }, [isDarkTheme]);

  return (
    <Router>
      <div className="App">
        <Header />
        
        {/* Home Button on the Left */}
        <Link to="/" className="home-button">
          <FaHome size={20} />
        </Link>
        
        {/* Theme Toggle Button on the Right */}
        <button
          className="theme-toggle-button"
          onClick={() => setIsDarkTheme(prevState => !prevState)}
        >
          {isDarkTheme ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/about" element={<AboutPage />} /> */}
          <Route path="/treaties" element={<TreatiesPage />} />
          {/* <Route path="/resources" element={<ResourcesPage />} /> */}
          {/* <Route path="/join" element={<JoinUsPage />} /> */}

          <Route path="/treaties/timeline" element={<TimelinePage />} />
          <Route path="/treaties/accessibility" element={<AccessibilityPage />} />
          <Route path="/treaties/rights" element={<RightsPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
