import React, { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "@/components/Footer";

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

const Contact = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
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

        <div className="container mx-auto mt-[120px] px-4 md:px-6">
          <div className="px-6 py-10 md:px-10">
            {/* Breadcrumb */}
            <div className="flex items-center text-sm mb-4">
              <FaHome className="mr-1 text-xl" />
              <span className="mx-1 text-base font-bold">/</span>
              <span className="text-base font-bold">Contact</span>
            </div>

            {/* Heading */}
            <h1
              className="text-xl md:text-6xl font-bold mb-2"
              style={{ color: "#008093" }}
            >
              Unlock the Salesforce potential
            </h1>

            {/* Paragraph */}
            <p
                 style={{ fontFamily: "sans-serif,dm-sans", lineHeight: "1.2em" }}
              className="text-[#474747] text-xl md:text-2xl mb-12 "
            >
              With our team of experts and the power of Salesforce, we're here
              to bring <br/> your projects to life and take your business to the next
              level.
            </p>

            <form
              onSubmit={handleSubmit}
              className="bg-[#008093] max-w-3xl mx-auto text-white p-8 pb-12 rounded-md space-y-5"
            >
              <p className="text-xl md:text-2xl font-semibold text-center tracking-tight">
                Fill out the form and our team will get back to you shortly
              </p>

              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="First Name*"
                  required
                  className="flex-1 p-3 bg-gray-100 text-black rounded-md placeholder:text-gray-600"
                />
                <input
                  type="text"
                  placeholder="Last Name*"
                  required
                  className="flex-1 p-3 bg-gray-100 text-black rounded-md placeholder:text-gray-600"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Company*"
                  required
                  className="flex-1 p-3 bg-gray-100 text-black rounded-md placeholder:text-gray-600"
                />
                <input
                  type="email"
                  placeholder="Email*"
                  required
                  className="flex-1 p-3 bg-gray-100 text-black rounded-md placeholder:text-gray-600"
                />
              </div>

              <div className="relative">
                <select
                  required
                  className="w-full p-3 bg-gray-100 text-black rounded-md appearance-none"
                  defaultValue=""
                >
                  <option disabled value="">
                    Country*
                  </option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-black pointer-events-none">
                  ▼
                </span>
              </div>

              <textarea
                placeholder="Message*"
                required
                className="w-full p-3 bg-gray-100 text-black rounded-md placeholder:text-gray-600 h-32"
              ></textarea>

              <p className="text-sm text-left font-light leading-snug">
                By continuing, I confirm that I have read and agree to the{" "}
                <span className="font-semibold">Privacy Policy</span>.
              </p>

              <label className="flex items-start text-sm text-left font-light leading-snug">
                <input
                  type="checkbox"
                  className="mt-1 mr-1 accent-white"
                  required
                />
                <span className="text-[12px]">
                  I agree to receive emails from CloudGaia with updates on
                  services, events, and alerts. I can unsubscribe at any time.
                </span>
              </label>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6">
                <div className="bg-white border border-gray-300 rounded-md px-4 py-2 flex items-center w-[180px]">
                  <input
                    type="checkbox"
                    id="not-robot"
                    className="h-4 w-4 mr-2 accent-blue-600"
                  />
                  <label
                    htmlFor="not-robot"
                    className="text-[10px] text-gray-800 mr-auto"
                  >
                    I'm not a robot
                  </label>
                  <img
                    src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                    alt="reCAPTCHA logo"
                    className="h-6"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-4 sm:mt-0 bg-white text-black font-semibold px-6 py-2 rounded-full hover:bg-[#ff83A9] hover:text-white transition-colors duration-300"
                >
                  Send
                </button>
              </div>
            </form>

            <div className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 mt-12">
              <div className="relative w-full h-[300px]">
                <img
                  src="/contact-back-banner.webp"
                  alt="Cloudgaia Banner"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0  bg-opacity-10"></div>

                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    Interested in careers?
                  </h2>
                  <p className="text-lg md:text-2xl mb-6 ">
                    Join a multicultural team of Salesforce experts who elevate
                    businesses through technology.
                  </p>
                  <button className="bg-pink-400 hover:bg-white hover:text-black  text-white font-semibold px-6 py-2 rounded-full transition">
                    Become a cloudgaier
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Contact;
