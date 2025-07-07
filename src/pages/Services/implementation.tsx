// import React, { useEffect, useState } from "react";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import { FaArrowLeft } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import {
//   FaBolt,
//   FaChartLine,
//   FaHome,
//   FaLightbulb,
//   FaStar,
//   FaUsers,
// } from "react-icons/fa";
// import { Link } from "react-router-dom";

// // Country list
// const countries = [
//   "Afghanistan",
//   "Albania",
//   "Algeria",
//   "Andorra",
//   "Angola",
//   "Argentina",
//   "Armenia",
//   "Australia",
//   "Austria",
//   "Azerbaijan",
//   "Bahamas",
//   "Bahrain",
//   "Bangladesh",
//   "Barbados",
//   "Belarus",
//   "Belgium",
//   "Bhutan",
//   "Bolivia",
//   "Brazil",
//   "Bulgaria",
//   "Cambodia",
//   "Canada",
//   "Chile",
//   "China",
//   "Colombia",
//   "Croatia",
//   "Cuba",
//   "Cyprus",
//   "Czech Republic",
//   "Denmark",
//   "Dominican Republic",
//   "Ecuador",
//   "Egypt",
//   "Estonia",
//   "Ethiopia",
//   "Finland",
//   "France",
//   "Georgia",
//   "Germany",
//   "Ghana",
//   "Greece",
//   "Guatemala",
//   "Honduras",
//   "Hungary",
//   "Iceland",
//   "India",
//   "Indonesia",
//   "Iran",
//   "Iraq",
//   "Ireland",
//   "Israel",
//   "Italy",
//   "Jamaica",
//   "Japan",
//   "Jordan",
//   "Kazakhstan",
//   "Kenya",
//   "Kuwait",
//   "Latvia",
//   "Lebanon",
//   "Lithuania",
//   "Luxembourg",
//   "Malaysia",
//   "Maldives",
//   "Mexico",
//   "Moldova",
//   "Monaco",
//   "Mongolia",
//   "Morocco",
//   "Nepal",
//   "Netherlands",
//   "New Zealand",
//   "Nigeria",
//   "Norway",
//   "Oman",
//   "Pakistan",
//   "Panama",
//   "Peru",
//   "Philippines",
//   "Poland",
//   "Portugal",
//   "Qatar",
//   "Romania",
//   "Russia",
//   "Saudi Arabia",
//   "Serbia",
//   "Singapore",
//   "Slovakia",
//   "Slovenia",
//   "South Africa",
//   "South Korea",
//   "Spain",
//   "Sri Lanka",
//   "Sudan",
//   "Sweden",
//   "Switzerland",
//   "Syria",
//   "Taiwan",
//   "Tajikistan",
//   "Tanzania",
//   "Thailand",
//   "Tunisia",
//   "Turkey",
//   "Uganda",
//   "Ukraine",
//   "United Arab Emirates",
//   "United Kingdom",
//   "United States",
//   "Uruguay",
//   "Uzbekistan",
//   "Venezuela",
//   "Vietnam",
//   "Yemen",
//   "Zambia",
//   "Zimbabwe",
// ].sort();

// const Implementation = () => {
//   const navigate = useNavigate();
//   const [isHeaderVisible, setIsHeaderVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       setIsHeaderVisible(currentScrollY <= lastScrollY);
//       setLastScrollY(currentScrollY);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   return (
//     <div className="relative min-h-screen">
//       {/* Sticky Header */}
//       <div
//         className={`fixed top-0 left-0 w-full transition-transform duration-300 ease-in-out z-50 ${
//           isHeaderVisible ? "translate-y-6" : "-translate-y-full"
//         }`}
//       >
//         <Header />
//       </div>

