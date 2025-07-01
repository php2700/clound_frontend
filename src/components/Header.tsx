import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setIsServicesOpen(false);
      setIsResourcesOpen(false);
      setIsLanguageOpen(false);
    }
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const toggleResources = () => {
    setIsResourcesOpen(!isResourcesOpen);
  };

  const toggleLanguage = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  return (
    <header className="relative z-50">
      <div
        className="max-w-7xl shadow-md mx-auto px-2 sm:px-4 lg:px-6 bg-[#F9F9F9]"
        style={{ padding: "16px 35px", borderRadius: "10px" }}
      >
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center mr-8">
            <Link to="/">
              <img src="/code-science-logo1.png" className="h-[110px]" />
            </Link>
          </div>

          {/* Navigation (Desktop) */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative group">
              <div
                style={{ fontFamily: "sans-serif,dm-sans" }}
                className="flex items-center space-x-1 text-[#474747] hover:text-[#ff83a9] cursor-pointer text-base font-bold py-2"
              >
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out delay-100 bg-white shadow-lg rounded-md mt-0 py-2 w-48 transform group-hover:translate-y-0 translate-y-[-10px] group-hover:visible invisible pointer-events-none group-hover:pointer-events-auto">
                <Link
                  to="/Services/all_services"
                  className="block px-4 py-2 text-sm text-[#474747] hover:bg-gray-100 font-bold relative group/link"
                  style={{ fontFamily: "sans-serif,dm-sans" }}
                >
                  All Services
                  <span className="absolute left-4 bottom-0 h-0.5 bg-red-500 w-0 group-hover/link:w-[calc(100%-2rem)] transition-all duration-300 ease-in-out"></span>
                </Link>
                <Link
                  to="/Services/implementation"
                  className="block px-4 py-2 text-sm text-[#474747] hover:bg-gray-100 font-bold relative group/link"
                  style={{ fontFamily: "sans-serif,dm-sans" }}
                >
                  Implementation
                  <span className="absolute left-4 bottom-0 h-0.5 bg-red-500 w-0 group-hover/link:w-[calc(100%-2rem)] transition-all duration-300 ease-in-out"></span>
                </Link>
                <Link
                  to="/Services/optimization"
                  className="block px-4 py-2 text-sm text-[#474747] hover:bg-gray-100 font-bold relative group/link"
                  style={{ fontFamily: "sans-serif,dm-sans" }}
                >
                  Optimization
                  <span className="absolute left-4 bottom-0 h-0.5 bg-red-500 w-0 group-hover/link:w-[calc(100%-2rem)] transition-all duration-300 ease-in-out"></span>
                </Link>
                <Link
                  to="/Services/innovation"
                  className="block px-4 py-2 text-sm text-[#474747] hover:bg-gray-100 font-bold relative group/link"
                  style={{ fontFamily: "sans-serif,dm-sans" }}
                >
                  Innovation
                  <span className="absolute left-4 bottom-0 h-0.5 bg-red-500 w-0 group-hover/link:w-[calc(100%-2rem)] transition-all duration-300 ease-in-out"></span>
                </Link>
                <Link
                  to="/Services/growth"
                  className="block px-4 py-2 text-sm text-[#474747] hover:bg-gray-100 font-bold relative group/link"
                  style={{ fontFamily: "sans-serif,dm-sans" }}
                >
                  Growth
                  <span className="absolute left-4 bottom-0 h-0.5 bg-red-500 w-0 group-hover/link:w-[calc(100%-2rem)] transition-all duration-300 ease-in-out"></span>
                </Link>
              </div>
            </div>

            {/* Industries */}
            <Link
              to="/industries"
              className="text-gray-700 hover:text-[#ff83a9] text-base font-bold"
              style={{ fontFamily: "sans-serif,dm-sans" }}
            >
              Industries
            </Link>

            {/* Resources Dropdown */}
            <div className="relative group">
              <div
                style={{ fontFamily: "sans-serif,dm-sans" }}
                className="flex items-center space-x-1 text-gray-700 hover:text-[#ff83a9] cursor-pointer text-base font-bold py-2"
              >
                <span>Resources</span>
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out delay-100 bg-white shadow-lg rounded-md mt-0 py-2 w-48 transform group-hover:translate-y-0 translate-y-[-10px] group-hover:visible invisible pointer-events-none group-hover:pointer-events-auto">
                <Link
                  to="/resources/blog"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-bold relative group/link"
                  style={{ fontFamily: "sans-serif,dm-sans" }}
                >
                  Blog
                  <span className="absolute left-4 bottom-0 h-0.5 bg-red-500 w-0 group-hover/link:w-[calc(100%-2rem)] transition-all duration-300 ease-in-out"></span>
                </Link>
                <Link
                  to="/resources/customer-stories"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-bold relative group/link"
                  style={{ fontFamily: "sans-serif,dm-sans" }}
                >
                  Customer Stories
                  <span className="absolute left-4 bottom-0 h-0.5 bg-red-500 w-0 group-hover/link:w-[calc(100%-2rem)] transition-all duration-300 ease-in-out"></span>
                </Link>
              </div>
            </div>

            {/* Careers */}
            <Link
              to="/career"
              className="text-gray-700 hover:text-[#ff83a9] text-base font-bold"
              style={{ fontFamily: "sans-serif,dm-sans" }}
            >
              Careers
            </Link>

            {/* Company */}
            <Link
              to="/company"
              className="text-gray-700 hover:text-[#ff83a9] text-base font-bold"
              style={{ fontFamily: "sans-serif,dm-sans" }}
            >
              Company
            </Link>

            {/* Contact Button (Desktop) */}
            <div className="ml-8">
              <Button
                asChild
                className="bg-yellow-400 transition-colors duration-300 hover:bg-[#ff83a9] hover:text-white text-[#474747] font-bold px-6 py-2 rounded-full text-base"
                style={{ fontFamily: "sans-serif,dm-sans" }}
              >
                <Link to="/contact">Contact</Link>
              </Button>
            </div>
          </nav>

          {/* Hamburger Icon (Mobile) */}
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-md mt-2 px-4 py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {/* Services */}
              <div>
                <button
                  onClick={toggleServices}
                  className="flex items-center justify-between w-full text-gray-700 text-base font-bold"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isServicesOpen && (
                  <div className="pl-4 mt-2 space-y-2 animate-fade-in">
                    <Link
                      to="/services/all_services"
                      className="block text-sm text-gray-700 hover:bg-gray-100 px-2 py-1 rounded font-bold relative group"
                      onClick={toggleMenu}
                    >
                      All Services
                      <span className="absolute left-2 bottom-0 h-0.5 bg-red-500 w-0 group-hover:w-[calc(100%-1rem)] transition-all duration-300 ease-in-out"></span>
                    </Link>
                    <Link
                      to="/Services/implementation"
                      className="block text-sm text-gray-700 hover:bg-gray-100 px-2 py-1 rounded font-bold relative group"
                      onClick={toggleMenu}
                    >
                      Implementation
                      <span className="absolute left-2 bottom-0 h-0.5 bg-red-500 w-0 group-hover:w-[calc(100%-1rem)] transition-all duration-300 ease-in-out"></span>
                    </Link>
                    <Link
                      to="/Services/optimization"
                      className="block text-sm text-gray-700 hover:bg-gray-100 px-2 py-1 rounded font-bold relative group"
                      onClick={toggleMenu}
                    >
                      Optimization
                      <span className="absolute left-2 bottom-0 h-0.5 bg-red-500 w-0 group-hover:w-[calc(100%-1rem)] transition-all duration-300 ease-in-out"></span>
                    </Link>
                    <Link
                      to="/Services/innovation"
                      className="block text-sm text-gray-700 hover:bg-gray-100 px-2 py-1 rounded font-bold relative group"
                      onClick={toggleMenu}
                    >
                      Innovation
                      <span className="absolute left-2 bottom-0 h-0.5 bg-red-500 w-0 group-hover:w-[calc(100%-1rem)] transition-all duration-300 ease-in-out"></span>
                    </Link>
                    <Link
                      to="/Services/growth"
                      className="block text-sm text-gray-700 hover:bg-gray-100 px-2 py-1 rounded font-bold relative group"
                      onClick={toggleMenu}
                    >
                      Growth
                      <span className="absolute left-2 bottom-0 h-0.5 bg-red-500 w-0 group-hover:w-[calc(100%-1rem)] transition-all duration-300 ease-in-out"></span>
                    </Link>
                  </div>
                )}
              </div>

              {/* Industries */}
              <Link
                to="/industries"
                className="text-gray-700 hover:text-gray-900 text-base font-bold"
                onClick={toggleMenu}
              >
                Industries
              </Link>

              {/* Resources */}
              <div>
                <button
                  onClick={toggleResources}
                  className="flex items-center justify-between w-full text-gray-700 text-base font-bold"
                >
                  <span>Resources</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      isResourcesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isResourcesOpen && (
                  <div className="pl-4 mt-2 space-y-2 animate-fade-in">
                    <Link
                      to="/resources/blog"
                      className="block text-sm text-gray-700 hover:bg-gray-100 px-2 py-1 rounded font-bold relative group"
                      onClick={toggleMenu}
                    >
                      Blog
                      <span className="absolute left-2 bottom-0 h-0.5 bg-red-500 w-0 group-hover:w-[calc(100%-1rem)] transition-all duration-300 ease-in-out"></span>
                    </Link>
                    <Link
                      to="/resources/customer-stories"
                      className="block text-sm text-gray-700 hover:bg-gray-100 px-2 py-1 rounded font-bold relative group"
                      onClick={toggleMenu}
                    >
                      Customer Stories
                      <span className="absolute left-2 bottom-0 h-0.5 bg-red-500 w-0 group-hover:w-[calc(100%-1rem)] transition-all duration-300 ease-in-out"></span>
                    </Link>
                  </div>
                )}
              </div>

              {/* Careers */}
              <Link
                to="/careers"
                className="text-gray-700 hover:text-gray-900 text-base font-bold"
                onClick={toggleMenu}
              >
                Careers
              </Link>

              {/* Company */}
              <Link
                to="/company"
                className="text-gray-700 hover:text-gray-900 text-base font-bold"
                onClick={toggleMenu}
              >
                Company
              </Link>

              {/* Language */}
              <div>
                <button
                  onClick={toggleLanguage}
                  className="flex items-center justify-between w-full text-gray-700 text-base font-bold"
                >
                  <span>EN</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      isLanguageOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isLanguageOpen && (
                  <div className="pl-4 mt-2 space-y-2 animate-fade-in">
                    <Link
                      to="/lang/en"
                      className="block text-sm text-gray-700 hover:bg-gray-100 px-2 py-1 rounded font-bold relative group"
                      onClick={toggleMenu}
                    >
                      EN
                      <span className="absolute left-2 bottom-0 h-0.5 bg-red-500 w-0 group-hover:w-[calc(100%-1rem)] transition-all duration-300 ease-in-out"></span>
                    </Link>
                    <Link
                      to="/lang/es"
                      className="block text-sm text-gray-700 hover:bg-gray-100 px-2 py-1 rounded font-bold relative group"
                      onClick={toggleMenu}
                    >
                      ES
                      <span className="absolute left-2 bottom-0 h-0.5 bg-red-500 w-0 group-hover:w-[calc(100%-1rem)] transition-all duration-300 ease-in-out"></span>
                    </Link>
                  </div>
                )}
              </div>

              <Button
                asChild
                className="bg-[#fcc000] hover:bg-[#ff83a9]  hover:text-white text-black font-bold px-6 py-2 rounded-full text-base"
              >
                <Link to="/contact" onClick={toggleMenu}>
                  Contact
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
