import React from 'react';
import './App.css';
import Blogmaincard from './Blogmaincard';


const Blogs = () => {
    const blogData = [
        {
            image: "blooood.png",
            date: "14 Feb 2025",
            title: "Blood Donation Drives",
            content: `Stay updated on upcoming blood donation drives, community events, and special campaigns designed to make a real impact. <br/><br/>
                      How You Can Get Involved:<br/>
                      <ol>
                     <li> Find a nearby blood drive through our app.</li>
                     <li> Schedule your donation at a time that works for you.</li>
                     <li> Spread the word—invite friends, family, and colleagues to join.</li></ol><br/>
                       Together, we can ensure that hospitals always have enough supply for patients in urgent need. Sign up now, donate, and make a lasting impact! `
        },
        {
            image: "blog2.png",
            date: "14 Feb 2025",
            title: "World Blood Donor Day",
            content: `World Blood Donor Day: Celebrating the Gift of Life
Every year on June 14th, we come together to celebrate World Blood Donor Day—a day dedicated to honoring the selfless individuals who give the precious gift of blood and the dedicated teams who make safe transfusions possible.
This year’s theme, "Give Blood, Give Plasma, Share Life, Share Often," highlights the ongoing need for regular donations to ensure that hospitals and clinics never run short. Blood donors are everyday heroes—ordinary people doing extraordinary things to save lives.<br/><br/>
Why Your Donation Matters<br/><br/>
Emergency patients rely on blood after accidents or trauma.
Cancer fighters need transfusions during treatment.
New mothers may require blood during childbirth complications.
Chronic illness patients depend on regular transfusions to survive.

`
        },
        {
            image: "blog3.png",
            date: "14 Feb 2025",
            title: "Your Blood Matters",
            content:'Your Blood Matters The Lifesaving Power of Donation Every drop of blood you donate carries the power to heal, to sustain, and to save. In moments of crisis—whether a traumatic accident, a complex surgery, or a lifelong battle with a chronic illness—your generosity can mean the difference between life and loss. Blood donations are not just medical necessities; they are gifts of hope, strength, and a future for those in need. <br/>Why Donate?<br/> <ul><li>Emergency Care: Victims of accidents, natural disasters, and severe injuries rely on immediate blood transfusions to survive.</li><li>Surgeries & Treatments: Patients undergoing major surgeries, organ transplants, or cancer therapies often need blood to replace what they lose.</li><li>Chronic Conditions: Individuals with diseases like sickle cell anemia, thalassemia, or hemophilia require regular transfusions to live healthy lives.</li><li>Mothers & Newborns: Complications during childbirth can lead to severe bleeding, making blood donations critical for maternal and infant survival.</li></ul><br/>one Donation, Multiple Lives<br/>A single blood donation can be separated into red cells, plasma, and platelets, helping up to three different patients. Your kindness ripples across families, communities, and generations.'
        },
        {
            image: "vidc3.png",
            date: "14 Feb 2025",
            title: "Post-Donation Care: Tips for a Smooth Recovery",
            content: `1. Rest and Hydrate: <br/> <ul><li>Avoid strenuous activity for at least 4-5 hours after donating</li><li>Drink plenty of fluids (water, juice, or electrolyte drinks) to replenish lost fluids</li><li>Avoid alcohol and caffeine for the next 24 hours, as they can cause dehydration</li><ul/> 2. Eat Iron-Rich and Nutritious Foods<br/><ul><li>Your body needs to replenish lost iron and nutrients. Eat foods </li><li>Lean meats, fish, and poultry</li><li>Spinach, lentils, and beans (for vegetarians)</li><li>Fortified cereals and nuts</li><li>A light snack right after donation (like fruits or cookies) helps stabilize blood sugar</li><ul/> 3. Keep the Bandage On & Monitor the Donation Site <br/><ul><li>Leave the bandage on for at least 4-5 hours to prevent bleeding or infection.</li><li>If there’s bruising or swelling, apply a cold compress.</li><li>Avoid heavy lifting with the donation arm for a few hours.</li></ul>4. Watch for Unusual Symptoms<br/>Most donors feel fine, but some may experience:<br/><ul><li>Dizziness or lightheadedness → Sit or lie down until it passes.</li><li>Nausea → Sip a sugary drink or eat a light snack.</li><li>Fatigue → Rest and avoid intense workouts for the day.</li></ul>`,
        }
    ];

    return (
        <div className='blogmaindown'> 
            <div className='bhead'><h2>DonorConnect Blogs</h2></div>
        <div className="blog-container">
            
            {blogData.map((blog, index) => (
                <Blogmaincard 
                    key={index} 
                    image={blog.image} 
                    date={blog.date} 
                    title={blog.title} 
                    content={blog.content} 
                />
            ))}
        </div>
        </div>
    );
};



export default Blogs;