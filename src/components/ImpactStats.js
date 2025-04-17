import React from 'react';
import { FaProcedures, FaBookMedical, FaTint, FaHospitalAlt } from 'react-icons/fa';
import '../App.css'; // for optional styling

const stats = [
  {
    icon: <FaProcedures />,
    label: 'Number of Patients Helped',
    value: '20+'
  },
  {
    icon: <FaBookMedical />,
    label: 'Number of Registered Donors',
    value: '10+'
  },
  {
    icon: <FaTint />,
    label: 'Number of Pints Collected',
    value: '20+'
  },
  {
    icon: <FaHospitalAlt />,
    label: 'Number of Hospitals',
    value: '5+'
  }
];

const ImpactStats = () => {
  return (
    <div className="impact-stats-container">
      {stats.map((item, index) => (
        <div className="impact-stat-card" key={index}>
          <div className="impact-icon">{item.icon}</div>
          <h2 className="impact-value">{item.value}</h2>
          <p className="impact-label">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default ImpactStats;