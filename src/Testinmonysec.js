import React from 'react';
import './App.css';
import TestimonyCard from './TestimonyCard';
import tcard1 from './images/tcard1.png';
import tcard2 from './images/tcard2.png';
import tcard3 from './images/tcard3.png';
import tcard4 from './images/tcard4.png';
const Testinmonysec = () => {
   
    const tcardp1="This app made donating  so easy! I could schedule my appointment in minutes, find the nearest donation center, and even track my donation history . it a big lifesaver!";
    const tcardh1="David  Peter";
    const timage1="tcard1.png";
    const tcardp2="Thanks to the world donation app, I found donor \s when I needed it most. The kindness of strangers who donated gave me second chance to life. Donors you all are heroes";
    const tcardh2="Joyce Macusii ";
    const timage2="tcard2.png";
    const tcardp3="I love how user- friendly and intuitive the app is .The reminders forupcoming appointments and urgent donation requests keep me engaged and motivated to donate regular. ";
    const tcardh3="Peace Kings";
    const timage3="tcard3.png";
    const tcardp4="The app streamlined the entire process from the booking to post donation updates. it clear, convenient , neat, easy to use and trulydesigned with user in mind.";
    const tcardh4="Mary James";
    const timage4="tcard4.png";
    

    return (
        <div className='testinmonysec'>
        <center><div className='testintrop'>
            <h1>What people say about us</h1>
            <p>At DonorConnect, we take pride in creating a positive and impactful experience for every donor.Here’s what some of our amazing user have to say:</p>
           
        </div>
        </center>
        <div className="testimonycardmain">
        < TestimonyCard  Cardimg = {timage1} h={ tcardh1} p={tcardp1} className="withback"/>
        < TestimonyCard  Cardimg = {timage2} h={ tcardh2} p={tcardp2} className="withback"/>
        < TestimonyCard Cardimg = {timage3} h={ tcardh3} p={tcardp3} className="without"/>
        < TestimonyCard Cardimg = {timage4} h={ tcardh4} p={tcardp4} className="without"/>
        </div>
        </div>
    );
};

export default Testinmonysec;