import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const Card = () => {
  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <div
      onClick={() => setFlipped((state) => !state)}
      style={{ cursor: "pointer", perspective: "600px" }}
    >
      <animated.div
        style={{
          position: "absolute",
          opacity: opacity.interpolate((o) => 1 - o),
          transform,
        }}
      >
        <div
          style={{
            width: "200px",
            height: "300px",
            background: "lightcoral",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
          }}
        >
          Front
        </div>
      </animated.div>
      <animated.div
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateY(180deg)`),
        }}
      >
        <div
          style={{
            width: "200px",
            height: "300px",
            background: "lightblue",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
          }}
        >
          Back
        </div>
      </animated.div>
    </div>
  );
};

const ReactSpring = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <Card />
  </div>
);

export default ReactSpring;
