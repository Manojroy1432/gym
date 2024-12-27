import React, { useEffect, useState } from "react";

const AutoSlider = () => {
  // Text items to display in the slider
  const textItems = [
    "Welcome to our website!",
    "We deliver quality products.",
    "Enhancing user experience.",
    "Check out our latest features!",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the text at intervals
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textItems.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval); // Clean up the interval
  }, [textItems.length]);

  return (
    <div className="relative flex justify-center items-center h-48 bg-gray-900 text-white">
      {/* Slider Container */}
      <div className="w-full text-center px-4">
        <p className="text-2xl font-semibold animate-fadeIn">
          {textItems[currentIndex]}
        </p>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-4 flex space-x-2">
        {textItems.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full bg-white transition-all duration-300 ${
              index === currentIndex ? "bg-blue-500 scale-110" : "bg-gray-500"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default AutoSlider;
