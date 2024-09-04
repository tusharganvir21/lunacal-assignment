import React, { useState, useRef, useEffect } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaPlus,
  FaQuestionCircle,
} from "react-icons/fa";
import image1 from './assets/def-pic-1.jpg';
import image2 from './assets/def-pic-2.jpg';
import image3 from './assets/def-pic-3.jpg';
import image4 from './assets/def-pic-4.jpg';
import image5 from './assets/def-pic-5.jpg';

const styles = {
  scrollbarHidden: {
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  },
  scrollbarHiddenWebkit: {
    overflow: "hidden",
  },
  buttonShadow: {
    boxShadow:
      "rgb(75 86 241 / 55%) 0px 0px 16px 5px, rgba(255, 255, 255, 0.4) 1px 1px 3px inset",
  },
};

const GalleryWidget = () => {
  const [images, setImages] = useState([
    image1,
    image2,
    image3,
    image4,
    image5,
  ]);

  const containerRef = useRef(null);
  const [isScrollableLeft, setIsScrollableLeft] = useState(false);
  const [isScrollableRight, setIsScrollableRight] = useState(true);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages([...images, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount =
        direction === "left"
          ? -containerRef.current.clientWidth / 3
          : containerRef.current.clientWidth / 3;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const checkScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setIsScrollableLeft(scrollLeft > 0);
      setIsScrollableRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    if (containerRef.current) {
      containerRef.current.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
    }
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('scroll', checkScroll);
      }
      window.removeEventListener('resize', checkScroll);
    };
  }, [images]);

  return (
    <div 
      className="bg-gray-700 p-4 sm:p-6 rounded-2xl shadow-lg" 
      style={{
        boxShadow:"rgba(0, 0, 0, 0.4) 8px 7px 6px 0px",
      }}
      data-testid="gallery-widget"
    >
      <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4">
        <div className="flex items-center mb-2 sm:mb-0">
          <FaQuestionCircle className="text-gray-400 mr-2" />
          <div
            className="flex items-center px-4 py-2 rounded-2xl text-sm bg-gray-750 text-white"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.4) 0px 0px 10px 5px",
            }}
          >
            <h2 className="text-lg">Gallery</h2>
          </div>
        </div>
        <div className="flex items-center space-x-4 sm:ml-auto">
          <label
            htmlFor="file-upload"
            className="flex items-center px-4 py-2 rounded-full text-sm cursor-pointer bg-gray-750 text-white"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.4) 8px 7px 6px 0px, rgba(255, 255, 255, 0.4) 4px 4px 5px inset",
            }}
          >
            <FaPlus className="mr-1" />
            Add Image
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          <button
            onClick={() => scroll("left")}
            className={`bg-gray-600 p-2 rounded-full ${!isScrollableLeft && "opacity-50 cursor-not-allowed"}`}
            style={styles.buttonShadow}
            disabled={!isScrollableLeft}
          >
            <FaChevronLeft className="text-white" />
          </button>
          <button
            onClick={() => scroll("right")}
            className={`bg-gray-600 p-2 rounded-full ${!isScrollableRight && "opacity-50 cursor-not-allowed"}`}
            style={styles.buttonShadow}
            disabled={!isScrollableRight}
          >
            <FaChevronRight className="text-white" />
          </button>
        </div>
      </div>

      <div
        ref={containerRef}
        className="flex space-x-4 overflow-x-auto"
        style={{
          ...styles.scrollbarHidden,
          ...styles.scrollbarHiddenWebkit,
          scrollBehavior: "smooth",
          scrollSnapType: "x mandatory",
        }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery item ${index + 1}`}
            className="w-[150px] sm:w-[175px] h-[165px] sm:h-[185px] object-cover rounded-3xl flex-shrink-0 transition-transform duration-500 grayscale hover:grayscale-0 hover:rotate-[12deg] hover:scale-[1.15] hover:shadow-xl"
            style={{ scrollSnapAlign: "center" }}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryWidget;
