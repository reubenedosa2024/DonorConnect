import React from "react";
import "../App.css";

const ScheduledDonorRequest = () => {
  const donors = [
    { name: "Sarah Johnson", blood: "O+", date: "25/03 2025", time: "11:03 AM", status: "Scheduled", id: "R464554" },
    { name: "Aminu Abu", blood: "B+", date: "25/03 2025", time: "12:03 PM", status: "Scheduled", id: "R464568" },
    { name: "Chi Chi  ugo", blood: "AB+", date: "25/03 2025", time: "01:03 PM", status: "Scheduled", id: "R464560" },
    { name: "Fridoy Johnson", blood: "O-", date: "25/03 2025", time: "02:03 PM", status: "Scheduled", id: "R464552" },
    { name: "Aminu Zaki", blood: "O+", date: "25/03 2025", time: "02:43 AM", status: "Scheduled", id: "R464568" },
    { name: "Babu kachi", blood: "A+", date: "25/03 2025", time: "03:03 PM", status: "Scheduled", id: "R464561" },
    { name: "Lade Tunde", blood: "AB+", date: "25/03 2025", time: "04:03 PM", status: "Scheduled", id: "R464561" },
  ];

  return (
    <div className="scheduledContainer">
      <h2 className="scheduledTitle">Scheduled Donor Request</h2>
      <table className="scheduledTable">
        <thead>
          <tr>
            <th>Donor Name</th>
            <th>Blood Type</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th>Recipient ID</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {donors.map((donor, index) => (
            <tr key={index}>
              <td>{donor.name}</td>
              <td>{donor.blood}</td>
              <td>{donor.date}</td>
              <td>{donor.time}</td>
              <td>
                <span className="scheduledStatus">{donor.status}</span>
              </td>
              <td>{donor.id}</td>
              <td>
                <button className="arrivalBtn">Log Arrival</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduledDonorRequest;
