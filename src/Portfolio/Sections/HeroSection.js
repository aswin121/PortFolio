import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const HeroSection = () => {
  return (
    <HeroContainer>
      <AnimatedBackground />
      <HeroContent
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h1>Hello, I'm [Your Name]</h1>
        <p>Full Stack Web Developer</p>
        <CTAButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          View Projects
        </CTAButton>
        <CTAButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          Download Resume
        </CTAButton>
      </HeroContent>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #282c34;
`;

const AnimatedBackground = styled(motion.div)`
  position: absolute;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  animation: rotate 10s linear infinite;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
`;

const CTAButton = styled(motion.button)`
  padding: 10px 20px;
  margin: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #61dafb;
  color: white;
  cursor: pointer;
`;

export default HeroSection;
