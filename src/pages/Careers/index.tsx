import { useEffect, useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaRegLightbulb,
  FaRocket,
  FaInfoCircle,
  FaAngleUp,
  FaArrowLeft,
  FaArrowRight,
  FaAngleDown,
} from "react-icons/fa";
import Header from "@/components/Header";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;
import { toast } from "sonner";

import Footer from "@/components/Footer";
import axios from "axios";

const images = [
  // { img: "/Depositphotos_151402814_ds (1).jpg" },

  { img: "/careersnews.jpg" },

  { img: "/career2.jpg" },

  // { img: "/Depositphotos_365173196_L (1).jpg" },
  // { img: "/Depositphotos_81078342_ds (1).jpg" },
  // { img: "/Depositphotos_763920694_L (1).jpg" },
  { img: "/career3.jpg" },

  // { img: "/careers-slide-7.webp" },
];

const testimonials = [
  {
    quote:
      "Codescience represents the perfect combination of flexibility and challenge. It allows me to work with international clients,.",
    name: "Vipin Patel",
    title: "Salesforce specialist",
    // flag: "/flagarg.svg",
    flag: "/india.png",
  },
  {
    quote:
      "The culture here is incredible. I feel supported and empowered to do my best work every single day. The opportunities for growth are endless.",
    name: "Jane Dsouza",
    title: "Lead Developer",
    flag: "/usa.png",
  },
];
const accordionData = [
  {
    title: "Venture",
    description:
      "We encourage you to explore new paths, take on challenges, and grow both personally and professionally.",
    bgColor: "bg-[#00838A]",
    textColor: "text-[#f9f9f9]",
  },
  {
    title: "Include",
    description:
      "We foster a diverse and inclusive environment where every voice is heard, valued, and respected.",
    textColor: "text-[#474747]",
    bgColor: "bg-[#FFB81C]",
  },
  {
    title: "Believe",
    description:
      "We're driven by the belief that our work can contribute to a better world, making a meaningful impact",
    bgColor: "bg-[#E83F6F]",
    textColor: "text-[#f9f9f9]",
  },
  {
    title: "Enjoy",
    description:
      "We celebrate the journey, finding joy in our successes, our growth, and the time we share as a team.",
    bgColor: "bg-[#4a4a4a]",
    textColor: "text-[#f9f9f9]",
  },
];

// Data for Open Positions - UPDATED
const jobPositions = [
  {
    title: "Senior Project Manager",
    department: "Operations",
    type: "Remote",
    purpose:
      "We are looking for a Senior Project Manager. The ideal candidate will be responsible for planning, coordinating, and implementing projects within the decided-upon budget, timeline, and scope. They will also effectively monitor and present project updates to relevant stakeholders, clients, or project team members.",
    skills: [
      "7 to 10 years of experience in managing high-profile projects (large companies, multi-cloud environments, multiple services).",
      "3 years of experience managing agile teams with +20 people.",
      "Experience in multi-cloud Salesforce projects implementation (Sales, Commerce B2B, Marketing and Service Cloud).",
      "Experience in B2B projects or ideally involved in projects targeting the mass consumer segment.",
      "Advanced English Level.",
      "Leadership skills and executive communication (C-level).",
    ],
  },
  {
    title: "Solution Engineer Executive",
    department: "Commercial",
    type: "Remote",
    purpose:
      "Provide technical expertise and support to the sales team, create and deliver compelling product demonstrations, and design solutions that meet client needs.",
    skills: [
      "Proven experience as a Solution Engineer or similar role.",
      "Strong understanding of enterprise software and sales cycles.",
      "Excellent presentation and communication skills.",
      "Ability to translate technical features into business benefits.",
    ],
  },
  {
    title: "Senior Salesforce Frontend Developer (LWC Specialist)",
    department: "Operations",
    type: "Remote",
    purpose:
      "Design and develop high-quality, scalable, and performant user interfaces on the Salesforce platform using Lightning Web Components (LWC).",
    skills: [
      "Extensive experience with LWC and the Salesforce Lightning Design System (SLDS).",
      "Proficient in JavaScript, HTML5, and CSS3.",
      "Experience with Aura Components is a plus.",
      "Strong understanding of front-end development best practices.",
      "Salesforce Platform Developer I certification is required.",
    ],
  },
];

