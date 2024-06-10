import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Finalwl.scss'; // Import CSS file for styling
import { useNavigate } from 'react-router-dom';

const Finalwl = () => {
  const [pushups, setPushups] = useState(null);
  const [pullups, setPullups] = useState(null);
  const [stepsCount, setStepsCount] = useState(null);
  const [jumpingJacks, setJumpingJacks] = useState(null);

  const navigate=useNavigate();

  const workoutData2 = JSON.parse(sessionStorage.getItem('workoutData2'));

  useEffect(() => {
    axios.get('http://localhost:3300/Ctracker')
      .then(response => {
        const { performanceData } = response.data;

        if (Array.isArray(performanceData) && performanceData.length > 0) {
          const { pushups: pushupsValue, pullups: pullupsValue, stepsCount: stepsCountValue, jumpingJacks: jumpingJacksValue } = performanceData[0];
          setPushups(pushupsValue);
          setPullups(pullupsValue);
          setStepsCount(stepsCountValue);
          setJumpingJacks(jumpingJacksValue);
        }
      })
      .catch(error => {
        console.error('Error fetching performance data:', error);
      });
  }, []);

  const {
    age,
    pushupsCount1,
    pullupsCount1,
    stepsCount1,
    jumpingJacksCount1,
    pushupsCount2,
    pullupsCount2,
    stepsCount2,
    jumpingJacksCount2,
    pushupsCount3,
    pullupsCount3,
    stepsCount3,
    jumpingJacksCount3
  } = workoutData2 || {};

  const compareValues = (performanceValue, workoutValue) => {
    if (performanceValue !== null && workoutValue !== undefined) {
      const leftValue = workoutValue - performanceValue;
      return {
        result: performanceValue >= workoutValue
          ? `Achieved`
          : `Less by ${leftValue}`,
        leftValue: leftValue > 0 ? leftValue : 0
      };
    }
    return { result: 'Loading...', leftValue: 0 };
  };

  let queryValues;
  if (age < 20) {
    const pushupsComparison = compareValues(pushups, pushupsCount1);
    const pullupsComparison = compareValues(pullups, pullupsCount1);
    const stepsCountComparison = compareValues(stepsCount, stepsCount1);
    const jumpingJacksComparison = compareValues(jumpingJacks, jumpingJacksCount1);
    
    queryValues = (
      <>
        <h2>Teens Daily Workouts</h2>
        <p>Push-ups: {pushupsCount1} reps ({pushupsComparison.result}) {pushupsComparison.leftValue > 0 && `- Add ${pushupsComparison.leftValue} reps to tomorrow's workout.`}</p>
        <p>Pull-ups: {pullupsCount1} reps ({pullupsComparison.result}) {pullupsComparison.leftValue > 0 && `- Add ${pullupsComparison.leftValue} reps to tomorrow's workout.`}</p>
        <p>Steps Count: {stepsCount1} steps ({stepsCountComparison.result}) {stepsCountComparison.leftValue > 0 && `- Add ${stepsCountComparison.leftValue} steps to tomorrow's workout.`}</p>
        <p>Jumping Jacks: {jumpingJacksCount1} reps ({jumpingJacksComparison.result}) {jumpingJacksComparison.leftValue > 0 && `- Add ${jumpingJacksComparison.leftValue} reps to tomorrow's workout.`}</p>
      </>
    );
  } else if (age >= 20 && age < 40) {
    const pushupsComparison = compareValues(pushups, pushupsCount2);
    const pullupsComparison = compareValues(pullups, pullupsCount2);
    const stepsCountComparison = compareValues(stepsCount, stepsCount2);
    const jumpingJacksComparison = compareValues(jumpingJacks, jumpingJacksCount2);

    queryValues = (
      <>
        <h2>Young Adults Daily Workouts</h2>
        <p>Push-ups: {pushupsCount2} reps ({pushupsComparison.result}) {pushupsComparison.leftValue > 0 && `- Add ${pushupsComparison.leftValue} reps to tomorrow's workout.`}</p>
        <p>Pull-ups: {pullupsCount2} reps ({pullupsComparison.result}) {pullupsComparison.leftValue > 0 && `- Add ${pullupsComparison.leftValue} reps to tomorrow's workout.`}</p>
        <p>Steps Count: {stepsCount2} steps ({stepsCountComparison.result}) {stepsCountComparison.leftValue > 0 && `- Add ${stepsCountComparison.leftValue} steps to tomorrow's workout.`}</p>
        <p>Jumping Jacks: {jumpingJacksCount2} reps ({jumpingJacksComparison.result}) {jumpingJacksComparison.leftValue > 0 && `- Add ${jumpingJacksComparison.leftValue} reps to tomorrow's workout.`}</p>
      </>
    );
  } else {
    const pushupsComparison = compareValues(pushups, pushupsCount3);
    const pullupsComparison = compareValues(pullups, pullupsCount3);
    const stepsCountComparison = compareValues(stepsCount, stepsCount3);
    const jumpingJacksComparison = compareValues(jumpingJacks, jumpingJacksCount3);

    queryValues = (
      <>
        <h2>Adults Daily Workouts</h2>
        <p>Push-ups: {pushupsCount3} reps ({pushupsComparison.result}) {pushupsComparison.leftValue > 0 && `- Add ${pushupsComparison.leftValue} reps to tomorrow's workout.`}</p>
        <p>Pull-ups: {pullupsCount3} reps ({pullupsComparison.result}) {pullupsComparison.leftValue > 0 && `- Add ${pullupsComparison.leftValue} reps to tomorrow's workout.`}</p>
        <p>Steps Count: {stepsCount3} steps ({stepsCountComparison.result}) {stepsCountComparison.leftValue > 0 && `- Add ${stepsCountComparison.leftValue} steps to tomorrow's workout.`}</p>
        <p>Jumping Jacks: {jumpingJacksCount3} reps ({jumpingJacksComparison.result}) {jumpingJacksComparison.leftValue > 0 && `- Add ${jumpingJacksComparison.leftValue} reps to tomorrow's workout.`}</p>
      </>
    );
  }
    
  const handleChangePlan = () => {
    navigate("/Plans");
    axios.delete('http://localhost:3300/Ctracker')
      .then(() => {
        console.log('Ctracker table content deleted');
        // Optionally, clear the state or update the UI to reflect the changes
        setPushups(null);
        setPullups(null);
        setStepsCount(null);
        setJumpingJacks(null);
      })
      .catch(error => {
        console.error('Error deleting Ctracker table content:', error);
      });
  };

  const handleNewUser = () => {
    axios.delete('http://localhost:3300/Stracker')
    axios.delete('http://localhost:3300/Ctracker')
    axios.delete('http://localhost:3300/profile')
      .then(() => {
        console.log('User details deleted');
        // Optionally, reset state or navigate to another page
        navigate("/Details");
      })
      .catch(error => {
        console.error('Error deleting user details:', error);
      });
  };

  return (
    <body class="finalwl-page">
    <div className='finalwg-container'>
      <h2>Performance Data</h2>
      <div className='performance-item'>
        <p className='performance-label'>Push-ups:</p>
        <p className='performance-value'>{pushups !== null ? pushups : 'Loading...'}</p>
      </div>
      <div className='performance-item'>
        <p className='performance-label'>Pull-ups:</p>
        <p className='performance-value'>{pullups !== null ? pullups : 'Loading...'}</p>
      </div>
      <div className='performance-item'>
        <p className='performance-label'>Steps Count:</p>
        <p className='performance-value'>{stepsCount !== null ? stepsCount : 'Loading...'}</p>
      </div>
      <div className='performance-item'>
        <p className='performance-label'>Jumping Jacks:</p>
        <p className='performance-value'>{jumpingJacks !== null ? jumpingJacks : 'Loading...'}</p>
      </div>

      <div className='query-values'>
        <h2>Query Values</h2>
        {queryValues}
      </div>

      <div className='button-container'>
        <button className='new-user-button' onClick={handleNewUser}>New User</button>
        <button className='change-plan-button' onClick={handleChangePlan}>Change Plan</button>
      </div>

    </div>
    </body>
  );
};

export default Finalwl;

