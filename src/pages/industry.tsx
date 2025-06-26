import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  FaBatteryFull,
  FaEnvelope,
  FaHome,
  FaIndustry,
  FaLeaf,
  FaPiggyBank,
  FaPills,
  FaTools,
} from "react-icons/fa";
import Scroll from "@/components/scroll";
// import industries3 from "@/public/industries4.PNG"; // adjust path if different

const Industries = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const current = window.scrollY;
      setIsHeaderVisible(current <= lastScrollY || current < 10);
      setLastScrollY(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      {/* Blue Right-Angle Triangle in the Top-Right Corner */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-[#008093]"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
        aria-hidden="true"
      />

      {/* Sticky Header */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out ${
          isHeaderVisible ? "translate-y-6" : "-translate-y-full"
        }`}
      >
        <Header />
      </div>

      {/* Main Content */}
      <div className="container mx-auto mt-20 px-4 py-10 md:px-6">
        <div className="px-6 md:px-10 py-10">
          <div className="flex items-center text-sm text-gray-800 mb-3 mt-10">
            <FaHome className="mr-1 text-xl" />
            <span className="mx-1 text-lg font-medium">/</span>
            <span className="text-lg font-semibold">Industries</span>
          </div>

          {/* Title */}
          <div className="mt-5">
            <h1 className="text-2xl md:text-6xl font-bold text-[#008093] mb-4">
              We match strong industry knowledge
              <br />
              with unparalleled Salesforce expertise
            </h1>
            <p
              style={{ fontFamily: "sans-serif,dm-sans" }}
              className="text-[#474747] text-base md:text-2xl mt-5"
            >
              We have implemented, developed, and customized Salesforce for
              hundreds of companies, understanding the business
              <br />
              needs of each industry and addressing challenges by considering
              their maturity within the Salesforce ecosystem.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full mt-4">
        <img
          src="industries1.PNG"
          alt="visual"
          className="w-full h-[500px] object-cover"
        />
      </div>
      <div className="bg-[#f9f9f9]">
        <div className="container mx-auto px-4 py-20 md:px-6">
          <div className="px-6 md:px-10 py-10">
            {/* Card Grid Section */}
            <div className="mt-16 flex justify-center">
              <div className="w-full flex flex-col items-center gap-2">
                {/* Row 1 */}
                <div className="flex gap-2 w-full">
                  {[
                    {
                      // icon: <FaIndustry className="text-[#FF83A9] text-3xl mb-2" />,
                      icon: (
                        <img src="/industries-icon-1.svg" className="mb-2" />
                      ),
                      title: "Retail & Consumer Goods",
                      description:
                        "We empower retail and consumer goods companies to enhance customer engagement and streamline operations with customized Salesforce solutions tailored to their unique business needs.",
                    },
                    {
                      icon: (
                        <img src="/industries-icon-2.svg" className="mb-2" />
                      ),
                      title: "Financial Services",
                      description:
                        "We help financial service providers increase customer satisfaction and improve operational efficiency through secure, data-driven Salesforce solutions designed for growth and compliance.",
                    },
                  ].map((card, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-white  rounded-lg shadow-md p-6 min-h-[220px]"
                    >
                      {card.icon}
                      <h4 className="text-4xl font-bold text-[#008093] mb-1">
                        {card.title}
                      </h4>
                      <p
                        style={{ fontFamily: "sans-serif,dm-sans" }}
                        className="text-[#474747] text-lg leading-tight"
                      >
                        {card.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Row 2 */}
                <div className="flex gap-2 w-full">
                  {[
                    {
                      icon: (
                        <img src="/industries-icon-3.svg" className="mb-2" />
                      ),
                      title: "Agriculture & Mining",
                      description:
                        "We enable agriculture and mining businesses to manage resources efficiently and strengthen partnerships through industry-specific Salesforce solutions.",
                    },
                    {
                      icon: (
                        <img src="/industries-icon-4.svg" className="mb-2" />
                      ),
                      title: "Communications, Media & Telco",
                      description:
                        "We help communications, media, and telecom companies elevate customer experiences and streamline processes with Salesforce-driven, flexible solutions.",
                    },
                    {
                      icon: (
                        <img src="/industries-icon-5.svg" className="mb-2" />
                      ),
                      title: "Health & Life Science", // fixed typo
                      description:
                        "Our solutions for health and life sciences integrate Salesforce to improve patient experiences, streamline workflows, and drive innovation in healthcare.",
                    },
                  ].map((card, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-white rounded-lg shadow-md p-6 min-h-[220px]"
                    >
                      {card.icon}
                      <h4 className="text-4xl font-bold text-[#008093] mb-1">
                        {card.title}
                      </h4>
                      <p
                        style={{ fontFamily: "sans-serif,dm-sans" }}
                        className="text-[#474747] text-lg leading-tight"
                      >
                        {card.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Row 3 */}
                <div className="flex gap-2 w-full">
                  {[
                    {
                      icon: (
                        <img src="/industries-icon-6.svg" className="mb-2" />
                      ),
                      title: "Manufacturing & Automotive",
                      description:
                        "Our Salesforce solutions help manufacturing and automotive industries boost productivity, improve supply chain management, and enhance customer satisfaction at every stage.",
                    },
                    {
                      icon: (
                        <img src="/industries-icon-7.svg" className="mb-2" />
                      ),
                      title: "Energy",
                      description:
                        "We support energy companies in managing complex operations and optimizing customer relationships by implementing robust, scalable Salesforce solutions.",
                    },
                  ].map((card, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-white  rounded-lg shadow-md p-6 min-h-[220px]"
                    >
                      {card.icon}
                      <h4 className="text-4xl font-bold text-[#008093] mb-1">
                        {card.title}
                      </h4>
                      <p
                        style={{ fontFamily: "sans-serif,dm-sans" }}
                        className="text-[#474747] text-lg leading-tight"
                      >
                        {card.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Scrolling Logos */}
        <div className="mt-10">
          <Scroll />
        </div>

        <div className="container mx-auto  px-4 py-10 md:px-6">
          <div className="px-6 md:px-10 py-10">
            <div className="text-center mt-10">
              <h2 className="text-4xl md:text-5xl font-bold text-[#474747] mt-13">
                Industry Expertise
              </h2>
            </div>

            {/* Second Image */}
            <div className="mt-8 flex justify-center">
              <img
                src="/industries2.PNG"
                alt="Image"
                className="w-full max-w-[1200px] h-[400px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          src="/industries4.png"
          alt="Salesforce Challenge"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h2 className="text-6xl md:text-5xl font-bold mb-6">
            What's your <br />
            Salesforce Challenge?
          </h2>
          <button className="bg-[#FF83A9] text-white px-6 py-3 rounded-full font-semibold transition duration-300 hover:bg-white hover:text-black">
            Contact an expert
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Industries;
