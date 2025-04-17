import React from "react";
import '../App.css';
import { FaGoogle, FaApple, FaPhoneAlt } from "react-icons/fa";
import { Link,useNavigate } from "react-router-dom";

const SignUp = ({ closeOverlay }) => {
  return (
    <div className="modal">
      <h2>Create an Account</h2>
      <div  className="signup-container">
      <div className="signup-btn">
        <FaGoogle className="icon" />
        <Link to="/signupwithgmail"> Continue with Google</Link>
      </div>
      <div className="signup-btn">
        <FaApple className="icon" />
        <Link to="/signupwithapple">Continue - Apple</Link>
      </div>
      <div className="signup-btn">
        <FaPhoneAlt className="icon" />
        <Link to="/signupwithphone"> Continue with phone number</Link>
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

export default SignUp;
