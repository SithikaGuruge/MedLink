import React, { useState } from "react";
import image1 from "../assets/ScanImage1.jpg";
import image4 from "../assets/ScanImage4.jpg";

function ImageGrid() {
  const images = [image1, image4, image1, image4, image1];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) => {
      if (prevIndex === 0) {
        return images.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="w-180 h-110 overflow-hidden bg-gray-100">
          <img
            src={images[currentImageIndex]}
            alt="Main"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-0 right-0 mt-2 mr-2 text-xl">
          <button onClick={handlePrevious} className="px-2 py-1 rounded-l">
            &lt;
          </button>
          <span className="px-4 py-1 text-sm">
            {currentImageIndex + 1} / {images.length}
          </span>
          <button onClick={handleNext} className="px-2 py-1 rounded-r">
            &gt;
          </button>
        </div>
      </div>
      <br />
      <div className="flex space-x-1 mt-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`p-0.5 rounded border-s shadow-md ${
              currentImageIndex === index
                ? "border-sky-500"
                : "border-transparent"
            } cursor-pointer`}
            onClick={() => setCurrentImageIndex(index)}
          >
            <div className="p-1 bg-white rounded">
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="h-16 w-18 object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGrid;
