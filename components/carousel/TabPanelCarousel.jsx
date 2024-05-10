import React, { useEffect } from "react";
import Swiper from "swiper";
import { useState } from "react";

function TabPanelCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    { src: "/tabOne.png", alt: "tabOne" },
    { src: "/tabTwo.png", alt: "tabTwo" },
    { src: "/tabThree.png", alt: "tabThree" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="carousel carousel-center rounded-box">
      {items.map((item, index) => (
        <div
          key={index}
          className={`carousel-item ${index === currentIndex ? "active" : ""}`}
        >
          <img src={item.src} alt={item.alt} style={{ width: "500" }} />
        </div>
      ))}
    </div>
  );
}

export default TabPanelCarousel;
