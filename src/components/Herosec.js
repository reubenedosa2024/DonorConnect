import React from 'react';
 // Import CSS file for styling
import '../App.css';
import { Link} from 'react-router-dom'
const Herosec = () => {
    return (
        <section class="herosec" data-aos="zoom-in">
        <div class="herotext">
            <h1>One Donation Countless Lives Saved</h1>
        <p>Every drop counts! Your blood donation can help accident victims, surgical<br/> patients, and those battling life-threatening conditions. </p>
        <Link to="donorpage"><button><Link to="donorPage">Donate</Link></button></Link>
    </div>
    </section>
    );
};

export default Herosec;