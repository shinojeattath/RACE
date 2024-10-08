import React from 'react';
import './css/Loading.css'; // Import the CSS file for styling

const LoadingScreen = ({ onSkip }) => {
  return (
    <div className="loading-screen">
      <video autoPlay muted className="loading-video">
        <source src="/logograd.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button className="skip-button" onClick={onSkip}>Skip</button>
    </div>
  );
};

export default LoadingScreen;
