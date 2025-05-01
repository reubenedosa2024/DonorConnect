import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import redcross from '../images/redcross.png';
import savethechildren from '../images/savethechildren.png';
import NBTS from '../images/NBTS.png';
import WHO from '../images/WHO.png';
import UNICEF from '../images/UNICEF.png';
import gbf from '../images/gbf.png';
import nbsa from '../images/nbsa.png';
import BloodDonationInfo from '../components/BloodDonationInfo';
const Aboutuspage = () => {
  return (
    <div>
    <div className="hero-section" >
      <div className="overlay" data-aos="zoom-in">
        <div className="hero-content">
          <h2>About us</h2>
          <p>
            DonorConnect, is an innovative platform designed to bridge the gap between blood donors and people in urgent need. 
            Ensuring timely access to lifesaving donations.
          </p>
          <div className="hero-buttons">
           <Link to="/donorpage"> <button className="btn donate-btn">Donate</button></Link>
           <Link to="/reciepientpage"><button className="btn find-btn">Find Donor</button></Link>
          </div>
        </div>
      </div>

      <div className="mission-vision-section" data-aos="zoom-in">
        <div className="text-block">
          <h3>Our mission</h3>
          <p>
            To save lives by connecting blood donors with those in need, ensuring timely access to safe blood, 
            and we're committed to making blood donation effortless and accessible to all.
          </p>
        </div>
        <div className="text-block" >
          <h3>Our Vision</h3>
          <p>
            To create a world where every individual has timely access to safe life through a unified network of 
            voluntary donors, ensuring no life is lost due to blood shortages.
          </p>
        </div>
      </div>
    </div>
    <div className='partnerdiv' data-aos="zoom-in">
            <div>
                <h1>Our Partners</h1>
                <p>We collaborate with hospitals, NGOs, and corporations to ensure a seamless blood donation process.</p>
            </div>
            <div className='padp'>
            <div className="partners-container">
            <img src={redcross} alt='redcross'/>
            <img src={savethechildren} alt='savechildren'/>
            <img src={NBTS} alt='NBTS'/>
            <img src={WHO} alt='WHO'/>
            <img src={UNICEF} alt='UNICEF'/>
            {/* <img src={gbf} alt='GBF'/> */}
            <img src={nbsa} alt='NBSA'/>
            </div>
            </div>
        </div>
        <BloodDonationInfo />
    </div>
  );
};

export default Aboutuspage;