import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './css/Navbar.css';

const Navbar = ({ hidden }) => {
  const [isCtrlPressed, setIsCtrlPressed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Control') {
        setIsCtrlPressed(true);
      }
    };

    const handleKeyUp = (event) => {
      if (event.key === 'Control') {
        setIsCtrlPressed(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const handleContactClick = (event) => {
    if (!isCtrlPressed) {
      event.preventDefault();
    }
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ top: 0 }}
      animate={{ top: hidden ? -100 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="navbar-links">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/services">SERVICES</Link>
        <Link to="/contact" className="contact-link" onClick={handleContactClick}>
          CONTACT
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
