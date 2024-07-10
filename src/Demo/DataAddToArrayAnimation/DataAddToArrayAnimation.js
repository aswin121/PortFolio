import React, { useEffect, useState, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const DataAddToArrayAnimation = () => {
  const [items, setItems] = useState(["Orange", "Fig", "Mango"]);

  const memoizedItems = useMemo(() => items, [items]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [memoizedItems]);

  const addItem = () => {
    setItems((prevItems) => [...prevItems, "Apple"]);
  };

  return (
    <div>
      <button onClick={addItem}>Push</button>
      {memoizedItems.map((item, index) => (
        <div key={index} data-aos="fade-in" style={{ background: "red" }}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default DataAddToArrayAnimation;
