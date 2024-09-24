import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import './css/NewSection.css';

const NewSection = ({ isVisible }) => {
  const cardData = [
    {
      title: "Card 1",
      description: "This is the description for card 1.",
      image: "url('../../public/Race logo-2x.png')",
    },
    {
      title: "Card 2",
      description: "This is the description for card 2.",
      image: "url('/path/to/image2.jpg')",
    },
    {
      title: "Card 3",
      description: "This is the description for card 3.",
      image: "url('/path/to/image3.jpg')",
    },
  ];

  return (
    <motion.div
      className="new-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2>Welcome to the New Section</h2>
      <p>This is the content of your new section.</p>

      <div className="card-section">
        {cardData.map((card, index) => (
          <div
            className="card"
            key={index}
            style={{
              backgroundImage: card.image,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

NewSection.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default NewSection;
