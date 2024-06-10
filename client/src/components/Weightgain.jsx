import React from 'react';
import { useNavigate } from 'react-router-dom';
import gain1 from '../Assets/weightgain/gain1.jpg';
import gain2 from '../Assets/weightgain/gain2.jpg';
import gain3 from '../Assets/weightgain/gain3.jpg';
import '../styles/Weightgain.scss';

const Weightgain = () => {
  const navigate = useNavigate();
  
  // Retrieve age from sessionStorage
  const age = parseInt(sessionStorage.getItem('age'), 10);

  const navto = () => {
    const workoutData = {
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
    };
    sessionStorage.setItem('workoutData', JSON.stringify(workoutData));
    navigate("/Trackerwg");
  };

  let imageSrc;
  let text;
  let textClass;

  if (age < 20) {
    imageSrc = gain2;
    text = (
      <>
        <h2>For Teens only</h2>
        <ol>
          <li><h3>Strength Training:</h3></li>
          <p>Incorporate strength training exercises such as bodyweight exercises, dumbbell workouts, and resistance band exercises to build muscle mass and improve strength.</p>
          <li><h3>High-Calorie Diet:</h3></li>
          <p>Consume a diet rich in protein, carbohydrates, and healthy fats to support muscle growth and recovery. Include foods like lean meats, dairy products, whole grains, fruits, and vegetables.</p>
          <li><h3>Consistent Eating Schedule:</h3></li>
          <p>Eat regular meals and snacks throughout the day to provide your body with a steady supply of nutrients for muscle building. Aim for a balance of macronutrients in each meal.</p>
        </ol>
      </>
    );
    textClass = 'teens';
  } else if (age >= 20 && age < 40) {
    imageSrc = gain1;
    text = (
      <>
        <h2>For Young Adults only</h2>
        <ol>
          <li><h3>Compound Exercises:</h3></li>
          <p>Focus on compound exercises like squats, deadlifts, bench presses, and pull-ups to target multiple muscle groups and stimulate muscle growth effectively.</p>
          <li><h3>Calorie Surplus:</h3></li>
          <p>Consume more calories than your body burns to create a calorie surplus, which is essential for muscle building. Include nutrient-dense foods and protein-rich sources in your diet.</p>
          <li><h3>Rest and Recovery:</h3></li>
          <p>Allow adequate time for rest and recovery between workouts to prevent overtraining and promote muscle repair and growth. Aim for 7-9 hours of quality sleep each night.</p>
        </ol>
      </>
    );
    textClass = 'young-adults';
  } else {
    imageSrc = gain3;
    text = (
      <>
        <h2>For Adults only</h2>
        <ol>
          <li><h3>Progressive Overload:</h3></li>
          <p>Gradually increase the intensity and resistance of your workouts over time to continually challenge your muscles and stimulate growth. Keep track of your progress and adjust your workouts accordingly.</p>
          <li><h3>Protein-Rich Diet:</h3></li>
          <p>Consume ample protein from sources like lean meats, poultry, fish, eggs, dairy products, legumes, and protein supplements to support muscle repair and growth.</p>
          <li><h3>Hydration:</h3></li>
          <p>Stay hydrated by drinking plenty of water throughout the day, as proper hydration is essential for muscle function, recovery, and overall health.</p>
        </ol>
      </>
    );
    textClass = 'adults';
  }

  let workoutPlan;
  let workoutClass;

  if (age < 20) {
    workoutPlan = (
      <>
        <h2>Teen Muscle Building Workout Plan</h2>
        <p>1. Monday: Bodyweight exercises including push-ups, squats, and lunges for 30 minutes.</p>
        <p>2. Tuesday: Weightlifting focusing on major muscle groups like chest, back, and legs.</p>
        <p>3. Wednesday: Rest day to allow for muscle recovery and growth.</p>
        <p>4. Thursday: High-protein diet and compound exercises like deadlifts and bench presses.</p>
        <p>5. Friday: Bodyweight circuit training for endurance and strength.</p>
        <p>6. Saturday: Weightlifting with increased intensity and focus on muscle hypertrophy.</p>
        <p>7. Sunday: Flexibility exercises and yoga to prevent muscle stiffness and improve mobility.</p>
      </>
    );
    workoutClass = 'teens';
  } else if (age >= 20 && age < 40) {
    workoutPlan = (
      <>
        <h2>Young Adult Muscle Building Workout Plan</h2>
        <p>1. Monday: Compound exercises like squats, deadlifts, and bench presses for strength.</p>
        <p>2. Tuesday: High-protein diet and targeted weightlifting for muscle growth and definition.</p>
        <p>3. Wednesday: Rest day or light activity such as swimming or yoga for recovery.</p>
        <p>4. Thursday: Circuit training combining weights and cardio to maximize calorie burn.</p>
        <p>5. Friday: Heavy weightlifting focusing on progressive overload and muscle adaptation.</p>
        <p>6. Saturday: Functional training exercises for overall athleticism and functional strength.</p>
        <p>7. Sunday: Active recovery day with leisure activities like hiking or biking.</p>
      </>
    );
    workoutClass = 'young-adults';
  } else {
    workoutPlan = (
      <>
        <h2>Adult Muscle Building Workout Plan</h2>
        <p>1. Monday: Full-body strength training with compound exercises and moderate weights.</p>
        <p>2. Tuesday: High-protein diet and targeted muscle group isolation exercises.</p>
        <p>3. Wednesday: Rest day or active recovery with low-impact cardio like cycling or walking.</p>
        <p>4. Thursday: Heavy weightlifting focusing on muscle hypertrophy and strength gains.</p>
        <p>5. Friday: Intense interval training to boost metabolism and promote muscle growth.</p>
        <p>6. Saturday: Functional strength exercises and outdoor activities for variety.</p>
        <p>7. Sunday: Flexibility training and mobility exercises for injury prevention and recovery.</p>
      </>
    );
    workoutClass = 'adults';
  }

  let goals;
  let goalClass;

  let squatCount1, benchPressCount1, deadliftCount1, overheadPressCount1;
  let squatCount2, benchPressCount2, deadliftCount2, overheadPressCount2;
  let squatCount3, benchPressCount3, deadliftCount3, overheadPressCount3;

  if (age < 20) {
    squatCount1 = 36;
    benchPressCount1 = 30;
    deadliftCount1 = 24;
    overheadPressCount1 = 30;
    goals = (
      <>
        <h2>Teens Daily Workouts</h2>
        <p>Squats: {squatCount1} reps</p>
        <p>Bench Press: {benchPressCount1} reps</p>
        <p>Deadlifts: {deadliftCount1} reps</p>
        <p>Overhead Press: {overheadPressCount1} reps</p>
      </>
    );
    goalClass = 'teens';
  } else if (age >= 20 && age < 40) {
    squatCount2 = 40;
    benchPressCount2 = 32;
    deadliftCount2 = 24;
    overheadPressCount2 = 32;
    goals = (
      <>
        <h2>Young Adults Daily Workouts</h2>
        <p>Squats: {squatCount2} reps</p>
        <p>Bench Press: {benchPressCount2} reps</p>
        <p>Deadlifts: {deadliftCount2} reps</p>
        <p>Overhead Press: {overheadPressCount2} reps</p>
      </>
    );
    goalClass = 'young-adults';
  } else {
    squatCount3 = 40;
    benchPressCount3 = 30;
    deadliftCount3 = 25;
    overheadPressCount3 = 30;
    goals = (
      <>
        <h2>Adults Daily Workouts</h2>
        <p>Squats: {squatCount3} reps</p>
        <p>Bench Press: {benchPressCount3} reps</p>
        <p>Deadlifts: {deadliftCount3} reps</p>
        <p>Overhead Press: {overheadPressCount3} reps</p>
      </>
    );
    goalClass = 'adults';
  }

  return (
    <div className="page-container">
      <div className="image-container">
        <img src={imageSrc} alt="Weight gain" />
      </div>
      <div className="content-container">
        <div className={`text-container ${textClass}`}>
          {text}
        </div>
        <div className={`workout-container ${workoutClass}`}>
          {workoutPlan}
        </div>
        <div className={`goals-container ${goalClass}`}>
          {goals}
        </div>
        <button className="proceed-button" onClick={navto}>
          Proceed to Tracker
        </button>
      </div>
    </div>
  );
};

export default Weightgain;
