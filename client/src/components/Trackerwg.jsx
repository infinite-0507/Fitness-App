import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios for making HTTP requests
import "../styles/Trackerwg.scss";

const Trackerwg = () => {
  const [squats, setSquats] = useState(0);
  const [benchPress, setBenchPress] = useState(0);
  const [deadlifts, setDeadlifts] = useState(0);
  const [overheadPress, setOverheadPress] = useState(0);

  const handleSquatsChange = (event) => {
    let value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      value = Math.min(value, 100); // Ensure the value does not exceed 100
      setSquats(value);
    }
  };
  
  const handleBenchPressChange = (event) => {
    let value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      value = Math.min(value, 100); // Ensure the value does not exceed 100
      setBenchPress(value);
    }
  };
  
  const handleDeadliftsChange = (event) => {
    let value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      value = Math.min(value, 100); // Ensure the value does not exceed 100
      setDeadlifts(value);
    }
  };
  
  const handleOverheadPressChange = (event) => {
    let value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      value = Math.min(value, 100); // Ensure the value does not exceed 100
      setOverheadPress(value);
    }
  };

  const navf = useNavigate(); // Initialize useNavigate hook

  const trackPerformance = () => {
    // Prepare data to be sent to the backend
    const data = {
      squats: squats,
      benchPress: benchPress,
      deadlifts: deadlifts,
      overheadPress: overheadPress
    };

    // Make a POST request to submit the data to the backend
    axios.post('http://localhost:3300/Stracker', data)
      .then(response => {
        console.log("Performance tracked successfully!");
        // Navigate to the "Finalwg" page
        navf('/Finalwg');
      })
      .catch(error => {
        console.error("Error tracking performance:", error);
      });
  };

  return (
    <div className="trackerwg-container">
      <h2 className="trackerwg-title">Strength Tracker</h2>
      <div className="trackerwg-item">
        <label htmlFor="squats">Squats: </label>
        <input type="number" id="squats" value={squats} onChange={handleSquatsChange} />
      </div>
      <div className="trackerwg-item">
        <label htmlFor="benchPress">Bench Press: </label>
        <input type="number" id="benchPress" value={benchPress} onChange={handleBenchPressChange} />
      </div>
      <div className="trackerwg-item">
        <label htmlFor="deadlifts">Deadlifts: </label>
        <input type="number" id="deadlifts" value={deadlifts} onChange={handleDeadliftsChange} />
      </div>
      <div className="trackerwg-item">
        <label htmlFor="overheadPress">Overhead Press: </label>
        <input type="number" id="overheadPress" value={overheadPress} onChange={handleOverheadPressChange} />
      </div>
      <button className="trackerwg-button" onClick={trackPerformance}>Track My Performance</button>
    </div>
  );
};

export default Trackerwg;
