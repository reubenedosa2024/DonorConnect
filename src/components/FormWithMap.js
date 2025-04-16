import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "../App.css"; 

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 6.6008, // Latitude for Lagos, Nigeria
  lng: 3.3515, // Longitude for Lagos, Nigeria
};

const FormWithMap = () => {
  const [formData, setFormData] = useState({
    bloodGroup: "",
    urgencyLevel: "",
    quantity: "",
    hospitalName: "",
    hospitalAddress: "",
    city: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted: " + JSON.stringify(formData, null, 2));
  };

  return (
    <div className="container">
      {/* FORM SECTION */}
      <div className="form-section">
        <form onSubmit={handleSubmit}>
          <select name="bloodGroup" onChange={handleChange} required>
            <option value="">Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>

          <select name="urgencyLevel" onChange={handleChange} required>
            <option value="">Urgency Level</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>

          <input
            type="number"
            name="quantity"
            placeholder="Quantity Required"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="hospitalName"
            placeholder="Hospital Name"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="hospitalAddress"
            placeholder="Hospital Address"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            onChange={handleChange}
            required
          />

          <button type="submit">Next</button>
        </form>
      </div>

      {/* MAP SECTION */}
      <div className="map-section">
      <iframe
        title="Google Map"
        width="100%"
        height="400px"
       
        src="https://maps.google.com/maps?q=Lagos,Nigeria&z=10&output=embed"
      ></iframe>
      </div>
    </div>
  );
};

export default FormWithMap;
