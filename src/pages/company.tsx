import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaBinoculars, FaBullseye, FaHome, FaThumbtack } from "react-icons/fa";
import { throttle } from "lodash";

// Define team members
const teamMembers = [
  {
    id: 1,
    name: "Nicolás Orzabal",
    title: "Co-Founder & CEO",
    image:
      "https://cloudgaia.com/storage/2025/01/company-team-nicolas-orzabal-1.webp",
    linkedIn: "#",
  },
  {
    id: 2,
    name: "Francisco Okecki",
    title: "Board Member Advisor & Co-Founder",
    image:
      "https://cloudgaia.com/storage/2025/01/company-team-francisco-okecki-1.webp",
    linkedIn: "#",
  },
  {
    id: 3,
    name: "Santiago Ramos Mejía",
    title: "Co-Founder & CPO",
    image:
      "https://cloudgaia.com/storage/2025/01/company-team-santiago-ramos-mejia.webp",
    linkedIn: "#",
  },
  {
    id: 4,
    name: "Francisco Orzabal",
    title: "Board Member Advisor & Co-Founder",
    image:
      "https://cloudgaia.com/storage/2025/01/company-team-francisco-orzabal.webp",
    linkedIn: "#",
  },
  {
    id: 5,
    name: "Richard Arnold",
    title: "Salesforce Board Observer",
    image:
      "https://cloudgaia.com/storage/2025/01/company-team-richard-arnold.webp",
    linkedIn: "#",
  },
  {
    id: 6,
    name: "Joel Kurtz",
    title: "Salesforce Board Member",
    image: "https://cloudgaia.com/storage/2025/05/board-square-2.png",
    linkedIn: "#",
  },
  {
    id: 7,
    name: "Florencia Cattelani",
    title: "COO",
    image:
      "https://cloudgaia.com/storage/2025/01/company-team-florencia-cattelani.webp",
    linkedIn: "#",
  },
  {
    id: 8,
    name: "Juan José López Santiso",
    title: "CRO",
    image:
      "https://cloudgaia.com/storage/2025/01/company-team-juan-jose-lopez-santiso.webp",
    linkedIn: "#",
  },
  {
    id: 9,
    name: "Francisco Salas",
    title: "CMO",
    image:
      "https://cloudgaia.com/storage/2025/01/company-team-francisco-salas.webp",
    linkedIn: "#",
  },
  {
    id: 10,
    name: "Sebastián Golletti",
    title: "CFO",
    image:
      "https://cloudgaia.com/storage/2025/01/company-team-sebastian-golletti.webp",
    linkedIn: "#",
  },
  {
    id: 11,
    name: "Mariano Saubidet",
    title: "Group General Counsel",
    image: "https://cloudgaia.com/storage/2025/02/team-mariano-saudibet.webp",
    linkedIn: "#",
  },
  {
    id: 12,
    name: "Becky Wright",
    title: "EVP Growth",
    image:
      "https://cloudgaia.com/storage/2025/01/company-team-becky-wright.webp",
    linkedIn: "#",
  },
  {
    id: 13,
    name: "José Pereyra Iraola",
    title: "Finance Director",
    image:
      "https://cloudgaia.com/storage/2025/01/company-team-jose-pereyra-iraola.webp",
    linkedIn: "#",
  },
  {
    id: 14,
    name: "Pablo Massone",
    title: "Sales Director Indirect Channel",
    image:
      "https://cloudgaia.com/storage/2025/01/company-team-pablo-massone.webp",
    linkedIn: "#",
  },
  {
    id: 15,
    name: "Mariana Aro",
    title: "Talent Director",
    image:
      "https://cloudgaia.com/storage/2025/01/company-team-mariana-aro.webp",
    linkedIn: "#",
  },
  {
    id: 16,
    name: "Matías Cebrian",
    title: "Delivery Director",
    image:
      "https://cloudgaia.com/storage/2025/01/company-team-matias-cebrian.webp",
    linkedIn: "#",
  },
  {
    id: 17,
    name: "Alan Gil",
    title: "Delivery Director",
    image: "https://cloudgaia.com/storage/2025/04/Imagen-Alan-WEB.png",
    linkedIn: "#",
  },
  {
    id: 18,
    name: "Avery Amaya",
    title: "RVP Sales NAM",
    image: "https://cloudgaia.com/storage/2025/02/team-avery.webp",
    linkedIn: "#",
  },
];

