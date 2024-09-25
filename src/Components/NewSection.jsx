import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import './css/NewSection.css';

const NewSection = ({ isVisible }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const cardData = [
    {
      title: "Drone class",
      description: "This is the description for card 1.",
      image: "url('../../public/drone technology.png')",
    },
    {
      title: "Card 2",
      description: "This is the description for card 2.",
      image: "url('../../public/NIFTY.png')",
    },
    {
      title: "Card 3",
      description: "This is the description for card 3.",
      image: "url('../../public/talk on ent.png')",
    },
    {
      title: "Drone class",
      description: "This is the description for card 1.",
      image: "url('../../public/drone technology.png')",
    },
    {
      title: "Card 2",
      description: "This is the description for card 2.",
      image: "url('../../public/NIFTY.png')",
    },
    {
      title: "Card 3",
      description: "This is the description for card 3.",
      image: "url('../../public/talk on ent.png')",
    },
    {
      title: "Drone class",
      description: "This is the description for card 1.",
      image: "url('../../public/drone technology.png')",
    },
    {
      title: "Card 2",
      description: "This is the description for card 2.",
      image: "url('../../public/NIFTY.png')",
    },
    {
      title: "Card 3",
      description: "This is the description for card 3.",
      image: "url('../../public/talk on ent.png')",
    },
  ];

  return (
    <motion.div
      className="new-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2>News And Events</h2>
      
      <div>
      <h3 className="card-section-heading">Our Recent Updates</h3>
      <div className="card-section">
        {cardData.map((card, index) => (
          <motion.div
            className={`card ${hoveredIndex !== null && hoveredIndex !== index ? 'blur' : ''}`}
            key={index}
            style={{
              backgroundImage: card.image,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="card-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
      </div>

      <style jsx>{`
        .new-section {
          padding: 20px;
          overflow-x: hidden;
        }

        .card-section {
          display: flex;
          overflow-x: auto;
          padding: 20px 0;
          gap: 20px;
          scrollbar-width: none;  /* Firefox */
          -ms-overflow-style: none;  /* Internet Explorer 10+ */
        }

        .card-section::-webkit-scrollbar {
          display: none;  /* WebKit */
        }

        .card {
          position: relative;
          flex: 0 0 auto;
          width: 300px;
          height: 400px;
          border-radius: 10px;
          overflow: hidden;
          transition: all 0.3s ease-out;
        }

        .card.blur {
          filter: blur(4px);
          transition: filter 0.3s ease;
        }

        .card-content {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 20px;
        }

        .card-content h3 {
          margin: 0 0 10px 0;
          font-size: 1.5rem;
        }

        .card-section-heading {
          margin-bottom: 20px; /* Space below the heading */
          font-size: 1.8rem; /* Adjust as needed */
          text-align: center; /* Center the heading text */
        }

        .card-content p {
          margin: 0;
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .card {
            width: 250px;
            height: 350px;
          }
        }
      `}</style>
    </motion.div>
  );
};

NewSection.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default NewSection;