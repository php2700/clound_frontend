import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import NewCloudgaiaSection from "@/components/NewCloudgaiaSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import { useEffect, useState } from "react";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header if near the top of the page (within 50px) or scrolling up
      if (currentScrollY < 50) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsHeaderVisible(false);
      } else {
        // Scrolling up
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="min-h-screen">
      <div
        className={`fixed top-0 left-0 w-full transition-transform duration-300 ease-in-out z-50 ${
          isHeaderVisible ? "translate-y-6" : "-translate-y-full"
        }`}
      >
        <Header />
      </div>
      <ScrollToTop />
      <HeroSection />
      <StatsSection />
      <NewCloudgaiaSection />
      <Home />
      <SuccessStoriesSection />
      <Footer />
    </div>
  );
};

export default Index;
