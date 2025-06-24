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
      <div className="container mx-auto  px-4 py-10 md:px-6 mt-20">
        <div className="px-6 py-10 md:px-10">

     
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mt-10 mb-3">
          <FaHome className="mr-1 text-xl" />
          <span className="mx-1 text-lg font-medium">/</span>
          <span className="text-lg font-semibold">
            Services / Innovation
          </span>
        </div>

        {/* Title */}
        <div className="mt-5">
          <h1 className="text-2xl md:text-6xl font-bold text-[#008093] mb-4">
            For companies seeking to stay one
            <br />
            step ahead of their competitors
          </h1>
          <p className="text-[#474747] text-base md:text-2xl mt-5">
            In a dynamic business environment, innovation and adaptability are
            essential. We offer services designed to identify <br />
            opportunities and address specific challenges, all-in an agile way
            through Salesforce technology.
            
          </p>
        </div>

        {/* Full-width Image */}
        <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] mt-[150px]">
          <img
            src="/innovation1.PNG"
            alt="Innovation visual"
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Two-column Layout */}


<div className="max-w-6xl mx-auto px-4 mt-16">

  {/* CHANGE 2: Flexbox ki jagah 12-column Grid system use kiya gaya hai for better control. */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-3 items-start">
    
    {/* Left Cards Section (ab 7 columns leta hai) */}
    <div className="lg:col-span-7 w-full flex flex-col gap-10">
      {[
        {
          // NOTE: Screenshot me icon alag hai. Aapko SVG ya alag icon library use karna padega.
          icon: <img src="/innovation-icon-1.svg" className="text-3xl text-[#FF83A9]" />,
          title: "Specialized Consulting",
          description:
            "We provide consulting to identify and resolve short-term business challenges with agile solutions within Salesforce. We design clear, measurable action plans to achieve results in a short timeframe, enabling your business to respond quickly to changing market conditions.",
        },
        {
          icon: <img src="/innovation-icon-2.svg" className="text-3xl text-[#FF83A9]" />,
          title: "Strategic Advisory",
          description:
            "We offer strategic advisory on platform architecture, data governance, and long-term growth. Our approach focuses on building a solid structure that supports continuous evolution and the adoption of new technologies within the Salesforce ecosystem, such as artificial intelligence and process automation.",
        },
      ].map((card, index) => (
        // Card ki styling ko thoda refine kiya gaya hai
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm" // Padding badhai gayi hai
        >
          <div className="flex items-center">
            {card.icon}
            <h4 className="ml-4 text-3xl font-semibold text-[#008093]"> {/* Font-bold ko font-semibold kiya gaya hai to match */}
              {card.title}
            </h4>
          </div>
          <p className="mt-4 text-gray-600 text-base md:text-sm"> {/* Margin-top aur text color aadjust kiya gaya hai */}
            {card.description}
          </p>
        </div>
      ))}
    </div>

    {/* Right Sticky Form Section (ab 5 columns leta hai) */}
    {/* CHANGE 3: 'sticky top-28' se form scroll ke saath stick rahega. */}
    <div className="lg:col-span-5 w-full sticky top-28 self-start">
      
      {/* CHANGE 4: Form ki styling ko screenshot jaisa banaya gaya hai. h-[680px] HATA DIYA GAYA HAI. */}
      <form className="bg-[#FCC000] text-black p-8 rounded-xl shadow-lg space-y-5">
        <h2 className="text-2xl font-semibold leading-tight text-gray-800">
          Complete the form and book
          <br />a free consultation
        </h2>

        {/* First & Last Name */}
        {/* CHANGE 5: Input fields ab choti screen par stacked aur badi screen par side-by-side honge. */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="First Name*"
            className="flex-1 p-3 rounded-md bg-white text-black focus:outline-none min-w-0"
            required
          />
          <input
            type="text"
            placeholder="Last Name*"
            className="flex-1 p-3 rounded-md bg-white text-black focus:outline-none min-w-0"
            required
          />
        </div>

        {/* Company & Email */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Company*"
            className="flex-1 p-3 rounded-md bg-white text-black focus:outline-none min-w-0"
            required
          />
          <input
            type="email"
            placeholder="Email*"
            className="flex-1 p-3 rounded-md bg-white text-black focus:outline-none min-w-0"
            required
          />
        </div>

        {/* Country Dropdown */}
        <select
          required
          className="w-full p-3 rounded-md bg-white text-black focus:outline-none"
          defaultValue=""
        >
          <option disabled value="">
            Country*
          </option>
          {/* {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))} */}
        </select>

        {/* Message */}
        <textarea
          placeholder="Message*"
          className="w-full p-3 h-28 rounded-md bg-white text-black resize-none focus:outline-none"
          required
        ></textarea>

        {/* Checkbox */}
        <p className="text-xs text-gray-700">
          By continuing, I confirm that I have read and agree to the Privacy Policy.
        </p>
        <div className="flex items-start gap-3">
          <input type="checkbox" className="mt-1 h-4 w-4" required />
          <p className="text-xs text-gray-700">
            I agree to receive emails from CloudGaia with updates on services, events, and alerts. I can unsubscribe at any time.
          </p>
        </div>
        
        {/* CHANGE 6: reCAPTCHA ke liye placeholder. Yahan aapko library integrate karni hogi. */}
        <div className="pt-2">
            {/* <ReCAPTCHA sitekey="YOUR_RECAPTCHA_SITE_KEY" /> */}
            <div className="h-20 w-full bg-gray-200/50 flex items-center justify-center text-gray-500 rounded-md">
                reCAPTCHA Placeholder
            </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

        {/* Other Services Section */}
        <div className="py-16">
          <h2 className="text-center text-3xl md:text-4xl font-semibold text-[#008093] mb-12">
            Check our other services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow-md text-left">
              <img src='/services-icon-1.svg' className="mb-4" />
              <h3 className="text-3xl text-[#008093] font-semibold mb-2">
                Innovation
              </h3>
              <p className="text-gray-700 text-lg mb-4">
                Discover cutting-edge solutions that help you stay ahead of the
                curve.
              </p>
              <a
                href="#"
                className="text-gray-700 font-medium relative inline-block group"
              >
                Learn more
                <span className="block h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </a>
            </div>

            <div className="p-6 border rounded-lg shadow-md text-left">
              <img src='/services-icon-4.svg' className="mb-4" />
              <h3 className="text-3xl text-[#008093] font-semibold mb-2">
                Strategic Growth
              </h3>
              <p className="text-gray-700 text-lg mb-4">
                Accelerate your business growth with focused strategic
                initiatives.
              </p>
              <a
                href="#"
                className="text-gray-700 font-medium relative inline-block group"
              >
                Learn more
                <span className="block h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </a>
            </div>

            <div className="p-6 border rounded-lg shadow-md text-left">
              <img src='/services-icon-2.svg' className="mb-4" />
              <h3 className="text-3xl text-[#008093] font-semibold mb-2">
                Optimization
              </h3>
              <p className="text-gray-700 text-lg mb-4">
                Improve efficiency by streamlining operations and maximizing
                ROI.
              </p>
              <a
                href="#"
                className="text-gray-700 font-medium relative inline-block group"
              >
                Learn more
                <span className="block h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </a>
            </div>
          </div>
        </div>

        {/* Back to Services Button */}
        {/* <div className="flex justify-center items-center mt-20 mb-10">
          <div
            onClick={() => navigate("/Services/all_services")}
            className="flex items-center cursor-pointer group"
          >
            <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center transition duration-300 group-hover:bg-[#FF83A9]">
              <FaArrowLeft className="text-white text-xl" />
            </div>
            <span className="ml-4 text-lg font-medium text-[#474747] group-hover:underline">
              Back to Services
            </span>
          </div>
        </div> */}
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

export default Innovation;
