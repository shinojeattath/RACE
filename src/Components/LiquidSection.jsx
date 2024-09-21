import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './css/LiquidSection.css';

const LiquidSection = ({ isVisible, onTransitionComplete, transitionStage, onRevertComplete }) => {
  const [showCircle, setShowCircle] = useState(false);
  const circleAnimation = useAnimation();
  const sectionAnimation = useAnimation();

  useEffect(() => {
    if (isVisible && transitionStage === 'liquid') {
      sectionAnimation.start({ height: '100vh' });
    } else if (transitionStage === 'reverting') {
      revertAnimation();
    }
  }, [isVisible, transitionStage]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === 'Space' && isVisible && transitionStage === 'liquid' && !showCircle) {
        event.preventDefault();
        setShowCircle(true);
      }
    };

    if (isVisible && transitionStage === 'liquid') {
      window.addEventListener('keydown', handleKeyPress);
    }

    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isVisible, transitionStage, showCircle]);

  useEffect(() => {
    if (showCircle && transitionStage === 'liquid') {
      animateCircle();
    }
  }, [showCircle, transitionStage]);

  const animateCircle = async () => {
    await circleAnimation.start({ 
      y: 0, 
      scale: 1, 
      opacity: 1,
      transition: { duration: 1 } 
    });
    await circleAnimation.start({ 
      scale: 100, 
      transition: { duration: 1, ease: 'easeInOut' } 
    });
    onTransitionComplete();
  };

  const revertAnimation = async () => {
    await circleAnimation.start({ 
      scale: 1, 
      transition: { duration: 1, ease: 'easeInOut' } 
    });
    await circleAnimation.start({ 
      y: '100vh', 
      opacity: 0,
      transition: { duration: 1, ease: 'easeInOut' } 
    });
    setShowCircle(false);
    await sectionAnimation.start({ height: 0, transition: { duration: 1, ease: 'easeInOut' } });
    onRevertComplete();
  };

  return (
    <motion.div
      className="liquid-section"
      initial={{ height: 0 }}
      animate={sectionAnimation}
    >
      <div className="liquid-content">
        <div className="left-section">
          <h2>Welcome to the Left Section</h2>
          <p>This is where you can add information about one aspect of RACE.</p>
        </div>
        <div className="right-section">
          <h2>Welcome to the Right Section</h2>
          <p>This is where you can add information about another aspect of RACE.</p>
        </div>
        {!showCircle && <p className="space-prompt">Press the Space key to continue</p>}
      </div>
      <motion.div
        className="transition-circle"
        initial={{ scale: 0, y: '100vh', opacity: 0 }}
        animate={circleAnimation}
      />
    </motion.div>
  );
};

export default LiquidSection;