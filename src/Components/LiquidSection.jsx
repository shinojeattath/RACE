import React from 'react';
import { motion } from 'framer-motion';
import './css/LiquidSection.css';

const LiquidSection = ({ isVisible }) => {
  return (
    <motion.div
      className="liquid-section"
      initial={{ height: 0 }}
      animate={{ height: isVisible ? '100vh' : 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <div className="liquid-content">
        <h2>Welcome to the Liquid Section</h2>
        <p>This is where you can add more information about RACE.</p>
      </div>
    </motion.div>
  );
};

export default LiquidSection;
