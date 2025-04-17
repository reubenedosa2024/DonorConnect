import React from "react";
import "../App.css";
import RecipientRequest from "../components/RecipientRequest";
import ScheduledDonorRequest from "../components/ScheduledDonorRequest";
import CompletedTransferTable from "../components/CompletedTransferTable"
const Hospitaldash = () => {
  const transactions = [
    {
      date: "25/03 2025",
      name: "Sarah Johnson",
      bloodType: "O+",
      amount: "₦2000",
      status: "Pending",
      datePaid: "Not paid",
    },
    {
      date: "25/03 2025",
      name: "Aminu Abu",
      bloodType: "B+",
      amount: "₦2000",
      status: "Paid",
      datePaid: "27/03 2025",
    },
    {
      date: "25/03 2025",
      name: "Chi Chi  Ugo",
      bloodType: "AB+",
      amount: "₦2000",
      status: "Paid",
      datePaid: "27/03 2025",
    },
    {
      date: "25/03 2025",
      name: "Joy Friday",
      bloodType: "O+",
      amount: "₦2000",
      status: "Paid",
      datePaid: "27/03 2025",
    },
    {
      date: "25/03 2025",
      name: "Aminu Zaki",
      bloodType: "B+",
      amount: "₦2000",
      status: "Paid",
      datePaid: "27/03 2025",
    },
  ];

  

  return (
    <div>
    <div className="commissionContainer">
      {/* Sidebar */}
      <div className="sidebar">
        <h3>Free Hand Hospital</h3>
        <ul>
          <li>Commission</li>
          <li>Recipient Request</li>
          <li>Donor Scheduled</li>
          <li>Completed donation</li>
          <li>Profile</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="mainContent">
        <h2 className="title">Commission</h2>
        <div className="commissionBoxes">
          <div className="box">
            <h3>Commission Earn</h3>
            <p className="amount">₦10,000</p>
            <p>Lifetime earnings</p>
          </div>
          <div className="box">
            <h3>Pending Commission</h3>
            <p className="amount pending">₦2,000</p>
            <p>To be Process</p>
          </div>
          <div className="box">
            <h3>Paid Commission</h3>
            <p className="amount paid">₦8,000</p>
            <p>Successfully process</p>
          </div>
        </div>

        {/* Transaction History */}
        <div className="transactionhistrysep">
        <h2 className="title">Transaction History</h2>
        <table className="transactionTable">
          <thead>
            <tr>
              <th>Date</th>
              <th>Donor Name</th>
              <th>Blood Type</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date Paid</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.date}</td>
                <td>{transaction.name}</td>
                <td>{transaction.bloodType}</td>
                <td>{transaction.amount}</td>
                <td>
                  <span
                    className={`status ${
                      transaction.status === "Paid" ? "paid" : "pending"
                    }`}
                  >
                    {transaction.status}
                  </span>
                </td>
                <td>{transaction.datePaid}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Print Button */}
        <button className="printButton">Print</button>
        </div>
      </div>
    </div>
    <RecipientRequest/>
    <ScheduledDonorRequest/>
    <CompletedTransferTable/>
    </div>
  );
};

export default Hospitaldash;