export const Careers = () => {
  const navigate = useNavigate();
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [isRobot, setIsRobot] = useState(false);
  const [activeTab, setActiveTab] = useState("All areas");
  // const [openAccordion, setOpenAccordion] = useState(null);
  const [openAccordions, setOpenAccordions] = useState([]);

  // const handleAccordionClick = (title) => {
  //   setOpenAccordion(openAccordion === title ? null : title);
  // };
  const handleAccordionClick = (title) => {
    if (openAccordions.includes(title)) {
      // remove the title (close the accordion)
      setOpenAccordions(openAccordions.filter((t) => t !== title));
    } else {
      // add the title (open the accordion)
      setOpenAccordions([...openAccordions, title]);
    }
  };

  const [openJobIndex, setOpenJobIndex] = useState(null);
  const cloudgaierRef = useRef(null);
  const openPositionsRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      if (location.hash) {
        const id = location.hash.replace("#", "");
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 100);
  }, [location]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    country: "",
    area: "",
    linkedin: "",
    message: "",
  });

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API_BASE_URL}api/user/career`, formData)
      .then((res) => {
        setFormData({
          firstName: "",
          lastName: "",
          mobile: "",
          email: "",
          country: "",
          area: "",
          linkedin: "",
          message: "",
        });
        setIsRobot(false);
        // toast.success("Details_added", {
        //   position: "top-right",
        // });
        navigate("/thank-you");
      })
      .catch((error) => {
        console.log(error);
      });
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
  const scrollToCloudgaier = () => {
    cloudgaierRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToOpenPositions = () => {
    openPositionsRef.current?.scrollIntoView({ behavior: "smooth" });
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
    <div className="relative min-h-screen overflow-x-hidden bg-[#f9f9f9]">
      <div
        className="absolute top-0 right-0 w-72 h-72 bg-[#008093]"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
        aria-hidden="true"
      />
      <div
        className={`fixed top-0 left-0 w-full transition-transform duration-300 ease-in-out z-50 ${
          isHeaderVisible ? "translate-y-6" : "-translate-y-full"
        }`}
      >
        <Header />
      </div>

      {/* ===== CHANGE HERE: pt-[80px] ko pt-[120px] kar diya gaya hai ===== */}
      <div className="container mx-auto pt-[120px] md:px-0 ">
        <div className="px-0 py-12 md:px-20 ">
          <div className="flex mt-20 items-center text-sm text-gray-800 ">
            <img src="bread-home.svg" className="mr-1 text-xl" />
            <span className="mx-4 text-lg font-medium">/</span>
            <span className="text-[#474747] text-[18px] font-semibold  cursor-pointer">
              Careers
            </span>
          </div>
          <div
            className={`text-5xl font-bold text-[#008093] my-5 transition-transform
             ${loaded ? "translate-y-0  duration-300" : " translate-y-12"}`}
          >
            All-in for people
          </div>
          <div className="text-2xl text-[#474747] text-[24px]">
            Join a multicultural team of Salesforce experts who elevate
            businesses through technology.
          </div>
        </div>
        <div className="bg-[#f9f9f9]  sm:px-6  lg:px-12 flex flex-col lg:flex-row  gap-8">
          <div className="relative w-full max-w-3xl px-6 py-24 ">
            <img
              // src="Screenshot (187).png"
              src="/maapnew (187).jpg"
              alt="World Map"
              className="w-full opacity-80"
            />
          </div>
          <div className="max-w-xl text-center lg:text-left py-20 pt-20  ">
            <h2 className="text-[#ff83a9] text-2xl font-bold mb-4 text-[32px] md:pt-24  ">
              Codescience around the world
            </h2>
            <p className="text-[#474747] font-text text-[18px] mb-6 ">
              Together, we drive meaningful transformations with a One Team
              approach, innovation, and a shared commitment to creating lasting
              impact—all while having a great time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 ">
              <button
                onClick={scrollToCloudgaier}
                className="bg-[#fcc000] font-semibold text-[16px]  text-[#474747] hover:bg-[#ff83a9] hover:text-[#FFFFFF] text-semibold  py-2 px-6 rounded-full"
              >
                Become a codescience
              </button>
              <button
                onClick={scrollToOpenPositions}
                className="bg-[#fcc000] font-semibold text-[16px]  text-[#474747] hover:bg-[#ff83a9] hover:text-[#FFFFFF]  py-2 px-6 rounded-full"
              >
                Explore open positions
              </button>
            </div>
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

      <div id="our-vibe" className=" bg-[#f9f9f9]">
        <div className="container mx-auto pt-[140px] px-4 md:px-6">
          <div className="px-6 py-10 md:px-0">
            <div
              className={`  text-[60px] font-bold text-center text-[#474747]  transition-transform  ${
                loaded ? "translate-y-0 duration-300" : "translate-y-20"
              }`}
            >
              Our culture is what sets us apart
            </div>
            <div className="my-4 pt-0">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="max-h-[100px] mx-auto bg-white outline-none "
                style={{ background: "none" }}
              >
                <source src="/Vibe-1.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="text-center font-bold text-[#474747] text-lg">
              Our vibes makes the difference.
            </div>
            <div className="text-center leading-tight text-lg">
              It’s the way we work, the way we connect, and the way we create
              together. We’re committed to building a safe and
            </div>
            <div className="text-center leading-tight text-lg">
              inclusive space where people come first—where you can be yourself,
              grow, and thrive as part of a team that supports
            </div>
            <div className="text-center text-lg">and inspires you.</div>
          </div>
        </div>

        <div className=" container mx-auto pt-[1px] px-4 md:px-6  py-8 ">
          <div className="px-6 py-10 md:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center items-start gap-2 mb-10">
              {accordionData.map((item) => {
                const isOpen = openAccordions.includes(item.title);
                return (
                  <div
                    key={item.title}
                    className={`${item.bgColor} ${item.textColor} rounded-lg px-6 text-[24px] pt-6 pb-2  transition-all duration-500 ease-in-out`}
                  >
                    <button
                      onClick={() => handleAccordionClick(item.title)}
                      className="w-full text-bold p-6 px-6 pt-2 text-[24px] pb-2 flex items-center justify-between text-left"
                    >
                      <span> {item.title}</span>
                      {isOpen ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="px-4 pb-4 text-sm">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              Here, it's not just about work—it's about working together to
              create something extraordinary.
            </p>
            <div className="text-center mb-12 pt-8">
              <h2 className="text-[30px]  font-bold text-[#474747] mb-6">
                We're all-in for your professional growth
              </h2>
              <p className="leading-tight max-w-4xl mx-auto text-gray-600 text-lg">
                We're here to empower you to become the best version of yourself
                every day, offering the flexibility to shape your work
                experience around your unique needs and goals. Whether it's how,
                when, or where you work, we're by your side, creating the space
                for you to grow, thrive, and make an impact.
              </p>
            </div>
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-1 mx-auto ">
              {[
                {
                  video: "/Workmy.mp4",
                  points: [
                    "Work from home, the office, or a coworking space—it's your choice!",
                    "The freedom to work from anywhere in the world (1 month).",
                  ],
                },
                {
                  video: "/freetimeoffs.mp4",
                  points: [
                    "Flexible time off and vacations",
                    "Work schedules that fit your lifestyle",
                  ],
                },
                {
                  video: "/academy.mp4",
                  points: [
                    "Free Salesforce certifications and other related certifications",
                    "English-Spanish language classes",
                    "Workshops and training sessions",
                  ],
                },
                {
                  video: "/wellness.mp4",
                  points: [
                    "A culture of care",
                    "Flexible work options",
                    "Comprehensive wellness programs",
                  ],
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#FAFAFA] rounded-xl  p-8 flex flex-col sm:flex-row items-center gap-15"
                >
                  <div className="flex-shrink-0 w-80 h-24 flex items-center justify-center">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="max-h-full w-auto"
                    >
                      <source src={item.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="full-h  text-gray-700">
                    <ul className="font-dm  text-[16px] list-disc list-inside ml-4 space-y-4 leading-tight">
                      {item.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4  md:px-6   ">
          <div className="cpx-6 py-5 md:px-10">
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
                  <p className="text-gray-300 mt-1">
                    {currentTestimonial.title}
                  </p>
                </div>
                <div className="flex gap-4 mt-4">
                  <button
                    onClick={handlePrevTestimonial}
                    className="bg-yellow-400 text-white p-3 rounded-full hover:bg-[rgb(255,131,169)] transition-colors "
                  >
                    <FaArrowLeft />
                  </button>
                  <button
                    onClick={handleNextTestimonial}
                    className="bg-yellow-400 text-white p-3 rounded-full hover:bg-[rgb(255,131,169)] transition-colors"
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="cloudgaier"
        ref={cloudgaierRef}
        // style={{ backgroundImage: "url('/careers-form-bacl.webp)" }}

        className="relative w-full py-24 bg-[url('/careers-form-bacl.webp')] bg-cover bg-center "
      >
        <div className="absolute inset-0 bg-black/75 z-0"></div>
        <div className="relative z-10 container mx-auto px-4">
          <h2 className="text-[40px] font-bold text-[#fcc000] text-center mb-1 mt-5">
            Become a Codescience
          </h2>
          <form
            onSubmit={handleSubmit}
            className="max-w-5xl mx-auto p-8 sm:p-10 rounded-xl shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
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
                <ArrowDownwardIcon
                  sx={{ fontSize: 16 }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                />
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
                <ArrowDownwardIcon
                  sx={{ fontSize: 16 }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                />
              </div>
              <input
                type="url"
                name="linkedin"
                placeholder="LinkedIn*"
                className={`${inputStyle} md:col-span-3`}
                onChange={handleFormChange}
                value={formData.linkedin}
                required
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
              <p className="text-[12px] text-[#f9f9f9]">
                By continuing, I confirm that I have read and agree to the
                <a
                  href="/privacycona"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="font-semibold  cursor-pointer ">
                    Privacy Policy
                  </span>
                </a>
              </p>
            </div>
            <div className="flex flex-row justify-between items-center gap-6">
              <div className="bg-white border border-gray-300 rounded-md px-2 py-2 flex items-center w-[210px]">
                <input
                  type="checkbox"
                  id="not-robot"
                  className="h-4 w-4 mr-2 accent-blue-600"
                  checked={isRobot}
                  onChange={(e) => setIsRobot(e.target.checked)}
                  required
                />
                <label
                  htmlFor="not-robot"
                  className="text-[10px] text-[#000] mr-auto"
                >
                  I'm not a robot
                </label>
                <div className="flex flex-col items-center">
                  <img
                    src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                    alt="reCAPTCHA logo"
                    className="h-6 mb-1"
                  />
                  <span className="text-[7px] text-[#555] leading-none">
                    reCAPTCHA
                  </span>
                  <span className="text-[6px] text-[#000] cursor-pointer leading-none">
                    Privacy – Terms
                  </span>
                </div>
              </div>
              <button
                type="submit"
                className=" sm:w-auto bg-gray-200 text-[#474747] font-bold py-2 px-6 rounded-full hover:bg-[#ff83a9] transition-colors"
              >
                Apply
              </button>
            </div>
          </form>
        </div>
      </div>

      <div ref={openPositionsRef} id="open-positions" className=" bg-[#f9f9f9]">
        <div className="container mx-auto px-4 py-20 md:px-6 ">
          <div className="px-6 py-10 md:px-10">
            <div className="text-center mb-12">
              <h2
                className={`text-[60px] font-bold text-[#008093] transition-transform  ${
                  loaded ? "translate-y-0 duration-300" : "translate-y-24"
                } `}
              >
                Open positions
              </h2>
              <p className="text-[#474747] ml-10 mt-0 text-2xl">
                Join the team, these are our open positions.
              </p>
            </div>

            <div className="space-y-10 mb-16">
              <div className="flex items-start gap-4">
                <img src="/benefits-icon.svg" className="h-6" />

                <div>
                  <h3 className="font-bold text-lg text-[#ff83a9]">
                    What we offer
                  </h3>
                  <ul className=" text-[#474747] text-[18px] text-semibold mt-2  leading-tight ml-4">
                    <li>A dynamic and collaborative work environment</li>
                    <li>Flexibility to work from anywhere in the world</li>
                    <li>
                      {" "}
                      A supportive culture that values creativity and innovation
                    </li>
                    <li>Free certifications</li>
                    <li>Free time-off</li>
                    <li>English and Spanish classes</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <img src="/icon-plane.svg" className="h-6" />
                <div>
                  <h3 className="font-bold text-lg text-[#ff83a9]">
                    Why Join Codescience?
                  </h3>
                  <ul className=" text-[#474747] text-[18px] text-semibold mt-2  leading-tight ml-4">
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
                <img src="/2-lampara-emoji.png" className="h-6" />
                <div>
                  <h3 className="font-bold text-lg text-[#ff83a9]">
                    About Codescience:
                  </h3>
                  <p className="text-[#474747] text-[18px] text-semibold mt-2 ml-4">
                    At Codescience, we are passionate about digital
                    transformation with Salesforce. We partner with companies to
                    drive innovation, ensuring real business impact.
                  </p>
                  <p className="text-[#474747] mt-4 text-xl font-[18px] font-semibold leading-tight ml-4">
                    Ready to take your career to the next level? <br /> Join
                    Codescience and be part of the digital evolution!
                  </p>
                </div>
              </div>
            </div>

            <div className="flex  items-left gap-4 mb-8">
              <button
                onClick={() => setActiveTab("All areas")}
                className={`py-2 px-6 rounded-full  transition-colors ${
                  activeTab === "All areas"
                    ? "border border-[#008093] text-[#008093]"
                    : "text-[#474747] hover:text-[#008093]"
                }`}
              >
                All areas
              </button>
              <button
                onClick={() => setActiveTab("Commercial")}
                className={`py-2 px-6  bg-white rounded-full  transition-colors ${
                  activeTab === "Commercial"
                    ? "border-2 border-teal-500 text-[#FF83A9]"
                    : "text-[#474747] hover:text-[#008093] hover:border-[#008093] border border-white"
                }`}
              >
                Commercial
              </button>
              <button
                onClick={() => setActiveTab("Operations")}
                className={`py-2 px-6 rounded-full  bg-white  transition-colors ${
                  activeTab === "Operations"
                    ? "border-2 border-teal-500 text-[#FF83A9]"
                    : "text-[#474747] hover:text-[#008093] hover:border-[#008093] border border-white"
                }`}
              >
                Operations
              </button>
            </div>

            <div className="bg-white rounded-2xl ">
              <div>
                {filteredJobs.map((job, index) => {
                  const isOpen = openJobIndex === index;
                  return (
                    <div
                      key={index}
                      className={`transition-all duration-300 ease-in-out ${
                        index < filteredJobs.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }`}
                    >
                      <div
                        className="flex items-center  p-10 cursor-pointer"
                        onClick={() => setOpenJobIndex(isOpen ? null : index)}
                      >
                        <div className="flex items-center gap-4">
                          <div className="bg-yellow-400  text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                            {isOpen ? <FaAngleUp /> : <FaAngleDown />}
                          </div>
                          <h4 className="font-dm text-[24px] text-[#474747]">
                            {job.title}
                          </h4>
                        </div>
                        <div className=" md:flex ml-6 gap-4 text-[#ff83a9] font-semibold ">
                          <span>{job.department}</span>
                          <span className="text-[#ff83a9] pl-2 ml-15">
                            {job.type}
                          </span>
                        </div>
                      </div>

                      {isOpen && (
                        <div className="px-6 pb-6 text-gray-700 ">
                          <div>
                            <h5 className="font-bold text-lg text-[#ff83a9] mb-3 flex items-center gap-5">
                              <img src="purpose-icon.svg"></img> Purpose of
                              position
                            </h5>
                            <p className="font-dm text-[18px] text-[#474747] pl-2 ml-20">
                              {job.purpose}
                            </p>
                          </div>
                          <div>
                            <h5 className="font-bold text-lg text-[#ff83a9] mb-3 flex items-center gap-5">
                              <img src="skills-icon.svg"></img> Required Skills
                              & Experience
                            </h5>
                            <ul className="font-dm text-[18px] text-[#474747] pl-2 ml-20">
                              {job.skills.map((skill, i) => (
                                <li key={i}>{skill}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="text-left mt-6">
                            <button className="bg-yellow-400  font-bold py-2 px-6 text-[#474747] hover:text-white rounded-full  hover:bg-[#FF83A9] transition">
                              Apply now!
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="text-center mt-12">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-flex items-center gap-2 text-[#474747] text-[18px]"
              >
                <div className="bg-yellow-400 text-white w-10 h-10 rounded-full flex items-center justify-center">
                  <FaAngleUp />
                </div>
                Go to top
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
