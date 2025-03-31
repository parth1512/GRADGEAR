import React from 'react';
import './styles/Navbar.css';
import main_logo from '../assets/icons/main_logo.svg';
import search_icon from '../assets/icons/search_icon.svg';

const Navbar = () => {
  return (
    <navbar >
      
        <div className="logo-container">
          <div className="inside-logo">
          <img src={main_logo} alt="logo" /></div>
          <div className="search-container">
        <input type="text" placeholder="somethin in mind?" className="search-input" />
        <img src={search_icon} alt="Search" className="search_icon" />
      </div>
      <div className="nav-links">
        <a href="#about" className="nav-link ">About us</a>
        <a href="#service" className="nav-link">Service</a>
        <a href="#help" className="nav-link">Help</a>
       
        
      </div>
      <div className="button-pos">
        <a href="#wishlist" className="nav-link wishlist-btn">Wishlist</a>
        </div>
      </div>
    
    </navbar>
  );
};

export default Navbar;