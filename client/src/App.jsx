import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';  // Import the sun and moon icons
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
// import AboutPage from './pages/AboutPage';
// import TreatiesPage from './pages/TreatiesPage';
// import ResourcesPage from './pages/ResourcesPage';
// import JoinUsPage from './pages/JoinUsPage';

function App() {
  // State to manage theme
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    // Apply the appropriate class based on the theme state
    document.body.classList.toggle('dark-theme', isDarkTheme);
    document.body.classList.toggle('light-theme', !isDarkTheme);
  }, [isDarkTheme]);

  return (
    <Router>
      <div className="App">
        {/* Theme toggle button with icons */}
        <button 
          className="light-theme-button" 
          onClick={() => setIsDarkTheme(prevState => !prevState)}
        >
          {isDarkTheme ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/about" element={<AboutPage />} />
          <Route path="/treaties" element={<TreatiesPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/join" element={<JoinUsPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
