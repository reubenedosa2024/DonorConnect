import React from 'react';
import './App.css';
import Homecard1 from './Homecard1';
import blooood from './images/blooood.png';
import aboutimage2 from './images/aboutimage2.png';
const DonateTempsec = () => {
        const card1img="blooood.png";
       const card1h1="Book appointment";
       const card1p="Start by choosing a convenient date, time, and donation center. Confirm your details, arrive on the scheduled day, and time and give the gift of life. "

       const card2img="car1image2.png";
       const card2h1="Health Check";
       const card2p="Before donating, a brief screening of your vitals, and hemoglobin levels, and medical history ensures you’re fit to donate and keeps recipients safe."

       const card3img="card1image3.png";
       const card3h1="Blood Donation";
       const card3p="A sterile needle collects about 1 pint (450ml)  of blood from your arm in just 8 -10 minutes. The quick, painless process is supervised by professionals."
       return (
        <section className="donationdes">
        <center><div className="donationintro">
            <h1>Blood Donation Process</h1>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                aliqua. Ut enim ad minim veni</p>
        </div></center>
        <div className='donationcardmain'>
        <Homecard1 Cardimg={card1img} h={card1h1} p={card1p}  />
        <Homecard1 Cardimg={card2img} h={card2h1} p={card2p}  />
        <Homecard1 Cardimg={card3img} h={card3h1} p={card3p}  />
        </div>
    </section>
    );
};

export default DonateTempsec;