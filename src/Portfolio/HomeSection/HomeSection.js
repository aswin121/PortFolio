import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HomeSection.css";
import { motion } from "framer-motion";
import Aswin from "../../Images/Aswin.JPEG";

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  hero: {
    textAlign: "center",
    marginBottom: "50px",
  },
  profilePic: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    marginBottom: "20px",
  },
  ctaButtons: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
  },
  about: {
    marginBottom: "50px",
  },
  projects: {
    marginBottom: "50px",
  },
  projectList: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  projectCard: {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "5px",
  },
  contact: {
    textAlign: "center",
  },
};

const HomeSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    // <section id="home" className="home-section">
    //   <div className="intro" data-aos="fade-up">
    //     <h1>Welcome to My Portfolio</h1>
    //     <p>
    //       I am a Full Stack Web Developer passionate about creating dynamic and
    //       responsive web applications.
    //     </p>
    //   </div>
    //   <div className="skills" data-aos="fade-left">
    //     <h2>Skills</h2>
    //     <p>
    //       JavaScript, React, Node.js, Express, MongoDB, HTML, CSS, and more...
    //     </p>
    //   </div>
    //   <div className="projects" data-aos="fade-right">
    //     <h2>Projects</h2>
    //     <p>Check out some of my awesome projects below.</p>
    //   </div>
    //   </section>
    <>
      <section id="home" className="home-section-layout2">
        <motion.div
          style={styles.hero}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={Aswin}
            alt="Profile"
            style={styles.profilePic}
            whileHover={{ scale: 1.1 }}
          />
          <h1>Hello, I'm Maria Antony Aswin S</h1>
          <p>Full Stack Web Developer</p>
          <div style={styles.ctaButtons}>
            <motion.button
              style={styles.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                window.scrollTo({
                  top: document.getElementById("projects").offsetTop,
                  behavior: "smooth",
                })
              }
            >
              View Projects
            </motion.button>
            <motion.button
              style={styles.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Download Resume
            </motion.button>
          </div>
        </motion.div>
      </section>
      <section id="about" className="home-section-layout2">
        <motion.div
          style={styles.about}
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <h2>About Me</h2>
          <p>
            I'm a passionate full-stack developer with experience in building
            web applications using the latest technologies...
          </p>
          <h3>Skills</h3>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
          </ul>
        </motion.div>
      </section>
      <section id="projects" className="home-section-layout2">
        <motion.div
          style={styles.projects}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h2 id="projects">Featured Projects</h2>
          <div style={styles.projectList}>
            <div style={styles.projectCard}>
              <h3>Project 1</h3>
              <p>A brief description of the project...</p>
              <a href="#!">View Details</a>
            </div>
            <div style={styles.projectCard}>
              <h3>Project 2</h3>
              <p>A brief description of the project...</p>
              <a href="#!">View Details</a>
            </div>
            {/* Add more projects as needed */}
          </div>
        </motion.div>
      </section>
      <section id="contact" className="home-section-layout2">
        <motion.div
          style={styles.contact}
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
            <a href="https://github.com/yourusername">
              github.com/yourusername
            </a>
          </p>
        </motion.div>
      </section>
    </>
  );
};

export default HomeSection;
