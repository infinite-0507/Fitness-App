import React from 'react';
import { useNavigate } from 'react-router-dom';
import loss1 from '../Assets/weightloss/loss1.jpg';
import loss2 from '../Assets/weightloss/loss2.jpg';
import loss3 from '../Assets/weightloss/loss3.jpg';
import '../styles/Weightloss.scss';

const Weightloss = () => {
  const navigate = useNavigate();

  // Retrieve age from sessionStorage
  const age = parseInt(sessionStorage.getItem('age'), 10);

  const navto = () => {
    const workoutData2 = {
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
      jumpingJacksCount3,
    };
    sessionStorage.setItem('workoutData2', JSON.stringify(workoutData2));
    navigate("/Trackerls");
  };

  let imageSrc;
  let text;
  let textClass;

  if (age < 20) {
    imageSrc = loss1;
    text = (
      <>
        <h2>For Teens only</h2>
        <ol>
          <li><h3>Incorporate Playful Activities:</h3></li>
          <p>Opt for activities like dancing, swimming, cycling, or playing sports. These activities not only provide cardiovascular benefits but also keep teens engaged and motivated.</p>
          <li><h3>Interval Training:</h3></li>
          <p>Introduce interval training sessions, alternating between bursts of high-intensity activity and periods of rest or low-intensity exercise. This approach can boost metabolism and improve endurance.</p>
          <li><h3>Group Workouts:</h3></li>
          <p>Encourage group workouts or team sports to foster social connections and make exercising more enjoyable for teens.</p>
        </ol>
      </>
    );
    textClass = 'teens';
  } else if (age >= 20 && age < 40) {
    imageSrc = loss2;
    text = (
      <>
        <h2>For Young Adults only</h2>
        <ol>
          <li><h3>Variety in Cardio Workouts:</h3></li>
          <p>Include a variety of cardio exercises such as running, cycling, rowing, and HIIT workouts to keep workouts interesting and challenge different muscle groups.</p>
          <li><h3>HIIT Workouts:</h3></li>
          <p>Incorporate High-Intensity Interval Training (HIIT) sessions to maximize calorie burn, improve cardiovascular health, and enhance overall fitness in shorter durations.</p>
          <li><h3>Outdoor Activities:</h3></li>
          <p>Take advantage of outdoor activities like hiking, trail running, or outdoor cycling to add variety to cardio workouts and enjoy the benefits of fresh air and nature.</p>
        </ol>
      </>
    );
    textClass = 'young-adults';
  } else {
    imageSrc = loss3;
    text = (
      <>
        <h2>For Adults only</h2>
        <ol>
          <li><h3>Low-Impact Cardio Options:</h3></li>
          <p>Opt for low-impact cardio exercises such as walking, swimming, or using an elliptical machine to reduce strain on joints while still improving cardiovascular health.</p>
          <li><h3>Brisk Walking:</h3></li>
          <p>Brisk walking is an excellent cardio option for older adults. Aim for at least 150 minutes of moderate-intensity walking per week to maintain heart health and improve endurance.</p>
          <li><h3>Cycling:</h3></li>
          <p>Cycling, whether outdoors or using a stationary bike, provides a low-impact cardiovascular workout that is gentle on the joints while still offering effective aerobic conditioning.</p>
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
        <h2>Teen Workout Regime Plan</h2>
        <p>1. Monday: Dance or Zumba workout for 30 minutes.</p>
        <p>2. Tuesday: Swimming for 45 minutes.</p>
        <p>3. Wednesday: Interval training session including jumping jacks, burpees, and lunges.</p>
        <p>4. Thursday: Team sports like soccer or basketball for an hour.</p>
        <p>5. Friday: Cycling for 40 minutes.</p>
        <p>6. Saturday: Rest day.</p>
        <p>7. Sunday: Yoga or stretching exercises.</p>
      </>
    );
    workoutClass = 'teens';
  } else if (age >= 20 && age < 40) {
    workoutPlan = (
      <>
        <h2>Young Adult Workout Regime Plan</h2>
        <p>1. Monday: Running for 30 minutes followed by bodyweight exercises (push-ups, squats, lunges).</p>
        <p>2. Tuesday: HIIT workout including sprint intervals and bodyweight circuits.</p>
        <p>3. Wednesday: Outdoor cycling or spinning class for 45 minutes.</p>
        <p>4. Thursday: Yoga or Pilates for flexibility and core strength.</p>
        <p>5. Friday: Swimming for full-body workout and cardio.</p>
        <p>6. Saturday: Rest day or light activity like walking or hiking.</p>
        <p>7. Sunday: Active recovery day with leisure activities like dancing or recreational sports.</p>
      </>
    );
    workoutClass = 'young-adults';
  } else {
    workoutPlan = (
      <>
        <h2>Adult Workout Regime Plan</h2>
        <p>1. Monday: Brisk walking or treadmill workout for 40 minutes.</p>
        <p>2. Tuesday: Low-impact cardio session on elliptical or stationary bike for 45 minutes.</p>
        <p>3. Wednesday: Strength training focusing on major muscle groups with light weights.</p>
        <p>4. Thursday: Yoga or gentle stretching to improve flexibility and reduce stress.</p>
        <p>5. Friday: Swimming or aqua aerobics for joint-friendly cardio and full-body workout.</p>
        <p>6. Saturday: Outdoor activities like gardening or hiking for active leisure.</p>
        <p>7. Sunday: Rest day</p>
      </>
    );
    workoutClass = 'adults';
  }

  let goals;
  let goalClass;

  let pushupsCount1, pullupsCount1, stepsCount1, jumpingJacksCount1;
  let pushupsCount2, pullupsCount2, stepsCount2, jumpingJacksCount2;
  let pushupsCount3, pullupsCount3, stepsCount3, jumpingJacksCount3;

  if (age < 20) {
    pushupsCount1 = 50;
    pullupsCount1 = 10;
    stepsCount1 = 10000;
    jumpingJacksCount1 = 50;
    goals = (
      <>
        <h2>Teens Daily Goals</h2>
        <p>Push-ups: {pushupsCount1}</p>
        <p>Pull-ups: {pullupsCount1}</p>
        <p>Steps-count: {stepsCount1}</p>
        <p>Jumping-Jacks: {jumpingJacksCount1}</p>
      </>
    );
    goalClass = 'teens';
  } else if (age >= 20 && age < 40) {
    pushupsCount2 = 30;
    pullupsCount2 = 5;
    stepsCount2 = 7000;
    jumpingJacksCount2 = 30;
    goals = (
      <>
        <h2>Young Adults Daily Goals</h2>
        <p>Push-ups: {pushupsCount2}</p>
        <p>Pull-ups: {pullupsCount2}</p>
        <p>Steps-count: {stepsCount2}</p>
        <p>Jumping-Jacks: {jumpingJacksCount2}</p>
      </>
    );
    goalClass = 'young-adults';
  } else {
    pushupsCount3 = 20;
    pullupsCount3 = 3;
    stepsCount3 = 5000;
    jumpingJacksCount3 = 20;
    goals = (
      <>
        <h2>Adults Daily Goals</h2>
        <p>Push-ups: {pushupsCount3}</p>
        <p>Pull-ups: {pullupsCount3}</p>
        <p>Steps-count: {stepsCount3}</p>
        <p>Jumping-Jacks: {jumpingJacksCount3}</p>
      </>
    );
    goalClass = 'adults';
  }

  return (
    <div className="page-container">
      <div className="image-container">
        <img src={imageSrc} alt="Weight loss" />
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

export default Weightloss;
