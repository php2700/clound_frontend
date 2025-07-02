import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import leftArrow from "/arrow-yellow-back.svg";
import rightArrow from "/arrow-yellow-next.svg";

const HeroSection = () => {
  const images = [
    {
      url: "/image (9).png",
      title: "All-in for your Growth",
      description:
        "Digital Transformation <br/> through the power of Salesforce.",
      paragraph: "Unlock your business potential with our expertise.",
      buttonText: "Book a free consultation",
      buttonLink: "/contact",
    },
    {
      url: "/image (8).png",
      title: "One of the biggest B2B Commerce Lightning projects in the world.",
      logo: "https://cloudgaia.com/storage/2025/01/logo-salesforce.svg",
      subtitle: "CONA Services",
      extraDescription: "B2B Commerce | Marketing Cloud",
      buttonText: "Read the success story",
      buttonLink: "/customer-stories/cona-detail",
    },
    {
      url: "agent.webp",
      buttonText: "Read about AI Expert Insights",
      buttonLink: "/resources/blog",
      imageRight:
        "https://cloudgaia.com/storage/elementor/thumbs/PNG-AGENTFORCE-CARROUSEL-r7vqlsma9mbm1a8wi5hm7menkf81biqh6vd6g2xiww.png",
    },
    {
      url: "/home-hero1.jpeg",
      imageLeft:
        "https://cloudgaia.com/storage/2025/07/PNG-en-ingles-e1751395670583.png",
      paragraph:
        "Real challenges. Real solutions. This E-book is your roadmap to<br/>evolving your Consumer Goods strat —powered by Cloudgaia <br/>and Salesforce.",
      buttonText: "Download",
      buttonLink: "/download",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image.url;
      if (image.logo) {
        const logoImg = new Image();
        logoImg.src = image.logo;
      }
      if (image.imageRight) {
        const rightImg = new Image();
        rightImg.src = image.imageRight;
      }
      if (image.imageLeft) {
        const leftImg = new Image();
        leftImg.src = image.imageLeft;
      }
    });
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 overflow-hidden font-sans">
      {/* Header Placeholder */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gray-800 z-30 flex items-center justify-between px-4" />

      {/* Triangle in Top Right Corner */}
      <div
        className="absolute top-0 right-0 z-30"
        style={{
          width: 0,
          height: 0,
          borderTop: `160px solid ${
            currentImageIndex === 1 ? "#008093" : "#FACC15"
          }`,
          borderLeft: "180px solid transparent",
        }}
      ></div>

      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="flex h-full transition-transform duration-2000 ease-in-out"
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="min-w-full h-full bg-cover bg-center bg-no-repeat relative"
              style={{ backgroundImage: `url('${image.url}')` }}
              aria-hidden={index !== currentImageIndex}
            >
              {(index === 2 || index === 3) && (
                <div className="absolute inset-0 bg-[#1f1f25] opacity-90"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 min-h-screen flex items-center justify-center text-center">
        <div className="flex flex-col items-center w-full">
          {/* Slide 1 */}
          {currentImageIndex === 0 && (
            <>
              <h1 className="text-4xl md:text-6xl font-bold text-[#FACC15] mb-6">
                {images[0].title}
              </h1>
              <p
                className="text-4xl md:text-6xl font-bold text-white mx-auto"
                dangerouslySetInnerHTML={{
                  __html: images[0].description,
                }}
              />
              <p className="text-xl md:text-2xl mt-6 max-w-2xl mx-auto text-white font-semibold">
                We are a <span className="text-[#FF83A9]">100% Salesforce</span>{" "}
                summit consulting partner
              </p>
            </>
          )}

          {/* Slide 2 */}
          {currentImageIndex === 1 && (
            <>
              <div className="flex items-center mb-6">
                <img
                  src={images[1].logo}
                  alt="Salesforce Logo"
                  className="h-16 mr-4"
                />
                <p className="text-lg md:text-xl text-white">
                  {images[1].extraDescription}
                </p>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {images[1].title}
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                {images[1].subtitle}
              </h2>
            </>
          )}

          {/* Slide 3 */}
          {currentImageIndex === 2 && (
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-4">
              <div className="flex flex-col items-center text-right ml-[100px]">
                <h1 className="text-4xl md:text-6xl font-bold text-[#FF83A9] mb-2">
                  We are
                </h1>
                <h1 className="text-4xl md:text-8xl font-extrabold text-white leading-tight">
                  Agentforce
                </h1>
                <h2 className="text-4xl md:text-6xl font-bold text-[#FF83A9] mt-2">
                  Experts
                </h2>
              </div>
              <div className="relative">
                <img
                  src={images[2].imageRight}
                  alt="Agentforce Badge"
                  className="h-50 md:h-50 object-contain mr-[100px]"
                />
              </div>
            </div>
          )}

          {/* Slide 4 */}
          {currentImageIndex === 3 && (
            <div className="flex flex-col items-center w-full max-w-7xl px-4">
              {images[3].imageLeft && (
                <img
                  src={images[3].imageLeft}
                  alt="Ebook"
                  className="h-80 object-cover mb-6"
                />
              )}
              <div className="text-center w-full max-w-4xl">
                <p
                  className="text-xl md:text-2xl text-white"
                  dangerouslySetInnerHTML={{ __html: images[3].paragraph }}
                />
              </div>
            </div>
          )}

          {/* CTA Button */}
          <div className="mt-12">
            <Link to={images[currentImageIndex].buttonLink}>
              <Button
                className={`px-8 py-3 text-[16px] font-bold rounded-full transition-colors duration-300 ${
                  currentImageIndex === 3
                    ? "bg-yellow-400 text-white hover:bg-pink-400"
                    : "bg-white text-gray-600 hover:bg-[#ff83a9] hover:text-white"
                }`}
              >
                {images[currentImageIndex].buttonText}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-8 text-white text-xs z-10">
        scroll to learn more
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-8 right-8 flex space-x-2 z-10">
        {/* <button
          onClick={prevImage}
          className="w-10 h-10 bg-[#FACC15] rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300 hover:bg-[#ff83a9]"
          aria-label="Previous image"
        >
          <span className="text-white font-extrabold text-2xl">🡠</span>
        </button>
        <button
          onClick={nextImage}
          className="w-10 h-10 bg-[#FACC15] rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300 hover:bg-[#ff83a9]"
          aria-label="Next image"
        >
          <span className="text-white font-extrabold text-2xl">🡢</span>
        </button> */}
         <img
                  src={leftArrow}
                  alt="Ebook"
                  onClick={prevImage}
                  className="w-10 h-10 bg-[#FACC15] rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300 hover:bg-[#ff83a9]"
                />
         <img
                  src={rightArrow}
                  alt="Ebook"
                  onClick={nextImage}
                  className="w-10 h-10 bg-[#FACC15] rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300 hover:bg-[#ff83a9]"
                />
      </div>
    </section>
  );
};

export default HeroSection;
