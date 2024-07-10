import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 80 },
  // Add more skills as needed
];

const SkillsSection = () => {
  return (
    <Section>
      <h2>Skills</h2>
      {skills.map((skill) => (
        <SkillBar key={skill.name}>
          <SkillName>{skill.name}</SkillName>
          <SkillLevel
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: 1.5 }}
          />
        </SkillBar>
      ))}
    </Section>
  );
};

const Section = styled.section`
  padding: 50px;
  background: #fff;
  color: #333;
`;

const SkillBar = styled.div`
  margin-bottom: 15px;
`;

const SkillName = styled.div`
  font-size: 18px;
  margin-bottom: 5px;
`;

const SkillLevel = styled(motion.div)`
  height: 20px;
  background-color: #61dafb;
  border-radius: 5px;
`;

export default SkillsSection;