//       {/* Main Content */}
//       <div className="container mx-auto px-4 py-10 md:px-6 mt-20">
//         <div className="px-6 py-10 md:px-10">
//           {/* Breadcrumb */}
//           <div className="flex items-center text-base text-[#474747] mt-10">
//             <Link to="/">
//               <img
//                 src="/bread-home.svg"
//                 className="mr-1 text-xl cursor-pointer"
//                 aria-hidden="true"
//               />
//             </Link>
//             <span className="mx-1 text-base font-bold">&nbsp;/</span>
//             <span className="text-base font-bold">&nbsp;Services</span>
//             <span className="text-base font-bold">&nbsp;/</span>
//             <span className="text-base font-bold">&nbsp;Implementation</span>
//           </div>

//           {/* Title Section */}
//           <div className="mt-5">
//             <h1
//               className="text-2xl md:text-6xl font-bold mb-4"
//               style={{ color: "#008093" }}
//             >
//               For companies new to Salesforce
//             </h1>
//             <p
//               style={{ lineHeight: "1.2em" }}
//               className="text-[#474747] text-xl md:text-2xl mt-4 "
//             >
//               We activate the first clouds and partner with them in their first
//               steps,
//               <br />
//               ensuring a smooth and successful adoption.
//             </p>
//           </div>
//         </div>
//       </div>
//       {/* Full Width Image */}
//       <div className="w-full mt-4 ">
//         <img
//           src="/implementation1.PNG"
//           alt="img.visual"
//           className="w-full h-[500px] object-cover"
//         />
//       </div>
//       <div className="bg-[#f9f9f9]">
//         <div className="container mx-auto px-4 py-10 md:px-6">
//           <div className="px-6 py-10 md:px-10">
//             <div className="flex flex-col lg:flex-row items-start mt-5 gap-5 ">
//               {/* Left Side */}
//               <div className="lg:w-[55%] w-full flex flex-col gap-12">
//                 <div className="p-6 bg-white rounded-lg shadow-md ">
//                   <div className="flex justify-center">
//                     <img
//                       src="/services-expand-icon.svg"
//                       alt="Deployment Icon"
//                       className="h-24 w-24 object-contain rounded-full"
//                     />
//                   </div>
//                   <h3
//                     style={{ fontSize: "40px" }}
//                     className="font-semibold mt-4 text-[#008093] text-left"
//                   >
//                     Initial Deployment
//                   </h3>
//                   <p
//                     style={{ lineHeight: "1.2em" }}
//                     className="mt-2 text-[#474747] text-lg "
//                   >
//                     We take care of the configuration and activation of
//                     Salesforce clouds, using standard out-of-the-box features
//                     from day one.
//                   </p>
//                   <p
//                     style={{ lineHeight: "1.2em" }}
//                     className="mt-6 text-[#474747] text-lg "
//                   >
//                     In addition, we train users on the core Salesforce features,
//                     ensuring they have the basic knowledge necessary to maximize
//                     their use.
//                   </p>
//                 </div>

//                 <h2
//                   style={{ fontSize: "40px", lineHeight: "1em" }}
//                   className="font-semibold text-[#474747]"
//                 >
//                   Blend of services to suit <br /> your business needs
//                 </h2>

//                 <div className="flex flex-col gap-6">
//                   {/* Quick Starts */}
//                   <div className="p-6 bg-white rounded-lg shadow-md flex items-start gap-4">
//                     <img src="/implementation-icon-1.svg" />
//                     <div>
//                       <h4
//                         style={{ fontSize: "40px", lineHeight: "1em" }}
//                         className="font-semibold text-[#008093] mb-1"
//                       >
//                         Quick Starts
//                       </h4>
//                       <p
//                         style={{
//                           lineHeight: "1.2em",
//                         }}
//                         className="text-[#474747] mt-1 text-lg"
//                       >
//                         Solutions ready for use in a few weeks.
//                       </p>
//                     </div>
//                   </div>

//                   {/* Agile Team */}
//                   <div className="p-6 bg-white rounded-lg shadow-md flex items-start gap-4">
//                     <img src="/implementation-icon-2.svg" />
//                     <div>
//                       <h4
//                         style={{ fontSize: "40px", lineHeight: "1em" }}
//                         className="font-semibold text-[#008093]"
//                       >
//                         Agile Team
//                       </h4>
//                       <p
//                         style={{
//                           lineHeight: "1.2em",
//                         }}
//                         className="text-[#474747] text-lg mt-1"
//                       >
//                         A team of experts with different skills adapts quickly
//                         to the needs of your business.
//                       </p>
//                     </div>
//                   </div>

