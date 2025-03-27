import React from "react";
import './App.css';
import { FaGoogle, FaApple, FaPhoneAlt } from "react-icons/fa";

const Signin = ({ closeOverlay }) => {
  return (
    <div className="modal">
          <h2>Create an Account</h2>
          
          <div  className="signup-container">
          <div className="signup-btn">
            <FaGoogle className="icon" />
            Continue with Google
          </div>
          <div className="signup-btn">
            <FaApple className="icon" />
            Continue - Apple
          </div>
          <div className="signup-btn">
            <FaPhoneAlt className="icon" />
            Continue with phone number
          </div>
          </div>
          {/* <button onClick={closeOverlay}>Close</button> */}
          <div className="or-divider">
            <h2>OR</h2>
          </div>
          <div className="signupform">
      <label>Email</label>
      <input type="text" required />
      <label>Password</label>
      <input type="password" required />
      <button className="signupform-btn">Sign Up</button>
      <p className="terms">
        By signing up, you agree to our Terms of service and Privacy Policy.
      </p>
    </div>
    
        </div>
  );
};

export default Signin;
