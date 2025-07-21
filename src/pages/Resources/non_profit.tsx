import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaArrowLeft,
  FaCheck,
  FaBolt,
  FaChartLine,
  FaGlobe,
} from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { text } from "stream/consumers";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;

const ProductsIcon = () => (
  <svg
    className="h-8 w-8 text-pink-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    {" "}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9.75l-9-5.25"
    />{" "}
  </svg>
);
const ConversionIcon = () => (
  <svg
    className="h-8 w-8 text-pink-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    {" "}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
    />{" "}
  </svg>
);
const UsersIcon = () => (
  <svg
    className="h-8 w-8 text-pink-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    {" "}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
    />{" "}
  </svg>
);
const OrdersIcon = () => (
  <svg
    className="h-8 w-8 text-pink-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    {" "}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
    />{" "}
  </svg>
);
const iconComponents = {
  products: ProductsIcon,
  conversion: ConversionIcon,
  users: UsersIcon,
  orders: OrdersIcon,
};

export const NonProfit = () => {
  const navigate = useNavigate();
    const [isRobot, setIsRobot] = useState(false);

  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const [lastScrollY, setLastScrollY] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    country: "",
    message: "",
  });

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

    const handleFormSubmit = (e) => {
 e.preventDefault();
    axios
      .post(`${API_BASE_URL}api/user/non-profit`, formData)
      .then((res) => {
        setFormData({
          firstName: "",
          lastName: "",
          company:"",
          email: "",
          country: "",
          message: "",
        });
        setIsRobot(false);
        // toast.success("Details_added", {
        //   position: "top-right",
        // });
        navigate("/thank-you");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // --- All dynamic data for sections ---
  const resultsData = {
    title: "Delivering exceptional results",
    stats: [
      { icon: "products", value: "35%", label: "Increase in Donor Retention" },
      {
        icon: "conversion",
        value: "<70%",
        label: " Reduction in Manual Reporting Time",
      },
      {
        icon: "users",
        value: "120,000+",
        label: "Improved Volunteer Engagement",
      },
      { icon: "orders", value: "65,000+", label: "Orders per week" },
    ],
  };
  const solutionsAndBenefitsData = {
    youtubeVideoId: "XyfRqxt5aK0",
    solutionsTitle: "Salesforce solutions",
    solutionItems: [
      { text: "Nonprofit Cloud", checked: true },
      { text: "Marketing Cloud", checked: true },
      { text: "Service Cloud", checked: true },
      { text: "Service Lightning", checked: true },
      { text: "SAP Integration", checked: false },
      { text: "Copado", checked: false },
    ],
    benefitCards: [
      {
        imgSrc: "/industries-icon-7.svg",
        title: "35% Increase in Donor Retention",
        description:
          "Personalized, timely engagement driven by better segmentation and automation led to a significant improvement in donor loyalty.",
      },
      {
        imgSrc: "/icon-clock-pink.svg",
        title: "Increased Transparency",
        description:
          "Stakeholders could now clearly visualize the link between funding and outcomes, building trust and fueling future giving.",
      },
      {
        imgSrc: "/icon-global.svg",
        title: "Scalable architecture enabling rapid global expansion",
        description:
          "Punchout integrations streamline ordering and support expansion into new markets.",
      },
    ],
  };
  const testimonialsData = [
    {
      name: "Emma Hayes",
      title: "Director of Programs, DonatePlus",
      //   logoSrc: "/doordash.png",
      quote: `"Salesforce Nonprofit Cloud has transformed how we operate. We’re more connected, more efficient, and more impactful. Our supporters now feel like true partners in our mission."`,
    },
    {
      name: "Walson Dmello",
      title: "Salesforce Specialist",
      logoSrc: "/code-science-logo.svg",
      quote: `"We love tackling tough challenges, and Code Science Services presented us with an exciting one. We delved into every aspect of their business and worked closely to understand their specific needs. We are proud to say that together we designed a strategy that is transforming the shopping experience for all bottlers."`,
    },
  ];
  const benefitIcons = {
    bolt: FaBolt,
    revenue: FaChartLine,
    expansion: FaGlobe,
  };
  const getEmbedUrl = (url) => {
    try {
      const urlObj = new URL(url);
      let videoId = "";
      if (urlObj.hostname === "youtu.be") {
        videoId = urlObj.pathname.slice(1);
      } else if (
        urlObj.hostname === "www.youtube.com" ||
        urlObj.hostname === "youtube.com"
      ) {
        videoId = urlObj.searchParams.get("v");
      }
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }
    } catch (e) {
      console.error("Invalid URL", e);
    }
    return `https://www.youtube.com/embed/dQw4w9WgXcQ`;
  };
  const mainVideoEmbedUrl = getEmbedUrl(
    solutionsAndBenefitsData.youtubeVideoId
  );
  const featuredVideoId = "XyfRqxt5aK0"; // Assuming a different video ID for this section

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsHeaderVisible(currentScrollY <= lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handlePage = (e) => {
    navigate("/resources/customer-stories");
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    // Top-level wrapper
    <>
      <div className="relative min-h-screen" style={{ marginTop: "140px" }}>
        <div
          className={`fixed top-0 left-0 w-full transition-transform duration-300 ease-in-out z-50 ${
            isHeaderVisible ? "translate-y-6" : "-translate-y-full"
          }`}
        >
          <Header />
        </div>
        {/* Main container for all CENTERED content */}
        <div className="bg-white max-w-7xl mx-auto sm:p-8 md:px-6 mx-auto  px-4 ">
          {/* Navigation & Breadcrumb */}

          {/* Header Section */}
          <header className="pb-8  pt-2">
            <div className="flex items-center text-sm text-gray-700 mt-8">
              <img src="/bread-home.svg" className="mr-1 text-xl ml-2" />
              <span className="mx-1 text-base font-bold">/</span>
              <span
                className="text-base font-bold cursor-pointer"
                onClick={handleHome}
              >
                Resources
              </span>
              <span className="mx-1 text-base font-bold">/</span>
              <span
                className="mx-1 text-base font-bold cursor-pointer"
                onClick={handlePage}
              >
                Customer Stories
              </span>
              <span className="mx-1 text-base font-bold">/</span>
              <span className="mx-1 text-base font-bold">DonatePlus</span>
            </div>
            <div className="mx-1 flex items-center text-lg font-medium mt-4">
              <img src="/flag-usa (1).svg" className="w-5 h-5" alt="USA Flag" />
              <span className="mx-1 text-[24px] text-[#474747] font-semibold ml-2">
                DonatePlus
              </span>
            </div>
            {/* <div className="font-medium text-gray-800 mb-2.5"><img src="/flag-usa (1).svg" /><span> CONA Services - US</span></div> */}
            <h1
              className="text-4xl md:text-6xl font-bold text-[#008093]  mt-5 mb-2"
              style={{ lineHeight: "1em" }}
            >
              Empowering growth and transparency with an intelligent nonprofit
              engagement system
            </h1>
            <div className="flex items-center gap-3 mb-4 text-[24px] text-[#474747]">
              {" "}
              <img src="/logo-salesforce.svg" />{" "}
              <span
                style={{ lineHeight: "1.2em" }}
                className="text-2xl text-[#474747]"
              >
                Nonprofit Cloud | Marketing Cloud
              </span>
            </div>
            <p
              style={{ lineHeight: "1.2em" }}
              className="text-lg text-lg my-10 text-[#474747]"
            >
              Empowering nonprofit innovation with Salesforce — DonatePlus
              scales donor relationships, impact tracking, and volunteer
              engagement through a unified digital solution.
            </p>
          </header>
          {/* Main Content Grid */}
          <main className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="bg-white text-[#008093] p-8 rounded-lg border border-gray-200 flex flex-col justify-start">
              <span className="text-3xl mb-4">
                <img src="/icon-info (13).svg"></img>{" "}
              </span>
              <h2
                style={{ lineHeight: "1.2em" }}
                className="font-semibold text-[#008093] text-[40px]  mb-4"
              >
                About DonatePlus Services
              </h2>
              {/* <p
                className="text-[#f9f9f9] leading-relaxed mb-4"
                style={{ lineHeight: "1.2em" }}
              >
                CONA Services is the leading IT support organization for the{" "}
                <strong className="font-semibold text-[#f9f9f9]">
                  11 largest Coca-Cola bottlers in North America.
                </strong>{" "}
                They provide solutions for bottlers to optimally manage their
                day-to-day business and refresh the world.
              </p> */}
              <p
                style={{ lineHeight: "1.2em" }}
                className="text-[#474747] text-lg"
              >
                {" "}
                DonatePlus is a dynamic nonprofit organization based in the
                U.S., focused on connecting donors, volunteers, and grassroots
                organizations to maximize impact in underserved communities.
                With programs ranging from education and healthcare to
                sustainable livelihoods, their mission is to ensure every dollar
                and every volunteer hour counts
              </p>
              <p
                style={{ lineHeight: "1.2em" }}
                className="text-[#474747] text-lg mt-4"
              >
                As their operations scaled, the team at DonatePlus realized
                their existing systems couldn’t support the growing complexity
                of donor management, volunteer tracking, and impact reporting.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/image (8).jpg"
                alt="Store owners with a tablet"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-[#ff83a9] p-8 rounded-lg">
              <span className="text-3xl mb-4">
                <img src="/icon-clock (17).svg" />
              </span>
              <h2
                style={{ fontSize: "40px", lineHeight: "1em" }}
                className="font-semibold text-[#F9F9F9] mb-4 mt-[20px]"
              >
                The Challenge
              </h2>
              <p
                className="text-[#f9f9f9] text-lg "
                style={{ lineHeight: "1.2em" }}
              >
                DonatePlus faced several limitations in their legacy systems:
              </p>
              <ul className="list-disc list-inside text-[#f9f9f9] text-base my-4">
                <li>
                  Fragmented donor and volunteer databases across spreadsheets
                  and disconnected platforms.
                </li>
                <li>
                  No unified view of constituent relationships, leading to
                  inconsistent communication and missed engagement
                  opportunities.
                </li>
                <li>
                  Manual donation tracking and reporting, which drained
                  resources and caused delays in transparency to donors and
                  grant providers.
                </li>
                <li>
                  Difficulty in capturing program outcomes and showcasing
                  measurable impact.
                </li>
              </ul>
              <p
                className="text-[#f9f9f9] text-lg "
                style={{ lineHeight: "1.2em" }}
              >
                Their leadership sought a robust platform that could centralize
                operations, enhance transparency, and provide data-driven
                insights into fundraising and program delivery.
              </p>
            </div>
            <div className="bg-[#008093] text-[f9f9f9] text-white p-8 rounded-lg">
              <span className="text-3xl mb-4">
                <img src="/icon-solution.svg" />
              </span>
              <h2 className="text-[#f9f9f9] text-[40px] font-semibold">
                The Solution
              </h2>
              <p
                style={{ lineHeight: "1.2em" }}
                className="text-[#f9f9f9] text-lg mb-4"
              >
                Working closely with the DonatePlus leadership, our team led the
                end-to-end implementation of Salesforce Nonprofit Cloud tailored
                to their mission-driven needs. Key milestones included:
              </p>
              <p
                style={{ lineHeight: "1.2em" }}
                className="text-[#f9f9f9] text-lg mb-4"
              >
                <strong>Constituent 360</strong>
                <br /> We unified donor, volunteer, and partner data using the
                Nonprofit Success Pack (NPSP). The result was a holistic view of
                every supporter’s engagement, from donations to event attendance
                and volunteer hours.
              </p>
              <p
                style={{ lineHeight: "1.2em" }}
                className="text-[#f9f9f9] text-lg mb-4"
              >
                <strong> Donation Management Automation</strong>
                <br /> Recurring and one-time donations were streamlined using
                customizable gift entry templates, payment processor
                integrations, and automation via Salesforce Flow. Real-time
                dashboards gave the team immediate visibility into campaign
                performance.
              </p>
              <p
                style={{ lineHeight: "1.2em" }}
                className="text-[#f9f9f9] text-lg mb-4"
              >
                <strong>Volunteer & Grant Tracking </strong> <br />
                We set up custom volunteer tracking and grant lifecycle
                management, enabling program managers to monitor participation
                and funding milestones with precision.
              </p>
              <p
                style={{ lineHeight: "1.2em" }}
                className="text-[#f9f9f9] text-lg mb-4"
              >
                <strong> Experience Cloud Portal </strong>
                <br /> A self-service portal was developed using Experience
                Cloud, allowing donors and volunteers to view their activity
                history, download receipts, update preferences, and explore
                impact stories.
              </p>
              <p
                style={{ lineHeight: "1.2em" }}
                className="text-[#f9f9f9] text-lg mb-4"
              >
                <strong> Impact Reporting </strong>
                <br /> Program impact metrics were digitized and tied directly
                to donations, offering rich, real-time impact reports to
                internal stakeholders and external donors alike.
              </p>
            </div>
          </main>
          {/* Results Section */}
          <section className="mt-12">
            <div className="bg-[#474747] text-[#f9f9f9] text-center p-6 rounded-lg shadow-lg text-[40px]">
              <h2 className=" text-[40px]  font-semibold flex items-center justify-center gap-4">
                <span>
                  <img src="/icon-stars-white.svg"></img>
                </span>
                {resultsData.title}
              </h2>
            </div>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-2">
              {resultsData.stats.map((stat) => {
                const Icon = iconComponents[stat.icon];
                return (
                  <div
                    key={stat.label}
                    className="bg-white border border-gray-200 rounded-lg p-6 text-center flex flex-col items-center justify-start shadow-sm hover:shadow-lg transition-shadow"
                  >
                    {Icon && <Icon />}
                    <p className="mt-4 text-2xl md:text-3xl font-bold text-[#008093]">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm md:text-base text-gray-500">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
          {/* Coca-Cola Video Section */}
          {/* <section className="mt-12">
            <div className="relative rounded-lg shadow-xl overflow-hidden">
              <div
                className="relative w-full"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={mainVideoEmbedUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="absolute top-0 right-0 p-4 md:p-6 bg-gradient-to-l from-black/30 to-transparent rounded-tr-lg">
                <img
                  src="/logo-color.svg"
                  alt="Cloudgaia Logo"
                  className="h-8 md:h-10"
                />
              </div>
            </div>
          </section> */}
          {/* Solutions and Benefits Section */}
          <section className="mt-16 ">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8  ">
              {/* <div
                className="relative w-full rounded-lg overflow-hidden shadow-lg bg-[#008093]"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  className="bg-[#008093] absolute top-0 left-0 w-full h-full"
                  src={`${getEmbedUrl(
                    featuredVideoId
                  )}?autoplay=1&mute=1&loop=1&playlist=${featuredVideoId}&controls=1`}
                  title="Featured YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div> */}
              <div className="bg-[#008093] text-white p-8 rounded-lg shadow-lg">
                <h2 style={{ fontSize: "40px" }} className=" font-semibold ">
                  {solutionsAndBenefitsData.solutionsTitle}
                </h2>
                <ul className="mt-6 space-y-3">
                  {solutionsAndBenefitsData.solutionItems.map((item) => (
                    <li key={item.text} className="flex items-center text-lg ">
                      {item.checked ? (
                        <FaCheck className="mr-3 text-[#474747] flex-shrink-0" />
                      ) : (
                        <div className="w-[14px] mr-3 flex-shrink-0"></div>
                      )}
                      <span style={{ lineHeight: "1em" }} className="text-lg">
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 ">
              {solutionsAndBenefitsData.benefitCards.map((card) => (
                <div
                  key={card.title}
                  className="bg-[#474747] text-[#f9f9f9] p-8 rounded-lg shadow-lg"
                >
                  <img
                    src={card.imgSrc}
                    alt={card.title}
                    className="h-12 w-12 mb-5"
                    loading="lazy"
                  />
                  <h3
                    style={{ lineHeight: "1.2em" }}
                    className="text-2xl font-bold text-white mb-3"
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{ lineHeight: "1.2em" }}
                    className="leading-relaxed text-lg"
                  >
                    {card.description}
                  </p>
                </div>
              ))}
              {/* {solutionsAndBenefitsData.benefitCards.map((card) => { const Icon = benefitIcons[card.imgSrc]; return (<div key={card.title} className="bg-[#474747] text-[#f9f9f9] p-8 rounded-lg shadow-lg">{Icon && <Icon className="text-[#f9f9f9] text-4xl mb-5" />}<h3 className="text-2xl font-bold text-white mb-3">{card.title}</h3><p className="leading-relaxed">{card.description}</p></div>); })} */}
            </div>
          </section>
          {/* Testimonials Section */}
          <section className="mt-16 pt-12 border-t border-gray-200">
            <div className="space-y-16">
              {testimonialsData.map((testimonial, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
                >
                  <blockquote className="md:col-span-2 text-[#474747] text-lg md:text-xl leading-relaxed">
                    <p>{testimonial.quote}</p>
                  </blockquote>
                  <div className="md:col-span-1 md:px-8">
                    <div className="font-bold text-xl text-[#474747]">
                      {testimonial.name}
                    </div>
                    <div className="text-[#474747]">{testimonial.title}</div>
                    {testimonial?.logoSrc && (
                      <img
                        src={testimonial.logoSrc}
                        alt={`${testimonial.name}'s company logo`}
                        style={{ width: "", height: "80px" }}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* --- FULL-WIDTH CONTACT FORM SECTION --- */}
        <section className="relative py-20 text-white bg-gray-900">
          <div className="absolute inset-0 z-0">
            <img
              src="/conabannerback.webp"
              alt="Abstract background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/90 bg-[url('/stories-cona-banner-back.webp')] bg-cover bg-center">
              <h2 className=" text-[35px] text-center font-bold mt-12 tracking-tight whitespace-nowrap  mr]">
                Want to see how we can help you scale your Non Profit Cloud ?
              </h2>
            </div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4  ">
            <div className="text-center mb-12   ">
              <p className="text-[40px] font-bold mt-1 ml-1">Let's talk.</p>
            </div>
            <form onSubmit={handleFormSubmit} className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name*"
                  value={formData.firstName}
                  onChange={handleFormChange}
                  required
                  className="bg-white/90 text-gray-900 p-3 rounded-md border-none focus:ring-2 focus:ring-pink-500"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name*"
                  value={formData.lastName}
                  onChange={handleFormChange}
                  required
                  className="bg-white/90 text-gray-900 p-3 rounded-md border-none focus:ring-2 focus:ring-pink-500"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company*"
                  value={formData.company}
                  onChange={handleFormChange}
                  required
                  className="bg-white/90 text-gray-900 p-3 rounded-md border-none focus:ring-2 focus:ring-pink-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="bg-white/90 text-gray-900 p-3 rounded-md border-none focus:ring-2 focus:ring-pink-500"
                />
                {/* <div className="relative"> */}
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleFormChange}
                  required
                  className="w-full md:col-span-2 p-3 rounded bg-white/90 text-[#474747] text-lg focus:outline-none appearance-none"
                >
                  <option value="">Country*</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="IN">India</option>
                  <option value="Other">Other</option>
                </select>
                <span className="absolute right-5 top-1/2 -translate-y-1/2 text-[#474747]  pointer-events-none ">
                  <ArrowDownwardIcon sx={{ fontSize: 16 }} />
                </span>
                {/* </div> */}
                <textarea
                  name="message"
                  placeholder="Message*"
                  value={formData.message}
                  onChange={handleFormChange}
                  rows="5"
                  required
                  className="md:col-span-2 bg-white/90 text-gray-900 p-3 rounded-md border-none focus:ring-2 focus:ring-pink-500"
                ></textarea>
              </div>
              <div className="mt-6 text-xs text-[#f9f9f9]">
                By continuing, I confirm that I have read and agree to the{" "}
                <strong className="cursor-pointer">Privacy Policy</strong>
              </div>
              <div className="mt-4 flex">
                <input
                  type="checkbox"
                  id="agreeToEmails"
                  name="agreeToEmails"
                  // checked={formData.agreeToEmails}
                  onChange={handleFormChange}
                  className="h-4 w-4 rounded text-pink-600 focus:ring-pink-500"
                />
                <label
                  htmlFor="agreeToEmails"
                  className="ml-2 text-xs text-[#f9f9f9]"
                >
                  I agree to receive emails from Codescience with updates on
                  services, events, and alerts. I can unsubscribe at any time.
                </label>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6">
                <div className="bg-white border border-gray-300 rounded-md px-2 py-2 flex items-center w-[210px]">
                  <input
                    type="checkbox"
                    id="not-robot"
                    className="h-4 w-4 mr-2 accent-blue-600"
                    required
                    // checked={isRobot}
                    // onChange={(e) => setIsRobot(e.target.checked)}
                  />
                  <label
                    htmlFor="not-robot"
                    className="text-[10px] text-[#000] mr-auto"
                  >
                    I'm not a robot
                  </label>
                  <div className="flex flex-col items-center">
                    <img
                      src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                      alt="reCAPTCHA logo"
                      className="h-6 mb-1"
                    />
                    <span className="text-[7px] text-[#555] leading-none">
                      reCAPTCHA
                    </span>
                    <span className="text-[6px] text-[#000] cursor-pointer leading-none">
                      Privacy – Terms
                    </span>
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-[#FF83A9] text-[#f9f9f9] font-semibold px-6 py-2 rounded-full transition-all"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </section>

        <div className="my-20">
          <Link
            to="/resources/customer-stories"
            className="flex gap-5 items-center justify-center group"
          >
            <div className="p-3 bg-[#fcc000] rounded-full  text-white group-hover:cursor-pointer group-hover:bg-[#FF83A9]">
              <FaArrowLeft />
            </div>
            <div className="text-lg text-[#474747]">Back to cases</div>
          </Link>
        </div>

        {/* --- FULL-WIDTH FOOTER --- */}
        <Footer />
      </div>
    </>
  );
};
