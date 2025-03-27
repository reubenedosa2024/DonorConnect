import React, { useState } from "react";
import './App.css';

const hospitals = ["Gifted Hand Hospital", "Free Land Hospital", "Lagoon Hospital"];
const timeSlots = [
  "8:10 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 AM",
  "12:30 AM", "2:10 AM", "2:40 AM", "3:10 AM", "3:40 AM",
  "4:00 AM", "4:30 AM", "5:00 AM", "5:20 AM", "5:30 AM"
];

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedHospital, setSelectedHospital] = useState(hospitals[0]);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateChange = (days) => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + days);
    setSelectedDate(newDate);
  };

  return (
    <div className="schedule-container">
      <div className="header-buttons">
        <button className="schedule-btn">Schedule</button>
        <button className="reschedule-btn">Reschedule</button>
        <button className="cancel-btn">Cancel</button>
      </div>
      <div className="content">
        <div className="calendar">
          <p>Select Date</p>
          <div className="calendar-header">
            <button onClick={() => handleDateChange(-1)}>&lt;</button>
            <span>{selectedDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })}</span>
            <button onClick={() => handleDateChange(1)}>&gt;</button>
          </div>
          <div className="date-grid">
            {[...Array(30).keys()].map((day) => (
              <button
                key={day}
                className={selectedDate.getDate() === day + 1 ? "selected" : ""}
                onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day + 1))}
              >
                {day + 1}
              </button>
            ))}
          </div>
        </div>
        <div className="selection">
          <label>Selected Hospital</label>
          <select value={selectedHospital} onChange={(e) => setSelectedHospital(e.target.value)}>
            {hospitals.map((hospital) => (
              <option key={hospital} value={hospital}>{hospital}</option>
            ))}
          </select>
          <p>Available Time Slot - {selectedDate.toDateString()}</p>
          <div className="time-slots">
            {timeSlots.map((time) => (
              <button
                key={time}
                className={selectedTime === time ? "selected-time" : ""}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </button>
            ))}
          </div>
          <button className="continue-btn">Continue</button>
        </div>
      </div>
    </div>
  );
};
export default Schedule;
