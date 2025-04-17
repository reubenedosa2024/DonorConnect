import React from 'react';
import '../App.css';
import { FaRegCalendarAlt } from "react-icons/fa";

const Blogcard = (props) => {


    return (
        <div className="blogwidth">
            <img src={require("../images/" + props.Cardimg)} alt="cardimage"/>
        <div className='card1-text'>
        {/* <p>{props.d}</p> */}
        <div className="event-date">
        <FaRegCalendarAlt className="calendar-icon" />
        <span>{props.d}</span>
      </div>
         <h2>{props.h}</h2> 
        <p>{props.p}</p>
        <p className='readmoreblogp'>{props.p2}</p>
        </div>
        </div>
            
        
    );
};

export default Blogcard;