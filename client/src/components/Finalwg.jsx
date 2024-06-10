import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Finalwg.scss'; // Import CSS file for styling
import { useNavigate } from 'react-router-dom';

const Finalwg = () => {
  const [squats, setSquats] = useState(null);
  const [benchPress, setBenchPress] = useState(null);
  const [deadlifts, setDeadlifts] = useState(null);
  const [overheadPress, setOverheadPress] = useState(null);
  const navigate = useNavigate();

  const workoutData = JSON.parse(sessionStorage.getItem('workoutData'));

  useEffect(() => {
    axios.get('http://localhost:3300/Stracker')
      .then(response => {
        const { performanceData } = response.data;

        if (Array.isArray(performanceData) && performanceData.length > 0) {
          const { squats: squatsValue, benchPress: benchPressValue, deadlifts: deadliftsValue, overheadPress: overheadPressValue } = performanceData[0];
          setSquats(squatsValue);
          setBenchPress(benchPressValue);
          setDeadlifts(deadliftsValue);
          setOverheadPress(overheadPressValue);
        }
      })
      .catch(error => {
        console.error('Error fetching performance data:', error);
      });
  }, []);

  const {
    age,
    squatCount1,
    benchPressCount1,
    deadliftCount1,
    overheadPressCount1,
    squatCount2,
    benchPressCount2,
    deadliftCount2,
    overheadPressCount2,
    squatCount3,
    benchPressCount3,
    deadliftCount3,
    overheadPressCount3
  } = workoutData || {};

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
    const squatsComparison = compareValues(squats, squatCount1);
    const benchPressComparison = compareValues(benchPress, benchPressCount1);
    const deadliftsComparison = compareValues(deadlifts, deadliftCount1);
    const overheadPressComparison = compareValues(overheadPress, overheadPressCount1);
    
    queryValues = (
      <>
        <h2>Teens Daily Workouts</h2>
        <p>Squats: {squatCount1} reps ({squatsComparison.result}) {squatsComparison.leftValue > 0 && `- Add ${squatsComparison.leftValue} reps to tomorrow's workout.`}</p>
        <p>Bench Press: {benchPressCount1} reps ({benchPressComparison.result}) {benchPressComparison.leftValue > 0 && `- Add ${benchPressComparison.leftValue} reps to tomorrow's workout.`}</p>
        <p>Deadlifts: {deadliftCount1} reps ({deadliftsComparison.result}) {deadliftsComparison.leftValue > 0 && `- Add ${deadliftsComparison.leftValue} reps to tomorrow's workout.`}</p>
        <p>Overhead Press: {overheadPressCount1} reps ({overheadPressComparison.result}) {overheadPressComparison.leftValue > 0 && `- Add ${overheadPressComparison.leftValue} reps to tomorrow's workout.`}</p>
      </>
    );
  } else if (age >= 20 && age < 40) {
    const squatsComparison = compareValues(squats, squatCount2);
    const benchPressComparison = compareValues(benchPress, benchPressCount2);
    const deadliftsComparison = compareValues(deadlifts, deadliftCount2);
    const overheadPressComparison = compareValues(overheadPress, overheadPressCount2);

    queryValues = (
      <>
        <h2>Young Adults Daily Workouts</h2>
        <p>Squats: {squatCount2} reps ({squatsComparison.result}) {squatsComparison.leftValue > 0 && `- Add ${squatsComparison.leftValue} reps to tomorrow's workout.`}</p>
        <p>Bench Press: {benchPressCount2} reps ({benchPressComparison.result}) {benchPressComparison.leftValue > 0 && `- Add ${benchPressComparison.leftValue} reps to tomorrow's workout.`}</p>
        <p>Deadlifts: {deadliftCount2} reps ({deadliftsComparison.result}) {deadliftsComparison.leftValue > 0 && `- Add ${deadliftsComparison.leftValue} reps to tomorrow's workout.`}</p>
        <p>Overhead Press: {overheadPressCount2} reps ({overheadPressComparison.result}) {overheadPressComparison.leftValue > 0 && `- Add ${overheadPressComparison.leftValue} reps to tomorrow's workout.`}</p>
      </>
    );
  } else {
    const squatsComparison = compareValues(squats, squatCount3);
    const benchPressComparison = compareValues(benchPress, benchPressCount3);
    const deadliftsComparison = compareValues(deadlifts, deadliftCount3);
    const overheadPressComparison = compareValues(overheadPress, overheadPressCount3);

    queryValues = (
      <>
        <h2>Adults Daily Workouts</h2>
        <p>Squats: {squatCount3} reps ({squatsComparison.result}) {squatsComparison.leftValue > 0 && `- Add ${squatsComparison.leftValue} reps to tomorrow's workout.`}</p>
        <p>Bench Press: {benchPressCount3} reps ({benchPressComparison.result}) {benchPressComparison.leftValue > 0 && `- Add ${benchPressComparison.leftValue} reps to tomorrow's workout.`}</p>
        <p>Deadlifts: {deadliftCount3} reps ({deadliftsComparison.result}) {deadliftsComparison.leftValue > 0 && `- Add ${deadliftsComparison.leftValue} reps to tomorrow's workout.`}</p>
        <p>Overhead Press: {overheadPressCount3} reps ({overheadPressComparison.result}) {overheadPressComparison.leftValue > 0 && `- Add ${overheadPressComparison.leftValue} reps to tomorrow's workout.`}</p>
      </>
    );
  }

  const handleChangePlan = () => {
    navigate("/Plans");
    axios.delete('http://localhost:3300/Stracker')
      .then(() => {
        console.log('Stracker table content deleted');
        // Optionally, clear the state or update the UI to reflect the changes
        setSquats(null);
        setBenchPress(null);
        setDeadlifts(null);
        setOverheadPress(null);
      })
      .catch(error => {
        console.error('Error deleting Stracker table content:', error);
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
    <body class="finalwg-page">
    <div className='finalwg-container'>
      <h2>Performance Data</h2>
      <div className='performance-item'>
        <p className='performance-label'>Squats:</p>
        <p className='performance-value'>{squats !== null ? squats : 'Loading...'}</p>
      </div>
      <div className='performance-item'>
        <p className='performance-label'>Bench Press:</p>
        <p className='performance-value'>{benchPress !== null ? benchPress : 'Loading...'}</p>
      </div>
      <div className='performance-item'>
        <p className='performance-label'>Deadlifts:</p>
        <p className='performance-value'>{deadlifts !== null ? deadlifts : 'Loading...'}</p>
      </div>
      <div className='performance-item'>
        <p className='performance-label'>Overhead Press:</p>
        <p className='performance-value'>{overheadPress !== null ? overheadPress : 'Loading...'}</p>
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

export default Finalwg;