const Company = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showVideoImage, setShowVideoImage] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const current = window.scrollY;
      setIsHeaderVisible(current <= lastScrollY || current < 10);
      setLastScrollY(current);
    }, 100);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel();
    };
  }, [lastScrollY]);

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      {/* Blue Right-Angle Triangle in the Top-Right Corner */}
      <div
        className="absolute top-0 right-0 w-48 h-48 bg-[#008093]"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
        aria-hidden="true"
      />

      {/* Header */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out ${
          isHeaderVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Header />
      </div>
      {/* Main Content */}
      <div className="container mx-auto px-4 py-10 md:px-6 mt-20">
        <div className="px-6 py-10 md:px-10">          
        
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <FaHome className="mr-1 text-xl" aria-hidden="true" />
          <span className="mx-1 text-lg font-medium">/</span>
          <span className="text-lg font-semibold">Company</span>
        </div>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto mt-5">
          <h1 className="text-2xl md:text-6xl font-bold text-[#008093] mb-4">
            Experience the Cloudgaia vibe
          </h1>
          <p className="text-[#474747] text-base md:text-2xl mt-5">
            Our commitment to excellence and comprehensive Salesforce expertise
            <br />
            make us leaders in driving digital transformation across industries.
          </p>
        </div>

        {/* Full-width Image */}
        <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] mt-[150px]">
          <img
            src="/company1.PNG"
            alt="visual"
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* CEO Quote Section (Centered Layout) */}
        <div className="w-full flex justify-center px-0 py-4 mt-20">
          <div className="flex flex-row items-start m-0 p-0 max-w-3xl w-full justify-center">
            {/* Image */}
            <div className="shrink-0 m-0 p-0">
              <img
                src="https://cloudgaia.com/storage/2025/01/company-nicolas-orzabal-rounded.svg"
                alt="Nicolás Orzabal"
                className="w-48 h-auto object-contain m-0 p-0"
                style={{ display: "block" }}
              />
            </div>

            {/* Text */}
            <div className="text-left text-[#474747] m-0 p-0 leading-tight ml-2">
              <p className="text-sm md:text-base m-0 p-0 text-xl">
                “At Cloudgaia we always say that we are not looking for happy{" "}
                <br />
                customers, we are looking for successful customers. I am proud
                of our <br />
                commitment to our core values and consultative approach. Our
                team’s <br />
                dedication to delivering ‘All-In’ service consistently brings
                innovative <br />
                solutions and unmatched value to our clients. Our proven track
                record <br />
                with leading global companies attests to our effectiveness in{" "}
                <br />
                transforming business challenges into growth opportunities.”
              </p>
              <h3 className="md:text-base font-bold mt-1 mb-0 text-xl">
                Nicolás Orzabal
              </h3>
              <p className="text-lg text-gray-600 mt-0 font-bold">
                Co-Founder & CEO
              </p>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="text-center px-4 py-16">
          <h2 className="text-2xl md:text-5xl font-bold text-[#008093] mb-6">
            A Brand New Future awaits us
          </h2>
          <p className="text-[#474747] text-sm md:text-lg max-w-2xl mx-auto mb-6">
            Our new branding signals a bold future for Cloudgaia—rooted in our
            heritage, focused on innovation, and dedicated to empowering clients
            with transformative Salesforce solutions.
          </p>
          <h3 className="text-lg md:text-2xl font-semibold text-[#FF83A9] mb-8">
            Together, we’re all-in for your growth
          </h3>
          <button
            onClick={() => setShowVideoImage(true)}
            className="px-6 py-3 rounded-full bg-yellow-400 text-[#474747] font-semibold text-base md:text-lg hover:bg-[#FF83A9] hover:text-white transition-all duration-300"
          >
            Watch the video
          </button>
        </div>

        {/* Video Modal */}
        {showVideoImage && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center px-4">
            <button
              onClick={() => {
                setShowVideoImage(false);
                setPlayVideo(false);
              }}
              className="fixed top-6 right-6 text-white text-4xl font-bold z-50 hover:text-red-400 transition"
            >
              ×
            </button>
            <div className="relative max-w-4xl w-full bg-black rounded-lg overflow-hidden shadow-lg">
              {!playVideo ? (
                <>
                  <img
                    src="/image5.png"
                    alt="Cloudgaia Video"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
                    <h2 className="text-white text-2xl md:text-4xl font-bold bg-black/50 px-6 py-3 rounded mb-4">
                      Cloudgaia in one minute.
                    </h2>
                    <button
                      onClick={() => setPlayVideo(true)}
                      className="bg-white text-black px-6 py-3 rounded-full shadow hover:bg-gray-200 transition duration-300 flex items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M3 22v-20l18 10-18 10z" />
                      </svg>
                      <span className="text-lg font-semibold">Play video</span>
                    </button>
                  </div>
                </>
              ) : (
                <video className="w-full h-full" controls autoPlay>
                  <source src="/video.mp4" type="video/mp4" />
                </video>
              )}
            </div>
          </div>
        )}

        {/* Team Members Section */}
        <div className=" mt-16">
          <h2 className="text-3xl md:text-6xl font-bold text-center text-[#474747] mb-10">
            Our senior leadership team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white border rounded-lg shadow p-4 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-35 h-35 rounded-lg mx-auto object-cover mb-4"
                />
                <p className="text-[#008093] font-bold text-xl">in</p>
                <h3 className="text-gray-600 font-semibold text-lg mt-1">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm">{member.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* AI & Data Certifications Section */}
        <div className="relative w-full mt-20">
          <img
            src="laptop.png"
            alt="AI and Data Certifications"
            className="w-full h-[500px] object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h2 className="text-4xl font-bold text-white mb-2">
              150+ AI & Data certifications
            </h2>
            <p className="text-white text-xl px-4">
              Chosen by Salesforce as an Agentforce implementer, we continue to
              <br />
              empower ourselves to drive innovation, streamline processes and
              drive
              <br />
              business growth through artificial intelligence and autonomous
              agents.
            </p>
          </div>
        </div>

        {/* Salesforce Expertise Section */}
        <div className="w-full flex flex-col items-center justify-center px-4 py-8 mt-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#474747] mb-6 text-center">
            Salesforce Expertise
          </h2>
          <img
            src="salesforce.PNG"
            alt="Salesforce Expertise"
            className="w-full max-w-xl sm:max-w-2xl md:max-w-4xl lg:max-w-5xl h-auto rounded-lg object-cover"
          />
        </div>

        {/* Industry Expertise Section */}
        <div className="w-full flex flex-col items-center justify-center px-4 py-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#474747] mb-6 text-center">
            Industry Expertise
          </h2>
          <img
            src="expertise.PNG"
            alt="Industry Expertise"
            className="w-full max-w-xl sm:max-w-2xl md:max-w-4xl lg:max-w-5xl h-auto rounded-lg object-cover"
          />
        </div>

        {/* Two Column Section */}
        <div className="w-full flex flex-col md:flex-row mt-10">
          {/* Left Div */}
          <div className="w-full md:w-1/2 bg-[#008093] flex flex-col items-center justify-center px-4 py-8">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4 text-center">
              We Join Salesforce
              <br />
              Pledge 1% Commitment
            </h2>
            <p className="text-white text-base md:text-lg mb-6 text-center">
              We are commited to the Salesforce Pledge 1% by making our
              resources, <br />
              time and products available to support the integration & growth of
              <br /> NGOs and organizations.
            </p>
            <img
              src="https://cloudgaia.com/storage/2025/01/company-pledge-img.webp"
              alt="Our Mission"
              className="w-full max-w-sm sm:max-w-md md:max-w-lg h-auto rounded-lg object-cover"
            />
          </div>
          {/* Right Div */}
          <div className="w-full md:w-1/2 bg-yellow-400 flex flex-col items-center justify-center px-4 py-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#008093] mb-4 text-center">
              We Signed the United Nations Women's <br />
              Empowerment Principles
            </h2>
            <p className="text-gray-800 text-base md:text-lg mb-8 text-center">
              “We are convinced of the power of diversity for organizations and
              the
              <br /> impact it has on their evolution and their surroundings. We
              believe that <br />
              through the UN WEPs, we will be able to deepen and focus our
              efforts <br />
              in achieving gender equality, a foundation for a sustainable
              future.”
            </p>
            <div className="flex items-center justify-center space-x-4 mb-4">
              <img
                src="https://cloudgaia.com/storage/2025/01/company-nicolas-circle.webp"
                alt="Nicolás Orzabal"
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover"
              />
              <div className="text-center sm:text-left">
                <p className="text-gray-800 font-semibold text-lg">
                  Nicolás Orzabal
                </p>
                <p className="text-gray-800 text-lg font-bold">
                  Co-Founder & CEO
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="mx-auto my-6 p-6 rounded-lg shadow-lg text-center max-w-7xl"
          style={{ backgroundColor: '#008093' }}
        >
          <img
            src="https://cloudgaia.com/storage/2025/01/logo-salesforce.svg"
            alt="Top"
            className="mx-auto mb-6 w-32 h-32"
          />
          <h2 className="text-2xl font-semibold mb-4 text-white">
            Empowered by Salesforce Ventures investment
          </h2>
          <p className="text-white text-base leading-relaxed">
            In 2024, we proudly announced an investment from Salesforce
            Ventures, marking a significant milestone in our journey <br />
            as a leading global Salesforce partner. This partnership empowers
            us to expand our reach across the Americas and <br />
            Europe, bringing even greater innovation and expertise to help our
            clients thrive through digital transformation.
          </p>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Company;