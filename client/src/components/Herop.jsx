import React, { useEffect } from 'react';
import "../styles/Herop.scss";
import cardio from "../Assets/cardio.jpg";
import weight from "../Assets/weight-training.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Herop = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="herop rightImage" data-aos="fade-up">
        <div className="textContainer">
          <h1 className="reveal-text">Cardio</h1>
          <p className="reveal-text">
            <ul className="reveal-text">
              <li>Beginner Exercisers: Start slowly and gradually increase intensity to avoid injury.</li>
              <li>Chronic Conditions: Consult a healthcare provider before starting a new cardio regimen, especially if there are pre-existing conditions like heart disease, arthritis, or respiratory issues.</li>
              <li>Pregnancy: Pregnant women should seek medical advice to ensure their cardio routine is safe for them and their baby.</li>
            </ul>
            Cardio is a versatile and beneficial form of exercise that can enhance overall health and well-being for a wide range of people. It's essential to choose activities you enjoy and can sustain over time to reap the maximum benefits.
          </p>
        </div>
        <div className="imageContainer" data-aos="fade-left">
          <img src={cardio} alt="Cardio workout" />
        </div>
      </div>

      <div className="herop leftImage" data-aos="fade-up">
        <div className="textContainer">
          <h1 className="reveal-text">Strength-Training</h1>
          <p className="reveal-text">
            <ol className="reveal-text">
              <li>
                Increases Muscle Mass and Strength:
                <br />
                <br />
                <ul>
                  <li>Builds and tones muscles</li>
                  <li>Enhances physical strength, making everyday tasks easier.</li>
                </ul>
              </li>
              <li>
                Improves Bone Density:
                <br />
                <br />
                <ul>
                  <li>Strength training increases bone density, reducing the risk of osteoporosis and fractures.</li>
                </ul>
              </li>
            </ol>
            Strength training is a versatile and effective form of exercise that benefits people of all ages and fitness levels. Whether you’re aiming to improve your overall health, enhance athletic performance, manage a chronic condition, or simply maintain your physical independence as you age, incorporating strength training into your routine can help you achieve these goals.
          </p>
        </div>
        <div className="imageContainer" data-aos="fade-right">
          <img src={weight} alt="Strength training" />
        </div>
      </div>
    </>
  );
};

export default Herop;
