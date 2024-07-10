import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import DemoImage from "../../src/Images/Demo.png";

const AOSAnimations = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500, // longer duration
      // easing: "ease-in-out-back", // different easing
      easing: "ease-in-out", // Easing option
      once: true, // repeat animation on scroll
      // offset: 200, // start the animation 200px before the element is in view
    });
  }, []);

  return (
    <div className="App">
      <h1 data-aos="fade-up">Hello, World!</h1>
      <p data-aos="fade-right">
        This is a paragraph with a fade-right animation.
      </p>
      <h2 data-aos="fade-up">Fade Up Animation</h2>
      <p data-aos="fade-down">Fade Down Animation</p>
      <div data-aos="flip-left">
        <p>Flip Left Animation</p>
      </div>
      <div data-aos="zoom-in">
        <img
          src={DemoImage}
          alt="example"
          style={{ width: "500px", height: "500px" }}
        />
      </div>
    </div>
  );
};

export default AOSAnimations;
