import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaBars,
  FaTimes,
  FaHome,
  FaMapMarkedAlt,
  FaHandsHelping,
  FaPhoneAlt,
  FaUserCircle,
  FaInfoCircle
} from 'react-icons/fa';
import './Navbar.css';
import './About.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const getUser = () => {
    try {
      const userData = localStorage.getItem('user');
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error('Error parsing user data:', error);
      return null;
    }
  };

  const user = getUser();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate('/login');
    } catch (error) {
      console.error('Navigation error:', error);
      window.location.href = '/login';
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo-container">
          <Link to="/" className="nav-logo">
            <span className="nav-logo-text">Disaster Relief Platform</span>
          </Link>

          <div className="nav-menu">
            <Link to="/" className="nav-link">
              <FaHome className="nav-icon" /> Dashboard
            </Link>
            <Link to="/reports" className="nav-link">
              <FaMapMarkedAlt className="nav-icon" /> Reports
            </Link>
            <Link to="/requests" className="nav-link">
              <FaHandsHelping className="nav-icon" /> Relief Requests
            </Link>
            <Link to="/contacts" className="nav-link">
              <FaPhoneAlt className="nav-icon" /> Emergency Contacts
            </Link>
            <Link to="/about" className="nav-link">
              <FaInfoCircle className="nav-icon" /> About
            </Link>
          </div>
        </div>

        <div className="nav-user-container">
          {user ? (
            <div className="nav-user-section">
              <span className="nav-user-text">
                {user.role === 'ngo' || user.role === 'authority'
                  ? `${user.organization} (${user.role})`
                  : 'Citizen'}
              </span>
              <button onClick={handleLogout} className="nav-logout">
                Logout
              </button>
              <FaUserCircle className="nav-user-icon" />
            </div>
          ) : (
            <div className="nav-auth-links">
              <Link to="/login" className="nav-auth-link">
                Login
              </Link>
              <Link to="/register" className="nav-auth-link">
                Register
              </Link>
            </div>
          )}

          <button
            onClick={toggleMobileMenu}
            className="nav-mobile-btn"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="nav-mobile-icon" />
            ) : (
              <FaBars className="nav-mobile-icon" />
            )}
          </button>
        </div>
      </div>

      <div className={`nav-mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="nav-mobile-content">
          <Link to="/" className="nav-mobile-link" onClick={toggleMobileMenu}>
            <FaHome className="nav-mobile-icon" /> Dashboard
          </Link>
          <Link to="/reports" className="nav-mobile-link" onClick={toggleMobileMenu}>
            <FaMapMarkedAlt className="nav-mobile-icon" /> Reports
          </Link>
          <Link to="/requests" className="nav-mobile-link" onClick={toggleMobileMenu}>
            <FaHandsHelping className="nav-mobile-icon" /> Relief Requests
          </Link>
          <Link to="/contacts" className="nav-mobile-link" onClick={toggleMobileMenu}>
            <FaPhoneAlt className="nav-mobile-icon" /> Emergency Contacts
          </Link>
          <Link to="/about" className="nav-mobile-link" onClick={toggleMobileMenu}>
            <FaInfoCircle className="nav-mobile-icon" /> About
          </Link>

          <div className="nav-mobile-user-section">
            {user ? (
              <>
                <div className="nav-mobile-user-info">
                  <FaUserCircle className="nav-mobile-user-icon" />
                  <div>
                    <div className="nav-mobile-user-name">{user.name}</div>
                    <div className="nav-mobile-user-role">
                      {user.role === 'ngo' || user.role === 'authority'
                        ? `${user.organization} (${user.role})`
                        : 'Citizen'}
                    </div>
                  </div>
                </div>
                <button onClick={handleLogout} className="nav-mobile-logout">
                  Logout
                </button>
              </>
            ) : (
              <div className="nav-mobile-auth-links">
                <Link to="/login" className="nav-mobile-auth-link" onClick={toggleMobileMenu}>
                  Login
                </Link>
                <Link to="/register" className="nav-mobile-auth-link" onClick={toggleMobileMenu}>
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
