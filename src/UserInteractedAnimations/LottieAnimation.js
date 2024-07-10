import React from "react";
import Lottie from "lottie-react";
import animationData from "./animation.json"; // Your Lottie animation file

const LottieAnimations = () => (
  <Lottie animationData={animationData} style={{ width: 300, height: 300 }} />
);

const LottieAnimation = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <LottieAnimations />
  </div>
);

export default LottieAnimation;
