import { useState, useEffect } from "react";
import "@/styles/imageCarousel.css";

interface ImageCarouselProps {
  images: string[];
  projectName: string;
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

export function ImageCarousel({ 
  images, 
  projectName, 
  isOpen, 
  onClose, 
  initialIndex = 0 
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Reset index when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      switch (event.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          goToPrevious();
          break;
        case "ArrowRight":
          goToNext();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="carousel-modal" onClick={handleBackdropClick}>
      <div className="carousel-container">
        {/* Header */}
        <div className="carousel-header">
          <h3 className="carousel-title">{projectName}</h3>
          <button className="carousel-close" onClick={onClose}>
            ×
          </button>
        </div>

        {/* Main carousel */}
        <div className="carousel-main">
          {/* Previous button */}
          <button 
            className="carousel-nav carousel-nav--prev" 
            onClick={goToPrevious}
            aria-label="Previous image"
          >
            ‹
          </button>

          {/* Image container */}
          <div className="carousel-image-container">
            <img
              src={images[currentIndex]}
              alt={`${projectName} - Image ${currentIndex + 1}`}
              className="carousel-image"
            />
          </div>

          {/* Next button */}
          <button 
            className="carousel-nav carousel-nav--next" 
            onClick={goToNext}
            aria-label="Next image"
          >
            ›
          </button>
        </div>

        {/* Indicators */}
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`carousel-indicator ${
                index === currentIndex ? "carousel-indicator--active" : ""
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="carousel-counter">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}
