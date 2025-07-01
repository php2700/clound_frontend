import React from "react";
import { FaInstagram, FaLinkedin, FaStar, FaYoutube } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();


  return (
    <div className="bg-[#474747]">
      <div className="container mx-auto py-[80px] px-4 md:px-6">
        <div className="px-6 md:px-10">
          <footer className="text-white z-10 relative">
            {/* Top section with logo, title, stars */}
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
                  <p className="text-[#f9f9f9] text-2xl font-bold">Customer Satisfaction</p>
                  <div className="flex items-center mt-1">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 mr-1" />
                      ))}
                    <span className="ml-2 text-2xl text-[#f9f9f9] font-bold">4.8/5 CSAT</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="flex flex-wrap justify-center items-start gap-12 text-center">
              {[
                { title: "Certifications", value: "+50" },
                { title: "Projects", value: "+120" },
                { title: "Experts", value: "+50" },
              ].map(({ title, value }) => (
                <div key={title} className="w-40">
                  <p className="text-2xl font-bold text-[#f9f9f9]">{title}</p>
                  <p className="text-3xl font-bold text-[#fcc000] mt-1">{value}</p>
                </div>
              ))}
              <div className="flex flex-col items-center w-64 text-center">
                <p className="text-[#f9f9f9] text-lg mb-2 whitespace-nowrap">
                  <span className="text-[#FCC000] font-bold">Top 10</span>
                  <span className="text-[#f9f9f9]"> Expert in Consumer Goods in</span>
                </p>
                <div className="flex items-center justify-center gap-3">
                  <img src="/footer2.webp" alt="Invisory Badge" className="w-[40px] h-auto" />
                  <span className="text-[#f9f9f9] text-sm font-bold">AppExchange</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-16 text-sm">
              {/* Offices */}
              <div>
                <h4 className="font-bold text-base mb-2 text-[#999999]">
                  Codescience offices around the world
                </h4>
                <ul className="space-y-2">
                  {[
                    "United States",
                    "United Kingdom",
                    "Spain",
                    "Argentina",
                    "Colombia",
                  ].map((label) => (
                    <li key={label}>
                      <a
                        href="mailto:hello@codescience.com"
                        className="underline-bar text-sm font-bold text-[#f9f9f9] hover:text-[#fcc000]"
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
                      hello@codescience.com
                      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#FF83A9] transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                  <li className="pt-5">
                    <Link to="/contact" className="bg-[#f9f9f9] text-[#474747] hover:bg-[#ff83a9] hover:text-[#f9f9f9] px-5 py-3 px-3 rounded-full mt-2 text-base font-bold">
                      Contact Info
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="font-bold text-base mb-2 text-[#999999]">Services</h4>
                <ul className="space-y-2">
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
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Industries */}
              <div>
                <h4 className="font-bold text-base mb-2 text-[#999999]">Industries</h4>
                <ul className="space-y-2">
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
                      className="underline-bar text-sm font-bold text-[#f9f9f9] hover:text-[#fcc000]"
                    >
                      {label}
                    </Link>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="font-bold mb-2 text-[#999999]">Resources</h4>
                <ul className="space-y-1 font-bold">
                  {[
                    { label: "Blog", to: "/resources/blog" },
                    { label: "Success stories", to: "/resources/customer-stories" },
                  ].map(({ label, to }) => (
                    <li key={label}>
                      <Link
                        to={to}
                        className="underline-bar text-sm font-bold text-[#f9f9f9] hover:text-[#fcc000]"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Careers */}
              <div>
                <h4 className="font-bold text-base mb-2 text-[#999999]">Careers</h4>
                <ul className="space-y-2">
                  {[
                    { label: "our-vibe", to: "/career#our-vibe" },
                    { label: "Open Positions", to: "/career#open-positions" },
                    { label: "Become a cloudgaier", to: "/career#cloudgaier" },
                  ].map(({ label, to }) => (
                    <li key={label}>
                      <Link
                        to={to}
                        className="underline-bar text-sm font-bold text-[#f9f9f9] hover:text-[#fcc000]"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="font-bold text-base mb-2 text-[#999999]">Company</h4>
                <ul className="space-y-2">
                  {[
                    { label: "Our Story", to: "/company#our-story" },
                    { label: "Salesforce Ventures", to: "/company#salesforce-ventures" },
                    { label: "Meet the team", to: "/company#meet-the-team" },
                  ].map(({ label, to }) => (
                    <li key={label}>
                      <Link
                        to={to}
                        className="underline-bar text-sm font-bold text-[#f9f9f9] hover:text-[#fcc000]"
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
              <div className="flex space-x-4 items-center">
                <a href="#">
                  <FaLinkedin className="hover:text-white text-[#f9f9f9] h-[18px] cursor-pointer" />
                </a>
                <a href="#">
                  <FaInstagram className="hover:text-white text-[#f9f9f9] h-[18px] cursor-pointer" />
                </a>
                <a href="#">
                  <FaYoutube className="hover:text-white text-[#f9f9f9] h-[18px] cursor-pointer" />
                </a>
                <div className="flex items-center space-x-2">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg"
                    alt="Salesforce Logo"
                    className="h-[18px] w-auto"
                  />
                  <span className="text-[#f9f9f9] text-sm font-medium">AppExchange</span>
                </div>
              </div>

              {/* Bottom Links */}
              <div className="flex text-[#f9f9f9] flex-wrap gap-6">
                <a href="#" className="text-sm font-bold hover:text-[#fcc000]">
                  Integrity line
                </a>
                <a href="#" className="text-sm font-bold hover:text-[#fcc000]">
                  Sitemap
                </a>
                <a href="#" className="text-sm font-bold hover:text-[#fcc000]">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm font-bold hover:text-[#fcc000]">
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
