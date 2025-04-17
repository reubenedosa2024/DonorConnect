import React from 'react';
import  '../App.css';
import {Link } from 'react-router-dom';
import blooood from '../images/blooood.png';
import aboutimage2 from '../images/aboutimage2.png';
const AboutSec = () => {
    return (
        <section className="wholeaboutsec">
        {/* <div className="aboutsec"> */}
            {/* <div className="aboutimagediv">
                <img className="image1" src={blooood} alt="BLOOD"/>
                <img className="image2" src={aboutimage2} alt="BLOOD"/>
            </div> */}
            <div className="abouttext">
                <h1>About us</h1>
                <p>Our platform connects willing blood donors with patients in need, ensuring that lifesaving blood reaches those who need it most. Through innovative technology, we provide real-time donor-recipient matching, appointment scheduling, and awareness campaigns to encourage more people to donate. 
                </p>
                   <Link to="aboutuspage"> <button>Learn More About Us</button></Link>
                </div>
                
            {/* </div> */}
            {/* <div className="subabout">
                <h2>Join Our Lifesaving Community</h2>
                <p>Every two seconds, someone requires blood. By becoming a donor, you have the power to save lives and make a profound impact in your community. Our platform connects generous individuals like you with patients in need, ensuring that no one has to wait for the gift of life.</p>
            
           
           
                <h2>Why Donate blood?</h2>
                <ul>
                    <li>Save Lives: Your single donation can benefit multiple patients, providing essential support during surgeries, treatments, and emergencies.</li>
                    <li>Community Support: Regular donations help maintain a stable blood supply, ensuring that hospitals are prepared for any situation</li>
                    <li>Health Benefits: Donating blood Date of Birth (Age Verification)d can promote better health by stimulating blood cell production and offering a free health screening with each visit.Date of Birth (Age Verification)</li>
                </ul>
            </div> */}
    
        </section>
    );
};

export default AboutSec;