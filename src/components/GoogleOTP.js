import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const GoogleOTP = () => {
  const location = useLocation();
  const email = location.state?.email || "your@gmail.com";
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleVerify = () => {
    if (otp.length === 4) {
      navigate("/signup/verified");
    }
  };

  return (
    <div className="signup-step">
      <h2>We sent an OTP to {email}</h2>
      <input
        type="text"
        placeholder="Enter OTP"
        maxLength={4}
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={handleVerify}>Verify OTP</button>
    </div>
  );
};

export default GoogleOTP;
