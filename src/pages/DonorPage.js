import React from 'react';
import '../App.css';
import centerimage1 from "../images/centerimage1.png";
import centerimage2 from "../images/centerimage2.png";
import centerimage3 from "../images/centerimage3.png";
import center4 from "../images/center4.png";
import center5 from "../images/center5.png";
import center6 from "../images/center6.png";
import FindDonationCenter from "../components/FindDonationCenter";
import Hospitallist from "../components/Hospitallist";
import Schedule from "../components/Schedule";
import Notification from "../components/Notification";
import Donationhistory from "../components/Donationhistory";
import { Link } from 'react-router-dom';
const DonorPage = () => {
    
        const bloodData = [
          { type: "O-", canDonateTo: "All blood types" },
          { type: "O+", canDonateTo: "O+, A+, B+, AB+" },
          { type: "A-", canDonateTo: "A-, A+, AB-, AB+" },
          { type: "A+", canDonateTo: "A+, AB+" },
          { type: "B-", canDonateTo: "B-, B+, AB-, AB+" },
          { type: "B+", canDonateTo: "B+, AB+" },
          { type: "AB-", canDonateTo: "AB-, AB+" },
          { type: "AB+", canDonateTo: "AB+ Only" },
        ];

    return (
        <div className='donorpagedown'>
            <div className='maindonorintro' data-aos="zoom-in">
        <div className='donorpageintro'>
            <h1>Blood Compatibility</h1>
            <center><p>Blood compatibility refers to the careful matching of blood types between a donor and a recipient to ensure a safe and effective blood transfusion. When blood is transfused, it is crucial that the donor's blood is compatible with the recipient’s to prevent potentially life-threatening reactions.</p></center>
           <Link to="/reciepientpage"> <button>Schedule</button></Link>
        </div>

        <div className="table-container">
      <table className="blood-table">
        <thead>
          <tr>
            <th>Donor Blood Type</th>
            <th>Can Donate To</th>
          </tr>
        </thead>
        <tbody>
          {bloodData.map((row, index) => (
            <tr key={index}>
              <td>{row.type}</td>
              <td>{row.canDonateTo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    <section className="donation-center" data-aos="zoom-in">
      <h2>Donation Center</h2>
      <p>
        Explore some of the donation centers through photos right on the app!
        Find the nearest location, check out the facilities, and schedule your
        lifesaving appointment with ease.
      </p>
      <div className="image-grid">
        <img src={centerimage1} alt="Donation Center 1" />
        <img src={centerimage2} alt="Donation Center 2" />
        <img src={centerimage3} alt="Donation Center 3" />
        <img src={center4} alt="Donation Center 4" />
        <img src={center5} alt="Donation Center 5" />
        <img src={center6} alt="Donation Center 6" />
      </div>
    </section>
    <div >
      <FindDonationCenter />
    </div>
    <div data-aos="zoom-in">
      <Hospitallist />
    </div>
    <div>
      <Schedule/>
    </div>
    <div data-aos="zoom-in">
      <Notification/>
    </div>
    <div data-aos="zoom-in">
      <Donationhistory/>
    </div>


        </div>
    );
};

export default DonorPage;