import React from "react";
import { motion } from "framer-motion";

const Button = () => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    style={{
      padding: "10px 20px",
      fontSize: "16px",
      cursor: "pointer",
      borderRadius: "5px",
      border: "none",
      background: "blue",
      color: "white",
    }}
  >
    Hover Me
  </motion.button>
);

const FramerMotion = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <Button />
  </div>
);

export default FramerMotion;
