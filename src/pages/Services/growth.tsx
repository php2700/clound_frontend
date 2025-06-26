import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import {
  FaHome,
  FaLightbulb,
  FaLayerGroup,
  FaBoxOpen,
  FaBrain,
  FaArrowLeft,
} from "react-icons/fa";

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

const Growth = () => {
  const navigate = useNavigate();
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

  return (
    <div className="relative min-h-screen bg-white">
      {/* Sticky Header */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out ${
          isHeaderVisible ? "translate-y-6" : "-translate-y-full"
        }`}
      >
        <Header />
      </div>

      {/* Main Content */}
      <div className="container mx-auto  px-4 mt-10 py-10  md:px-6 mt-20">
        <div className="px-6 py-10 md:px-10">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-gray-800 mb-3 mt-10">
            <FaHome className="mr-1 text-xl" />
            <span className="mx-1 text-lg font-medium">/</span>
            <span className="text-lg font-semibold">Services / Growth</span>
          </div>

          {/* Title */}
          <div className="mt-5">
            <h1  className="text-2xl md:text-6xl font-bold text-[#008093] mb-4">
              For companies seeking Strategic Growth
            </h1>
            <p style={{  fontFamily: 'sans-serif,dm-sans'}} className="leading-tight text-[#474747] text-base md:text-2xl mt-5">
              We offer services to maximize the value of Salesforce and align it{" "}
              <br />
              with your strategic objectives, driving sustainable growth.
            </p>
          </div>
        </div>
      </div>
      {/* Full-width Image */}
      <div className="w-full mt-4">
        <img
          src="/growth1.PNG"
          alt="growth visual"
          className="w-full h-[500px] object-cover"
        />
      </div>

      <div className="container mx-auto  px-4 mt-10 py-10  md:px-6 ">
        <div className="px-6 py-10 md:px-10">
          <div className="mt-16 ">
            <div className="flex flex-col lg:flex-row gap-5 items-start">
              {/* Left Cards */}
              <div className="lg:w-[58%] w-full flex flex-col gap-10">
                {[
                  {
                    icon: <img src='/growth-icon.svg' />,
                    title: "Advisory for Centers of Excellence (CoE)",
                    description: (
                      <>
                        We partner with companies in establishing and
                        consolidating a Salesforce Center of Excellence to
                        implement complex, high-impact use cases that generate
                        long-term strategic value. This service includes
                        defining governance structures, establishing
                        methodologies, and training teams in best practices for
                        advanced Salesforce management.
                        <br /> <br />
                        The CoE becomes a pillar of continuous innovation and
                        optimization, allowing companies to fully leverage their
                        Salesforce investment and maintain relevance and
                        efficiency in their operations.
                      </>
                    ),
                  },
                ].map((card, index) => (
                  <div
                    key={index}
                    className="bg-white border rounded-lg p-6 shadow-md min-h-[320px] flex flex-col justify-center"
                  >
                    <div className="flex items-center">
                      {card.icon}
                      <h4 className="ml-4 text-3xl md:text-4xl font-semibold text-[#008093]">
                        {card.title}
                      </h4>
                    </div>
                    <p style={{  fontFamily: 'sans-serif,dm-sans'}} className=" mt-4 text-gray-700 text-base md:text-lg">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Right Sticky Form */}
              <div className="lg:w-[42%] w-full">
                <div className="lg:sticky top-28">
                  <form className="bg-yellow-400 text-black p-6 rounded-lg shadow-lg space-y-4 h-[600px]">
                    <h2 className="text-2xl font-semibold mb-2 leading-tight">
                      Complete the form and book
                      <br />a free consultation
                    </h2>

                    {/* First & Last Name */}
                    <div className="flex gap-4">
                      <input
                        type="text"
                        placeholder="First Name*"
                        className="w-1/2 p-3 rounded bg-white text-black focus:outline-none"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Last Name*"
                        className="w-1/2 p-3 rounded bg-white text-black focus:outline-none"
                        required
                      />
                    </div>

                    {/* Email & Company */}
                    <div className="flex gap-4">
                      <input
                        type="email"
                        placeholder="Email*"
                        className="w-1/2 p-3 rounded bg-white text-black focus:outline-none"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Company*"
                        className="w-1/2 p-3 rounded bg-white text-black focus:outline-none"
                        required
                      />
                    </div>

                    {/* Country Dropdown */}
                    <select
                      required
                      className="w-full p-3 rounded bg-white text-black focus:outline-none"
                      defaultValue=""
                    >
                      <option disabled value="">
                        Select Company*
                      </option>
                      {countries.map((country, index) => (
                        <option key={index} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>

                    {/* Message */}
                    <textarea
                      placeholder="Message*"
                      className="w-full p-3 h-28 rounded bg-white text-black resize-none focus:outline-none"
                      required
                    ></textarea>

                    {/* Checkbox */}
                    <p className="text-sm text-gray-800">
                      By continuing, I confirm that I have read and agree to the
                      Privacy Policy.
                    </p>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" required />
                      <p className="text-sm text-gray-800">
                        I agree to receive emails from CloudGaia with updates on
                        services, events, and alerts. I can unsubscribe at any
                        time.
                      </p>
                    </div>

                    {/* Submit */}
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="bg-white text-black font-semibold py-2 px-6 rounded hover:bg-[#FF83A9] hover:text-white rounded-full transition"
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
            <h2 className="text-center text-4xl md:text-4xl font-bold text-[#008093] mb-12">
              Check our other services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-6 border rounded-lg shadow-md text-left">
                <img src="/services-icon-1.svg" className="mb-4" />
                <h3  className=" text-4xl text-[#008093] font-bold mb-2">
                  Landing Services
                </h3>
                <p style={{  fontFamily: 'sans-serif,dm-sans'}} className="leading-tight text-gray-700 text-lg mb-4">
                  Discover cutting-edge solutions that help you stay ahead of
                  the curve.
                </p>
                <a
                  href="#"
                  className="text-gray-800 font-medium relative inline-block group"
                >
                  Learn more
                  <span className="block h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </a>
              </div>

              <div className="p-6 border rounded-lg shadow-md text-left">
                <img src="/services-icon-3.svg" className="mb-4" />
                <h3 className="text-4xl text-[#008093] font-bold mb-2">
                  Landing Services
                </h3>
                <p style={{  fontFamily: 'sans-serif,dm-sans'}} className="text-gray-700 text-lg mb-4 leading-tight">
                  Supporting your first steps with Salesforce to ensure a smooth
                  and successful adoption.
                </p>
                <a
                  href="#"
                  className="text-gray-800 font-medium relative inline-block group"
                >
                  Learn more
                  <span className="block h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </a>
              </div>

              <div className="p-6 border rounded-lg shadow-md text-left">
                <img src="/services-icon-2.svg" className="mb-4" />
                <h3 className="text-4xl text-[#008093] font-bold mb-2">
                  Optimization
                </h3>
                <p style={{  fontFamily: 'sans-serif,dm-sans'}} className="text-gray-700 text-lg mb-4 leading-tight">
                  Improve efficiency by streamlining operations and maximizing
                  ROI.
                </p>
                <a
                  href="#"
                  className="text-gray-800 font-medium relative inline-block group"
                >
                  Learn more
                  <span className="block h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-20">
            <div
              onClick={() => navigate("/Services/all_services")}
              className="flex items-center cursor-pointer group"
            >
              {/* Circle with Arrow */}
              <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center transition duration-300 group-hover:bg-[#FF83A9]">
                <FaArrowLeft className="text-white text-xl" />
              </div>

              {/* Label */}
              <span className="ml-4 text-lg font-medium text-[#474747] group-hover:underline">
                Back to Services
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Growth;
