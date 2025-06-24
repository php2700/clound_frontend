import React, { useEffect, useState } from "react";
import Header from "@/components/Header"; // Fixed import path
import Footer from "@/components/Footer"; // Fixed import path
import {
  FaPlaneArrival,
  FaLightbulb,
  FaChartLine,
  FaTools,
  FaHome,
} from "react-icons/fa";

const Services = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsHeaderVisible(currentScrollY <= lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div
  className="absolute top-0 right-0 w-96 h-96 bg-[#008093]"
  style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
  aria-hidden="true" 
/>
    <div className="relative min-h-screen">
      
      <div
        className={`fixed top-0 left-0 w-full transition-transform duration-300 ease-in-out z-50 ${
          isHeaderVisible ? "translate-y-6" : "-translate-y-full"
        }`}
      >
        <Header />
      </div>

      <div className="container mx-auto mt-[110px] px-4 md:px-6">
        <div className="px-6 py-10 md:px-10">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-gray-500 mt-8">
            <FaHome className="mr-1 text-xl" />
            <span className="mx-1 text-lg font-medium">/</span>
            <span className="text-lg font-semibold">Services</span>
          </div>

          {/* Heading & Description */}
          <div className="max-w-7xl mx-auto mt-8">
            <h1
              className="text-2xl md:text-6xl font-bold"
              style={{ color: "#008093" }}
            >
              From strategy to support:
              <br />
              Salesforce all-in
            </h1>
            <p className="text-black text-base md:text-xl mt-8 max-w-3xl">
              We offer a variety of tailor-made services designed to meet your
              needs and align with your level of maturity within the Salesforce
              ecosystem. We understand the specific requirements of your
              industry and design end-to-end solutions ensuring that every step
              is aligned with your goals.
            </p>
          </div>

          {/* Full Width Image */}
          <div className="w-screen mt-[150px] relative left-1/2 right-1/2 -mx-[50vw]">
            <img
              src="/services.PNG"
              alt="Services Visual"
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* 4 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-0 mt-16">
            <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
              <img src="/services-icon-1.svg" className="mb-4" />
              <h3 className="text-3xl font-semibold mb-2 text-[#008093]">
                Landing Services
              </h3>
              <p className="text-gray-700 mb-4">
                Supporting your first steps with Salesforce to ensure a smooth
                and successful adoption.
              </p>
              <a
                href="#"
                className="group inline-block font-semibold  relative"
              >
                Learn more
                <span className="block h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
              <img src="/services-icon-2.svg" className="mb-4" />
              <h3 className="text-3xl font-semibold mb-2 text-[#008093]">
                Optimization
              </h3>
              <p className="text-gray-700 mb-4">
                Enhancing Salesforce by tailoring it to the specific needs of
                your business.
              </p>
              <a
                href="#"
                className="group inline-block font-semibold  relative"
              >
                Learn more
                <span className="block h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
              <img src="/services-icon-3.svg" className="mb-4" />
              <h3 className="text-3xl font-semibold mb-2 text-[#008093]">
                Innovation
              </h3>
              <p className="text-gray-700 mb-4">
                Identifying opportunities and overcoming challenges with
                efficient solutions.
              </p>
              <a href="#" className="group inline-block font-semibold relative">
                Learn more
                <span className="block h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
              <img src="/services-icon-4.svg" className="mb-4" />
              <h3 className="text-3xl font-semibold mb-2 text-[#008093]">
                Strategic Growth
              </h3>
              <p className="text-gray-700 mb-4">
                Aligning Salesforce with your business goals to drive
                sustainable growth.
              </p>
              <a href="#" className="group inline-block font-semibold relative">
                Learn more
                <span className="block h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>

          {/* Expand Section */}
          <div className="flex justify-center items-center mt-20 px-6 md:px-0">
            <div className="flex items-start items-center space-x-6 max-w-4xl">
              <img
                src="/services-expand-icon.svg"
                alt="Airplane Icon"
                className="w-30 h-30 object-contain "
              />
              <div className="text-left">
                <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                  <span className="block text-[#474747]">Expand your</span>
                  <span className="block text-[#FF83A9]">
                    in-house capabilities
                  </span>
                </h2>
                <p className="mt-4 text-black text-base md:text-lg max-w-2xl">
                  Our Salesforce experts around the world integrate seamlessly
                  with your team, empowering your internal talents by providing
                  support and training with a business vision that drives your
                  success at every stage.
                </p>
              </div>
            </div>
          </div>

          {/* Final Full-Width Image */}
          <div className="w-full mt-20 px-6 md:px-0">
            <img
              src="/capabilities.PNG"
              alt="Capabilities Image"
              className="w-full h-[250px] object-cover rounded-2xl"
            />
          </div>

          <div className="text-center mt-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#474747]">
              Cloud Expertise
            </h2>
          </div>

          <div className="w-full mt-20 px-6 md:px-0">
            <img
              src="/cloud.PNG"
              alt="Cloud Image"
              className="w-full h-[600px] object-cover rounded-2xl"
            />
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-20 px-6">
            <div className="relative w-[200px] h-[200px] flex justify-center items-center">
              <div className="absolute inset-0  flex justify-center items-center">
                <img
                  src="/services-circle-animated-1.svg"
                  alt="Rotating Circle"
                  className="w-full h-full absolute animate-spin-slow"
                />
                <img
                  src="/services-vibe-logo-1.svg"
                  alt="Inner Image"
                  className="w-full h-full rounded-full object-cover border-4 border-white z-10"
                />
              </div>
            </div>

            <div className="text-left max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-[#474747] mb-4">
                Our way of work
              </h2>
              <p className="text-black text-base md:text-lg">
                At Cloudgaia, we venture beyond the ordinary, aiming to be the
                best by challenging and redefining best practices, while
                including diverse perspectives that enrich our approach and
                foster meaningful collaboration. Guided by our values, we
                believe in the power of our work to contribute to a better
                world, and we enjoy every step of the way, celebrating talent,
                empathy, and shared success as we achieve extraordinary results
                together.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
    </div>
  );
};

export default Services;
