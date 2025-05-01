import React, { useState, useContext } from "react";
import Signup from "./Signup";
import Signin from "./Signin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaTint, FaBars, FaTimes } from 'react-icons/fa';
import '../App.css';
import { AuthContext } from "../components/AuthContext";

const Navbar = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayType, setOverlayType] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const openOverlay = (type) => {
    setOverlayType(type);
    setShowOverlay(true);
    setIsMobileMenuOpen(false);
  };

  const closeOverlay = () => {
    setShowOverlay(false);
    setOverlayType(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // ✅ Wrap the logout from context to include navigation
  const handleLogout = () => {
    logout();
    navigate("/"); // Redirect to homepage
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
        <div className="navli"><p><Link to="/Hospitaldash" className={location.pathname === "/Hospitaldash" ? "active-link" : ""} onClick={() => setIsMobileMenuOpen(false)}>Hospital</Link></p></div>

        <div className="mobile-auth-buttons">
          {!isAuthenticated ? (
            <>
              <button onClick={() => openOverlay("signin")}>Sign In</button>
              <button onClick={() => openOverlay("signup")}>Sign Up</button>
            </>
          ) : (
            <button onClick={handleLogout}>Logout</button>
          )}
        </div>
      </div>

      <div className="buttondiv">
        {!isAuthenticated ? (
          <>
            <button onClick={() => openOverlay("signin")}>Sign In</button>
            <button onClick={() => openOverlay("signup")}>Sign Up</button>
          </>
        ) : (
          <button onClick={handleLogout}>Logout</button>
        )}
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
