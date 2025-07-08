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
      description: `"Implementing Salesforce with our global teams has been a game changer. It brought much-needed visibility across sales, service, and partner operations. The integration streamlined our customer journey from lead to delivery, and empowered our teams with real-time insights."`,
      title: "Marc Pertios, Global VP Sales Operations, Schneider Electric",
      img: "/electric.png",
    },
    {
      description: `"Salesforce B2B Commerce Cloud has transformed how we manage our bulk school and institutional partnerships. With a single source of truth for pricing, inventory, and custom bundles, our sales cycle has never been more efficient."`,
      title: "Rohit Sharma, Head of Strategic Partnerships, WhiteHat Jr",
      img: "/whitehat.png",
    },
    {
      description: `"Salesforce Nonprofit Cloud has brought a new level of transparency and efficiency to our operations. We can now manage stakeholder engagement, case records, and compliance reviews in one centralized system."`,
      title: "Amanda Crowley, Director – Operations, ACNC",
      img: "/ACNC.jpg",
    },

    {
      description: `"Salesforce has completely redefined how we manage our restaurant and merchant onboarding pipeline. With automated lead routing, real-time visibility, and smart analytics, our sales teams are closing faster and smarter."`,
      title: "Sophia Lin, Director of SMB Sales, DoorDash",
      img: "/doordash.png",
    },
  ];

  const storyData = [
    {
      url: "/customer-stories/cona-detail",
      // flagImg: "/flag-usa (1).svg",
      userImg: "/students.png",
      companyImg: "/kalpan.png",
      services: "B2B Commerce | Marketing Cloud | Consumer Goods Cloud +",
      title: "A Scalable Engagement Platform to Power B2B Commerce Growth",
      description:
        " Kaplan International transformed its global student and partner engagement platform to deliver a more personalized, connected, and efficient B2B commerce experience — driving growth, automation, and smarter commerce at scale.",
    },
    {
      url: "/customer-stories/ealde-detail",
      // flagImg: "/spain.png",
      // userImg: "/53587161679_f0c0a75c22_6k-scaled.jpg",
      userImg: "/Ai image laptop people.png",
      companyImg: "/doordash.png",
      services: "Sales Cloud | Experience Cloud | Marketing Cloud",
      title:
        "Automation and Scalability: How Optimized Its Operations with Salesforce",
      description:
        "DoorDash modernized its data infrastructure and automated critical workflows with Salesforce, boosting operational efficiency and enabling more personalized merchant and customer experiences. The result: a more agile, scalable platform built for high-growth, real-time commerce.",
    },
    {
      url: "/customer-stories/gador-detail",
      // flagImg: "/flagarg.svg",
      userImg: "/stories-gador.webp",
      companyImg: "/electric-schneider.png",
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
          <div className="container mx-auto pt-[130px] px-4 md:px-6 ">
            <div className="px-6 py-20 md:px-10 ">
              <div className="flex items-center text-sm text-[#474747] mt-8">
                <Link to="/">
                  <img
                    src="/bread-home.svg"
                    className="mr-1 text-xl cursor-pointer"
                    aria-hidden="true"
                  />
                </Link>
                <span className="mx-1 text-base font-bold">&nbsp;/</span>
                <span className="text-base font-bold cursor-pointer">
                  &nbsp;Resources
                </span>
                <span className="mx-1 text-base font-bold">&nbsp; /</span>
                <span className="mx-1 text-base font-bold">
                  &nbsp; Customer Stories
                </span>
              </div>
              <div
                className={`text-2xl md:text-6xl racking-tight font-bold text-[#008093] my-4 transition-transform
                                    ${
                                      loaded
                                        ? "translate-y-0  duration-300"
                                        : " translate-y-12"
                                    }
                                          `}
              >
                All-in for our clients
              </div>
              <div
                style={{
                  lineHeight: "1.2em",
                }}
                className="text-2xl text-[#474747] my-4 pb-10"
              >
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

        <div className="text-center max-w-4xl mx-auto py-6 my-10 flex flex-col text-center min-h-[350px] ">
          <div
            style={{ lineHeight: "1.2em" }}
            className="text-2xl text-[#474747]"
          >
            {item?.description}
          </div>
          <div
            style={{ lineHeight: "1.2em" }}
            className="text-3xl text-[#008093] mt-3"
          >
            {item?.title}
          </div>
          <div className="mx-auto max-h-20">
            <img src={item?.img} className="block h-20" />
          </div>
          <div className="flex justify-center gap-4 items-center mt-auto pt-4">
            <div
              onClick={handlePrevious}
              className="p-3 bg-[#fcc000] text-white rounded-3xl cursor-pointer hover:bg-[#FF83A9]"
            >
              <FaArrowLeft />
            </div>
            <div
              onClick={handleNext}
              className="cursor-pointer p-3 bg-[#fcc000] text-white rounded-3xl hover:bg-[#FF83A9]"
            >
              <FaArrowRight />
            </div>
          </div>
        </div>

        <div className="bg-[#f9f9f9]">
          <div className=" container mx-auto py-10  px-4 md:px-6">
            <div className="px-6 py-10 md:px-10 ">
              <h2
                style={{ fontFamily: "sans-serif,dm-sans", lineHeight: "1em" }}
                className={`text-4xl md:text-6xl font-bold text-[#008093]   `}
              >
                At Codescience, our dedication to customer success is driven by
                a vibrant VIBE and a total commitment to Salesforce.
              </h2>
              <p
                style={{ lineHeight: "1.2em" }}
                className="text-lg md:text-2xl text-[#474747] mt-5 "
              >
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
                      className="w-full h-[45vh] object-cover"
                    />
                  </div>
                  <div className="lg:w-1/2 w-full p-6 flex flex-col justify-between">
                    <div className="flex items-center gap-3 mb-4">
                      <img 
                        src={item?.companyImg} style={{ width: "150px", height: "70px" }}
                        alt="company"
                        className="h-6"
                      />
                      {item?.flagImg && (
                        <img src={item?.flagImg} alt="flag" className="h-4" />
                      )}
                    </div>
                    <div
                      style={{ lineHeight: "1.2em" }}
                      className="text-lg text-[#ff83a9]  mb-2"
                    >
                      {item?.services}
                    </div>
                    <div
                      style={{ lineHeight: "1.2em" }}
                      className="text-3xl font-bold text-[#474747] mb-2"
                    >
                      {item?.title}
                    </div>
                    <div
                      style={{
                        lineHeight: "1.2em",
                      }}
                      className="text-[#474747] text-lg mb-4"
                    >
                      {item?.description}
                    </div>
                    <Link to={item?.url}>
                      <button className="mt-auto self-start bg-[#fcc000] text-base text-[#474747]  font-bold px-5 py-2 rounded-3xl hover:bg-[#ff83a9] hover:text-white transition">
                        Read the full story
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="relative w-full h-[300px] bg-cover bg-center"
            style={{ backgroundImage: "url('/stories-banner-back.webp')" }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>

            <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
              <h2 className="text-3xl md:text-6xl font-bold mb-4 text-[#f9f9f9]">
                Let's talk!
              </h2>
              <Link
                to="/contact"
                className="bg-[#ff83a9] text-[#f9f9f9] px-6 py-2 rounded-full text-lg font-bold hover:bg-white hover:text-[#474747] transition"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
