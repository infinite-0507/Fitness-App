import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios for making HTTP requests
import "../styles/Trackerls.scss";

const Trackerls = () => {
  const [pushups, setPushups] = useState(0);
  const [pullups, setPullups] = useState(0);
  const [stepsCount, setStepsCount] = useState(0);
  const [jumpingJacks, setJumpingJacks] = useState(0);

  const handlePushupsChange = (event) => {
    let value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      value = Math.min(value, 100); // Ensure the value does not exceed 100
      setPushups(value);
    }
  };

  const handlePullupsChange = (event) => {
    let value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      value = Math.min(value, 100); // Ensure the value does not exceed 100
      setPullups(value);
    }
  };

  const handleStepsCountChange = (event) => {
    let value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      value = Math.min(value, 10000); // Ensure the value does not exceed 10,000
      setStepsCount(value);
    }
  };

  const handleJumpingJacksChange = (event) => {
    let value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      value = Math.min(value, 100); // Ensure the value does not exceed 100
      setJumpingJacks(value);
    }
  };

  const navf = useNavigate(); // Initialize useNavigate hook

  const trackPerformance = () => {
    // Prepare data to be sent to the backend
    const data = {
      pushups: pushups,
      pullups: pullups,
      stepsCount: stepsCount,
      jumpingJacks: jumpingJacks
    };

    // Make a POST request to submit the data to the backend
    axios.post('http://localhost:3300/Ctracker', data)
      .then(response => {
        console.log("Performance tracked successfully!");
        // Navigate to the "Finalls" page
        navf('/Finalwl');
      })
      .catch(error => {
        console.error("Error tracking performance:", error);
      });
  };

  return (
    <div className="tracker-container">
      <h2 className="tracker-title">Cardio Tracker</h2>
      <div className="tracker-item">
        <label htmlFor="pushups">Push-ups: </label>
        <input type="number" id="pushups" value={pushups} onChange={handlePushupsChange} />
      </div>
      <div className="tracker-item">
        <label htmlFor="pullups">Pull-ups: </label>
        <input type="number" id="pullups" value={pullups} onChange={handlePullupsChange} />
      </div>
      <div className="tracker-item">
        <label htmlFor="stepsCount">Steps Count: </label>
        <input type="number" id="stepsCount" value={stepsCount} onChange={handleStepsCountChange} />
      </div>
      <div className="tracker-item">
        <label htmlFor="jumpingJacks">Jumping Jacks: </label>
        <input type="number" id="jumpingJacks" value={jumpingJacks} onChange={handleJumpingJacksChange} />
      </div>
      <button className="tracker-button" onClick={trackPerformance}>Track My Performance</button>
    </div>
  );
};

export default Trackerls;
