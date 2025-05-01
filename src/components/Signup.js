import React, { useState } from "react";
import axios from "axios";

import '../App.css';
import { FaGoogle, FaApple, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import  { useContext } from "react";
import { AuthContext} from "../components/AuthContext";
import { toast } from 'react-toastify';
const SignUp = ({ closeOverlay }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");


  
  const validate = () => {
    let newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(email)) newErrors.email = "Enter a valid email";

    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6) newErrors.password = "Password must be at least 6 characters";

    return newErrors;
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validate();
  
    if (Object.keys(formErrors).length === 0) {
      setErrors({});
      setLoading(true);
  
      try {
        const response = await axios.post("http://localhost:3000/signup", {
          email,
          password
        });
  
        if (response.status === 200) {
          toast.success("Signed up successfully!");
          setSuccess("Signed up successfully!");
          login();       // set global auth
          closeOverlay(); // close modal
          setEmail("");
          setPassword("");
        } else {
          toast.error(response.data.message || "Signup failed.");
        }
  
      } catch (error) {
        console.error("Signup error:", error);
        toast.error("An error occurred during signup.");
      } finally {
        setLoading(false);
      }
  
    } else {
      setErrors(formErrors);
      toast.error("Please fix the errors above.");
      setSuccess("");
    }
  };
  

 
    const [loading, setLoading] = useState(false);
  
   const handleSignUp = () => {
  setLoading(true);

  // Simulate async signup (replace with real API call later)
  setTimeout(() => {
    setLoading(false);
    alert("Signup complete!");

    // Save authentication state after successful signup
    login(); // <- this activates global login state
  }, 2000);
};



    
    const { login } = useContext(AuthContext);

  return (
    <div className="modal">
      <h2>Create an Account</h2>

      <div className="signup-container">
        <div className="signup-btn">
          <FaGoogle className="icon" />
          <Link to="/signupwithgmail">Continue with Google</Link>
        </div>
        <div className="signup-btn">
          <FaApple className="icon" />
          <Link to="/signupwithapple">Continue - Apple</Link>
        </div>
        <div className="signup-btn">
          <FaPhoneAlt className="icon" />
          <Link to="/signupwithphone">Continue with phone number</Link>
        </div>
      </div>

      <div className="or-divider">
        <h2>OR</h2>
      </div>

      <form onSubmit={handleSubmit} className="signupform">
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={errors.email ? "error-border" : ""}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={errors.password ? "error-border" : ""}
        />
        {errors.password && <p className="signuperror">{errors.password}</p>}

        <button className="signupform-btn" type="submit" disabled={loading}>
  {loading ? "Loading..." : "Sign Up"}
</button>


        {success && <p className="signupsuccess">{success}</p>}
        <p className="terms">
          By signing up, you agree to our Terms of service and Privacy Policy.
        </p>
      </form>
      {loading ? <div className="spinner"></div> : "Sign Up"}

    </div>
  );
};

export default SignUp;
