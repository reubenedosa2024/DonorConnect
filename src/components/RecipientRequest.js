import React from "react";
import "../App.css";

const RecipientRequest = () => {
  const requests = [
    { id: "R464563", bloodType: "O+", urgency: "High", time: "10:33 AM", date: "25/03 2025", unit: 2 },
    { id: "R464675", bloodType: "A-", urgency: "Medium", time: "10:55 AM", date: "25/03 2025", unit: 1 },
    { id: "R464553", bloodType: "B+", urgency: "Medium", time: "11:00 AM", date: "25/03 2025", unit: 2 },
    { id: "R464578", bloodType: "AB+", urgency: "Low", time: "11:04 AM", date: "25/03 2025", unit: 2 },
    { id: "R364563", bloodType: "O+", urgency: "High", time: "11:33 AM", date: "25/03 2025", unit: 2 },
    { id: "R364522", bloodType: "A-", urgency: "High", time: "11:15 AM", date: "25/03 2025", unit: 1 },
    { id: "R464555", bloodType: "B+", urgency: "Low", time: "01:00 AM", date: "25/03 2025", unit: 2 },
    { id: "R464590", bloodType: "AB-", urgency: "Medium", time: "12:00 AM", date: "25/03 2025", unit: 2 },
    { id: "R464563", bloodType: "A+", urgency: "High", time: "12:10 PM", date: "25/03 2025", unit: 2 },
    { id: "R464543", bloodType: "A-", urgency: "Low", time: "12:40 PM", date: "25/03 2025", unit: 1 },
  ];

  return (
    <div className="recipientContainer">
      <h2 className="tableTitle">Recipient Request</h2>
      <table className="recipientTable">
        <thead>
          <tr>
            <th>Request ID</th>
            <th>Blood Type</th>
            <th>Urgency</th>
            <th>Time</th>
            <th>Date</th>
            <th>Unit</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((req, index) => (
            <tr key={index}>
              <td>{req.id}</td>
              <td>{req.bloodType}</td>
              <td>
                <span className={`urgency ${req.urgency.toLowerCase()}`}>
                  {req.urgency}
                </span>
              </td>
              <td>{req.time}</td>
              <td>{req.date}</td>
              <td>{req.unit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecipientRequest;
