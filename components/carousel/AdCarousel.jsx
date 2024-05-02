import React, { useState, useEffect, useRef } from "react";

function AdCarousel() {
  const [isPlaying, setIsPlaying] = useState(true);
  const carouselRef = useRef(null);

  const images = [
    "/rectImageGirl.png",
    "/rectImageRap.png",
    "/rectImageArcade.png",
    "/rectImageFitness.png",
    "/rectImagePoster.png",
  ];

  const doubledImages = [...images, ...images];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (carouselRef.current) {
      carouselRef.current.style.animationPlayState = isPlaying
        ? "paused"
        : "running";
    }
  };

  useEffect(() => {
    const handle = carouselRef.current;
    return () => {
      if (handle) {
        handle.style.animationPlayState = "paused";
      }
    };
  }, []);

  return (
    <div>
      <div
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          height: "200px",
        }}
      >
        <div
          ref={carouselRef}
          style={{
            display: "flex",
            animation: `${isPlaying ? "20s" : "paused"} slide linear infinite`,
            width: `${images.length * 20}vw`, // Adjust based on number of images and their width
          }}
        >
          {doubledImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index}`}
              style={{ flexShrink: 0 }}
            />
          ))}
        </div>
      </div>
      <div
        style={{
          textAlign: "right",
          marginTop: "20px",
          marginRight: "10px",
          marginBottom: "10px",
        }}
      >
        <button
          onClick={togglePlay}
          style={{
            padding: "5px",
            borderRadius: "50%",
            border: "1px solid black",
            background: "none",
            cursor: "pointer",
          }}
        >
          {isPlaying ? (
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 18V6l8 6-8 6Z"
              />
            </svg>
          ) : (
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 6H8a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Zm7 0h-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Z"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

export default AdCarousel;
