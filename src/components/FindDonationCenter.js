import React, { useState } from "react";
import '../App.css';

const FindDonationCenter = () => {
  const [location, setLocation] = useState(null);

  const handleUseLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location: ", error);
          alert("Unable to retrieve location. Please enable location services.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  return (
    <section className="find-donation-center">
      <h2>Find Donation Center</h2>
      <p>
        Locate the nearest blood donation center with just a few clicks. Our easy-to-use
        map and search tool help you schedule an appointment and join the lifesaving mission today.
      </p>

      <div className="search-bar">
        <center><button onClick={handleUseLocation}>
          Use location <span>🔍</span>
        </button></center>
      </div>

      <div className="map-container">
        {location ? (
          <iframe
            src={`https://www.google.com/maps?q=${location.lat},${location.lng}&output=embed`}
            title="Donation Center Map"
            allowFullScreen
          ></iframe>
        ) : (
          <img src="map-placeholder.png" alt="Map Placeholder" />
        )}
      </div>
    </section>
  );
};

export default FindDonationCenter;
