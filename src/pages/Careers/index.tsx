import { useEffect, useState } from "react";
// import { FaHome, FaRegLightbulb, FaRocket, FaInfoCircle, FaAngleUp } from "react-icons/fa";
import {
  FaHome,
  FaRegLightbulb,
  FaRocket,
  FaInfoCircle,
  FaAngleUp,
} from "react-icons/fa";
import { FaArrowLeft, FaArrowRight, FaAngleDown } from "react-icons/fa";
import Header from "@/components/Header";
import footer from "@/components/Footer";
import Footer from "@/components/Footer";

const images = [
  { img: "/careers-slide-1.webp" },
  { img: "/careers-slide-4.webp" },
  { img: "/careers-slide-2-1.webp" },
  { img: "/careers-slide-8.webp" },
  { img: "/careers-slide-7.webp" },
];

const testimonials = [
  {
    quote:
      "Cloudgaia represents the perfect combination of flexibility and challenge. It allows me to work with international clients,.",
    name: "Juan Pablo Herrera",
    title: "Salesforce specialist",
    flag: "/flagarg.svg",
  },
  {
    quote:
      "The culture here is incredible. I feel supported and empowered to do my best work every single day. The opportunities for growth are endless.",
    name: "Jane Smith",
    title: "Lead Developer",
    flag: "/flag1.svg",
  },
];
const accordionData = [
  {
    title: "Venture",
    description:
      "We encourage you to explore new paths, take on challenges, and grow both personally and professionally.",
    bgColor: "bg-[#00838A]",
    textColor: "text-white",
  },
  {
    title: "Include",
    description:
      "We foster a diverse and inclusive environment where every voice is heard, valued, and respected.",
    textColor: "text-gray-800",
    bgColor: "bg-[#FFB81C]",
  },
  {
    title: "Believe",
    description:
      "We're driven by the belief that our work can contribute to a better world, making a meaningful impact every day.",
    bgColor: "bg-[#E83F6F]",
    textColor: "text-white",
  },
  {
    title: "Enjoy",
    description:
      "We celebrate the journey, finding joy in our successes, our growth, and the time we share as a team.",
    bgColor: "bg-[#4a4a4a]",
    textColor: "text-white",
  },
];

// Data for Open Positions
const jobPositions = [
  {
    title: "Solution Engineer Executive",
    department: "Commercial",
    type: "Remote",
  },
  {
    title: "Salesforce Release Manager",
    department: "Operations",
    type: "Remote",
  },
  {
    title: "Salesforce Solution Architect – Commerce B2C",
    department: "Operations",
    type: "Remote",
  },
  {
    title: "Senior Salesforce Frontend Developer (LWC Specialist)",
    department: "Operations",
    type: "Remote",
  },
];

/*
For the scrolling text animation, add this to your global CSS file (e.g., globals.css):
@keyframes scroll-vertical {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-50%);
  }
}
.animate-scroll-vertical {
  animation: scroll-vertical 30s linear infinite;
}
*/

