import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../assets/fonts/stylesheet.css';
import './css/LandingPage.css';
import LiquidSection from './LiquidSection';
import Navbar from './Navbar';

const LandingPage = () => {
  const [showLiquid, setShowLiquid] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = 50; // Adjust this value as needed

      if (scrollPosition > triggerPosition) {
        setShowLiquid(true);
      } else {
        setShowLiquid(false);
      }

      if (scrollPosition > lastScrollY) {
        // Scrolling down
        setHideNavbar(true);
      } else {
        // Scrolling up
        setHideNavbar(false);
      }

      setLastScrollY(scrollPosition);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="page-container">
      <Navbar hidden={hideNavbar} />
      <motion.main
        className="main-content"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 1 } },
        }}
      >
        <motion.h2 className="title" variants={{
          hidden: { x: -100, opacity: 0 },
          visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
        }}>
          Regal Association of Computer Engineers
        </motion.h2>
        <motion.p className="subtitle" variants={{
          hidden: { x: -100, opacity: 0 },
          visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
        }}>
          Empowering the future of technology
        </motion.p>
      </motion.main>
      <LiquidSection isVisible={showLiquid} />
    </div>
  );
};

export default LandingPage;
