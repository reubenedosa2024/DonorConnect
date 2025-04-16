import React from "react";
import "../App.css";

const CompleteTransfusionTable = () => {
  const transfusions = [
    {
      donorName: "Aminu Abu",
      bloodType: "O+",
      scheduledDate: "25/03 2025",
      time: "11:03AM",
      status: "Completed",
      action: "Confirmed",
    },
    {
      donorName: "Aminu Abu",
      bloodType: "B+",
      scheduledDate: "25/03 2025",
      time: "11:03AM",
      status: "Pending",
      action: "Confirm",
    },
    {
      donorName: "Chi Chi Ugo",
      bloodType: "AB+",
      scheduledDate: "25/03 2025",
      time: "11:03AM",
      status: "Pending",
      action: "Confirm",
    },
  ];

  return (
    <div className="transfusionTableContainer">
      <h2 className="transfusionTableTitle">Complete Transfusion</h2>
      <table className="transfusionTable">
        <thead>
          <tr>
            <th>Donor Name</th>
            <th>Blood Type</th>
            <th>Sheduled Date</th>
            <th>Time</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {transfusions.map((item, index) => (
            <tr key={index}>
              <td>{item.donorName}</td>
              <td>{item.bloodType}</td>
              <td>{item.scheduledDate}</td>
              <td>{item.time}</td>
              <td>
                <span
                  className={`transfusionStatus ${
                    item.status === "Completed" ? "completed" : "pending"
                  }`}
                >
                  {item.status}
                </span>
              </td>
              <td>
                <button
                  className={`transfusionActionBtn ${
                    item.action === "Confirmed" ? "confirmed" : "confirm"
                  }`}
                >
                  {item.action}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompleteTransfusionTable;