//                   {/* Custom E2E */}
//                   <div className="p-6 bg-white rounded-lg shadow-md flex items-start gap-4">
//                     <img src="/implementation-icon-3.svg" />
//                     <div>
//                       <h4
//                         style={{ fontSize: "40px", lineHeight: "1em" }}
//                         className="font-semibold text-[#008093]"
//                       >
//                         Custom E2E
//                       </h4>
//                       <p
//                         style={{
//                           lineHeight: "1.2em",
//                         }}
//                         className="text-[#474747] text-lg mt-1"
//                       >
//                         We work together with a team of experts on a specific
//                         solution customized to your needs.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Right Side Form */}
//               {/* Right Side Form */}
//               <div className="lg:w-[45%] w-full sticky top-10 self-start">
//                 <form className="bg-[#FCC000] text-white p-8 rounded-xl space-y-6 shadow-xl">
//                   <p
//                     style={{ lineHeight: "1.2em" }}
//                     className="text-xl md:text-2xl font-bold text-left tracking-tight text-[#474747]"
//                   >
//                     Complete the form and book <br /> a free consultation
//                   </p>

//                   {/* Name Fields */}
//                   <div className="flex flex-col md:flex-row gap-4">
//                     <input
//                       type="text"
//                       placeholder="First Name*"
//                       required
//                       className="flex-1 p-3 bg-white text-black rounded-md"
//                     />
//                     <input
//                       type="text"
//                       placeholder="Last Name*"
//                       required
//                       className="flex-1 p-3 bg-white text-black rounded-md"
//                     />
//                   </div>

//                   {/* Company + Email */}
//                   <div className="flex flex-col md:flex-row gap-4">
//                     <input
//                       type="text"
//                       placeholder="Company*"
//                       required
//                       className="flex-1 p-3 bg-white text-black rounded-md"
//                     />
//                     <input
//                       type="email"
//                       placeholder="Email*"
//                       required
//                       className="flex-1 p-3 bg-white text-black rounded-md"
//                     />
//                   </div>

//                   {/* Country Dropdown */}
//                   <select
//                     required
//                     className="w-full p-3 bg-white text-[#474747] rounded-md"
//                     defaultValue=""
//                   >
//                     <option disabled value="">
//                       Country*
//                     </option>
//                     {countries.map((country, id) => (
//                       <option key={id} value={country}>
//                         {country}
//                       </option>
//                     ))}
//                   </select>

//                   {/* Message */}
//                   <textarea
//                     placeholder="Message*"
//                     required
//                     className="w-full p-3 bg-white text-black rounded-md h-32"
//                   />

//                   <p className="text-[12px] font-light text-[#474747]">
//                     By continuing, I confirm that I have read and agree to the{" "}
//                     <span className="font-semibold ">Privacy Policy</span>.
//                   </p>

//                   <label className="flex items-start text-[12px] font-light text-[#474747]">
//                     <input
//                       type="checkbox"
//                       className="mt-1 accent-white"
//                       required
//                     />
//                     <span className="ml-2 text-[#474747]">
//                       I agree to receive emails from CloudGaia with updates on
//                       services, events, and alerts. I can unsubscribe at any
//                       time.
//                     </span>
//                   </label>

