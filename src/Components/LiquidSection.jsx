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
      const timer = setTimeout(() => setShowCircle(true), 1000);
      return () => clearTimeout(timer);
    } else if (transitionStage === 'reverting') {
      revertAnimation();
    }
  }, [isVisible, transitionStage]);

  useEffect(() => {
    const handleScrollInSection = () => {
      if (!showCircle && window.scrollY >= window.innerHeight + 100) {
        setShowCircle(true);
      }
    };

    if (isVisible && transitionStage === 'liquid') {
      window.addEventListener('scroll', handleScrollInSection);
    } else {
      window.removeEventListener('scroll', handleScrollInSection);
    }

    return () => window.removeEventListener('scroll', handleScrollInSection);
  }, [isVisible, transitionStage, showCircle]);

  useEffect(() => {
    if (showCircle && transitionStage === 'liquid') {
      animateCircle();
    }
  }, [showCircle, transitionStage]);

  const animateCircle = async () => {
    console.log('Animating circle...');
    await circleAnimation.start({ y: '60vh', scale: 1, transition: { duration: 0.5 } });
    await circleAnimation.start({ scale: 100, transition: { duration: 1, ease: 'easeInOut' } });
    console.log('Circle animation complete');
    onTransitionComplete();  // Ensure this callback is triggered after animation
  };

  const revertAnimation = async () => {
    console.log('Reverting animation...');
    await circleAnimation.start({ scale: 1, transition: { duration: 1, ease: 'easeInOut' } });
    await circleAnimation.start({ y: '100vh', transition: { duration: 1, ease: 'easeInOut' } });
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
        <h2>Welcome to the Liquid Section</h2>
        <p>This is where you can add more information about RACE.</p>
      </div>
      {showCircle && (
        <motion.div
          className="transition-circle"
          initial={{ scale: 0, y: '100vh' }}
          animate={circleAnimation}
        />
      )}
    </motion.div>
  );
};

export default LiquidSection;
