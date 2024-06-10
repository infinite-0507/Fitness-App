import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.scss';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status
  const navigate = useNavigate();

  

  const navhom = () => {
    navigate("/");
  };

  const handleAuthClick = () => {
    if (isLoggedIn) {
      // User is logged in, so log out
      setIsLoggedIn(false);
      // Perform log out actions if needed (e.g., clear session, etc.)
    } else {
      // User is not logged in, so navigate to sign up
      navigate("/Signup");
    }
  };

  return (
    <div className='nav'>
      <div className="nav-logo">Fitness</div>
      <ul className="nav-menu">
        <li className='home' onClick={navhom}>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className='nav-contact' onClick={handleAuthClick}>
          {isLoggedIn ? "Log out" : "Sign up"}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
