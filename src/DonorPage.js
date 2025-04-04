import React from 'react';
import './App.css';
import centerimage1 from "./images/centerimage1.png";
import centerimage2 from "./images/centerimage2.png";
import centerimage3 from "./images/centerimage3.png";
import FindDonationCenter from "./FindDonationCenter";
import Hospitallist from "./Hospitallist";
import Schedule from "./Schedule";
import Notification from "./Notification";
import Donationhistory from "./Donationhistory";

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
            <div className='maindonorintro'>
        <div className='donorpageintro'>
           
            <h1>Blood Compatibility</h1>
            <center><p>Blood compatibility refers to the careful matching of blood types between a donor and a recipient to ensure a safe and effective blood transfusion. When blood is transfused, it is crucial that the donor's blood is compatible with the recipient’s to prevent potentially life-threatening reactions.</p></center>
            <button>Schedule</button>
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
    <section className="donation-center">
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
        <img src={centerimage1} alt="Donation Center 4" />
        <img src={centerimage2} alt="Donation Center 5" />
        <img src={centerimage3} alt="Donation Center 6" />
      </div>
    </section>
    <div>
      <FindDonationCenter />
    </div>
    <div>
      <Hospitallist />
    </div>
    <div>
      <Schedule/>
    </div>
    <div>
      <Notification/>
    </div>
    <div>
      <Donationhistory/>
    </div>


        </div>
    );
};

export default DonorPage;