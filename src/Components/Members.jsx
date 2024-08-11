import React, { useEffect, useRef } from 'react';
import './css/MemberCarousel.css';

const MemberCarousel = ({ members }) => {
  const carouselRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current && trackRef.current) {
        const carouselRect = carouselRef.current.getBoundingClientRect();
        const scrollProgress = -carouselRect.top / (carouselRect.height * (members.length - 1));
        const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
        
        trackRef.current.style.transform = `translateX(${-clampedProgress * 100 * (members.length - 1)}%)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [members.length]);

  return (
    <div className="carousel-container" ref={carouselRef}>
      <div className="carousel-track" ref={trackRef}>
        {members.map((member, index) => (
          <div className="member-item" key={`${member.name}-${index}`}>
            <div className="member-photo">
              <img src={member.photo} alt={member.name} />
            </div>
            <div className="member-info">
              <h2 className="member-name">{member.name}</h2>
              <p className="member-responsibility">{member.responsibility}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemberCarousel;