import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Customer_Stories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const [lastScrollY, setLastScrollY] = useState(0);

  const data = [
    {
      description: `"Excellent results in a very short period of time ",
                  title: "Federico Garay"`,
      img: "/logo-johnson-johnson.svg",
    },
    {
      description: `"They work very well as a team, understanding the whole process.The deliverables were very clear",
                  title: "Hernan Boykier"`,
      img: "/logo-la-caja.svg",
    },

    {
      description: `"What we achieved was epic, and I attribute it to the strong chemistry and trust within the team. We all shared the same goal and pushed together to reach where we wanted to be."`,
      title: "Alberto Calvo | Former CEO from Grupo Dexter (Grupo Dabra)",
      img: "/logo-grupo-dexter.svg",
    },
    {
      description: `"Quality, innovation, teamwork, support, schedule, responsible "`,
      title: "Manuel Naon",
      img: "/logo-banco-del-sol.svg",
    },
  ];

  const storyData = [
    {
      url: "/customer-stories/cona-detail",
      flagImg: "/flag-arg.svg",
      userImg: "/stories-cona.webp",
      companyImg: "/cona7.png",
      services: "B2B Commerce | Marketing Cloud | Consumer Goods Cloud +",
      title: "A Scalable Engagement Platform to Power B2B Commerce Growth",
      description:
        "CONA Services transformed its customer engagement platform to help Coca-Cola bottlers deliver a more personalized, connected, and efficient B2B commerce experience — driving growth, automation, and smarter commerce at scale.",
    },
    {
      url: "/customer-stories/ealde-detail",
      flagImg: "/flag-usa.svg",
      userImg: "/53587161679_f0c0a75c22_6k-scaled.jpg",
      companyImg: "/ealde-nuevo-logo-2-2048x597.png",
      services: "Sales Cloud | Experience Cloud | Marketing Cloud",
      title:
        "Automation and Scalability: How EALDE Optimized Its Operations with Salesforce",
      description:
        "EALDE modernized its data model and automated key processes with Salesforce, improving operational efficiency and enhancing the personalization of its educational offering. The result: a more agile, scalable operation ready for the future.",
    },
    {
      url: "/customer-stories/gador-detail",
      flagImg: "/flag-usa.svg",
      userImg: "/stories-gador.webp",
      companyImg: "/logo-gador-2.svg",
      services: "Commerce Cloud B2C | Service Cloud | Marketing Cloud",
      title:
        "+57% Growth in Online Orders: Dexter’s Success in E-Commerce Digitization with Salesforce",
      description:
        "Grupo Dexter, Argentina’s leading sports retailer, transformed its e-commerce experience, streamlining operations and enhancing customer engagement to drive significant growth in online orders.",
    },
    {
      url: "/customer-stories/dexter-detail",
      flagImg: "/flag-arg.svg",
      userImg: "/stories-dexter.webp",
      companyImg: "/logo-grupo-dexter.svg",
      services: "Commerce Cloud B2C | Service Cloud | Marketing Cloud",
      title:
        "+57% Growth in Online Orders: Dexter’s Success in E-Commerce Digitization with Salesforce",
      description:
        "Grupo Dexter, Argentina’s leading sports retailer, transformed its e-commerce experience, streamlining operations and enhancing customer engagement to drive significant growth in online orders.",
    },
  ];

  const images = [
    "/logo-grupo-dexter.svg",
    "/uala9.png",
    "/ypf6.png",
    "/diageo1.png",
    "/cona7.png",
    "/cocacola12.png",
    "/logo-gador-2.svg",
    "/mecardo4.png",
    "/idb2.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, 7000);

    return () => clearInterval(interval);
  }, [data?.length]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? data?.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === data?.length - 1 ? 0 : prev + 1));
  };

  const item = data[currentIndex];

  useEffect(() => {
    setLoaded(true);
  }, []);

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
    <div>
      <div className="relative min-h-screen overflow-x-hidden">
        {/* Blue Right-Angle Triangle in the Top-Right Corner */}
        <div
          className="absolute top-0 right-0 w-72 h-72 bg-[#008093]"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
          aria-hidden="true"
        />

        <div
          className={`fixed top-0 left-0 w-full transition-transform duration-300 ease-in-out z-50 ${
            isHeaderVisible ? "translate-y-6" : "-translate-y-full"
          }`}
        >
          <Header />
        </div>

        <div className="bg-[#f9f9f9]">
          <div className="container mx-auto pt-[100px] px-4 md:px-6 ">
            <div className="px-6 py-10 md:px-10 ">
              <div className="flex items-center text-sm text-gray-700 mt-8">
                <FaHome className="mr-1 text-xl" />
                <span className="mx-1 text-lg font-medium">/</span>
                <span className="text-lg font-semibold cursor-pointer">
                  Resources
                </span>
                <span className="mx-1 text-lg font-medium">/</span>
                <span className="mx-1 text-lg font-medium">
                  Customer Stories
                </span>
              </div>
              <div
                className={`text-5xl font-bold text-[#008093] my-5 transition-transform 
                                    ${
                                      loaded
                                        ? "translate-y-0  duration-300"
                                        : " translate-y-12"
                                    }
                                          `}
              >
                All-in for our clients
              </div>
              <div className="text-2xl leading-tight">
                Discover how we’ve transformed our clients' businesses with
                powerful Salesforce solutions, customized to meet the unique
                needs of each business through a one-team collaborative
                approach. These inspiring stories showcase the amazing outcomes
                we’ve accomplished together, delivering real impact and
                meaningful change. Join them and take your business to the next
                level.
              </div>
            </div>
          </div>
        </div>

        <div className="text-center max-w-4xl mx-auto p-6 flex flex-col text-center min-h-[300px] ">
          <div className="text-2xl text-grey-400">{item?.description}</div>
          <div className="text-3xl text-teal-700 mt-3">{item?.title}</div>
          <div className="mx-auto max-h-20">
            <img src={item?.img} className="block " />
          </div>
          <div className="flex justify-center gap-4 items-center mt-auto pt-6">
            <div
              onClick={handlePrevious}
              className="p-3 bg-yellow-500 text-white rounded-3xl cursor-pointer hover:bg-pink-500"
            >
              <FaArrowLeft />
            </div>
            <div
              onClick={handleNext}
              className="cursor-pointer p-3 bg-yellow-500 text-white rounded-3xl hover:bg-pink-500"
            >
              <FaArrowRight />
            </div>
          </div>
        </div>

        <div className="bg-[#f9f9f9]">
          <div className=" container mx-auto  px-4 md:px-6">
            <div className="px-6 py-10 md:px-10 ">
              <h2
                className={`text-4xl md:text-5xl font-bold text-[#008093] leading-tight max-w-5xl `}
              >
                At Cloudgaia, our dedication to customer success is driven by a
                vibrant VIBE and a total commitment to Salesforce.
              </h2>
              <p className="text-lg md:text-xl text-gray-700 mt-6 max-w-3xl">
                We combine our expertise with a global reach, offering unmatched
                value through strategic pricing, the convenience of the same
                time zone and greater cultural affinity.
              </p>
            </div>
          </div>

          <div className="overflow-hidden py-10 ">
            <div className="flex gap-20 animate-scroll whitespace-nowrap">
              {[...images, ...images].map((src, index) => (
                <img
                  key={index} // Added key for list items
                  src={src}
                  alt={`logo-${index}`}
                  className="h-10 w-auto object-contain"
                />
              ))}
            </div>
          </div>

          <div className=" container mx-auto mt-[100px] px-4 md:px-6">
            <div className="px-6  md:px-10 ">
              {storyData?.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row  ${
                    index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                  }
                                         rounded-xl overflow-hidden my-8`}
                >
                  <div className="lg:w-1/2 w-full h-64 lg:h-auto">
                    <img
                      src={item?.userImg}
                      alt="story"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="lg:w-1/2 w-full p-6 flex flex-col justify-between">
                    <div className="flex items-center gap-3 mb-4">
                      <img
                        src={item?.companyImg}
                        alt="company"
                        className="h-6"
                      />
                      {item?.flagImg && (
                        <img src={item?.flagImg} alt="flag" className="h-4" />
                      )}
                    </div>
                    <div className="text-sm text-pink-600 font-medium mb-2">
                      {item?.services}
                    </div>
                    <div className="text-xl font-semibold text-gray-800 mb-2">
                      {item?.title}
                    </div>
                    <div className="text-gray-600 text-base mb-4">
                      {item?.description}
                    </div>
                    <Link to={item?.url}>
                      <button className="mt-auto self-start bg-yellow-400  font-semibold px-5 py-2 rounded-3xl hover:bg-pink-500 hover:text-white transition">
                        Read the full story
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};