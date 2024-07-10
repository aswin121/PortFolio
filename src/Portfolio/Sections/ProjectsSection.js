import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const projects = [
  { title: "Project 1", description: "A brief description of the project..." },
  { title: "Project 2", description: "A brief description of the project..." },
  // Add more projects as needed
];

const ProjectsSection = () => {
  return (
    <Section>
      <h2>Featured Projects</h2>
      <ProjectGrid>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href="#!">View Details</a>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </Section>
  );
};

const Section = styled.section`
  padding: 50px;
  background: #f5f5f5;
  color: #333;
`;

const ProjectGrid = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const ProjectCard = styled(motion.div)`
  flex: 1;
  min-width: 250px;
  padding: 20px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export default ProjectsSection;
