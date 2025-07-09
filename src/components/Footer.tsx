import React, { useState } from "react";
import { FaInstagram, FaLinkedin, FaStar, FaYoutube } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import IntegritySection from "../pages/IntegritySection"; // Assuming this is the correct path to your IntegritySection component
import { CookieSetting } from "@/pages/cookieSetting";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleModel = () => {
    setShowModal(true);
  };

  const handleclose = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-[#474747]">
      <div className="container mx-auto pt-[80px] pb-[40px] px-4 md:px-6">
        <div className="px-6 md:px-10">
          <footer className="text-white z-10 relative">
            {/* Top section with logo, title, stars */}
            <div className="flex flex-col items-center justify-center mb-10">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <img src="/code-science-white.png" className="h-10 px-3" />
                <div>
                  <img src="/line-yellow.svg" />
                </div>
                <img
                  src="/footer.png"
                  alt="Salesforce Certified"
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <p className="text-[#f9f9f9] text-2xl font-bold">
                    Customer Satisfaction
                  </p>
                  <div className="flex items-center mt-1">
                    <img
                      src="/5-stars.svg"
                      className="text-[#FCC000] mr-1 text-[20px]"
                    />
                    <span className="ml-2 text-2xl text-[#f9f9f9] font-bold">
                      4.8/5 CSAT
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="flex flex-wrap justify-center items-start gap-12 text-center">
              {[
                { title: "Certifications", value: "50+" },
                { title: "Projects", value: "120+" },
                { title: "Experts", value: "50+" },
              ].map(({ title, value }) => (
                <div key={title} className="w-40">
                  <p className="text-2xl font-bold text-[#f9f9f9]">{title}</p>
                  <p className="text-3xl font-bold text-[#fcc000] mt-1">
                    {value}
                  </p>
                </div>
              ))}
              <div className="flex flex-col items-center w-64 text-center">
                <p className="text-[#f9f9f9] text-lg mb-2 whitespace-nowrap">
                  <span className="text-[#FCC000] font-bold">Top 10</span>
                  <span className="text-[#f9f9f9]">
                    {" "}
                    Expert in Consumer Goods in
                  </span>
                </p>
                <div className="flex items-center justify-center gap-3 cursor-pointer">
                  <a
                    href="https://appexchange.salesforce.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/salesforce-app-exchange.svg"
                      alt="Invisory Badge"
                      className=" h-auto"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-16 text-sm">
              {/* Offices */}
              <div>
                <h4
                  style={{ lineHeight: "1.2em" }}
                  className="font-bold text-base mb-2 text-[#999999]"
                >
                  Codescience offices around the world
                </h4>
                <ul className="space-y-3">
                  {["India", "United States"].map((label) => (
                    <li key={label}>
                      <a
                        href="mailto:hello@codescience.com"
                        className="underline-bar text-sm font-bold  hover:text-[#fcc000]"
                        style={{ color: "#f9f9f9" }}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="mailto:hello@codescience.com"
                      className="relative text-[#fcc000] font-bold group text-sm inline-block transition-colors duration-300 hover:text-[#ff83a9]"
                    >
                      hello@code-science.com
                      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#FF83A9] transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                 <li className="pt-5">
  <Link
    to="/contact"
    className="whitespace-nowrap bg-[#f9f9f9] text-[#474747] hover:bg-[#ff83a9] hover:text-[#f9f9f9] py-2 px-3 rounded-full mt-2 text-base font-bold"
  >
    Contact Info
  </Link>
</li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="font-bold text-base mb-2 text-[#999999]">
                  Services
                </h4>
                <ul className="space-y-3">
                  {[
                    { label: "Implementation", to: "/Services/implementation" },
                    { label: "Optimization", to: "/Services/optimization" },
                    { label: "Innovation", to: "/Services/innovation" },
                    { label: "Growth", to: "/Services/growth" },
                  ].map(({ label, to }) => (
                    <li key={label}>
                      <Link
                        to={to}
                        className="underline-bar text-sm font-bold text-[#f9f9f9] hover:text-[#fcc000]"
                        style={{ color: "#f9f9f9" }}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Industries */}
              <div>
                <h4 className="font-bold text-base mb-2 text-[#999999]">
                  Industries
                </h4>
                <ul className="space-y-3">
                  {[
                    "Retail & Consumer Goods",
                    "Financial Services",
                    "Agriculture & Mining",
                    "Communications, Media & Telco",
                    "Health & Life Science",
                    "Manufacturing & Automotive",
                    "Energy",
                  ].map((label) => (
                    <Link
                      to="/industries"
                      onClick={(e) => {
                        if (location.pathname === "/industries") {
                          e.preventDefault(); // prevent route change
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                      }}
                      className="underline-bar text-sm font-bold  hover:text-[#fcc000]"
                      style={{ color: "#f9f9f9" }}
                    >
                      {label}
                    </Link>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="font-bold mb-2 text-[#999999]">Resources</h4>
                <ul className="space-y-3 font-bold">
                  {[
                    { label: "Blog", to: "/resources/blog" },
                    {
                      label: "Success stories",
                      to: "/resources/customer-stories",
                    },
                  ].map(({ label, to }) => (
                    <li key={label}>
                      <Link
                        to={to}
                        className="underline-bar text-sm font-bold  hover:text-[#fcc000]"
                        style={{ color: "#f9f9f9" }}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Careers */}
              <div>
                <h4 className="font-bold text-base mb-2 text-[#999999]">
                  Careers
                </h4>
                <ul className="space-y-3">
                  {[
                    { label: "our-vibe", to: "/career#our-vibe" },
                    { label: "Open Positions", to: "/career#open-positions" },
                    { label: "Become a Codescience", to: "/career#cloudgaier" },
                  ].map(({ label, to }) => (
                    <li key={label}>
                      <Link
                        to={to}
                        className="underline-bar text-sm font-bold text-[#f9f9f9] hover:text-[#fcc000]"
                        style={{ color: "#f9f9f9" }}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="font-bold text-base mb-2 text-[#999999]">
                  Company
                </h4>
                <ul className="space-y-3">
                  {[
                    { label: "Our Story", to: "/company#our-story" },
                    {
                      label: "Salesforce Ventures",
                      to: "/company#salesforce-ventures",
                    },
                    { label: "Meet the team", to: "/company#meet-the-team" },
                  ].map(({ label, to }) => (
                    <li key={label}>
                      <Link
                        to={to}
                        className="underline-bar text-sm font-bold text-[#f9f9f9] hover:text-[#fcc000]"
                        style={{ color: "#f9f9f9" }}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-12 border-t border-gray-700 pt-6 text-sm text-gray-400 flex flex-col items-start space-y-4">
              {/* Social Icons */}
              <div className="flex space-x-6 items-center">
                <a href="https://www.linkedin.com/company/code-science/"
                 target="_blank"
                    rel="noopener noreferrer">
                  <FaLinkedin className="hover:text-white text-[#f9f9f9] h-[18px] cursor-pointer" />
                </a>
                <a href="#">
                  <FaInstagram className="hover:text-white text-[#f9f9f9] h-[18px] cursor-pointer" />
                </a>
                <a href="#">
                  <FaYoutube className="hover:text-white text-[#f9f9f9] h-[18px] cursor-pointer" />
                </a>
                <div className="flex items-center space-x-2">
                  {/* <a href="https://appexchange.salesforce.com/appxConsultingListingDetail?listingId=a0N3u00000Qu5nNEAR"> */}
                  <a
                    href="https://appexchange.salesforce.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/salesforce-app-exchange.svg"
                      alt="Salesforce Logo"
                      className="h-[18px] w-auto"
                    />
                  </a>
                </div>
              </div>

              {/* Bottom Links */}
              <div className="flex text-[#f9f9f9] flex-wrap gap-6">
                <a
                  href="/integrity"
                  className="text-sm font-bold hover:text-[#fcc000]"
                >
                  Integrity line
                </a>

                <a
                  href="/security"
                  className="text-sm font-bold hover:text-[#fcc000]"
                >
                  Privacy Policy
                </a>
                <a
                  onClick={handleModel}
                  className="text-sm font-bold hover:text-[#fcc000] cursor-pointer"
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
      {showModal && <CookieSetting closeModel={handleclose} />}
    </div>
  );
};

export default Footer;
