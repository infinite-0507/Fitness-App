import React from 'react';
import '../styles/Plans.scss'; // Add your CSS for styling here
import { useNavigate } from 'react-router-dom';
import plan1 from "../Assets/plan1.jpg";
import plan2 from "../Assets/plan2.jpg";
import Herop from "./Herop.jsx";

const Plans = () => {
    const navigate=useNavigate();
    const rignav3=()=>{
        navigate("/Weightloss")
    }
    const rignav4=()=>{
        navigate("/Weightgain")
    }

    return (
        <>
        <div className="plans-body">
            <div className="image-buttons-container">
                <h1>CHOOSE YOUR PLAN</h1>
                <div className="images-wrapper fade-in">
                    <div className="image-wrapper" onClick={rignav3}>
                        <img
                            src={plan1}
                            alt="weight-loss"
                            className="image-button"
                        />
                        <h2>Weight-Loss</h2>
                    </div>
                    <div className="image-wrapper" onClick={rignav4}>
                        <img
                            src={plan2}
                            alt="weight-gain"
                            className="image-button"
                        />
                        <h2>Weight-Gain</h2>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <Herop/>
        </div>
        </>
    );
};

export default Plans;
