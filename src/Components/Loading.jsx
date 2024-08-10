import React from 'react';

function Loading({ onSkip }) {
  return (
    <div className="loading-screen">
      <h2>Loading...</h2>
      <button onClick={onSkip}>Skip</button>
    </div>
  );
}

export default Loading;