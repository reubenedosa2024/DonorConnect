import React from "react";
import "./App.css";

const Availabledonorcard = ({ donor, onRequest }) => {
  return (
    <div className="donor-card">
      {/* Display Profile Image or Initials */}
      <div>
      {donor.image ? (
        <img src={donor.image} alt={donor.name} className="donor-img" />
      ) : (
        <div className="donor-initial">{donor.name[0]}</div>
      )}
      </div >
      <div className="donorcarddetails">
      <h3>{donor.name}</h3>
      <p className="donor-location">
        📍 {donor.distance}km &nbsp; {donor.time} away
      </p>
      <p className="donor-blood">{donor.bloodType} Compatibility</p>
      <button className="request-btn" onClick={() => onRequest(donor)}>
        Request
      </button>
    </div>
    </div>
  );
};

export default Availabledonorcard;
