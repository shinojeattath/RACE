// File: NewSection.jsx

import React from 'react';
import { motion } from 'framer-motion';
import './css/NewSection.css';

const NewSection = ({ isVisible }) => {
  return (
    <motion.div
      className="new-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Welcome to the New Section</h2>
      <p>This is the content of your new section.</p>
    </motion.div>
  );
};

export default NewSection;