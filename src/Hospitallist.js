import React from "react";
import './App.css';
import { FaCalendarCheck, FaMapMarkerAlt, FaFlask } from "react-icons/fa";
const hospitals = [
  {
    name: "Gifted Hand Hospitals",
    address: "No 23, Olowora street, Ojodu Berger",
    phone: "08148358358",
    hours: {
      Monday: "7:30AM-5:30AM",
      Tuesday: "7:30AM-6:00AM",
      Wednesday: "7:30AM-4:00AM",
      Thursday: "7:30AM-4:00AM",
      Friday: "7:30AM-5:00AM",
      Saturday: "7:30AM-5:00AM",
    },
  },
  {
    name: "Free Land Blood Bank",
    address: "No 56, Olowora street, Ojodu Berger",
    phone: "09148358363",
    hours: {
      Monday: "7:30AM-5:30AM",
      Tuesday: "7:30AM-6:00AM",
      Wednesday: "7:30AM-4:00AM",
      Thursday: "7:30AM-4:00AM",
      Friday: "7:30AM-5:00AM",
      Saturday: "7:30AM-5:00AM",
    },
  },
  {
    name: "Lagoon Hospital",
    address: "No 60, Olowora street, Ojodu Berger",
    phone: "09148358363",
    hours: {
      Monday: "7:30AM-5:30AM",
      Tuesday: "7:30AM-6:00AM",
      Wednesday: "7:30AM-4:00AM",
      Thursday: "7:30AM-4:00AM",
      Friday: "7:30AM-5:00AM",
      Saturday: "7:30AM-5:00AM",
    },
  },
];

const Hospitallist = () => {
  return (
    <div className="hospital-list">
      {hospitals.map((hospital, index) => (
        <div className="hospital-card" key={index}>
          <div className="hospital-header">
            <h2>{hospital.name}</h2>
            <hr/>
          </div>
          <div className="hospital-body">
            <div className="hospital-info">
              <p><strong>ADDRESS</strong><br />{hospital.address}</p>
              <p>Phone: {hospital.phone}</p>
            </div>
            <div className="hospital-hours">
              <table>
                <thead>
                  <tr>
                    <th>DAYS</th>
                    <th>HOURS</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(hospital.hours).map(([day, time]) => (
                    <tr key={day}>
                      <td>{day}</td>
                      <td>{time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="hospital-actions">
              <button className="collection-type">🧪 COLLECTION TYPE</button>
              <button className="schedule-appointment">📅 SCHEDULE APPOINTMENT</button>
              <button className="get-direction">📍 GET DIRECTION</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hospitallist;
