import React from 'react';
import './App.css';
import Navbar from './Navbar';
import {useState,useEffect} from 'react';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Layout from './Layout';
import Herosec from './Herosec';
import AboutSec  from './AboutSec';
import DonateTempsec from './DonateTempsec';
import Achiveandpartnersec from "./Achiveandpartnersec";

import Testinmonysec from './Testinmonysec';
import LatestBlogs from './LatestBlogs';
import FrequentlyAsked from './FrequentlyAsked';
const Homepage = () => {

    return (
        <div>
            <>
            
               <div><Herosec/></div>
               <div><AboutSec/></div>
               <div><DonateTempsec/></div>
               <div><Achiveandpartnersec/></div>
               <div><Testinmonysec/></div>
               <div><LatestBlogs/></div>
               <div><FrequentlyAsked/></div>
              
            </>
            
        </div>
    );
};

export default Homepage;