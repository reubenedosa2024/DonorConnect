import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
import {useState,useEffect} from 'react';
import Footer from '../components/Footer';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Layout from '../Layout';
import Herosec from '../components/Herosec';
import AboutSec  from '../components/AboutSec';
import DonateTempsec from '../components/DonateTempsec';
import Achiveandpartnersec from "../components/Achiveandpartnersec";
import EmergencyBlood from "../components/EmergencyBlood";
import Testinmonysec from '../components/Testinmonysec';
import LatestBlogs from '../components/LatestBlogs';
import FrequentlyAsked from '../components/FrequentlyAsked';
import Missiontodaysec from '../components/Missiontodaysec';
const Homepage = () => {

    return (
        <div>
            <>
            
               <div><Herosec/></div>
               <div><AboutSec/></div>
               <div><Achiveandpartnersec/></div>
               <div><DonateTempsec/></div>
               <div> <EmergencyBlood /></div>
               <div><Testinmonysec/></div>
               <div><LatestBlogs/></div>
               <div><FrequentlyAsked/></div>
               <div><Missiontodaysec/></div>
            </>
            
        </div>
    );
};

export default Homepage;