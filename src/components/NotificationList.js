import React from "react";
import NotificationItem from "../components/NotificationItem";
import "../App.css";

const notifications = [
  {
    id: 1,
    type: "request",
    title: "Request",
    message: "Request sent successfully to donor",
    time: "5 minutes ago",
    category: "Today",
  },
  {
    id: 2,
    type: "profile-update",
    title: "Profile Picture Updated Successfully",
    message: "Your profile picture has been successfully updated.",
    time: "6 days ago",
    category: "Today",
  },
  {
    id: 3,
    type: "rejected",
    title: "Request Rejected",
    message: "Sorry to inform you the donor is unavailable for your request.",
    time: "2 months ago",
    category: "Last week",
  },
  {
    id: 4,
    type: "hospital",
    title: "Gift Hand hospital",
    message:
      "We're happy to inform you that the donor blood has been received! This brings us one step closer to your recovery and well-being.",
    time: "1 month ago",
    category: "Last week",
  },
];

const NotificationList = () => {
  return (
    <div className="notificationContainer">
      <h2 className="notificationTitle">Notification</h2>
      <div className="notibut">
      <button className="allBtn">All</button>
      <input type="text" placeholder="Search" className="searchBox" />
      </div>
      <div className="notificationGroup">
        <h3 className="categoryTitle">Today</h3>
        {notifications
          .filter((noti) => noti.category === "Today")
          .map((noti) => (
            <NotificationItem key={noti.id} {...noti} />
          ))}

        <h3 className="categoryTitle">Last week</h3>
        {notifications
          .filter((noti) => noti.category === "Last week")
          .map((noti) => (
            <NotificationItem key={noti.id} {...noti} />
          ))}
      </div>

      <p className="notificationCount">Showing {notifications.length} notifications</p>

      <div className="pagination">
        <button className="pageBtn active">1</button>
        <button className="pageBtn">2</button>
        <button className="pageBtn">3</button>
      </div>
    </div>
  );
};

export default NotificationList;
