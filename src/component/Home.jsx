import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import the CSS file

export const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/signin');
  };

  return (
    <div className="button-container">
      <button className="login-button" onClick={handleClick}>
        Click Here To Login
      </button>
    </div>
  );
};
