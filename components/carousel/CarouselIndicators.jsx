import React from "react";

function CarouselIndicators({ numSlides, currentSlide }) {
  return (
    <div className="flex justify-center space-x-2 mb-2">
      {[...Array(numSlides).keys()].map((index) => (
        <div
          key={index}
          className={`w-2 h-2 rounded-full ${
            currentSlide === index ? "bg-blue-500" : "bg-gray-300"
          }`}
        ></div>
      ))}
    </div>
  );
}

export default CarouselIndicators;
