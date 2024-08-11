import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loading from './Components/Loading';
import ParticlesComponent from './Components/Particles';
import Navbar from './Components/NavBar';
import CustomCursor from './Components/Cursor'; // Import the CustomCursor component

// Lazy load components
const LandingPage = lazy(() => import('./Components/LandingPage'));
const MemberCarousel = lazy(() => import('./Components/Members'));
// Add more lazy-loaded components as needed

const App = () => {
  return (
    <Router>
      <div>
        <CustomCursor /> {/* Add the CustomCursor here */}
        <ParticlesComponent />
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            {/* Uncomment and add more routes as needed */}
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/services" element={<Services />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
            <Route path="*" element={<div>404 Page Not Found</div>} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
