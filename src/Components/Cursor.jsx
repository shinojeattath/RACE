import React, { useEffect, useState } from 'react';
import './css/Cursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorColor, setCursorColor] = useState('white'); // Default color

  useEffect(() => {
    const updateCursor = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      setPosition({ x, y });

      // Get the element under the cursor
      const element = document.elementFromPoint(x, y);
      if (element) {
        // Get the background color of the element
        const bgColor = window.getComputedStyle(element).backgroundColor;

        // If the background is light, set the cursor to black
        if (bgColor === 'rgb(255, 255, 255)') {
          setCursorColor('black');
        } else {
          setCursorColor('white');
        }
      }
    };

    window.addEventListener('mousemove', updateCursor);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
    };
  }, []);

  return (
    <div
      className="circle-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%)`,
        backgroundColor: cursorColor, // Dynamically set cursor color
      }}
    />
  );
};

export default CustomCursor;
