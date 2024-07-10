import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const AboutSection = () => {
  return (
    <Section>
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        <h2>About Me</h2>
        <p>
          I'm a passionate full-stack developer with experience in building web
          applications using the latest technologies...
        </p>
      </motion.div>
    </Section>
  );
};

const Section = styled.section`
  padding: 50px;
  background: #f5f5f5;
  color: #333;
`;

export default AboutSection;
