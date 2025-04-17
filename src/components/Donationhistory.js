import React from "react";
import "../App"; // Ensure you create and modify this file for styling

const donations = [
  { date: "Dec 16 2023", location: "Luth General hospital Lagos", volume: "450ml", status: "Completed" },
  { date: "Jan 13 2024", location: "Gifted Hand hospital Lagos", volume: "450ml", status: "Cancelled" },
  { date: "May 15 2025", location: "Luth General hospital Lagos", volume: "500ml", status: "Completed" },
  { date: "Jul 30 2025", location: "Gifted Hand hospital Lagos", volume: "450ml", status: "Completed" },
  { date: "Sep 15 2025", location: "Luth General hospital Lagos", volume: "450ml", status: "Completed" },
  { date: "Nov 18 2026", location: "Luth General hospital Lagos", volume: "450ml", status: "Completed" },
  { date: "Jan 30 2026", location: "Luth General hospital Lagos", volume: "450ml", status: "Completed" },
  { date: "Feb 18 2026", location: "Luth General hospital Lagos", volume: "450ml", status: "Completed" },
  { date: "Mar 17 2026", location: "Gifted Hand hospital Lagos", volume: "450ml", status: "Completed" }
];

const Donationhistory = () => {
  return (
    <div className="donation-history">
      <h2>Donation History</h2>
      <div className="stats-container">
        <div className="card green">
        <div className="cardheadback one"> <p>Total Donation 8</p></div>
          
          <p>Thank you for your commitment!</p>
          <p><b>Milestone</b></p>
          <div className="milestones">
            {[5, 10, 15, 20].map((milestone) => (
              <span key={milestone} className="milestone">{milestone}</span>
            ))}
          </div>
        </div>
        <div className="card blue">
          <div className="cardheadback two"><p >Donation Stats</p></div>
          <p><b>5.4 Liters</b> of blood donated</p>
          <p>8 donations in the past year</p>
          <p><b>120</b> loyalty points earned</p>
        </div>
        <div className="card red">
        <div className="cardheadback three"><p>Your Impact 36</p></div>
          
          <p>Potential lives saved through your donations! Share your impact.</p>
          <p>Thank you for choosing to save lives.</p>
        </div>
      </div>
      <h3>Total Donations</h3>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Location</th>
            <th>Volume</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {donations.map((donation, index) => (
            <tr key={index}>
              <td>{donation.date}</td>
              <td>{donation.location}</td>
              <td>{donation.volume}</td>
              <td className={donation.status.toLowerCase()}>{donation.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Donationhistory;
