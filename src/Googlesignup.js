import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const GoogleSignup = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    if (email) {
      navigate("/signup/otp", { state: { email } }); // Pass email to OTP step
    }
  };

  return (
    <div className="signup-step">
      <h2>Continue as {email || "your@gmail.com"}</h2>
      <input
        type="email"
        placeholder="Enter your Gmail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleNext}>Continue</button>
    </div>
  );
};

export default GoogleSignup;
