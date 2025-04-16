import React from 'react';
import '../App.css';

const VideoUpdate = (props) => {
    return (
        
            <div className="vidup1">
		<img src={require("../images/" + props.vidimg)} alt="vidup"/>
        <div className='vidup-text'>
        <h2>{props.h}</h2>
        <p>{props.p}</p>
        </div>
		</div>
            
        
    );
};

export default VideoUpdate;