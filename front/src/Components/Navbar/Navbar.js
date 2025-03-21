import React, { useEffect, useState } from "react";
import {
  FaShoppingCart,
  FaHome,
  FaSearch,
  FaBars,
  FaTimes,
  FaShoppingBasket,
  FaUser,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        
        navbar.style.position="fixed";
      } else {
        navbar.style.position="";
       
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false); 
      } else {
        setMenuOpen(false); 
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <img className="img-responsive" src="logo.png" alt="Mugs' Atelier" />
          <div className="logo-text">
            <h4>Mugs' Atelier</h4>
            <p>Unique Mugs for Every Taste</p>
          </div>
        </div>
        <div className="search-container">
          <input className="search-bar-input" type="text" placeholder="Search" />
          <button className="search-bar-button">
            <FaSearch />
          </button>
        </div>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul className={`menu ${menuOpen ? "open" : ""}`} >
          <li>
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop" onClick={() => setMenuOpen(false)}>
              <FaShoppingCart /> Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" onClick={() => setMenuOpen(false)}>
              <FaUser /> Account
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" onClick={() => setMenuOpen(false)}>
              <FaShoppingBasket /> Cart
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
