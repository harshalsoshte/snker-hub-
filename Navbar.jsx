import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ savedItems = 0 }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle search functionality
    console.log('Search:', searchQuery);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <span className="logo-text">CAMPUS_HUB</span>
          <span className="logo-accent"> //</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Links */}
        <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/collections" className="nav-link">
              Collections
            </Link>
            <span className="nav-subtitle">Academics</span>
          </li>
          <li className="nav-item">
            <Link to="/drops" className="nav-link">
              Drops
            </Link>
            <span className="nav-subtitle">Events</span>
          </li>
          <li className="nav-item">
            <Link to="/crew" className="nav-link">
              Crew
            </Link>
            <span className="nav-subtitle">Faculty</span>
          </li>
          <li className="nav-item">
            <Link to="/admissions" className="nav-link">
              Secure Your Pair
            </Link>
            <span className="nav-subtitle">Admissions</span>
          </li>
        </ul>

        {/* Right Section - Search & Cart */}
        <div className="navbar-right">
          {/* Search Bar */}
          <form className={`search-container ${isSearchOpen ? 'active' : ''}`} onSubmit={handleSearchSubmit}>
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={() => setIsSearchOpen(true)}
              onBlur={() => setTimeout(() => setIsSearchOpen(false), 200)}
            />
            <button type="submit" className="search-btn" aria-label="Search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </button>
          </form>

          {/* Cart Icon with Badge */}
          <Link to="/saved-items" className="cart-icon-container">
            <svg className="cart-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            {savedItems > 0 && (
              <span className="cart-badge">{savedItems}</span>
            )}
          </Link>
        </div>
      </div>

      {/* Horizontal Line Accent */}
      <div className="navbar-accent-line"></div>
    </nav>
  );
};

export default Navbar;
