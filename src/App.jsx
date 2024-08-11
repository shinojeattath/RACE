import React, { useState, useEffect } from 'react';
import Loading from './Components/Loading';
import LandingPage from './Components/LandingPage';
import MemberCarousel from './Components/Members';
import ParticlesComponent from './Components/Particles';

const App = () => {
  return (
    <div >
      <ParticlesComponent/>
      <LandingPage />
    </div>
  );
}

export default App;