import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loading from './Components/Loading';
import LandingPage from './Components/LandingPage';
import MemberCarousel from './Components/Members';
import ParticlesComponent from './Components/Particles';
import Navbar from './Components/NavBar';


const App = () => {
  return (
    <Router>
      <div>
        <ParticlesComponent />
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* Add more routes as needed */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/services" element={<Services />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;