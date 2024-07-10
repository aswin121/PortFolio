import React from "react";
import { motion } from "framer-motion";

const AnimatedCard = ({ children }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        rotate: 5,
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
      style={{
        width: "200px",
        height: "300px",
        background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px",
        cursor: "pointer",
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
