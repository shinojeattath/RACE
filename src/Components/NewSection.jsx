import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import './css/NewSection.css';

const NewSection = ({ isVisible }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showAllCards, setShowAllCards] = useState(false);

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
    // Add more cards here if necessary...
  ];

  const movingCardData = [
    { quote: "Quote 1", name: "John Doe", title: "Developer" },
    { quote: "Quote 2", name: "Jane Smith", title: "Designer" },
    { quote: "Quote 3", name: "Alice Johnson", title: "Manager" },
    // Add more items as needed
  ];

  // Duplicate the movingCardData to create an infinite scroll effect
  const infiniteMovingCardData = [...movingCardData, ...movingCardData];

  const visibleCards = showAllCards ? cardData : cardData.slice(0, 6);
  const hasMoreCards = cardData.length > 6;

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
          {visibleCards.map((card, index) => (
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
        {hasMoreCards && (
          <button 
            className="view-more-button"
            onClick={() => setShowAllCards(!showAllCards)}
          >
            {showAllCards ? 'View Less' : 'View More'}
          </button>
        )}
      </div>

      {/* Infinite Scroll Section */}
      <div className="infinite-scroll-section">
        <h3>Our Quotes</h3>
        <div className="infinite-moving-cards">
          <div className="scroller">
            {infiniteMovingCardData.map((item, index) => (
              <div className="moving-card" key={index}>
                <blockquote>{item.quote}</blockquote>
                <p>{item.name}</p>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
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
          margin-bottom: 20px;
          font-size: 1.8rem;
          text-align: center;
        }

        .card-content p {
          margin: 0;
          font-size: 1rem;
        }

        .view-more-button {
          display: block;
          margin: 20px auto;
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 1rem;
          transition: background-color 0.3s ease;
        }

        .view-more-button:hover {
          background-color: #0056b3;
        }

        .infinite-scroll-section {
          position: relative;
          overflow: hidden;
          padding: 20px 0;
          width: 100%;
          height: 150px; /* Adjust the height if necessary */
        }

        .infinite-moving-cards {
          width: 100%;
          height: 100px; /* Height of the scrolling container */
          overflow: hidden;
          position: relative;
        }

        .scroller {
          display: flex;
          position: absolute;
          animation: scroll 20s linear infinite;
          white-space: nowrap; /* Prevents line breaks */
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%); /* Adjust this to cover the full scroll */
          }
        }

        .moving-card {
          min-width: 200px; /* Width of each moving card */
          margin: 10px;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 8px;
          background-color: #f9f9f9;
          text-align: center;
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
