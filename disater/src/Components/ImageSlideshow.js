import React, { useState, useEffect } from "react";
import "./ImageSlideshow.css";

const ImageSlideshow = () => {
  // Array of image paths (relative to the public folder)
  const images = [
    "/Images/s1.jpg",
    "/Images/s2.jpg",
    "/Images/s3.jpg",
    "/Images/s4.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const nextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const interval = setInterval(nextImage, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []); // No dependency needed

  return (
    <div className="slideshow-container">
      <div
        className="slideshow"
        style={{
          transform: `translateX(-${currentImageIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="slide"
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${image})` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlideshow;