import React from 'react';
import '../App.css';
import Homecard1 from './Homecard1';
import blooood from '../images/blooood.png';
import aboutimage2 from '../images/aboutimage2.png';
const DonateTempsec = () => {
        const card1img="car1image1.png";
       const card1h1="Book appointment";
       const card1p="Start by choosing a convenient date, time, and convenient donation center. "

       const card2img="car1image2.png";
       const card2h1="Health Check";
       const card2p="Before donating, a brief screening of your vitals, and hemoglobin levels."

       const card3img="givingblodimg.png";
       const card3h1="Blood Donation";
       const card3p="A sterile needle collects about 1 pint of blood from your arm in just 8-10 minutes."
       return (
        <section className="donationdes">
        <center><div className="donationintro">
            <h1>Blood Donation Process</h1>
            <p>Donating blood is a simple, life-saving act that takes about 45 minutes to 1 hour (including registration and recovery). Here’s what to expect:
            </p>
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