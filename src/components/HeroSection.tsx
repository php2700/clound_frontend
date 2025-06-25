import { Button } from "@/components/ui/button";
import Header from "./Header";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const images = [
    "/image-10.avif","/image-11.avif",
    "/image (8).png",'/image (9).png'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    console.log("Next button clicked, current index:", currentImageIndex);
    setCurrentImageIndex((prevIndex) => {
      const newIndex = prevIndex === images.length - 1 ? 0 : prevIndex + 1;
      console.log("New index:", newIndex);
      return newIndex;
    });
  };

  const prevImage = () => {
    console.log("Previous button clicked, current index:", currentImageIndex);
    setCurrentImageIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? images.length - 1 : prevIndex - 1;
      console.log("New index:", newIndex);
      return newIndex;
    });
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    console.log("Auto-slide effect started");
    const timer = setInterval(() => {
      console.log("Auto-slide triggered");
      nextImage();
    }, 5000);
    return () => {
      console.log("Auto-slide effect cleaned up");
      clearInterval(timer);
    };
  }, []);

  // Preload images
  useEffect(() => {
    console.log("Preloading images");
    images.forEach((image, index) => {
      const img = new Image();
      img.src = image;
      img.onload = () => console.log(`Image ${index} loaded: ${image}`);
      img.onerror = () =>
        console.error(`Failed to load image ${index}: ${image}`);
    });
  }, []);

  // Log render cycle
  console.log(
    "Rendering HeroSection, current image:",
    images[currentImageIndex]
  );

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 overflow-hidden">
      {/* Image Carousel */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="flex h-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="min-w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('${image}')`,
                width: "100%",
                height: "100%",
              }}
              aria-hidden={index !== currentImageIndex}
            ></div>
          ))}
        </div>
      </div>

      {/* <div className="container mt-6">
        <Header />
      </div> */}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl md:text-6xl font-bold mb-8">
            <span className="text-yellow-400">All-in for your Growth</span>
            <br />
            <span className="text-white">Digital Transformation</span>
            <br />
            <span className="text-white">through the power of Salesforce</span>
          </h1>
          <p className="text-xl md:text-3xl text-white mb-2">
            We are a{" "}
            <span className="text-[#ff83a9] font-bold">100% Salesforce</span>{" "}
            Summit Consulting Partner
          </p>
          <div className="mt-12">
            <Button className="bg-white text-gray-900 transition-colors duration-300 hover:bg-[#ff83a9] hover:text-white px-8 py-3 text-lg font-medium rounded-full">
              Book a free consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-8 text-white text-sm z-10">
        scroll to learn more
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-8 right-8 flex space-x-2 z-10">
        <button
          onClick={prevImage}
          className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300 hover:bg-[#ff83a9]"
          aria-label="Previous image"
        >
          <span className="text-white font-extrabold text-2xl">🡠</span>
        </button>
        <button
          onClick={nextImage}
          className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300 hover:bg-[#ff83a9]"
          aria-label="Next image"
        >
          <span className="text-white font-extrabold text-2xl">🡢</span>
        </button>
      </div>

      {/* Navigation Dots */}
      {/* <div className="absolute bottom-16 right-8 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              // console.log(`Dot ${index} clicked`);
              setCurrentImageIndex(index);
            }}
            // className={`w-3 h-3 rounded-full ${
            //   index === currentImageIndex ? "bg-white" : "bg-gray-400"
            // }`	}
            aria-label={`Go to image ${index + 1}`}
          ></button>
        ))}
      </div> */}
    </section>
  );
};

export default HeroSection;
