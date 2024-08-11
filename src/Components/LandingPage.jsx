import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import '../assets/fonts/stylesheet.css'

// Styled Components
const PageContainer = styled.div`
  background-color: #000;
  color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
`;

const Logo = styled(motion.h1)`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavItem = styled(motion.a)`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
`;

const MainContent = styled(motion.main)`
  text-align: center;
  max-width: 800px;
  
`;

const Title = styled(motion.h2)`
  font-size: 3.4rem;
  margin-bottom: 1rem;
  letter-spacing: 6px;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const CTAButton = styled(motion.button)`
  background-color: #00ff00;
  color: #000;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 50px;
`;

const Footer = styled(motion.footer)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
`;

// Animations
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const slideIn = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
};

const bounce = {
  initial: { scale: 0 },
  animate: { scale: 1, transition: { type: 'spring', stiffness: 260, damping: 20 } },
};

// Component
const LandingPage = () => {
  return (
    <PageContainer>
      

      <MainContent initial="hidden" animate="visible" variants={fadeIn}>
        <Title variants={slideIn}>
          Regal Association of Computer Engineers
        </Title>
        <Subtitle variants={slideIn}>
          Empowering the future of technology
        </Subtitle>
        <CTAButton
          variants={bounce}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Join RACE Today
        </CTAButton>
      </MainContent>

      {/* <Footer initial="hidden" animate="visible" variants={fadeIn}>
        © 2024 Regal Association of Computer Engineers. All rights reserved.
      </Footer> */}
    </PageContainer>
  );
};

export default LandingPage;