//                   <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6">
//                     <div className="bg-white border border-gray-300 rounded-md px-2 py-2 flex items-center w-[210px]">
//                       <input
//                         type="checkbox"
//                         id="not-robot"
//                         className="h-4 w-4 mr-2 accent-blue-600"
//                       />
//                       <label
//                         htmlFor="not-robot"
//                         className="text-[10px] text-[#000] mr-auto"
//                       >
//                         I'm not a robot
//                       </label>
//                       <div className="flex flex-col items-center">
//                         <img
//                           src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
//                           alt="reCAPTCHA logo"
//                           className="h-6 mb-1"
//                         />
//                         <span className="text-[7px] text-[#555] leading-none">
//                           reCAPTCHA
//                         </span>
//                         <span className="text-[6px] text-[#000] cursor-pointer leading-none">
//                           Privacy – Terms
//                         </span>
//                       </div>
//                     </div>
//                     <button
//                       type="submit"
//                       className="bg-white text-[#474747] font-semibold px-6 py-2 rounded-full hover:bg-[#FF83A9] hover:text-white transition-all"
//                     >
//                       Send
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//             <div className="py-20">
//               {/* Heading */}
//               <h2
//                 style={{ fontSize: "40px", lineHeight: "1em" }}
//                 className="text-center font-semibold text-[#008093] mb-12"
//               >
//                 Check our other services
//               </h2>

//               {/* Cards */}
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 <div className="p-6  rounded-lg shadow-md text-left bg-white">
//                   <img src="/services-icon-1.svg" className="mb-4" />
//                   <h3
//                     style={{ fontSize: "40px" }}
//                     className=" text-[#008093] font-semibold mb-2"
//                   >
//                     Innovation
//                   </h3>
//                   <p
//                     style={{
//                       lineHeight: "1.2em",
//                     }}
//                     className="text-[#474747] text-[18px] mb-4 "
//                   >
//                     Identifying opportunities and overcoming challenges with
//                     efficient solutions.
//                   </p>
//                   <Link
//                     to="/Services/implementation"
//                     className="text-[#474747] font-bold text-base relative inline-block group"
//                   >
//                     Learn more
//                     <span className="block h-0.5 bg-[#ff83a9] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
//                   </Link>
//                 </div>

//                 <div className="p-6  rounded-lg shadow-md text-left bg-white">
//                   <img src="/services-icon-4.svg" className="mb-4" />
//                   <h3
//                     style={{ fontSize: "40px" }}
//                     className=" text-[#008093] font-semibold mb-2"
//                   >
//                     Strategic Growth
//                   </h3>
//                   <p
//                     style={{
//                       lineHeight: "1.2em",
//                     }}
//                     className="text-[#474747] text-[18px] mb-4 leading-tight"
//                   >
//                     Accelerate your business growth with focused strategic
//                     initiatives.
//                   </p>
//                   <Link
//                     to="/Services/growth"
//                     className="text-[#474747] font-bold text-base relative inline-block group"
//                   >
//                     Learn more
//                     <span className="block h-0.5 bg-[#ff83a9] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
//                   </Link>
//                 </div>

//                 <div className="p-6 bg-white rounded-lg shadow-md text-left">
//                   <img src="/services-icon-2.svg" className="mb-4" />
//                   <h3
//                     style={{ fontSize: "40px" }}
//                     className="text-[#008093] font-semibold mb-2"
//                   >
//                     Optimization
//                   </h3>
//                   <p
//                     style={{
//                       lineHeight: "1.2em",
//                     }}
//                     className="text-[#474747]  text-[18px] mb-4 "
//                   >
//                     Improve efficiency by streamlining operations and maximizing
//                     ROI.
//                   </p>
//                   <Link
//                     to="/Services/optimization"
//                     className="text-[#474747] font-bold text-base relative inline-block group"
//                   >
//                     Learn more
//                     <span className="block h-0.5 bg-[#ff83a9] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//             <div className="flex justify-center items-center mt-20">
//               <div
//                 onClick={() => navigate("/Services/all_services")}
//                 className="flex items-center cursor-pointer group"
//               >
//                 {/* Circle with Arrow */}
//                 <div className="w-10 h-10 rounded-full bg-[#fcc000] flex items-center justify-center transition duration-300 group-hover:bg-[#FF83A9]">
//                   <FaArrowLeft className="text-white text-xl" />
//                 </div>

//                 {/* Label */}
//                 <span className="ml-4 text-lg text-[#474747] ">
//                   Back to Services
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Implementation;

