import React from 'react';
import '../App.css';
import { FaLock, FaCheckCircle, FaUserCheck } from 'react-icons/fa';

const stats = [
  {
    title: '2 Sec',
    description: 'Every 2 seconds someone needs blood',
  },
  {
    title: '38%',
    description: 'Only 38% of the population is eligible to donate blood',
  },
  {
    title: '3 lives',
    description: 'A single donation can save up to 3 lives.',
  },
];

const features = [
  {
    icon: <FaLock />,
    title: 'Data Privacy',
    description: 'All information is encrypted and securely stored.'
  },
  {
    icon: <FaCheckCircle />,
    title: 'Health Compliance',
    description: 'Fully compliant with national health standards.'
  },
  {
    icon: <FaUserCheck />,
    title: 'Verified User',
    description: 'All users are verified, ensuring a trustworthy experience.'
  }
];

const BloodDonationInfo = () => {
  return (
    <div className="donation-info-container">
      <section className="why-donation">
        <h2>Why Blood Donation matters</h2>
        <div className="stats-cards">
          {stats.map((item, index) => (
            <div className={`stat-card ${index === 2 ? 'highlight-card' : ''}`} key={index}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
          <div className='transparencycover'>
      <section className="transparency-section">
        <h2>Transparency & Trust</h2>
        <p className="subtext">
          Your safety and privacy are our top priorities. We adhere to the highest standards of protection and medical ethics.
        </p>
        <div className="features">
          {features.map((item, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <button className="donationinfobtn">Sign up</button>
      </section>
      </div>
    </div>
  );
};

export default BloodDonationInfo;