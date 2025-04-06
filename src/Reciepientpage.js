import { useState } from "react";
import "./App.css"; 
import Availabledonorcard from "./Availabledonorcard";
import FormWithMap from './FormWithMap';
import Resultnearyoucard from './Resultnearyoucard';
import NotificationList from "./NotificationList";

const Reciepientpage = () => {
    const donorsData = [
        { id: 1, name: "Amino Abu", distance: 56, time: "10min", bloodType: "B+", image: "https://via.placeholder.com/50" },
        { id: 2, name: "Faith James", distance: 10, time: "20min", bloodType: "B+" },
        { id: 3, name: "Habiba Bello", distance: 10, time: "20min", bloodType: "B+" },
        { id: 4, name: "Chidima Mathew", distance: 56, time: "10min", bloodType: "B+", image: "https://via.placeholder.com/50" },
        { id: 5, name: "Praise James", distance: 15, time: "30min", bloodType: "B+" },
        { id: 6, name: "Peter Adeyemi", distance: 56, time: "10min", bloodType: "B+", image: "https://via.placeholder.com/50" },
        { id: 7, name: "Charle Williams", distance: 56, time: "10min", bloodType: "B+" },
        { id: 8, name: "Sarah Moses", distance: 56, time: "10min", bloodType: "B+", image: "https://via.placeholder.com/50" },
        { id: 9, name: "Deborah Amos", distance: 76, time: "20min", bloodType: "B+" }
      ];
      
      
        const [donors, setDonors] = useState(donorsData);
      
        const handleRequest = (donor) => {
          alert(`Request sent to ${donor.name}`);
        };
        const donorslist = [
          { name: "Amino Abu", distance: 5, time: "10min", bloodType: "B+", image: "aminu.jpg" },
          { name: "Faith James", distance: 10, time: "20min", bloodType: "B+", image: "faith.jpg" },
          { name: "Moses Williams", distance: 15, time: "30min", bloodType: "B+" },
          { name: "Chidima Mathew", distance: 5, time: "10min", bloodType: "B+", image: "chidima.jpg" },
          { name: "Praise James", distance: 15, time: "30min", bloodType: "B+" },
          { name: "Esther Adams", distance: 10, time: "20min", bloodType: "B+", image: "esther.jpg" },
        ];
        
    
      
  return (
    <div className="main">
    <div className="donor-container">
      <h1>Donor near you</h1>
    <p>See results that match your request</p>
    <div className="donor-grid">
      {donorsData.map((donor) => (
        <Availabledonorcard key={donor.id} donor={donor} onRequest={handleRequest} />
      ))}
    </div>
  </div>
  <FormWithMap/>
  <div className='resultnearmaindiv'>
            
           <div className="donorListContainer">
           <div> <h1>Result near you</h1> <p>See result that match with your request</p></div>
      <div className="donorGrid">
        {donorslist.map((donor, index) => (
          <Resultnearyoucard key={index} {...donor} />
        ))}
      </div>
    </div>
  </div>
  <div>
      <NotificationList />
    </div>
  </div>
);
};

export default Reciepientpage;
