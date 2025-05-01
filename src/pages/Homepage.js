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
               <div data-aos="zoom-in"><Achiveandpartnersec/></div>
               <div data-aos="zoom-in"><DonateTempsec/></div>
               <div data-aos="zoom-in"> <EmergencyBlood /></div>
               <div data-aos="zoom-in"><Testinmonysec/></div>
               <div data-aos="zoom-in"><LatestBlogs/></div>
               <div data-aos="zoom-in"><FrequentlyAsked/></div>
               <div ><Missiontodaysec/></div>
            </>
            
        </div>
    );
};

export default Homepage;