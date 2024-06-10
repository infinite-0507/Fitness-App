// Login.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import userIcon from '../Assets/person.png';
import passwordIcon from '../Assets/password.png';
import "../styles/Login.scss"; // Import the CSS file

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        document.body.classList.add('login-background');
        return () => {
            document.body.classList.remove('login-background');
        };
    }, []);

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3300/login', {
                username,
                password
            });
            console.log(response.data);
            navigate('/Details');
        } catch (error) {
            console.error('There was an error logging in!', error);
        }
    };

    return (
        <div className="login-container">
            <div className="login-header">
                <div className="login-text">Login</div>
                <div className="login-underline"></div>
            </div>
            <div className="login-inputs">
                <div className="login-input">
                    <img src={userIcon} alt="User Icon"/>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="login-input">
                    <img src={passwordIcon} alt="Password Icon"/>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>
            <div className="login-submit-container">
                <div className="login-submit" onClick={handleLogin}>Login</div>
            </div>
        </div>
    );
};

export default Login;
