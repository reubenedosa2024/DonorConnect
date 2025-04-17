import React from 'react';
import './App.css';
const Resultnearyoucard = ({ name, distance, time, bloodType, image }) => {
    return (
        <div className="donorCardContainer">
          <div className="donorImage">
            {image ? (
              <img src={image} alt={name} />
            ) : (
              <div className="donorInitial">{name.charAt(0)}</div>
            )}
          </div>
          <div className="donorInfo">
            <h4>{name}</h4>
            <p className="donorLocation">📍 {distance}km {time} away</p>
            <p className="donorBlood">{bloodType} Compatibility</p>
            <button className="donorRequestBtn">Request</button>
          </div>
        </div>
      );
    };

export default Resultnearyoucard;