import React, { useState, useEffect } from 'react';
import Loading from './Components/Loading';
import LandingPage from './Components/LandingPage';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleSkip = () => {
    setIsLoading(false);
  };

  return (
    <div className="app">
      {isLoading ? (
        <Loading onSkip={handleSkip} />
      ) : (
        <LandingPage />
      )}
    </div>
  );
}

export default App;