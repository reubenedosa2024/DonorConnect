import React from 'react';
import '../App.css';
import { FaRegCalendarAlt } from "react-icons/fa";

const Blogmaincard = ({ image, date, title, content }) => {
    return (
        <div className="blog-card">
            <img src={require(`../images/${image}`)} alt={title} className="blog-image" />
            <div className="blog-content">
                <div className="blog-date">
                    <FaRegCalendarAlt className="calendar-icon" />
                    <span>{date}</span>
                </div>
                <h2>{title}</h2>
                <p dangerouslySetInnerHTML={{ __html: content }}></p>
            </div>
        </div>
    );
};

export default Blogmaincard;