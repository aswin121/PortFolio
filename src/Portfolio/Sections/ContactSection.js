import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const ContactSection = () => {
  return (
    <Section>
      <motion.div
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        <h2>Contact</h2>
        <p>Email: your.email@example.com</p>
        <p>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/yourprofile">
            linkedin.com/in/yourprofile
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a href="https://github.com/yourusername">github.com/yourusername</a>
        </p>
      </motion.div>
    </Section>
  );
};

const Section = styled.section`
  padding: 50px;
  background: #282c34;
  color: white;
  text-align: center;
`;

export default ContactSection;