export const Careers = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("All areas");
  const [openAccordion, setOpenAccordion] = useState(null);
  const handleAccordionClick = (title) => {
    setOpenAccordion(openAccordion === title ? null : title);
  }; // State for job filters

  // State for the form
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    country: "",
    area: "",
    linkedin: "",
    message: "",
    agreed: false,
  });

  // Handler for form input changes
  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Application submitted successfully! (Check console for data)");
  };

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handlePrevious = () => {
    setImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const currentImage = images[imageIndex]?.img;

  const handlePrevTestimonial = () => {
    setTestimonialIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNextTestimonial = () => {
    setTestimonialIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const currentTestimonial = testimonials[testimonialIndex];

  const filteredJobs = jobPositions.filter(
    (job) => activeTab === "All areas" || job.department === activeTab
  );
  const inputStyle =
    "w-full p-4 bg-gray-50 text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-500";
  const selectStyle = `${inputStyle} appearance-none`;

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
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Blue Right-Angle Triangle in the Top-Right Corner */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-[#008093]"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
        aria-hidden="true" // Hides the decorative element from screen readers
      />
      <div
        className={`fixed top-0 left-0 w-full transition-transform duration-300 ease-in-out z-50 ${
          isHeaderVisible ? "translate-y-6" : "-translate-y-full"
        }`}
      >
        <Header />
      </div>

      {/* <Header /> */}

      {/* ... (Previous sections remain unchanged) ... */}
      <div className="container mx-auto pt-[80px] px-4 md:px-6 ">
        <div className="px-6 py-10 md:px-20 ">
          <div className="flex items-center text-sm text-gray-800 mt-8">
            <FaHome className="mr-1 text-xl" />
            <span className="mx-1 text-lg font-medium">/</span>
            <span className="text-lg font-semibold cursor-pointer">
              Careers
            </span>
          </div>
          <div
            className={`text-5xl font-bold text-[#008093] my-5 transition-transform
                                                     ${
                                                       loaded
                                                         ? "translate-y-0  duration-300"
                                                         : " translate-y-12"
                                                     }
                                                           `}
          >
            All-in for people
          </div>
          <div
            style={{ fontFamily: "sans-serif,dm-sans" }}
            className="text-2xl"
          >
            Join a multicultural team of Salesforce experts who elevate
            businesses through technology.
          </div>
        </div>
      </div>
      <div>
        <div className="relative">
          <img src={currentImage} alt="Careers slide" />
          <div className="absolute  bottom-5 right-10 flex justify-center gap-4">
            <button
              onClick={handlePrevious}
              className="p-3 bg-yellow-500 text-white rounded-full hover:bg-pink-500"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={handleNext}
              className="p-3 bg-yellow-500 text-white rounded-full hover:bg-pink-500"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      <div className=" bg-[#f9f9f9]">
        <div className="container mx-auto pt-[80px] px-4 md:px-6">
          <div className="px-6 py-10 md:px-0">
            <div className="text-6xl font-bold text-center text-gray-700">
              Our culture is what sets us apart
            </div>
            <div className="my-4">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="max-h-[100px] mx-auto bg-white outline-none"
                style={{ background: "none" }}
              >
                <source src="/Vibe-1.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="text-center font-bold text-lg">
              Our vibes makes the difference.
            </div>
            <div
              style={{ fontFamily: "sans-serif,dm-sans" }}
              className="text-center leading-tight text-lg"
            >
              It’s the way we work, the way we connect, and the way we create
              together. We’re committed to building a safe and
            </div>
            <div
              style={{ fontFamily: "sans-serif,dm-sans" }}
              className="text-center leading-tight text-lg"
            >
              inclusive space where people come first—where you can be yourself,
              grow, and thrive as part of a team that supports
            </div>
            <div
              style={{ fontFamily: "sans-serif,dm-sans" }}
              className="text-center text-lg"
            >
              and inspires you.
            </div>
          </div>
        </div>
      </div>
      <div className=" container mx-auto pt-[80px] px-4 md:px-6 bg-white py-16">
        <div className="px-6 py-10 md:px-10">
          <div className="flex flex-wrap justify-center items-start gap-4 mb-10">
            {accordionData.map((item) => {
              const isOpen = openAccordion === item.title;
              return (
                <div
                  key={item.title}
                  className={`
                                        ${item.bgColor} ${item.textColor}
                                        rounded-lg w-56 md:w-60
                                        transition-all duration-500 ease-in-out
                                    `}
                >
                  <button
                    onClick={() => handleAccordionClick(item.title)}
                    className="w-full font-bold text-lg p-4 flex items-center justify-between text-left"
                  >
                    <span>{item.title}</span>
                    {isOpen ? <FaAngleUp /> : <FaAngleDown />}
                  </button>

                  <div
                    className={`
                                            overflow-hidden transition-all duration-500 ease-in-out
                                            ${
                                              isOpen
                                                ? "max-h-96 opacity-100"
                                                : "max-h-0 opacity-0"
                                            }
                                        `}
                  >
                    <p className="px-4 pb-4 text-sm">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <p
            style={{ fontFamily: "sans-serif,dm-sans" }}
            className="text-center text-gray-600 mb-16 max-w-2xl mx-auto"
          >
            Here, it's not just about work—it's about working together to create
            something extraordinary.
          </p>
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              We're all-in for your professional growth
            </h2>
            <p
              style={{ fontFamily: "sans-serif,dm-sans" }}
              className="leading-tight max-w-4xl mx-auto text-gray-600 text-lg"
            >
              We're here to empower you to become the best version of yourself
              every day, offering the flexibility to shape your work experience
              around your unique needs and goals. Whether it's how, when, or
              where you work, we're by your side, creating the space for you to
              grow, thrive, and make an impact.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto">
            <div className="bg-white rounded-xl shadow-md p-8 flex flex-col sm:flex-row items-center gap-8">
              <div className="flex-shrink-0 w-40 h-24 flex items-center justify-center">
                {/* IMG ko VIDEO se replace kiya gaya hai */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="max-h-full w-auto"
                >
                  <source src="/Workmy.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="text-gray-700">
                <ul
                  style={{ fontFamily: "sans-serif,dm-sans" }}
                  className="list-disc list-inside space-y-3 leading-tight"
                >
                  <li>
                    Work from home, the office, or a coworking space—it's your
                    choice!
                  </li>
                  <li>
                    The freedom to work from anywhere in the world (1 month).
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 flex flex-col sm:flex-row items-center gap-8">
              <div className="flex-shrink-0 w-40 h-24 flex items-center justify-center">
                {/* NOTE: Is path ko apni video file se replace karein */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="max-h-full w-auto"
                >
                  <source src="/freetimeoffs.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="text-gray-700">
                <ul
                  style={{ fontFamily: "sans-serif,dm-sans" }}
                  className="list-disc list-inside space-y-3 leading-tight"
                >
                  <li>Flexible time off and vacations</li>
                  <li>Work schedules that fit your lifestyle</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 flex flex-col sm:flex-row items-center gap-8">
              <div className="flex-shrink-0 w-40 h-24 flex items-center justify-center">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="max-h-full w-auto"
                >
                  <source src="/academy.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* <img src="/academy.png" alt="Academy logo" className="max-h-full" /> */}
              </div>
              <div className="text-gray-700">
                <ul
                  style={{ fontFamily: "sans-serif,dm-sans" }}
                  className="list-disc list-inside space-y-3 leading-tight"
                >
                  <li>
                    Free Salesforce certifications and other related
                    certifications
                  </li>
                  <li>English-Spanish language classes</li>
                  <li>Workshops and training sessions</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 flex flex-col sm:flex-row items-center gap-8">
              <div className="flex-shrink-0 w-40 h-24 flex items-center justify-center">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="max-h-full w-auto"
                >
                  <source src="/wellness.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="text-gray-700">
                <ul
                  style={{ fontFamily: "sans-serif,dm-sans" }}
                  className="list-disc list-inside space-y-3 leading-tight"
                >
                  <li>A culture of care</li>
                  <li>Flexible work options</li>
                  <li>Comprehensive wellness programs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 md:px-6  bg-white py-16">
        <div className="cpx-6 py-10 md:px-10">
          <div className="relative bg-[#4a4a4a] text-white p-12 md:p-10 rounded-2xl overflow-hidden">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center relative z-10">
              <blockquote className="text-2xl lg:text-3xl font-semibold leading-relaxed">
                “{currentTestimonial.quote}”
              </blockquote>
              <div className="mt-8">
                <div className="flex items-center justify-center gap-3">
                  <img
                    src={currentTestimonial.flag}
                    alt={`${currentTestimonial.name}'s country flag`}
                    className="w-8 h-auto rounded-sm"
                  />
                  <span className="font-bold text-lg text-yellow-400">
                    {currentTestimonial.name}
                  </span>
                </div>
                <p className="text-gray-300 mt-1">{currentTestimonial.title}</p>
              </div>
              <div className="flex gap-4 mt-8">
                <button
                  onClick={handlePrevTestimonial}
                  className="bg-yellow-400 text-gray-800 p-3 rounded-full hover:bg-pink-500 transition-colors "
                >
                  <FaArrowLeft />
                </button>
                <button
                  onClick={handleNextTestimonial}
                  className="bg-yellow-400 text-gray-800 p-3 rounded-full hover:bg-pink-500 transition-colors"
                >
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full py-24">
        <img
          src="/careersback.webp"
          alt="People working in an office"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/75 z-0"></div>
        <div className="relative z-10 container mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-yellow-400 text-center mb-12">
            Become a Cloudgaier
          </h2>
          <form
            onSubmit={handleSubmit}
            className="max-w-5xl mx-auto p-8 sm:p-10 rounded-xl shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <input
                type="text"
                name="firstName"
                placeholder="First Name*"
                className={inputStyle}
                onChange={handleFormChange}
                value={formData.firstName}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name*"
                className={inputStyle}
                onChange={handleFormChange}
                value={formData.lastName}
                required
              />
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile*"
                className={inputStyle}
                onChange={handleFormChange}
                value={formData.mobile}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                className={inputStyle}
                onChange={handleFormChange}
                value={formData.email}
                required
              />
              <div className="relative">
                <select
                  name="country"
                  className={selectStyle}
                  onChange={handleFormChange}
                  value={formData.country}
                  required
                >
                  <option value="" disabled>
                    Country*
                  </option>
                  <option value="USA">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="Colombia">Colombia</option>
                  <option value="India">India</option>
                </select>
                <FaAngleDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
              <div className="relative">
                <select
                  name="area"
                  className={selectStyle}
                  onChange={handleFormChange}
                  value={formData.area}
                  required
                >
                  <option value="" disabled>
                    Area*
                  </option>
                  <option value="Development">Development</option>
                  <option value="Sales">Sales</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Support">Support</option>
                </select>
                <FaAngleDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
              <input
                type="url"
                name="linkedin"
                placeholder="LinkedIn*"
                className={`${inputStyle} md:col-span-3`}
                onChange={handleFormChange}
                value={formData.linkedin}
              />
              <textarea
                name="message"
                placeholder="Message*"
                rows="3"
                className={`${inputStyle} md:col-span-3`}
                onChange={handleFormChange}
                value={formData.message}
                required
              ></textarea>
            </div>
            <div className="mb-6">
              <p className="text-xs text-gray-500">
                By continuing, I confirm that I have read and agree to the
                Privacy Policy.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <div className="w-full sm:w-auto border border-gray-300 rounded-md p-3 bg-gray-50 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    id="recaptcha-mock"
                    className="h-6 w-6 border-gray-300 rounded"
                  />
                  <label htmlFor="recaptcha-mock" className="text-gray-800">
                    I'm not a robot
                  </label>
                </div>
                <img
                  src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                  alt="reCAPTCHA logo"
                  className="h-8"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto bg-gray-200 text-gray-800 font-bold py-2 px-6 rounded-lg hover:bg-pink-500 transition-colors"
              >
                Apply
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* START: OPEN POSITIONS SECTION */}
      <div className="bg-white container mx-auto px-4 py-10 md:px-6 mt-20">
        <div className="px-6 py-10 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-[#008093]">
              Open positions
            </h2>
            <p className="text-gray-600 mt-4 text-2xl">
              Join the team, these are our open positions.
            </p>
          </div>

          <div className="space-y-10 mb-16">
            <div className="flex items-start gap-4">
              <FaRegLightbulb className="text-pink-500 text-2xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg text-gray-800">
                  What we offer
                </h3>
                <ul
                  style={{ fontFamily: "sans-serif,dm-sans" }}
                  className="list-disc list-inside text-gray-600 mt-2 space-y-1 leading-tight"
                >
                  <li>A dynamic and collaborative work environment</li>
                  <li>Flexibility to work from anywhere in the world</li>
                  <li>
                    A supportive culture that values creativity and innovation
                  </li>
                  <li>Free certifications</li>
                  <li>Free time-off</li>
                  <li>English and Spanish classes</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaRocket className="text-pink-500 text-2xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg text-gray-800">
                  Why Join Cloudgaia?
                </h3>
                <ul
                  style={{ fontFamily: "sans-serif,dm-sans" }}
                  className="list-disc list-inside text-gray-600 mt-2 space-y-1 leading-tight"
                >
                  <li>
                    Work on cutting-edge Salesforce projects with top-tier
                    clients.
                  </li>
                  <li>Be part of a high-performing, collaborative team.</li>
                  <li>Ongoing training and support for certifications.</li>
                  <li>
                    Flexibility and growth opportunities within the company.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaInfoCircle className="text-pink-500 text-2xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg text-gray-800">
                  About Cloudgaia:
                </h3>
                <p
                  className="text-gray-600 mt-2"
                  style={{ fontFamily: "sans-serif,dm-sans" }}
                >
                  At Cloudgaia, we are passionate about digital transformation
                  with Salesforce. We partner with companies to drive
                  innovation, ensuring real business impact.
                </p>
                <p className="text-gray-800 mt-4 text-xl text-bold leading-tight">
                  Ready to take your career to the next level? <br /> Join
                  Cloudgaia and be part of the digital evolution!
                </p>
              </div>
            </div>
          </div>

          <div className="flex  items-left gap-4 mb-8">
            <button
              onClick={() => setActiveTab("All areas")}
              className={`py-2 px-6 rounded-full font-semibold transition-colors ${
                activeTab === "All areas"
                  ? "border-2 border-teal-500 text-teal-500"
                  : "text-gray-500 hover:text-teal-500"
              }`}
            >
              All areas
            </button>
            <button
              onClick={() => setActiveTab("Commercial")}
              className={`py-2 px-6 rounded-full font-semibold transition-colors ${
                activeTab === "Commercial"
                  ? "border-2 border-teal-500 text-teal-500"
                  : "text-gray-500 hover:text-teal-500"
              }`}
            >
              Commercial
            </button>
            <button
              onClick={() => setActiveTab("Operations")}
              className={`py-2 px-6 rounded-full font-semibold transition-colors ${
                activeTab === "Operations"
                  ? "border-2 border-teal-500 text-teal-500"
                  : "text-gray-500 hover:text-teal-500"
              }`}
            >
              Operations
            </button>
          </div>

          <div className=" bg-white rounded-2xl shadow-lg p-4">
            {filteredJobs.map((job, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-4 ${
                  index < filteredJobs.length - 1
                    ? "border-b border-gray-200"
                    : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-yellow-400 text-white w-10 h-10 rounded-full flex items-center justify-center">
                    <FaAngleDown />
                  </div>
                  <h4 className="font-bold text-lg text-gray-800">
                    {job.title}
                  </h4>
                </div>
                <div className="flex items-center gap-4 text-pink-500 font-semibold">
                  <span>{job.department}</span>
                  <span>{job.type}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-2 text-gray-700 font-semibold"
            >
              <div className="bg-yellow-400 text-white w-10 h-10 rounded-full flex items-center justify-center">
                <FaAngleUp />
              </div>
              Go to top
            </button>
          </div>
        </div>
      </div>
      {/* END: OPEN POSITIONS SECTION */}

      <Footer />
    </div>
  );
};
