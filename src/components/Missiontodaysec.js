import React from "react";
import "../App.css";
import  { useState } from "react";
import Signup from "./Signup";
import Signin from "./Signin";

const Missiontodaysec = () => {
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
    <div className="missiontodaycont" data-aos="fade-down">
      <h2>Join Our Mission Today</h2>
      <p>
      Becoming a part of Donor Connect means joining a movement dedicated to making a tangible difference in people's lives. Together, we can create a future where safe and sufficient blood supplies are always available for those in need.

      </p>
       
       
        <button onClick={() => openOverlay("signup")} className="missiontbtn">Sign Up</button>
        {showOverlay && (
        <div className="overlay" onClick={closeOverlay}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            {overlayType === "signup" && <Signup closeOverlay={closeOverlay} />}
          
          </div>
        </div>
      )}
        
    </div>
  );
};

export default Missiontodaysec;
