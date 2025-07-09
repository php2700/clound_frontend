import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaBinoculars, FaBullseye, FaHome, FaThumbtack } from "react-icons/fa";
import { throttle } from "lodash";
import ImageHoverCard from "@/components/imageHoverCard";
import ExpertiseCollapse from "@/components/Expertise_cloud";
import IndustryCollapse from "@/components/industry_expertise";
import { Link, useLocation } from "react-router-dom";


// Define team members
const teamMembers = [
  {
    id: 1,
    name: "Walson Dmello",
    title: "Co-Founder & CEO",
    image:
      // "Screenshot 2025-07-03 175207.jpg",
      "image (3).webp",
    linkedIn: "#",
  },
  {
    id: 2,
    name: "Joyson Tuscano",
    title: "Co-Founder & CTO",
    image:
      "image (4).png",
    linkedIn: "#",
  },
  {
    id: 3,
    name: " Kshitij Rodrigue",
    title: "Co-Founder & COO",
    image:
      "/MAN.png",
    linkedIn: "#",
  },
  {
    id: 4,
    name: "Kabir Shah",
    title: "Salesforce Architect",
    image:
      "ChatGPT Image Jul 1, 2025, 09_21_45 PM.png",
    linkedIn: "#",
  },
  {
    id: 5,
    name: "Sam La Banco",
    title: "Board Member & Advisor",
    image:
      "ChatGPT Image Jul 1, 2025, 09_21_50 PM.png",
    linkedIn: "#",
  },
  {
    id: 6,
    name: "Mateja Sharp",
    title: "Head of Sales",
    image: "ChatGPT Image Jul 3, 2025, 05_54_54 PM.png",
    linkedIn: "#",
  },
  // {
  //   id: 7,
  //   name: "Florencia Cattelani",
  //   title: "COO",
  //   image:
  //     "https://cloudgaia.com/storage/2025/01/company-team-florencia-cattelani.webp",
  //   linkedIn: "#",
  // },
  // {
  //   id: 8,
  //   name: "Juan José López Santiso",
  //   title: "CRO",
  //   image:
  //     "https://cloudgaia.com/storage/2025/01/company-team-juan-jose-lopez-santiso.webp",
  //   linkedIn: "#",
  // },
  // {
  //   id: 9,
  //   name: "Francisco Salas",
  //   title: "CMO",
  //   image:
  //     "https://cloudgaia.com/storage/2025/01/company-team-francisco-salas.webp",
  //   linkedIn: "#",
  // },
  // {
  //   id: 10,
  //   name: "Sebastián Golletti",
  //   title: "CFO",
  //   image:
  //     "https://cloudgaia.com/storage/2025/01/company-team-sebastian-golletti.webp",
  //   linkedIn: "#",
  // },
  // {
  //   id: 11,
  //   name: "Mariano Saubidet",
  //   title: "Group General Counsel",
  //   image: "https://cloudgaia.com/storage/2025/02/team-mariano-saudibet.webp",
  //   linkedIn: "#",
  // },
  // {
  //   id: 12,
  //   name: "Becky Wright",
  //   title: "EVP Growth",
  //   image:
  //     "https://cloudgaia.com/storage/2025/01/company-team-becky-wright.webp",
  //   linkedIn: "#",
  // },
  // {
  //   id: 13,
  //   name: "José Pereyra Iraola",
  //   title: "Finance Director",
  //   image:
  //     "https://cloudgaia.com/storage/2025/01/company-team-jose-pereyra-iraola.webp",
  //   linkedIn: "#",
  // },
  // {
  //   id: 14,
  //   name: "Pablo Massone",
  //   title: "Sales Director Indirect Channel",
  //   image:
  //     "https://cloudgaia.com/storage/2025/01/company-team-pablo-massone.webp",
  //   linkedIn: "#",
  // },
  // {
  //   id: 15,
  //   name: "Mariana Aro",
  //   title: "Talent Director",
  //   image:
  //     "https://cloudgaia.com/storage/2025/01/company-team-mariana-aro.webp",
  //   linkedIn: "#",
  // },
  // {
  //   id: 16,
  //   name: "Matías Cebrian",
  //   title: "Delivery Director",
  //   image:
  //     "https://cloudgaia.com/storage/2025/01/company-team-matias-cebrian.webp",
  //   linkedIn: "#",
  // },
  // {
  //   id: 17,
  //   name: "Alan Gil",
  //   title: "Delivery Director",
  //   image: "https://cloudgaia.com/storage/2025/04/Imagen-Alan-WEB.png",
  //   linkedIn: "#",
  // },
  // {
  //   id: 18,
  //   name: "Avery Amaya",
  //   title: "RVP Sales NAM",
  //   image: "https://cloudgaia.com/storage/2025/02/team-avery.webp",
  //   linkedIn: "#",
  // },
];

