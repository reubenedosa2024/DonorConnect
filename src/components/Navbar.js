import React, { useState } from "react";
import Signup from "./Signup";
import Signin from "./Signin";
import { Link, useLocation } from "react-router-dom";
import { FaTint, FaBars, FaTimes } from 'react-icons/fa';
import '../App.css';

const Navbar = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayType, setOverlayType] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const openOverlay = (type) => {
    setOverlayType(type);
    setShowOverlay(true);
  };

  const closeOverlay = () => {
    setShowOverlay(false);
    setOverlayType(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="namelogo">
        <FaTint className="logoicon" /> <h2>DonorConect</h2>
      </div>

      <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="navli"><p><Link to="/" className={location.pathname === "/" ? "active-link" : ""} onClick={() => setIsMobileMenuOpen(false)}>Home</Link></p></div>
        <div className="navli"><p><Link to="/aboutuspage" className={location.pathname === "/aboutuspage" ? "active-link" : ""} onClick={() => setIsMobileMenuOpen(false)}>About Us</Link></p></div>
        <div className="navli"><p><Link to="/donorPage" className={location.pathname === "/donorPage" ? "active-link" : ""} onClick={() => setIsMobileMenuOpen(false)}>Donor</Link></p></div>
        <div className="navli"><p><Link to="/reciepientpage" className={location.pathname === "/reciepientpage" ? "active-link" : ""} onClick={() => setIsMobileMenuOpen(false)}>Recipients</Link></p></div>
        <div className="navli"><p><Link to="/Hospitaldash" className={location.pathname === "/Hospitaldash" ? "active-link" : "" } onClick={() => setIsMobileMenuOpen(false)}>Hospital</Link></p></div>
      </div>

      <div className="buttondiv">
        <button onClick={() => openOverlay("signin")}>Sign In</button>
        <button onClick={() => openOverlay("signup")}>Sign Up</button>
      </div>

      <div className="hamburger" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {showOverlay && (
        <div className="overlay" onClick={closeOverlay}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            {overlayType === "signup" && <Signup closeOverlay={closeOverlay} />}
            {overlayType === "signin" && <Signin closeOverlay={closeOverlay} />}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
