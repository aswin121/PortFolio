import React from "react";
import { motion } from "framer-motion";

const HoverBackground = ({ children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      style={{
        position: "relative",
        width: "300px",
        height: "200px",
        overflow: "hidden",
        borderRadius: "10px",
        margin: "20px",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "20px",
        }}
      >
        Hovered!
      </motion.div>
      {children}
    </motion.div>
  );
};

export default HoverBackground;
