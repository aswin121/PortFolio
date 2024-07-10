import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "./useKeyboardControls";

const Car = () => {
  const carRef = useRef();
  const { forward, backward, left, right } = useKeyboardControls();

  useFrame(() => {
    if (forward) {
      carRef.current.position.z -= 0.1;
    }
    if (backward) {
      carRef.current.position.z += 0.1;
    }
    if (left) {
      carRef.current.position.x -= 0.1;
    }
    if (right) {
      carRef.current.position.x += 0.1;
    }
  });

  return (
    <mesh ref={carRef} position={[0, 0.5, 0]}>
      <boxGeometry args={[1, 0.5, 2]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
};

export default Car;
