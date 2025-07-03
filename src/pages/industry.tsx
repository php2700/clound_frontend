import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaBatteryFull, FaEnvelope, FaHome } from "react-icons/fa";
import Scroll from "@/components/scroll";
import IndustryCollapse from "@/components/industry_expertise";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// import { Link } from "lucide-react";
// import industries3 from "@/public/industries4.PNG"; // adjust path if different

const stories = [
  {
    subtitle: "Transforming Client Services",
    logo: "CONA",
    logoSubtext: "SERVICES LLC",
    title: "One of the biggest B2B Commerce Lightning projects in the world",
    bgColor: "bg-white",
    textColor: "text-[#008093]",
    buttonStyle:
      "bg-[#ff83a9] text-white border-none hover:bg-pink-300 hover:text-pink-800",
    link: "/customer-stories/cona-detail",
  },
  {
    subtitle: "Unlocking Insights",
    logo: "Gador",
    logoSubtext: "",
    title: "Transforming Experiences with a 360° Customer View",
    bgColor: "bg-white",
    textColor: "text-[#008093]",
    buttonStyle:
      "bg-[#ff83a9] text-white border-none hover:bg-pink-300 hover:text-pink-800",
    link: "/customer-stories/gador-detail",
  },
  {
    subtitle: "Empowering Success",
    logo: "GRUPO DEXTER",
    logoSubtext: "",
    title:
      "+57% Growth in Online Orders: Dexter's Success in E-Commerce Digitization with Salesforce",
    bgColor: "bg-white",
    textColor: "text-[#008093]",
    buttonStyle:
      "bg-[#ff83a9] text-white border-none hover:bg-pink-300 hover:text-pink-800",
    link: "/customer-stories/dexter-detail",
  },
];

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
        className="absolute top-0 right-0 w-72 h-72 bg-[#008093]"
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
          <div className="flex items-center text-sm text-[#474747] mb-3 mt-10">
            <Link to="/">
              <img
                src="/bread-home.svg"
                className="mr-1 text-xl cursor-pointer"
                aria-hidden="true"
              />
            </Link>
            <span className="mx-1 text-base font-bold">&nbsp;/</span>
            <span className="text-base font-bold">&nbsp;Industries</span>
          </div>

          {/* Title */}
          <div>
            <h1
              style={{ lineHeight: "1em" }}
              className="text-2xl md:text-6xl font-bold text-[#008093] my-4"
            >
              We match strong industry knowledge
              <br />
              with unparalleled Salesforce expertise
            </h1>
            <p
              style={{ lineHeight: "1.2em" }}
              className="text-[#474747] text-base md:text-2xl mt-5"
            >
              We have implemented, developed, and customized Salesforce for
              hundreds of companies, understanding the business needs of each
              industry and addressing challenges by considering their maturity
              within the Salesforce ecosystem.
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
        <div className="container mx-auto px-4 py-16 md:px-6">
          <div className="px-6 md:px-10 py-10">
            {/* Card Grid Section */}
            <div className="flex justify-center">
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
                      <h4
                        style={{ fontSize: "40px", lineHeight: "1em" }}
                        className="font-semibold text-[#008093] mb-1"
                      >
                        {card.title}
                      </h4>
                      <p
                        style={{
                          lineHeight: "1.2em",
                        }}
                        className="text-[#474747] text-lg pt-3 "
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
                      <h4
                        style={{ fontSize: "40px", lineHeight: "1em" }}
                        className="font-semibold text-[#008093] mb-1"
                      >
                        {card.title}
                      </h4>
                      <p
                        style={{
                          lineHeight: "1.2em",
                        }}
                        className="text-[#474747] text-lg pt-3"
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
                      <h4
                        style={{ fontSize: "40px", lineHeight: "1em" }}
                        className="font-semibold text-[#008093] mb-1"
                      >
                        {card.title}
                      </h4>
                      <p
                        style={{
                          lineHeight: "1.2em",
                        }}
                        className="text-[#474747] text-lg pt-3"
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
        <div>
          <Scroll />
        </div>

        <div className="container mx-auto  px-4 py-10 md:px-6">
          <div className="px-6 md:px-10 py-10">
            <div className="text-center mt-10">
              <h2 className="text-4xl md:text-6xl font-bold text-[#474747] mt-13">
                Industry Expertise
              </h2>
              <IndustryCollapse />
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          src="/industries4.png"
          alt="Salesforce Challenge"
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h2
            className="text-6xl md:text-6xl font-bold mb-4 text-[#f9f9f9]"
            style={{ lineHeight: "1em" }}
          >
            What's your <br />
            Salesforce Challenge?
          </h2>
          <Link
            to="/contact"
            className="bg-[#FF83A9] text-white px-6 py-2 rounded-full font-semibold transition duration-300 hover:bg-white hover:text-[#474747]"
          >
            Contact an expert
          </Link>
        </div>
      </div>
      <section className="relative bg-gradient-to-b from-[#008093] to-[#006f7a] pt-24 pb-20 overflow-hidden">
        {/* Decorative Full-Width Image */}
        <img
          src="https://cloudgaia.com/storage/2025/01/home-success-overlay-1.svg"
          alt="Decorative"
          className="absolute bottom-0 left-0 right-0 w-full z-0 pointer-events-none mb-[-20px]"
        />

        <div className="relative z-10 container mx-auto  px-4 md:px-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-6xl font-bold text-white mb-8 leading-tight pt-3">
              Success stories we're proud to share
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl gap-6 mb-12 mx-auto">
            {stories.map((story, index) => (
              <div
                key={index}
                className={`${story.bgColor} group rounded-2xl p-8 hover:bg-[#fcc000] shadow-xl flex flex-col justify-between h-full transform transition-all duration-300`}
              >
                <div className="flex justify-between items-center">
                  <p className="text-[14px] font-bold text-[#ff83a9] group-hover:text-[#474747] mb-3 tracking-wide transition-colors">
                    {story.subtitle}
                  </p>

                  <div className="mb-6">
                    <div className="flex items-center gap-2">
                      <div>
                        <div className="text-lg font-bold text-red-600 group-hover:text-[#474747] transition-colors duration-300">
                          {story.logo}
                        </div>
                        {story.logoSubtext && (
                          <div className="text-[8px] font-semibold text-red-600 group-hover:text-black transition-colors duration-300">
                            {story.logoSubtext}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <h3
                  className={`text-3xl font-bold ${story.textColor} mb-6 leading-tight`}
                >
                  {story.title}
                </h3>

                <Link to={story.link}>
                  <Button
                    variant="outline"
                    className={`${story.buttonStyle} rounded-full font-bold text-base hover:bg-white hover:text-[#474747] py-3 px-6`}
                  >
                    Discover this story
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center" style={{ marginBottom: "4%" }}>
            <Link to="/resources/customer-stories">
              <Button
                variant="outline"
                className="text-[#474747] text-[16px] border-2 border-none hover:bg-pink-400 hover:text-white rounded-full font-bold py-3 px-8 transition-all duration-300 transform hover:scale-105"
              >
                View all success stories
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Industries;
