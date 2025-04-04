import React from "react";

const NotificationItem = ({ type, title, message, time }) => {
  const iconColors = {
    request: "red",
    "profile-update": "green",
    rejected: "orange",
    hospital: "green",
  };

  return (
    <div className="notificationItem">
      <div className="icon" style={{ backgroundColor: iconColors[type] }}></div>
      <div className="notificationContent">
        <h4 className="notificationTitle">{title}</h4>
        <p className="notificationMessage">{message}</p>
      </div>
      <span className="notificationTime">{time}</span>
    </div>
  );
};

export default NotificationItem;
