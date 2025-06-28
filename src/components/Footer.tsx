import React from "react";
import { FaInstagram, FaLinkedin, FaStar, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#474747]">
      <div className="container mx-auto py-[80px] px-4 md:px-6 ">
        <div className="px-6  md:px-10 ">
          <footer className=" text-white z-10 relative">
            <div className="flex flex-col items-center justify-center mb-10">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <h1 className="text-5xl font-bold">Codescience</h1>
                <div className="w-[4px] h-[50px] bg-yellow-400" />
                <img
                  src="/footer.png"
                  alt="Salesforce Certified"
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <p
                    style={{ lineHeight: "1.2em" }}
                    className="text-[#f9f9f9] text-2xl font-bold"
                  >
                    Customer Satisfaction
                  </p>
                  <div className="flex items-center mt-1">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 mr-1" />
                      ))}
                    <span className="ml-2 text-2xl text-[#f9f9f9] font-bold">
                      4.8/5 CSAT
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics + Badge Section */}
            <div className="flex flex-wrap justify-center items-start gap-12 text-center">
              <div className="w-40">
                <p
                  style={{ lineHeight: "1.2em" }}
                  className="text-2xl text-[#f9f9f9] font-bold"
                >
                  Certifications
                </p>
                <p
                  style={{ lineHeight: "1.2em" }}
                  className="text-[#fcc000] text-3xl font-bold mt-1 text-left"
                >
                  +50
                </p>
              </div>
              <div className="w-40">
                <p
                  style={{ lineHeight: "1.2em" }}
                  className="text-2xl font-bold text-[#f9f9f9]"
                >
                  Projects
                </p>
                <p
                  style={{ lineHeight: "1.2em" }}
                  className="text-[#fcc000] text-3xl font-bold mt-1"
                >
                  +120
                </p>
              </div>
              <div className="w-40">
                <p
                  style={{ lineHeight: "1.2em" }}
                  className="text-2xl font-bold text-[#f9f9f9]"
                >
                  Experts
                </p>
                <p
                  style={{ lineHeight: "1.2em" }}
                  className="text-[#fcc000] text-3xl font-bold mt-1"
                >
                  +50
                </p>
              </div>
              <div className="flex flex-col items-center w-64 text-center">
                <p className="text-[#f9f9f9] text-lg font-bold mb-2 whitespace-nowrap">
                  <span className="text-[#FCC000] "> Top 10</span>
                  <span className="text-[#f9f9f9]">
                    {" "}
                    Expert in Consumer Goods in
                  </span>
                </p>
                <div className="flex items-center justify-center gap-3">
                  <img
                    src="/footer2.webp"
                    alt="Invisory Badge"
                    className="w-[40px] h-auto"
                  />
                  <span className="text-[#f9f9f9] text-sm font-bold">
                    AppExchange
                  </span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-16 text-sm">
              <div>
                <h4
                  style={{ lineHeight: "1.2em" }}
                  className="font-bold text-base mb-2 text-[#999999]"
                >
                  Codescience offices around the world
                </h4>
                <ul className="space-y-2 ">
                  {[
                    "United States",
                    "United Kingdom",
                    "Spain",
                    "Argentina",
                    "Colombia",
                  ].map((label) => (
                    <li key={label}>
                      <a
                        href="#"
                        className="underline-bar text-sm font-bold  custom-link"
                        
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="mailto:hello@cloudgaia.com"
                      className="relative text-[#fcc000] font-bold group text-sm inline-block transition-colors duration-30"
                    >
                      hello@cloudgaia.com
                      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#FF83A9] transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                  <li>
                    <button className="bg-[#f9f9f9] text-[#474747] hover:bg-[#ff83a9] hover:text-[#f9f9f9] px-5 py-2 rounded-full mt-2 text-base font-bold">
                      Contact Info
                    </button>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4
                  style={{ lineHeight: "1.2em" }}
                  className="font-bold text-base mb-2 text-[#999999]"
                >
                  Services
                </h4>
                <ul className="space-y-2 text-gray-400">
                  {[
                    { label: "Implementation", to: "/Services/implementation" },
                    { label: "Optimization", to: "/Services/optimization" },
                    { label: "Innovation", to: "/Services/innovation" },
                    { label: "Growth", to: "/Services/growth" },
                  ].map(({ label, to }) => (
                    <li key={label}>
                      <Link
                        to={to}
                        className="underline-bar text-sm font-bold custom-link"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Industries */}
              <div>
                <h4
                  style={{ lineHeight: "1.2em" }}
                  className="font-bold text-base mb-2 text-[#999999]"
                >
                  Industries
                </h4>
                <ul className="space-y-2 text-[#f9f9f9]">
                  {[
                    "Retail & Consumer Goods",
                    "Financial Services",
                    "Agriculture & Mining",
                    "Communications, Media & Telco",
                    "Health & Life Science",
                    "Manufacturing & Automotive",
                    "Energy",
                  ].map((label) => (
                    <li key={label}>
                      <Link
                        to="/industries"
                        className="underline-bar text-sm font-bold  custom-link "
                        
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4
                  style={{ lineHeight: "1.2em" }}
                  className="font-bold text-base mb-2 text-[#999999]"
                >
                  Resources
                </h4>
                <ul className="space-y-2 text-gray-400">
                  {["Blog", "Success stories"].map((label) => (
                    <li key={label}>
                      <a
                        href="#"
                        className="underline-bar text-sm font-bold  custom-link"
              
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Careers */}
              <div>
                <h4
                  style={{ lineHeight: "1.2em" }}
                  className="font-bold text-base mb-2 text-[#999999]"
                >
                  Careers
                </h4>
                <ul className="space-y-2 text-gray-400">
                  {[
                    { label: "Our Vibe", to: "/company" },
                    { label: "Open Positions", to: "/company" },
                    { label: "Become a cloudgaier", to: "/company" },
                  ].map(({ label, to }) => (
                    <li key={label}>
                      <Link
                        to={to}
                        className="underline-bar text-sm font-bold  custom-link"
                      
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4
                  style={{ lineHeight: "1.2em" }}
                  className="font-bold text-base mb-2 text-[#999999]"
                >
                  Company
                </h4>
                <ul className="space-y-2 text-gray-400">
                  {[
                    { label: "Our Story", to: "/company" },
                    { label: "Salesforce Ventures", to: "/company" },
                    { label: "Meet the team", to: "/company" },
                  ].map(({ label, to }) => (
                    <li key={label}>
                      <Link
                        to={to}
                        className="underline-bar text-sm font-bold  custom-link"
                        
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="mt-12 border-t border-gray-700 pt-6 text-sm text-gray-400 flex flex-col items-start space-y-4">
              {/* Social Icons */}
              <div className="flex space-x-4 items-center">
                <a href="#">
                  <FaLinkedin className="hover:text-white text-[#f9f9f9] h-[18px] cursor-pointer" />
                </a>
                <a href="#">
                  <FaInstagram className="hover:text-white text-[#f9f9f9] h-[18px]  cursor-pointer" />
                </a>
                <a href="#">
                  <FaYoutube className="hover:text-white text-[#f9f9f9] h-[18px]  cursor-pointer" />
                </a>
                <div className="flex items-center space-x-2">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg"
                    alt="Salesforce Logo"
                    className="h-[18px]  w-auto"
                  />
                  <span className="text-[#f9f9f9] text-sm font-medium">
                    AppExchange
                  </span>
                </div>
              </div>

              {/* Link Row */}
              <div className="flex text-[#f9f9f9] flex-wrap gap-6">
                <a
                  href="#"
                  className="text-sm font-bold transition-colors duration-200"
                >
                  Integrity line
                </a>
                <a
                  href="#"
                  className="text-sm font-bold transition-colors duration-200"
                >
                  Sitemap
                </a>
                <a
                  href="#"
                  className="text-sm font-bold transition-colors duration-200"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-sm font-bold transition-colors duration-200"
                >
                  Cookie settings
                </a>
                <span style={{ fontSize: "12px" }} className="text-[#f9f9f9]">
                  &copy; {new Date().getFullYear()} Codescience. All rights
                </span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
