import React from "react";
import { FaInstagram, FaLinkedin, FaStar, FaYoutube } from "react-icons/fa";
import {  useLocation, useNavigate } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {
  const navigate = useNavigate();


  const location = useLocation(); // to get current pathname

  const handleIndustryClick = () => {
    if (location.pathname === "/industries") {
      window.location.reload(); // ✅ Refresh if already there
    } else {
      window.location.href = "/industries"; // ✅ Navigate and reload
    }
  };
  return (
    <footer className="bg-[#474747] text-white px-6 md:px-20 py-10 w-full z-10 relative gap-5">
      {/* Top Section */}
      <div className="flex flex-col items-center justify-center mb-10">
        <div className="flex flex-col md:flex-row items-center gap-4 mt-[100px]">
          <h1 className="text-5xl font-bold">Codescience</h1>
          <div className="w-[4px] h-[50px] bg-yellow-400"  />
          <img
            src="/footer.png"
            alt="Salesforce Certified"
            className="w-16 h-16 object-cover rounded-lg "
          />
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <p className="text-white text-2xl font-semibold">
              Customer Satisfaction
            </p>
            <div className="flex items-center mt-1">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 mr-1" />
                ))}
              <span className="ml-2 text-2xl font-semibold">4.8/5 CSAT</span>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics + Badge Section */}
      <div className="flex flex-wrap justify-center items-start gap-10 text-center">
        <div className="w-40">
          <p className="text-3xl font-semibold">Certifications</p>
          <p className="text-yellow-400 text-3xl font-bold mt-1 text-left">
            +50
          </p>
        </div>
        <div className="w-40">
          <p className="text-3xl font-semibold">Projects</p>
          <p className="text-yellow-400 text-3xl font-bold mt-1">+120</p>
        </div>
        <div className="w-40">
          <p className="text-3xl font-semibold">Experts</p>
          <p className="text-yellow-400 text-3xl font-bold mt-1">+50</p>
        </div>
        <div className="flex flex-col items-center w-64 text-center">
          <p className="text-white text-xl font-semibold mb-2 whitespace-nowrap">
            Top 10 Expert in Consumer Goods in
          </p>
          <div className="flex items-center justify-center gap-3">
            <img
              src="/footer2.webp"
              alt="Invisory Badge"
              className="w-[40px] h-auto"
            />
            <span className="text-white text-sm font-bold">AppExchange</span>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 mt-16 text-sm ml-[150px]">
        {/* Offices */}
        <div>
          <h4 className="font-semibold mb-2 text-[#999999]">
            Codescience offices <br />
            around the world
          </h4>
          <ul className="space-y-1 text-[#F9F9F9] font-bold">
            {[
              "United States",
              "United Kingdom",
              "Spain",
              "Argentina",
              "Colombia",
            ].map((label) => (
              <li key={label}>
                <a
                  href="hello@codescience.com"
                  className="underline-bar text-sm font-bold text-[#F9F9F9]"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="mailto:hello@codescience.com"
                className="relative text-yellow-400 group inline-block transition-colors duration-300 hover:text-[#FF83A9] font-bold"
              >
                hello@codescience.com
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#FF83A9] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <button
                onClick={() => navigate("/Contact")}
                className="bg-white text-gray-600 hover:bg-pink-400 hover:text-white px-5 py-2 rounded-full mt-2 text-[15px] font-bold"
              >
                Contact Info
              </button>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-2 text-[#999999]">Services</h4>
          <ul className="space-y-1 text-[#F9F9F9] font-bold">
            {[
              { label: "Implementation", to: "/Services/implementation" },
              { label: "Optimization", to: "/Services/optimization" },
              { label: "Innovation", to: "/Services/innovation" },
              { label: "Growth", to: "/Services/growth" },
            ].map(({ label, to }) => (
              <li key={label}>
                <Link
                  to={to}
                  className="underline-bar text-sm font-bold text-[#F9F9F9]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Industries */}
        <div>
          <h4 className="font-semibold mb-2 text-[#999999]">Industries</h4>
          <ul className="space-y-1 text-[#F9F9F9] font-bold">
            {[
              "Retail & Consumer Goods",
              "Financial Services",
              "Agriculture & Mining",
              "Communications, Media & Telco",
              "Health & Life Science",
              "Manufacturing & Automotive",
              "Energy",
            ].map((label) => (
              <li
                key={label}
                onClick={handleIndustryClick}
                className="cursor-pointer"
              >
                <span className="underline-bar text-sm font-bold text-[#F9F9F9]">
                  {label}
                </span>
              </li>
            ))}
          </ul>

        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold mb-2 text-[#999999]">Resources</h4>
          <ul className="space-y-1 font-bold text-[#F9F9F9]">
            {[
              { label: "Blog", to: "/resources/blog" },
              { label: "Success stories", to: "/resources/customer-stories" },
            ].map(({ label, to }) => (
              <li key={label}>
                <Link
                  to={to}
                  className="underline-bar text-sm font-bold text-[#F9F9F9]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>


        {/* Careers */}
        <div>
          <h4 className="font-semibold mb-2 text-[#999999]">Careers</h4>
          <ul className="space-y-1 text-[#F9F9F9] font-bold">
            {[
              { label: "Our Vibe", to: "/careers#our-vibe" },
              { label: "Open Positions", to: "/index" },
              { label: "Become a cloudgaier", to: "/index" },
            ].map(({ label, to }) => (
              <li key={label}>
                <Link
                  to={to}
                  className="underline-bar text-sm font-bold text-[#F9F9F9]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-2 text-[#999999]">Company</h4>
          <ul className="space-y-1 text-[#F9F9F9] font-bold">
            {[
              { label: "Our Story", to: "/company" },
              { label: "Salesforce Ventures", to: "/company" },
              { label: "Meet the team", to: "/company" },
            ].map(({ label, to }) => (
              <li key={label}>
                <Link
                  to={to}
                  className="underline-bar text-sm font-bold text-[#F9F9F9]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-sm text-[#F9F9F9] flex flex-col items-start space-y-4">
        {/* Social Icons */}
        <div className="flex space-x-4 items-center">
          <a href=" https://www.linkedin.com/company/code-science/">
            <FaLinkedin className="hover:text-white text-[#F9F9F9] cursor-pointer" />
          </a>
          <a href="#">
            <FaInstagram className="hover:text-white text-[#F9F9F9] cursor-pointer" />
          </a>
          <a href="#">
            <FaYoutube className="hover:text-white text-[#F9F9F9] cursor-pointer" />
          </a>
          <div className="flex items-center space-x-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg"
              alt="Salesforce Logo"
              className="h-4 w-auto"
            />
            <span className="text-white text-sm font-medium">AppExchange</span>
          </div>
        </div>

        {/* Link Row */}
        <div className="flex flex-wrap gap-6">
          <a
            href="#"
            className="hover:text-white transition-colors duration-200"
          >
            Integrity line
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-200"
          >
            Sitemap
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-200"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-200"
          >
            Cookie settings
          </a>
          <p className="text-xs text-white mt-1">
            &copy; {new Date().getFullYear()} Codescience. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
