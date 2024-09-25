import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './css/LiquidSection.css';

const LiquidSection = ({ isVisible, onTransitionComplete, transitionStage, onRevertComplete }) => {
  const [showCircle, setShowCircle] = useState(false);
  const circleAnimation = useAnimation();
  const sectionAnimation = useAnimation();
  const [scrollSpeed, setScrollSpeed] = useState(1);

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

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const maxHeight = window.innerHeight;
    const progress = Math.min(scrollY / maxHeight, 1); // Calculate how far down the page we are

    // Slower animation based on scroll
    setScrollSpeed(1 + progress * 4); // Increase speed as you scroll, adjust this multiplier as needed

    sectionAnimation.start({
      height: `${100 * (1 - progress)}vh`, // Reduce height slowly based on scroll
      transition: { duration: scrollSpeed, ease: 'easeInOut' },
    });
  };

  useEffect(() => {
    if (isVisible && transitionStage === 'liquid') {
      window.addEventListener('scroll', handleScroll);
    } else {
      window.removeEventListener('scroll', handleScroll);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible, transitionStage, scrollSpeed]);

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
        <div className="combined-section">
          <h2>About The Department</h2>
          <p>This is where you can add information about one aspect of RACE.</p>
          <p>Welcome to the combined section. You can also add more information here about RACE.</p>
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

