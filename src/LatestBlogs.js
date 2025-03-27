import React from 'react';
import './App.css';
import min from './images/min.png';
import Blogcard from './Blogcard';
import VideoUpdate from './VideoUpdate';

const LatestBlogs = () => {
    const bcard1image="blooood.png";
    const bdate1="14 feb 2025";
    const bh1="Blood Donation Drives";
    const bp1="Stay updated on local blood drives, community events, and special campaigns, coming up soon you can help save life now – join us and make a difference in your neighbourhood!";
    const bpr="Read more";
    const bcard2image="blog2.png";
    const bdate2="20 feb 2025";
    const bh2="World blood donor day";
    const bp2="On this special day, we honor the heroes who donate blood and the teams that make it possible. Together, we ensure a lifeline for patients in need. Join us in making a difference";
    const bp2r="Read more";
    const bcard3image="blog3.png";
    const bdate3="28 feb 2025";
    const bh3="Your Blood Matters";
    const bp3="Every donation you make can save lives, providing hope to patients in emergencies, surgeries and chronic state Join us in making a difference – donate blood today and give the gift of life.";
    const bp3r="Read more";

    const vid1img="vidc1.png";
    const vid1h="Every Drop Counts";
    const vid1p = "No matter how small, your contribution can make a huge impact. Give a live hope today";
    const vid2img= "vidc2.png";
    const vid2h="Tips Before Donating";
    const vid2p="Drink plenty of water, have a healthy meal, to ensure a smooth and successful donation experience.";
    const vid3img="vidc3.png";
    const vid3h="Heroes Donate Blood";
    const vid3p="Your simple act of donating blood can save lives and bring hope to those in need of blood today.";

    return (
        <div className='LatestBlogs'>
            <div className='centerlatest'><h1 >Latest Blogs</h1></div>
           <div className='Ministerspeak'>
            <div className='miisterwords'>
            <h1>Minister of Health Speaks</h1>
            <p>"Blood donation is not just a medical necessity; it is an act of compassion that saves lives. Every drop of blood donated can mean the difference between life and death for someone in need. As the Minister of Health, I urge every eligible individual to step forward and become a donor. Together, we can build a healthier, stronger nation where no life is lost due to a lack of blood supply. Join us in this mission to ensure that every hospital and patient has access to safe and sufficient blood when they need it most <br/><strong>Professor Muhammad Ali Pate</strong></p>
                
                </div>
                <div className='miisterimg'><img src={min} alt='Ministerpics'/></div>
           </div>
           <h1>Blogs</h1>
           <div className='bloogsdiv'>
            <Blogcard Cardimg={bcard1image} d={bdate1} h={bh1}  p={bp1} p2={bpr}/>
            <Blogcard Cardimg={bcard2image} d={bdate2} h={bh2}  p={bp2} p2={bp2r}/>
            <Blogcard Cardimg={bcard3image} d={bdate3} h={bh3}  p={bp3} p2={bp3r}/>
           </div>
           <h1>Video update</h1>
           <div className='vidsdiv'>
           <VideoUpdate vidimg={vid1img} h={vid1h} p={vid1p}/>
           <VideoUpdate vidimg={vid2img} h={vid2h} p={vid2p}/>
           <VideoUpdate vidimg={vid3img} h={vid3h} p={vid3p}/>
           </div>
        </div>
    );
};

export default LatestBlogs;