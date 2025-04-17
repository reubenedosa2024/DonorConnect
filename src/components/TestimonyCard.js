import React from 'react';
import '../App.css';

const TestimonyCard = (props) => {


    return (
        <div className={`testimony-card ${props.className ? props.className : ''}`}>
             
		<div>
            <img src={require("../images/" + props.Cardimg)} alt="cardimage"/>
        </div>
        <div className='card1-text'>
        <h2>{props.h}</h2>
        <p>{props.p}</p>
        </div>
		</div>
            
        
    );
};

export default TestimonyCard;