import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;
import {
  FaBolt,
  FaChartLine,
  FaHome,
  FaLightbulb,
  FaStar,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";

// Country list
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

const Implementation = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const [isAgree, setIsAgree] = useState(false);
  const [isRobot, setIsRobot] = useState(false);
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
    const implementationData = {
      firstName,
      lastName,
      email,
      company,
      country,
      message,
      isAgree,
    };
    axios
      .post(`${API_BASE_URL}api/user/implementation`, implementationData)
      .then((res) => {
        console.log(res, "gg");
        setFirstName("");
        setLastName("");
        setEmail("");
        setCompany("");
        setCountry("");
        setMessage("");
        setIsAgree(false);
        setIsRobot(false);
        toast.success("Details_added", {
          position: "top-right",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="relative min-h-screen ] ">
      {/* Sticky Header */}
      <div
        className={`fixed top-0 left-0 w-full  transition-transform duration-300 ease-in-out z-50 ${
          isHeaderVisible ? "translate-y-6" : "-translate-y-full"
        }`}
      >
        <Header />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 md:px-6 mt-20 ">
        <div className="px-6 py-10 md:px-10">
          {/* Breadcrumb */}
          <div className="flex items-center text-base text-[#474747] mt-10">
            <Link to="/">
              <img
                src="/bread-home.svg"
                className="mr-1 text-xl cursor-pointer"
                aria-hidden="true"
              />
            </Link>
            <span className="mx-1 text-base font-bold">&nbsp;/</span>
            <span className="text-base font-bold">&nbsp;Services</span>
            <span className="text-base font-bold">&nbsp;/</span>
            <span className="text-base font-bold">&nbsp;Implementation</span>
          </div>

          {/* Title Section */}
          <div className="mt-5">
            <h1
              className="text-2xl md:text-6xl font-bold mb-4 tracking-tight"
              style={{ color: "#008093" }}
            >
              For companies new to Salesforce
            </h1>
            <p
              style={{ lineHeight: "1.2em" }}
              className="text-[#474747] text-xl md:text-2xl mt- tracking-tight "
            >
              We activate the first clouds and partner with them in their first
              steps,
              <br />
              ensuring a smooth and successful adoption.
            </p>
          </div>
        </div>
      </div>
      {/* Full Width Image */}
      <div className="w-full mt-4 ">
        <img
          src="/implementation1.PNG"
          alt="img.visual"
          className="w-full h-[500px] object-cover"
        />
      </div>
      <div className="bg-[#f9f9f9]">
        <div className="container mx-auto px-4 py-10 md:px-6">
          <div className="px-6 py-10 md:px-10">
            <div className="flex flex-col lg:flex-row items-start mt-5 gap-5 ">
              {/* Left Side */}
              <div className="lg:w-[55%] w-full flex flex-col gap-12">
                <div className="p-6 bg-white rounded-lg ">
                  <div className="flex justify-center">
                    <img
                      src="/services-expand-icon.svg"
                      alt="Deployment Icon"
                      className="h-24 w-24 object-contain rounded-full"
                    />
                  </div>
                  <h3
                    style={{ fontSize: "40px" }}
                    className="font-semibold mt-4 text-[#008093] text-left ml-4"
                  >
                    Initial Deployment
                  </h3>
                  <p
                    style={{ lineHeight: "1.2em" }}
                    className="mt-2 text-[#474747] text-lg ml-4 "
                  >
                    We take care of the configuration and activation of
                    Salesforce clouds, using standard out-of-the-box features
                    from day one.
                  </p>
                  <p
                    style={{ lineHeight: "1.2em" }}
                    className="mt-6 text-[#474747] text-lg ml-4 "
                  >
                    In addition, we train users on the core Salesforce features,
                    ensuring they have the basic knowledge necessary to maximize
                    their use.
                  </p>
                </div>

                <h2
                  style={{ fontSize: "40px", lineHeight: "1em" }}
                  className="font-semibold text-[#474747] tracking-tight"
                >
                  Blend of services to suit <br /> your business needs
                </h2>

                <div className="flex flex-col gap-6">
                  {/* Quick Starts */}
                  <div className="p-6 bg-white rounded-lg flex items-start gap-4">
                    <img src="/implementation-icon-1.svg" />
                    <div>
                      <h4
                        style={{ fontSize: "40px", lineHeight: "1em" }}
                        className="font-semibold text-[#008093] mb-1 tracking-tight"
                      >
                        Quick Starts
                      </h4>
                      <p
                        style={{
                          lineHeight: "1.2em",
                        }}
                        className="text-[#474747] mt-1 text-lg tracking-tight mt-3"
                      >
                        Solutions ready for use in a few weeks.
                      </p>
                    </div>
                  </div>

                  {/* Agile Team */}
                  <div className="p-6 bg-white rounded-lg  flex items-start gap-4">
                    <img src="/implementation-icon-2.svg" />
                    <div>
                      <h4
                        style={{ fontSize: "40px", lineHeight: "1em" }}
                        className="font-semibold text-[#008093] tracking-tight"
                      >
                        Agile Team
                      </h4>
                      <p
                        style={{
                          lineHeight: "1.2em",
                        }}
                        className="text-[#474747] text-lg mt-1 tracking-tight mt-3"
                      >
                        A team of experts with different skills adapts quickly
                        to the needs of your business.
                      </p>
                    </div>
                  </div>

                  {/* Custom E2E */}
                  <div className="p-6 bg-white rounded-lg  flex items-start gap-4">
                    <img src="/implementation-icon-3.svg" />
                    <div>
                      <h4
                        style={{ fontSize: "40px", lineHeight: "1em" }}
                        className="font-semibold text-[#008093] tracking-tight"
                      >
                        Custom E2E
                      </h4>
                      <p
                        style={{
                          lineHeight: "1.2em",
                        }}
                        className="text-[#474747] text-lg mt-1 tracking-tight mt-3"
                      >
                        We work together with a team of experts on a specific
                        solution customized to your needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side Form */}
              {/* Right Side Form */}
              <div className="lg:w-[45%] w-full sticky top-10 self-start">
                <form className="bg-[#FCC000] text-white text-bg-[#f9f9f9] p-8 rounded-xl space-y-6 ">
                  <p
                    style={{ lineHeight: "1.2em" }}
                    className="text-xl md:text-2xl font-bold text-left tracking-tight text-[#474747]"
                  >
                    Complete the form and book <br /> a free consultation
                  </p>

                  {/* Name Fields */}
                  <div className="flex flex-col md:flex-row gap-4 bg">
                    <input
                      type="text"
                      placeholder="First Name*"
                      required
                      className="flex-1 p-3 bg-white text-black rounded-md"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Last Name*"
                      required
                      className="flex-1 p-3 bg-white text-black rounded-md"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>

                  {/* Company + Email */}
                  <div className="flex flex-col md:flex-row gap-4">
                    <input
                      type="text"
                      placeholder="Company*"
                      required
                      className="flex-1 p-3 bg-white text-black rounded-md"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                    />
                    <input
                      type="email"
                      placeholder="Email*"
                      required
                      className="flex-1 p-3 bg-white text-black rounded-md"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  {/* Country Dropdown */}
                  <div className="relative">
                    <select
                      required
                      className="w-full p-3 bg-white text-[#474747] rounded-md appearance-none"
                      defaultValue=""
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    >
                      <option disabled value="">
                        Country*
                      </option>
                      {countries.map((country, id) => (
                        <option key={id} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                    <span className="absolute right-5 top-1/2 -translate-y-1/2 text-[#474747]  pointer-events-none ">
                      <ArrowDownwardIcon sx={{ fontSize: 16 }} />
                    </span>
                  </div>

                  {/* Message */}
                  <textarea
                    placeholder="Message*"
                    required
                    className="w-full p-3 bg-white text-black rounded-md h-32"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />

                  <p className="text-[12px] font-light text-[#474747]">
                    By continuing, I confirm that I have read and agree to the{" "}
                    <span className="font-semibold ">Privacy Policy</span>.
                  </p>

                  <label className="flex items-start text-[12px] font-light text-[#474747]">
                    <input
                      type="checkbox"
                      className="mt-1 accent-white"
                      required
                      checked={isAgree}
                      onChange={(e) => setIsAgree(e.target.checked)}
                    />
                    <span className="ml-2 text-[#474747]">
                      I agree to receive emails from Codescience with updates on
                      services, events, and alerts. I can unsubscribe at any
                      time.
                    </span>
                  </label>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6">
                    <div className="bg-white border border-gray-300 rounded-md px-2 py-2 flex items-center w-[210px]">
                      <input
                        type="checkbox"
                        id="not-robot"
                        required
                        className="h-4 w-4 mr-2 accent-blue-600"
                        checked={isRobot}
                        onChange={(e) => setIsRobot(e.target.checked)}
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
                          Privacy – Terms
                        </span>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="bg-white text-[#474747] font-semibold px-6 py-2 rounded-full hover:bg-[#FF83A9] hover:text-white transition-all"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="py-20">
              {/* Heading */}
              <h2
                style={{ fontSize: "40px", lineHeight: "1em" }}
                className="text-center font-semibold text-[#008093] mb-8 tracking-tight mt-3"
              >
                Check our other services
              </h2>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <div className="p-6  rounded-lg  text-left bg-white">
                  <img src="/services-icon-1.svg" className="mb-4" />
                  <h3
                    style={{ fontSize: "40px" }}
                    className=" text-[#008093] font-semibold mb-2 mt-6"
                  >
                    Innovation
                  </h3>
                  <p
                    style={{
                      lineHeight: "1.2em",
                    }}
                    className="text-[#474747] text-[18px] mb-4 "
                  >
                    Identifying opportunities and overcoming challenges with
                    efficient solutions.
                  </p>
                  <Link
                    to="/Services/implementation"
                    className="text-[#474747] font-bold text-base relative inline-block group mt-8"
                  >
                    Learn more
                    <span className="block h-0.5 bg-[#ff83a9] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                  </Link>
                </div>

                <div className="p-6  rounded-lg text-left bg-white">
                  <img src="/services-icon-4.svg" className="mb-4" />
                  <h3
                    style={{ fontSize: "40px" }}
                    className=" text-[#008093] font-semibold mb-2 "
                  >
                    Strategic Growth
                  </h3>
                  <p
                    style={{
                      lineHeight: "1.2em",
                    }}
                    className="text-[#474747] text-[18px] mb-4 leading-tight"
                  >
                    Accelerate your business growth with focused strategic
                    initiatives.
                  </p>
                  <Link
                    to="/Services/growth"
                    className="text-[#474747] font-bold text-base relative inline-block group mt-7"
                  >
                    Learn more
                    <span className="block h-0.5 bg-[#ff83a9] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                  </Link>
                </div>

                <div className="p-6 bg-white rounded-lg  text-left">
                  <img src="/services-icon-2.svg" className="mb-4" />
                  <h3
                    style={{ fontSize: "40px" }}
                    className="text-[#008093] font-semibold mb-2 mt-6"
                  >
                    Optimization
                  </h3>
                  <p
                    style={{
                      lineHeight: "1.2em",
                    }}
                    className="text-[#474747]  text-[18px] mb-4 "
                  >
                    Improve efficiency by streamlining operations and maximizing
                    ROI.
                  </p>
                  <Link
                    to="/Services/optimization"
                    className="text-[#474747] font-bold text-base relative inline-block group mt-8"
                  >
                    Learn more
                    <span className="block h-0.5 bg-[#ff83a9] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center mt-20">
              <div
                onClick={() => navigate("/Services/all_services")}
                className="flex items-center cursor-pointer group"
              >
                {/* Circle with Arrow */}
                <div className="w-10 h-10 rounded-full bg-[#fcc000] flex items-center justify-center transition duration-300 group-hover:bg-[#FF83A9]">
                  <FaArrowLeft className="text-white text-xl" />
                </div>

                {/* Label */}
                <span className="ml-4 text-lg text-[#474747] ">
                  Back to services
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Implementation;
