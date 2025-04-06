import React, { useState } from "react";
import Signup from "./Signup";
import Signin from "./Signin";
import { Link,useNavigate } from "react-router-dom";

import './App.css';
const Navbar = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayType, setOverlayType] = useState(null); // "signup" or "signin"

  const openOverlay = (type) => {
    setOverlayType(type);
    setShowOverlay(true);
  };

  const closeOverlay = () => {
    setShowOverlay(false);
    setOverlayType(null);
  };

    return (
        <nav>
        <div className="namelogo">
            <h2>DonorConect</h2>
        </div>
        <div className="nav-links">
           <div className="navli"><p><Link to="/">Home</Link></p></div>
          
           <div className="navli"><p><Link to="/donorPage">Donor</Link></p></div>
           <div className="navli"><p><Link to="/reciepientpage">Recipients</Link></p></div>
           <div className="navli"><p><Link to ="/Hospitaldash" >Hospital</Link></p></div>
           <div className="navli"><p><Link to="/blogs">Blogs</Link></p></div>
           
        </div>
        <div className="buttondiv">
        <button onClick={() => openOverlay("signin")}>Sign In</button>
        <button onClick={() => openOverlay("signup")}>Sign Up</button>
        {showOverlay && (
        <div className="overlay" onClick={closeOverlay}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            {overlayType === "signup" && <Signup closeOverlay={closeOverlay} />}
            {overlayType === "signin" && <Signin closeOverlay={closeOverlay} />}
          </div>
        </div>
      )}
        </div>
    </nav>
    );
};

export default Navbar;