import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import the CSS file

export const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/signin');
  };

  return (
    <div className="home-container">
    <div className="home-content">
        <h2>Welcome To</h2>
        <h1>Product Management Interface</h1>
        <button className="login-button" onClick={handleClick}>
            Click Here To Login
        </button>
    </div>
</div>
  );
};
