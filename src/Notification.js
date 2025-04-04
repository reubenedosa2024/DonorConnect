import React, { useState } from "react";
import './App.css';

const notificationsData = [
  {
    id: 1,
    type: "urgent",
    title: "Urgent : Blood type O+ Needed",
    message:
      "Register no 484567 send a request as the blood matches with yours, please consider donating soon- save life with your donation  Address No 24 victoria inland opposite first bank",
    time: "5 minutes ago",
    actions: ["Accept", "Reject"],
    status: "unread",
  },
  {
    id: 2,
    type: "appointment",
    title: "Appointment Reminder:",
    message:
      "Tomorrow at 2:30 PM your donation appointment is scheduled for tomorrow at Gifted Hand Hospital, 12 Main street. Please remember to be hydrated",
    time: "1 hour ago",
    actions: ["Confirm", "Reschedule"],
    status: "unread",
  },
  {
    id: 3,
    type: "success",
    title: "Profile Picture Updated Successfully",
    message: "Your profile picture has been successfully updated.",
    time: "1 day ago",
    status: "read",
  },
  {
    id: 4,
    type: "success",
    title: "Successful Transfusion",
    message:
      "We are thrilled to inform you that your generous blood donation has been successfully transferred to a patient in urgent need. Your selfless act has given him a second chance at life.",
    time: "5 days ago",
    status: "read",
  },
  {
    id: 5,
    type: "info",
    title: "Community Blood Drive Next Week",
    message: "Join us at Ikeja for our community Blood Drive from 10 AM to 4 PM on Saturday",
    time: "5 days ago",
    status: "read",
  },
];

const Notification = () => {
  const [notifications, setNotifications] = useState(notificationsData);
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const notificationsPerPage = 5;

  const filteredNotifications =
    filter === "all"
      ? notifications
      : notifications.filter((n) => n.type === filter);

  const indexOfLastNotification = currentPage * notificationsPerPage;
  const indexOfFirstNotification = indexOfLastNotification - notificationsPerPage;
  const currentNotifications = filteredNotifications.slice(
    indexOfFirstNotification,
    indexOfLastNotification
  );

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, status: "read" })));
  };

  return (
    <div className="notification-container">
      <h2>Notification</h2>
      <div className="filters">
        <button onClick={() => setFilter("all")} >All</button>
        <button onClick={() => setFilter("appointment")}>Appointment</button>
        <button onClick={() => setFilter("urgent")}>Urgent</button>
        <button onClick={markAllAsRead}>Mark all as read</button>
      </div>
      <div className="notifications">
        {currentNotifications.map((n) => (
          <div key={n.id} className={`notification-card ${n.type} ${n.status}`}>
            <div className="notiparting">
            <h3>{n.title}</h3>
            <p>{n.message}</p>
           </div>
            <div className="notification-footer">
              {n.actions &&
                n.actions.map((action, i) => <div className="actionbuttioncont"><button key={i}>{action}</button> </div>)}
              
            </div>
            <div className="ntime">{n.time}</div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from(
          { length: Math.ceil(filteredNotifications.length / notificationsPerPage) },
          (_, i) => (
            <button key={i + 1} onClick={() => setCurrentPage(i + 1)}>
              {i + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Notification;