const Company = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showVideoImage, setShowVideoImage] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);

  const location = useLocation();
  
    useEffect(() => {
      // Wait for the DOM to load
      setTimeout(() => {
        if (location.hash) {
          const id = location.hash.replace("#", "");
          const section = document.getElementById(id);
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, 100); // Small delay to ensure DOM is ready
    }, [location]);

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
        className="absolute top-0 right-0 w-72 h-72 bg-[#008093]"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
        aria-hidden="true"
      />

      {/* Header */}
      <div
        className={`fixed top-0 left-0 w-full transition-transform duration-300 ease-in-out z-50 ${
          isHeaderVisible ? "translate-y-6" : "-translate-y-full"
        }`}
      >
        <Header />
      </div>
      {/* Main Content */}
      <div className="container mx-auto pt-[120px] px-4 md:px-6 ">
        <div className="px-6 py-10 md:px-10">
          <div className="flex items-center text-sm mb-3 mt-10 text-[#474747]">
            <Link to="/">
              <img src="/bread-home.svg"
                className="mr-1 text-xl cursor-pointer"
                aria-hidden="true"
              />
            </Link>
            <span className="mx-1 text-base font-bold">&nbsp;/</span>
            <span className="text-base font-bold">&nbsp;Company</span>
          </div>

          <div className="mx-auto my-5">
            <h1 className="text-2xl md:text-6xl font-bold text-[#008093] mb-4">
              Experience the Codescience vibe
            </h1>
            <p
              style={{ lineHeight: "1.2em" }}
              className="text-[#474747] text-xl  md:text-2xl mt-5 "
            >
              Our commitment to excellence and comprehensive Salesforce
              expertise
              <br />
              make us leaders in driving digital transformation across
              industries.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full mt-10">
        <img
          // src="company1.PNG"
          src="/Depositphotos_81078342_ds (1).jpg"
          alt="AI and Data Certifications"
          className="w-full h-[500px] object-cover rounded-lg"
        />
      </div>

      <div id="our-story" className="bg-[#f9f9f9]">
        <div className="container mx-auto px-4 pt-16 pb-10 md:px-6 ">
          <div className="px-6 py-10 md:px-10">
            <div className="flex flex-col md:flex-row gap-2 pb-10">
              <div className="flex-1  rounded px-6 py-6 shadow bg-white">
                <div>
                  <img src="/company-purpo-icon.svg" />{" "}
                </div>
                <div
                  style={{ fontSize: "40px" }}
                  className=" text-[#008093] font-semibold my-3"
                >
                  Purpose
                </div>
                <div
                  style={{
                    lineHeight: "1.2em",
                  }}
                  className="text-[#474747] text-lg"
                >
                  Empower people and companies to evolve together through
                  digital transformation.
                </div>
              </div>
              <div className="flex-1  rounded px-6 py-6 shadow bg-white">
                <div>
                  <img src="/company-mission-icon.svg" />{" "}
                </div>
                <div
                  style={{ fontSize: "40px" }}
                  className="text-[#008093] font-semibold my-3"
                >
                  Mission
                </div>
                <div
                  style={{
                    lineHeight: "1.2em",
                  }}
                  className="text-lg text-[#474747] "
                >
                  Help people and businesses ignite their best version through
                  innovative Salesforce solutions, creating a world-class
                  customer experience.{" "}
                </div>
              </div>
              <div className="flex-1  rounded px-6 py-6 shadow bg-white">
                <div>
                  <img src="/company-vision-icon.svg" />
                </div>
                <div
                  style={{ fontSize: "40px" }}
                  className="text-[#008093] font-semibold my-3"
                >
                  Vision
                </div>
                <div
                  style={{
                    lineHeight: "1.2em",
                  }}
                  className="text-lg text-[#474747]"
                >
                  Be the preferred partner for cloud solutions that enable
                  organizations to achieve significant transformations, driving
                  success and innovation, and generating a positive impact on
                  individuals and communities.
                </div>
              </div>
            </div>
            <div className="text-center text-6xl text-[#008093] font-bold pt-10 mt-14  mb-8">
              Why partner with us?
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10">
              <ImageHoverCard
                imageSrc="/FRAME C.jpg" 
                title="100% Salesforce"
                description={
                  <>
                    With a
                    <b> global presence and 15+ years as Salesforce partners</b>
                    , we’ve dedicated ourselves exclusively to mastering the
                    Salesforce ecosystem working with
                    <b> leading and 50 industries of all sizes.</b> Our team of industry{" "}
                    <b> experts collaborates with clients </b> to develop solid
                    strategies aligned with their business objectives,
                    accelerating value delivery and adapting to their unique
                    needs.{" "}
                  </>
                }
              />
              <ImageHoverCard
                imageSrc="/FRAME O.jpg"
                title="Expert Staff"
                description={
                  <>
                    We stay at the <b> forefront of Salesforce technology</b>,
                    mastering all its clouds with an unmatched level of
                    expertise and technical depth.
                    <b> We have a global team of experts</b> that combines local
                    and international knowledge to design
                    <b> customized solutions </b> that maximize Salesforce
                    platforms and our clients’ roadmaps, ensuring exceptional
                    experiences for their users.
                  </>
                }
              />
              <ImageHoverCard
                imageSrc="/Frame D.jpg"
                title="One Team"
                description="Seamlessly integrating with your teams and Salesforce to create a unified force for innovation. Our collaborative model means we’re deeply invested in your success, working side-by-side to drive meaningful transformation and measurable business impact."
              />
              <ImageHoverCard
                imageSrc="/image4.webp"
                title="Agentforce Ready"
                description={
                  <>
                    We’re at the forefront of AI-driven transformation as{" "}
                    <b> Agentforce implementers</b>, our expertise in artificial
                    intelligence and innovation enables our clients{" "}
                    <b> to focus on growing their businesses </b> while we take
                    care of the rest. With <b> 50 AI & Data certifications</b>,
                    we architect intelligent experiences that give our clients a
                    competitive edge, combining human expertise with advanced AI
                    capabilities to deliver transformative business outcomes.
                  </>
                }
              />
            </div>

            <div className="flex justify-center mt-10 py-10">
              <div className="flex flex-row items-start m-0 p-0 gap-10 w-full justify-center ">
                {/* Image */}
                <div className="shrink-0 m-0 p-0 " 
                >
                  <img
                    // src="https://cloudgaia.com/storage/2025/01/company-nicolas-orzabal-rounded.svg"
                    src="/MAN.png"
                    alt="Nicolás Orzabal"
                    className="w-60 h-auto object-contain rounded-full m-0 p-0 bg-yellow-300 "
                    style={{ display: "block" ,width: "300px", height: "300px"}}
                  />
                </div>

                {/* Text */}
                <div className="text-left text-[#474747] m-0 py-3  ml-2">
                  <p
                    style={{
                      lineHeight: "1.2em",
                    }}
                    className="text-sm md:text-lg m-0 p-0 text-xl"
                  >
                    “At codescience we always say that we are not looking for
                    happy <br />
                    customers, we are looking for successful customers. I am
                    proud of our <br />
                    commitment to our core values and consultative approach. Our
                    team’s <br />
                    dedication to delivering ‘All-In’ service consistently
                    brings innovative <br />
                    solutions and unmatched value to our clients. Our proven
                    track record <br />
                    with leading global companies attests to our effectiveness
                    in <br />
                    transforming business challenges into growth opportunities.”
                  </p>
                  <h3
                    style={{ lineHeight: "1.2em" }}
                    className="md:text-3xl mt-1 mb-0 text-xl mt-6"
                  >
                     Kshitij Rodrigue
                  </h3>
                  <p
                    style={{ lineHeight: "1.2em" }}
                    className="font-bold text-2xl mt-0 "
                  >
                    Co-Founder & CEO
                  </p>
                </div>
              </div>
            </div>

            {/* Video Section */}
            <div className="text-center px-4 py-20">
              <h2 className="text-2xl md:text-6xl font-bold text-[#008093] mb-6">
                A Brand New Future awaits us
              </h2>
              <p
                style={{
                  lineHeight: "1.2em",
                }}
                className="text-[#474747] text-sm md:text-2xl mx-auto mb-6"
              >
                Our new branding signals a bold future for codescience—rooted in
                our heritage, focused on innovation, and <br /> dedicated to
                empowering clients with transformative Salesforce solutions.
              </p>
              <h3 className="text-lg md:text-2xl font-bold text-[#FF83A9] mb-6">
                Together, we’re all-in for your growth
              </h3>
              <button
                onClick={() => setShowVideoImage(true)}
                className="px-6 py-2 rounded-full bg-[#fcc000] text-[#474747] font-bold text-base md:text-base hover:bg-[#FF83A9] hover:text-white transition-all duration-300"
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
                          Codescience in one minute.
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
                          <span className="text-lg font-semibold">
                            Play video
                          </span>
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

            <div id="meet-the-team" className=" mt-[105px] mb-10">
              <h2 className="text-3xl md:text-6xl font-bold text-center text-[#474747] mb-10">
                Our senior leadership team
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2">
                {teamMembers.map((member) => (
                  <div
                    key={member.id}
                    className="bg-white border rounded-lg shadow p-4 text-center"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-[180px]  rounded-lg mx-auto object-cover mb-4"
                    />
                    <p className="text-[#008093] font-bold text-xl">in</p>
                    <h3
                      style={{ lineHeight: "1.2em" }}
                      className="text-[#474747] font-bold text-lg mt-1"
                    >
                      {member.name}
                    </h3>
                    <p
                      style={{ fontSize: "12px", lineHeight: "1em" }}
                      className="text-[#474747] "
                    >
                      {member.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI & Data Certifications Section */}
      <div className="relative w-full ">
        <img
          src="laptop.png"
          alt="AI and Data Certifications"
          className="w-full h-[560px] object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <img src='/company-icon-ia-cert.svg' className="mb-4" />
          <h2
            style={{ fontSize: "40px", lineHeight: "1em" }}
            className="font-semibold text-[#f9f9f9] mb-2"
          >
            50+ AI & Data certifications
          </h2>
          <p
            style={{ lineHeight: "1.2em" }}
            className="text-[#f9f9f9] text-3xl px-4"
          >
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

      <div className="w-full flex flex-col items-center justify-center px-4 py-6 mt-20">
        <h2 className="text-3xl md:text-3xl font-bold text-[#474747] mb-1 text-center">
          Salesforce Expertise
        </h2>
        <ExpertiseCollapse />
      </div>

      <div className="w-full flex flex-col items-center justify-center px-4 py-8 mt-4 mb-16">
        <h2 className="text-3xl md:text-3xl font-bold text-[#474747] mb-1 text-center">
          Industry Expertise
        </h2>
        <IndustryCollapse />
      </div>

      {/* Two Column Section */}
      <div className="w-full flex flex-col md:flex-row mt-10">
        {/* Left Div */}
        <div className="w-full md:w-100% bg-[#008093] flex flex-col items-center justify-start px-4 py-8">
          {/* Top Logo */}
          <img
            src="https://cloudgaia.com/storage/2025/05/Pledge1_Logo_Stacked_White.png"
            className="w-[90px] h-auto mb-6"
            alt="Pledge Logo"
          />

          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4 text-center">
            We Join Salesforce
            <br />
            Pledge 1% Commitment
          </h2>

          <p className="text-white text-base md:text-lg mb-6 text-center">
            We are committed to the Salesforce Pledge 1% by making our
            resources, <br />
            time and products available to support the integration & growth of
            <br /> NGOs and organizations.
          </p>

          {/* Bottom Image */}
          {/* <img
            src="https://cloudgaia.com/storage/2025/01/company-pledge-img.webp"
            alt="Our Mission"
            className="w-[220px] sm:w-[280px] md:w-[320px] h-auto rounded-lg object-cover mt-2"
          /> */}
        </div>

        {/* Right Div */}
        {/* <div className="w-full md:w-1/2 bg-[#fcc000] flex flex-col items-center justify-start px-5 py-8">
          <img
            src="https://cloudgaia.com/storage/2025/01/company-un-women.webp"
            className="w-[140px] h-auto mb-6 mr-40"
            alt="UN Women"
          />

          <h2 className="text-3xl md:text-4xl font-bold text-[#474747] mt-6 text-center">
            We Signed the United Nations Women's <br />
            Empowerment Principles
          </h2>

          <p className="text-[#474747] text-base md:text-lg mb-8 text-center">
            “We are convinced of the power of diversity for organizations and
            the
            <br /> impact it has on their evolution and their surroundings. We
            believe that <br />
            through the  WEPs, we will be able to deepen and focus our efforts{" "}
            <br />
            in achieving gender equality, a foundation for a sustainable
            future.”
          </p> */}

          {/* Author Section */}
          {/* <div className="flex items-center justify-center space-x-4 mb-4">
            <img
              src="https://cloudgaia.com/storage/2025/01/company-nicolas-circle.webp"
              alt="Nicolás Orzabal"
              className="w-[150px] h-[150px] rounded-full object-cover"
            />
            <div className="text-center sm:text-left">
              <p className="text-gray-800 font-semibold text-lg">
                Kshitij Rodrigue
              </p>
              <p className="text-gray-800 text-lg font-bold">
                Co-Founder & CEO
              </p>
            </div>
          </div> */}
        {/* </div> */}
      </div>

      {/* <div id="salesforce-ventures"
        className="mx-auto p-6 my-24 rounded-lg shadow-lg text-center max-w-7xl"
        style={{ backgroundColor: "#008093" }}
      > */}
        {/* <img
          src="https://cloudgaia.com/storage/2025/01/logo-salesforce.svg"
          alt="Top"
          className="mx-auto  w-32 h-32"
        /> */}
        {/* <h2
          style={{ fontSize: "40px" }}
          className=" font-semibold mb-2 text-[#f9f9f9] tracking-tight"
        >
          Empowered by Salesforce Ventures investment
        </h2> */}
        {/* <p
          style={{ lineHeight: "1.2em" }}
          className=" text-lg text-[#f9f9f9] ml-3 tracking-tight "
        >
          In 2024, we proudly announced an investment from Salesforce Ventures,
          marking a significant milestone in our journey <br />
          as a leading global Salesforce partner. This partnership empowers us
          to expand our reach across the Americas and <br />
          Europe, bringing even greater innovation and expertise to help our
          clients thrive through digital transformation.
        </p> */}
      {/* </div> */}
      <Footer />
    </div>
  );
};

export default Company;
