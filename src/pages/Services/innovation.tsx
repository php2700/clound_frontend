import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import {
  FaHome,
  FaChartLine,
  FaLightbulb,
  FaLayerGroup,
  FaProjectDiagram,
  FaArrowLeft,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Bhutan",
  "Bolivia",
  "Brazil",
  "Bulgaria",
  "Cambodia",
  "Canada",
  "Chile",
  "China",
  "Colombia",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "Estonia",
  "Ethiopia",
  "Finland",
  "France",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Guatemala",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kuwait",
  "Latvia",
  "Lebanon",
  "Lithuania",
  "Luxembourg",
  "Malaysia",
  "Maldives",
  "Mexico",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Morocco",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Panama",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Saudi Arabia",
  "Serbia",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Tunisia",
  "Turkey",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
].sort();

const Innovation = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const [isAgree, setIsAgree] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setIsHeaderVisible(current <= lastScrollY);
      setLastScrollY(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const innovationData = {
      firstName,
      lastName,
      email,
      company,
      country,
      message,
      isAgree,
    };
    axios
      .post(`${API_BASE_URL}api/user/innovation`, innovationData)
      .then((res) => {
        console.log(res, "gg");
        setFirstName("");
        setLastName("");
        setEmail("");
        setCompany("");
        setCountry("");
        setMessage("");
        setIsAgree(false);
        toast.success("Details_added", {
          position: "top-right",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      {/* Sticky Header */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out ${
          isHeaderVisible ? "translate-y-6" : "-translate-y-full"
        }`}
      >
        <Header />
      </div>

      {/* Main Content */}
      <div className="container mx-auto pt-10 px-4  md:px-6 mt-20">
        <div className="px-6  pt-10 md:px-10">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-[#474747]  mt-10 mb-3">
            <Link to="/">
              <FaHome
                className="mr-1 text-xl cursor-pointer"
                aria-hidden="true"
              />
            </Link>
            <span className="mx-1 text-base font-bold">/</span>
            <span className="text-base font-bold">Services / Innovation</span>
          </div>

          {/* Title */}
          <div className="mt-5">
            <h1
              style={{ lineHeight: "1em" }}
              className="text-2xl md:text-6xl font-bold text-[#008093] mb-4"
            >
              For companies seeking to stay one
              <br />
              step ahead of their competitors
            </h1>
            <p
              style={{ fontFamily: "sans-serif,dm-sans", lineHeight: "1.2em" }}
              className="text-[#474747] text-base md:text-2xl mt-5 leading-tight"
            >
              In a dynamic business environment, innovation and adaptability are
              essential. We offer services designed to identify <br />
              opportunities and address specific challenges, all-in an agile way
              through Salesforce technology.
            </p>
          </div>

          {/* Full-width Image */}
          <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] mt-[110px]">
            <img
              src="/innovation1.PNG"
              alt="Innovation visual"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#f9f9f9]">
        <div className="container mx-auto  px-4 py-10 md:px-6">
          <div className="px-6 py-10 md:px-10">
            <div className="mt-5">
              <div className="flex flex-col lg:flex-row gap-5 items-start">
                {/* Left Cards */}
                <div className="lg:w-[58%] w-full flex flex-col gap-5">
                  {[
                    {
                      icon: <img src="/innovation-icon-1.svg" />,
                      title: "Specialized Consulting",
                      description:
                        "We provide consulting to identify and resolve short-term business challenges with agile solutions within Salesforce. We design clear, measurable action plans to achieve results in a short timeframe, enabling your business to respond quickly to changing market conditions.",
                    },
                    {
                      icon: <img src="/implementation-icon-2.svg" />,
                      title: "Strategic Advisory",
                      description:
                        "We offer strategic advisory on platform architecture, data governance, and long-term growth. Our approach focuses on building a solid structure that supports continuous evolution and the adoption of new technologies within the Salesforce ecosystem, such as artificial intelligence and process automation.",
                    },
                  ].map((card, index) => (
                    <div
                      key={index}
                      className="bg-white  rounded-lg p-6 shadow-md min-h-[320px] flex flex-col justify-center"
                    >
                      <div className="flex items-center">
                        {card.icon}
                        <h4
                          style={{ fontSize: "40px" }}
                          className="ml-4 font-semibold text-[#008093]"
                        >
                          {card.title}
                        </h4>
                      </div>
                      <p
                        style={{
                          fontFamily: "sans-serif,dm-sans",
                          lineHeight: "1.2em",
                        }}
                        className=" mt-2 text-[#474747] md:text-lg "
                      >
                        {card.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Right Sticky Form */}
                <div className="lg:w-[42%] w-full">
                  <div className="lg:sticky top-28">
                    <form
                      onSubmit={handleSubmit}
                      className="bg-yellow-400 text-black p-6 rounded-lg shadow-lg space-y-4 h-[660px] "
                    >
                      <h2 className="text-2xl font-semibold mb-2 leading-tight">
                        Complete the form and book
                        <br />a free consultation
                      </h2>

                      {/* First & Last Name */}
                      <div className="flex gap-4">
                        <input
                          type="text"
                          placeholder="First Name*"
                          className="w-1/2 p-3 rounded bg-white text-black text-lg focus:outline-none"
                          required
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input
                          type="text"
                          placeholder="Last Name*"
                          className="w-1/2 p-3 rounded bg-white text-black text-lg focus:outline-none"
                          required
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>

                      {/* Email & Company */}
                      <div className="flex gap-4">
                        <input
                          type="email"
                          placeholder="Email*"
                          className="w-1/2 p-3 rounded bg-white text-black text-lg focus:outline-none"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                          type="text"
                          placeholder="Company*"
                          className="w-1/2 p-3 rounded bg-white text-black text-lg focus:outline-none"
                          required
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                        />
                      </div>

                      {/* Country Dropdown */}
                      <select
                        required
                        className="w-full p-3 rounded bg-white text-black text-lg focus:outline-none"
                        defaultValue=""
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                      >
                        <option disabled value="">
                          Select Country*
                        </option>
                        {countries.map((country, index) => (
                          <option
                            key={index}
                            value={country}
                            className="text-xs"
                          >
                            {country}
                          </option>
                        ))}
                      </select>

                      {/* Message */}
                      <textarea
                        placeholder="Message*"
                        className="w-full p-3 h-28 rounded bg-white text-black text-lg resize-none focus:outline-none"
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>

                      {/* Checkbox */}
                      <p className="text-xs text-gray-800">
                        By continuing, I confirm that I have read and agree to
                        the Privacy Policy.
                      </p>
                      <div className="flex items-start gap-2">
                        <input
                          type="checkbox"
                          className="mt-1"
                          required
                          checked={isAgree}
                          onChange={(e) => setIsAgree(e.target.checked)}
                        />
                        <p className="text-xs text-gray-800">
                          I agree to receive emails from Codescience with
                          updates on services, events, and alerts. I can
                          unsubscribe at any time.
                        </p>
                      </div>

                      {/* Submit */}
                      <div className="absolute bottom-4 right-4">
                        <button
                          type="submit"
                          className="bg-white text-black font-semibold py-3 px-8 rounded hover:bg-[#FF83A9] hover:text-white rounded-full transition text-lg w-26 min-h-12 mb-5"
                        >
                          Send
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Services Section */}
            <div className="py-16">
              <h2
                style={{ fontSize: "40px" }}
                className="text-center text-4xl md:text-4xl font-semibold text-[#008093] mb-12"
              >
                Check our other services
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-6  rounded-lg shadow-md text-left bg-white">
                  <img src="/services-icon-1.svg" className="mb-4" />
                  <h3
                    style={{ fontSize: "40px" }}
                    className=" text-[#008093] font-semibold mb-2"
                  >
                    Landing Services
                  </h3>
                  <p
                    style={{
                      fontFamily: "sans-serif,dm-sans",
                      lineHeight: "1.2em",
                    }}
                    className="text-[#474747] text-lg mb-4 "
                  >
                    Discover cutting-edge solutions that help you stay ahead of
                    the curve.
                  </p>
                  <Link
                    to="/Services/implementation"
                    className="text-[#474747] font-bold text-base relative inline-block group"
                  >
                    Learn more
                    <span className="block h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                  </Link>
                </div>

                <div className="p-6  rounded-lg shadow-md text-left bg-white">
                  <img src="/services-icon-4.svg" className="mb-4" />
                  <h3
                    style={{ fontSize: "40px" }}
                    className=" text-[#008093] font-semibold mb-2"
                  >
                    Strategic Growth
                  </h3>
                  <p
                    style={{
                      fontFamily: "sans-serif,dm-sans",
                      lineHeight: "1.2em",
                    }}
                    className="text-[#474747] text-lg mb-4 leading-tight"
                  >
                    Accelerate your business growth with focused strategic
                    initiatives.
                  </p>
                  <Link
                    to="/Services/growth"
                    className="text-[#474747] font-bold text-base relative inline-block group"
                  >
                    Learn more
                    <span className="block h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                  </Link>
                </div>

                <div className="p-6 bg-white rounded-lg shadow-md text-left">
                  <img src="/services-icon-2.svg" className="mb-4" />
                  <h3
                    style={{ fontSize: "40px" }}
                    className="text-[#008093] font-semibold mb-2"
                  >
                    Optimization
                  </h3>
                  <p
                    style={{
                      fontFamily: "sans-serif,dm-sans",
                      lineHeight: "1.2em",
                    }}
                    className="text-[#474747]  text-lg mb-4 leading-tight"
                  >
                    Improve efficiency by streamlining operations and maximizing
                    ROI.
                  </p>
                  <Link
                    to="/Services/optimization"
                    className="text-[#474747] font-bold text-base relative inline-block group"
                  >
                    Learn more
                    <span className="block h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center mt-20">
              <div
                onClick={() => navigate("/Services/all_services")}
                className="flex items-center cursor-pointer group"
              >
                {/* Circle with Arrow */}
                <div className="w-14 h-14 rounded-full bg-[#fcc000] flex items-center justify-center transition duration-300 group-hover:bg-[#FF83A9]">
                  <FaArrowLeft className="text-white text-xl" />
                </div>

                {/* Label */}
                <span className="ml-4 text-lg  text-[#474747]">
                  Back to Services
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Innovation;
