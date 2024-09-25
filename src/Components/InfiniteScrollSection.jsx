import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './css/InfiniteScrollSection.css';

const InfiniteScrollSection = () => {
  const scrollerRef = useRef(null);

  const movingCardData = [
    { quote: "Quote 1", name: "John Doe", title: "Developer" },
    { quote: "Quote 2", name: "Jane Smith", title: "Designer" },
    { quote: "Quote 3", name: "Alice Johnson", title: "Manager" },
    // Add more items as needed
  ];

  useEffect(() => {
    // Duplicating the content for infinite scrolling
    const scrollerContent = Array.from(scrollerRef.current.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scrollerRef.current.appendChild(duplicatedItem);
    });
  }, []);

  return (
    <div className="infinite-scroll-section">
      <h2>Our Quotes</h2>
      <div className="infinite-moving-cards">
        <div className="scroller" ref={scrollerRef}>
          {movingCardData.map((item, index) => (
            <div className="moving-card" key={index}>
              <blockquote>{item.quote}</blockquote>
              <p>{item.name}</p>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

InfiniteScrollSection.propTypes = {
  // Define any props you might need
};

export default InfiniteScrollSection;
