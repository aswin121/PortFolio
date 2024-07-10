import { useState, useEffect } from "react";

export const useKeyboardControls = () => {
  const [keys, setKeys] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
  });

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.code) {
        case "ArrowUp":
          setKeys((prevKeys) => ({ ...prevKeys, forward: true }));
          break;
        case "ArrowDown":
          setKeys((prevKeys) => ({ ...prevKeys, backward: true }));
          break;
        case "ArrowLeft":
          setKeys((prevKeys) => ({ ...prevKeys, left: true }));
          break;
        case "ArrowRight":
          setKeys((prevKeys) => ({ ...prevKeys, right: true }));
          break;
        default:
          break;
      }
    };

    const handleKeyUp = (event) => {
      switch (event.code) {
        case "ArrowUp":
          setKeys((prevKeys) => ({ ...prevKeys, forward: false }));
          break;
        case "ArrowDown":
          setKeys((prevKeys) => ({ ...prevKeys, backward: false }));
          break;
        case "ArrowLeft":
          setKeys((prevKeys) => ({ ...prevKeys, left: false }));
          break;
        case "ArrowRight":
          setKeys((prevKeys) => ({ ...prevKeys, right: false }));
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return keys;
};
