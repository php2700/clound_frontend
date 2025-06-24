import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
  FaBolt,
  FaChartLine,
  FaHome,
  FaLightbulb,
  FaStar,
  FaUsers,
} from "react-icons/fa";

// Country list
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

const Implementation = () => {
  const navigate = useNavigate();
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
    <div className="relative min-h-screen">
      {/* Sticky Header */}
      <div
        className={`fixed top-0 left-0 w-full transition-transform duration-300 ease-in-out z-50 ${
          isHeaderVisible ? "translate-y-6" : "-translate-y-full"
        }`}
      >
        <Header />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-10 md:px-6 mt-20">
        <div className="px-6 py-10 md:px-10">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-gray-500 mt-10">
            <FaHome className="mr-1 text-xl" />
            <span className="mx-1 text-lg font-medium">/</span>
            <span className="text-lg font-semibold">
              Services / Implementation
            </span>
          </div>

          {/* Title Section */}
          <div>
            <h1
              className="text-2xl md:text-6xl font-bold mt-4"
              style={{ color: "#008093" }}
            >
              For companies new to Salesforce
            </h1>
            <p className="text-gray-700 text-xl md:text-2xl mt-4">
              We activate the first clouds and partner with them in their first
              steps,
              <br />
              ensuring a smooth and successful adoption.
            </p>
          </div>

          {/* Full Width Image */}
          <div className="w-screen mt-16 relative left-1/2 right-1/2 -mx-[50vw] mt-[150px]">
            <img
              src="/implementation1.PNG"
              alt="img.visual"
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row items-start mt-20 gap-10 ">
            {/* Left Side */}
            <div className="lg:w-[55%] w-full flex flex-col gap-12">
              <div className="p-6 border rounded-lg shadow-md">
                <div className="flex justify-center">
                  <img
                    src="https://cloudgaia.com/storage/2025/01/services-expand-icon.svg"
                    alt="Deployment Icon"
                    className="h-20 w-20 object-contain rounded-full"
                  />
                </div>
                <h3 className="text-4xl font-semibold mt-4 text-[#008093] text-left">
                  Initial Deployment
                </h3>
                <p className="mt-2 text-text-gray-700 text-lg">
                  We take care of the configuration and activation of Salesforce
                  clouds, using standard out-of-the-box features from day one.
                </p>
                <p className="mt-6 text-text-gray-700 text-lg">
                  In addition, we train users on the core Salesforce features,
                  ensuring they have the basic knowledge necessary to maximize
                  their use.
                </p>
              </div>

              <h2 className="text-4xl font-semibold text-[#474747]">
                Blend of services to suit <br /> your business needs
              </h2>

              <div className="flex flex-col gap-6">
                {/* Quick Starts */}
                <div className="p-6 border rounded-lg shadow-md flex items-start gap-4">
                  <FaBolt className="text-3xl text-[#FF83A9]" />
                  <div>
                    <h4 className="text-4xl font-semibold text-[#008093] mb-1">
                      Quick Starts
                    </h4>
                    <p className="text-text-gray-700 mt-1 text-lg">
                      Solutions ready for use in a few weeks.
                    </p>
                  </div>
                </div>

                {/* Agile Team */}
                <div className="p-6 border rounded-lg shadow-md flex items-start gap-4">
                  <FaUsers className="text-3xl text-[#FF83A9]" />
                  <div>
                    <h4 className="text-4xl font-semibold text-[#008093]">
                      Agile Team
                    </h4>
                    <p className="text-text-gray-700 text-lg mt-1">
                      A team of experts with different skills adapts quickly to
                      the needs of your business.
                    </p>
                  </div>
                </div>

                {/* Custom E2E */}
                <div className="p-6 border rounded-lg shadow-md flex items-start gap-4">
                  <FaStar className="text-3xl text-[#FF83A9]" />
                  <div>
                    <h4 className="text-4xl font-semibold text-[#008093]">
                      Custom E2E
                    </h4>
                    <p className="text-text-gray-700 text-lg mt-1">
                      We work together with a team of experts on a specific
                      solution customized to your needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Form */}
            <div className="lg:w-[45%] w-full sticky top-10 self-start">
              <form className="bg-[#FCC000] text-white p-8 rounded-xl space-y-6 shadow-xl">
                <p className="text-xl md:text-2xl font-bold text-left tracking-tight text-[#474747]">
                  Complete the form and book <br /> a free consultation
                </p>

                {/* Name Fields */}
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="First Name*"
                    required
                    className="flex-1 p-3 bg-white text-black rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="Last Name*"
                    required
                    className="flex-1 p-3 bg-white text-black rounded-md"
                  />
                </div>

                {/* Company + Email */}
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="Company*"
                    required
                    className="flex-1 p-3 bg-white text-black rounded-md"
                  />
                  <input
                    type="email"
                    placeholder="Email*"
                    required
                    className="flex-1 p-3 bg-white text-black rounded-md"
                  />
                </div>

                {/* Country Dropdown */}
                <select
                  required
                  className="w-full p-3 bg-white text-text-gray-700 rounded-md"
                  defaultValue=""
                >
                  <option disabled value="">
                    Country*
                  </option>
                  {countries.map((country, idx) => (
                    <option key={idx} value={country}>
                      {country}
                    </option>
                  ))}
                </select>

                {/* Message */}
                <textarea
                  placeholder="Message*"
                  required
                  className="w-full p-3 bg-white text-black rounded-md h-32"
                />

                <p className="text-sm font-light text-text-gray-700">
                  By continuing, I confirm that I have read and agree to the{" "}
                  <span className="font-semibold underline">
                    Privacy Policy
                  </span>
                  .
                </p>

                <label className="flex items-start text-sm font-light text-text-gray-700">
                  <input
                    type="checkbox"
                    className="mt-1 accent-white"
                    required
                  />
                  <span className="ml-2">
                    I agree to receive emails from CloudGaia with updates on
                    services, events, and alerts. I can unsubscribe at any time.
                  </span>
                </label>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-white text-[#FF83A9] font-semibold px-6 py-2 rounded-full hover:bg-black hover:text-white transition-all"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="py-16">
            {/* Heading */}
            <h2 className="text-center text-4xl md:text-4xl font-semibold text-[#008093] mb-12">
              Check our other services
            </h2>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {/* Card 1 */}
              <div className="p-6 border rounded-lg shadow-md text-left">
                <img src="/services-icon-3.svg" className="mb-4" />
                <h3 className="text-3xl text-[#008093] font-semibold mb-2">
                  Innovation
                </h3>
                <p className="text-gray-700 text-lg mb-4">
                  Discover cutting-edge solutions that help you stay ahead of
                  the curve.
                </p>
                <a
                  href="#"
                  className="text-text-gray-700 font-medium relative inline-block group"
                >
                  Learn more
                  <span className="block h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </a>
              </div>

              {/* Card 2 */}
              <div className="p-6 border rounded-lg shadow-md text-left">
                <img src="/services-icon-4.svg" className="mb-4" />
                <h3 className="text-3xl text-[#008093] font-semibold mb-2">
                  Strategic Growth
                </h3>
                <p className="text-gray-700 text-lg mb-4">
                  Accelerate your business growth with focused strategic
                  initiatives.
                </p>
                <a
                  href="#"
                  className="text-text-gray-700 font-medium relative inline-block group"
                >
                  Learn more
                  <span className="block h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </a>
              </div>

              {/* Card 3 */}
              <div className="p-6 border rounded-lg shadow-md text-left">
                <img src="/services-icon-2.svg" className="mb-4" />
                <h3 className="text-3xl text-[#008093] font-semibold mb-2">
                  Optimization
                </h3>
                <p className="text-gray-700 text-lg mb-4">
                  Improve efficiency by streamlining operations and maximizing
                  ROI.
                </p>
                <a
                  href="#"
                  className="text-text-gray-700 font-medium relative inline-block group"
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

      <Footer />
    </div>
  );
};

export default Implementation;
