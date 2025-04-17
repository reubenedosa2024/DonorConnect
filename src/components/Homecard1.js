import React from 'react';
import '../App.css';

const Homecard1 = (props) => {
    return (
        
            <div className="card1">
		<img src={require("../images/" + props.Cardimg)} alt="cardimage"/>
        <div className='card1-text'>
        <h2>{props.h}</h2>
        <p>{props.p}</p>
        </div>
		</div>
            
        
    );
};

export default Homecard1;