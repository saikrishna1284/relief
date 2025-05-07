import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Village Disaster Relief Coordination Platform</h1>
        <p>Connecting communities with relief organizations during emergencies</p>
      </div>
      
      <div className="stats-section">
        <div className="stat-card">
          <h3>Active Relief Operations</h3>
          <p>12</p>
        </div>
        <div className="stat-card">
          <h3>Pending Requests</h3>
          <p>24</p>
        </div>
        <div className="stat-card">
          <h3>Volunteers Registered</h3>
          <p>156</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;