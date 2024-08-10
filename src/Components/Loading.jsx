import React from 'react';
import './Loading.css'; // Import the CSS file for styling

const LoadingScreen = ({ onSkip }) => {
  return (
    <div className="loading-screen">
      <video autoPlay muted loop className="loading-video">
        <source src="/loading.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button className="skip-button" onClick={onSkip}>Skip</button>
    </div>
  );
};

export default LoadingScreen;
