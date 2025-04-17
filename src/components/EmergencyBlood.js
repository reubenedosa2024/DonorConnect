import React from "react";
import "../App.css";
import { Link,useNavigate } from "react-router-dom";


const EmergencyBlood = () => {
  return (
    <div className="emergency-container">
      <h2>Emergency Blood</h2>
      <p>
        Are you or a loved one in critical need of a blood transfusion? Every second counts—find a lifesaving donor near you now.
      </p>
      <Link to="donorPage"> <button className="find-donor-btn">Find Donor</button></Link>
    </div>
  );
};

export default EmergencyBlood;
