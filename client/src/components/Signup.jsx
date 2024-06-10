import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import user_icon from '../Assets/person.png';
import password_icon from '../Assets/password.png';
import email_icon from '../Assets/email.png';
import "../styles/Signup.scss";

const Signup = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [emailValid, setEmailValid] = useState(false);

    useEffect(() => {
        document.body.classList.add('signup-background');

        return () => {
            document.body.classList.remove('signup-background');
        };
    }, []);

    const handleSignUp = async () => {
        if (!username || !email || !password) {
            setError('Please fill in all the details to proceed.');
            return;
        }

        if (!emailValid) {
            setError('Please enter a valid email address.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3300/signup', {
                username,
                email,
                password
            });
            console.log(response.data);
            navigate('/Login');
        } catch (error) {
            console.error('There was an error signing up!', error);
            setError('There was an error signing up. Please try again.');
        }
    };

    const handleEmailChange = (value) => {
        setEmail(value);
        setEmailValid(/^\S+@\S+\.\S+$/.test(value));
        setPassword(''); // Clear password if email changes
    };

    return (
        <div className="signup-container">
            <div className="signup-header">
                <div className="signup-text">Sign Up</div>
                <div className="signup-underline"></div>
            </div>
            {error && <div className="signup-error-message">{error}</div>}
            <div className="signup-inputs">
                <div className="signup-input">
                    <img src={user_icon} alt=""/>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="signup-input">
                    <img src={email_icon} alt=""/>
                    <input
                        type="email"
                        placeholder="Email Id"
                        value={email}
                        onChange={(e) => handleEmailChange(e.target.value)}
                    />
                </div>
                <div className="signup-input">
                    <img src={password_icon} alt=""/>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={!emailValid} // Disable if email is not valid
                    />
                </div>
            </div>
            <div className="signup-submit-container">
                <div className='signup-submit' onClick={handleSignUp}>Sign Up</div>
            </div>
        </div>
    );
};

export default Signup;
