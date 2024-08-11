import React from 'react';
import { motion } from 'framer-motion';
import '../assets/fonts/stylesheet.css';
import './css/LandingPage.css'; // Import the CSS file

const LandingPage = () => {
  return (
    <div className="page-container">
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
    </div>
  );
};

export default LandingPage;
