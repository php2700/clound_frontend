// import React, { useEffect, useState } from "react";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import { useNavigate } from "react-router-dom";
// import {
//   FaHome,
//   FaTools,
//   FaChartLine,
//   FaLightbulb,
//   FaLayerGroup,
//   FaProjectDiagram,
//   FaHandsHelping,
//   FaArrowLeft,
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

// const Optimization = () => {
//   const navigate = useNavigate();
//   const [isHeaderVisible, setIsHeaderVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const current = window.scrollY;
//       setIsHeaderVisible(current <= lastScrollY);
//       setLastScrollY(current);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   return (
//     <div className="relative min-h-screen bg-white">
//       <div
//         className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out ${
//           isHeaderVisible ? "translate-y-6" : "-translate-y-full"
//         }`}
//       >
//         <Header />
//       </div>

//       <div className="container mx-auto px-4 py-10 md:px-6 mt-20">
//         <div className="px-6 py-10 md:px-10">
//           {/* Breadcrumb */}
//           <div className="flex items-center text-base text-[#474747] mt-10 mb-2">
//             <Link to="/">
//               <img
//                 src="/bread-home.svg"
//                 className="mr-1 text-xl cursor-pointer"
//                 aria-hidden="true"
//               />
//             </Link>
//             <span className="mx-1 text-base font-bold">&nbsp;/</span>
//             <span className="text-base font-bold">&nbsp;Services </span>
//             <span className="text-base font-bold">&nbsp; / </span>
//             <span className="text-base font-bold">&nbsp; Optimization</span>
//           </div>

//           {/* Title */}
//           <div className="mt-5">
//             <h1
//               style={{ lineHeight: "1.2em" }}
//               className="text-2xl md:text-6xl font-bold text-[#008093]"
//             >
//               For companies looking to Boost Salesforce
//             </h1>
//             <p
//               style={{ lineHeight: "1.2em" }}
//               className="text-[#474747] text-xl md:text-2xl mt-4 "
//             >
//               We offer services that empower and optimize its use, <br />
//               adapting it to the changing needs of your business.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="w-full mt-4">
//         <img
//           src="/optimization1.PNG"
//           alt="Optimization visual"
//           className="w-full h-[500px] object-cover"
//         />
//       </div>
//       <div className="bg-[#f9f9f9]">
//         <div className="container mx-auto px-4 py-10 md:px-6">
//           <div className="px-6 py-10 md:px-10">
//             <div className="mt-5">
//               <div className="flex flex-col lg:flex-row gap-6">
//                 <div className="flex flex-col lg:flex-row gap-6 w-full">
//                   <div className="lg:w-3/5 w-full flex flex-col gap-3">
//                     {[
//                       {
//                         icon: <img src="/implementation-icon-1.svg" />,
//                         title: "Scale Salesforce Solutions",
//                         description:
//                           "We help scale your existing solution by adding new licenses or features, either within the same cloud or a new one. Using a co-creation strategy, we customize the expansion to support business growth, enhance operational efficiency, and address unique needs, including adding automation modules and advanced analytics tools.",
//                       },
//                       {
//                         icon: <img src="/optimization-icon-2.svg" />,
//                         title: "Customization, Expansion & Integration",
//                         description:
//                           "We improve your current Salesforce setup with specific customizations and integrations with key external systems, business management tools, and custom solutions to meet specific use cases. We ensure an implementation that respects security and scalability best practices.",
//                       },
//                       {
//                         icon: <img src="/optimization-icon-3.svg" />,
//                         title: "Support and Managed Services",
//                         description:
//                           "We provide ongoing support and platform maintenance, ensuring that Salesforce operates seamlessly over time, with optimal performance, security, and adaptability. Our team manages updates, resolves issues, and implements necessary optimizations so you can focus on growing your business.",
//                       },
//                     ].map((card, index) => (
//                       <div
//                         key={index}
//                         className="bg-white rounded-lg p-8 shadow-md"
//                       >
//                         <div className="flex items-center">
//                           {card.icon}
//                           <h4
//                             style={{ fontSize: "40px", lineHeight: "1em" }}
//                             className="ml-4 font-semibold text-[#008093]"
//                           >
//                             {card.title}
//                           </h4>
//                         </div>
//                         <p
//                           style={{
//                             lineHeight: "1.2em",
//                           }}
//                           className="mt-3 text-lg text-[#474747]"
//                         >
//                           {card.description}
//                         </p>
//                       </div>
//                     ))}
//                   </div>
//                   <div className="lg:w-2/5 w-full flex flex-col justify-between lg:sticky top-28">
//                     <div className="bg-yellow-400 text-black p-6 rounded-lg shadow-lg space-y-4 flex-grow relative">
//                       <h2 className="text-2xl font-semibold mb-2 leading-tight">
//                         Complete the form and book
//                         <br />a free consultation
//                       </h2>

//                       {/* First & Last Name */}
//                       <div className="flex gap-4">
//                         <input
//                           type="text"
//                           placeholder="First Name*"
//                           className="w-1/2 p-3 rounded bg-white text-black text-lg focus:outline-none"
//                           required
//                         />
//                         <input
//                           type="text"
//                           placeholder="Last Name*"
//                           className="w-1/2 p-3 rounded bg-white text-black text-lg focus:outline-none"
//                           required
//                         />
//                       </div>

//                       {/* Email & Company */}
//                       <div className="flex gap-4">
//                         <input
//                           type="email"
//                           placeholder="Email*"
//                           className="w-1/2 p-3 rounded bg-white text-black text-lg focus:outline-none"
//                           required
//                         />
//                         <input
//                           type="text"
//                           placeholder="Company*"
//                           className="w-1/2 p-3 rounded bg-white text-black text-lg focus:outline-none"
//                           required
//                         />
//                       </div>

//                       {/* Country Dropdown */}
//                       <select
//                         required
//                         className="w-full p-3 rounded bg-white text-black text-lg focus:outline-none"
//                         defaultValue=""
//                       >
//                         <option disabled value="">
//                           Select Country*
//                         </option>
//                         {countries.map((country, index) => (
//                           <option
//                             key={index}
//                             value={country}
//                             className="text-xs"
//                           >
//                             {country}
//                           </option>
//                         ))}
//                       </select>

//                       {/* Message */}
//                       <textarea
//                         placeholder="Message*"
//                         className="w-full p-3 h-28 rounded bg-white text-black text-lg resize-none focus:outline-none"
//                         required
//                       ></textarea>

//                       {/* Checkbox */}
//                       <p className="text-xs text-[#474747]">
//                         By continuing, I confirm that I have read and agree to
//                         the
//                         <span className="font-semibold "> Privacy Policy</span>.
//                       </p>
//                       <div className="flex items-start gap-2">
//                         <input type="checkbox" className="mt-1" required />
//                         <p className="text-xs text-[#474747]">
//                           I agree to receive emails from Codescience with
//                           updates on services, events, and alerts. I can
//                           unsubscribe at any time.
//                         </p>
//                       </div>

//                       {/* Submit */}
//                       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6">
//                         <div className="bg-white border border-gray-300 rounded-md px-2 py-2 flex items-center w-[210px]">
//                           <input
//                             type="checkbox"
//                             id="not-robot"
//                             className="h-4 w-4 mr-2 accent-blue-600"
//                           />
//                           <label
//                             htmlFor="not-robot"
//                             className="text-[10px] text-[#000] mr-auto"
//                           >
//                             I'm not a robot
//                           </label>
//                           <div className="flex flex-col items-center">
//                             <img
//                               src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
//                               alt="reCAPTCHA logo"
//                               className="h-6 mb-1"
//                             />
//                             <span className="text-[7px] text-[#555] leading-none">
//                               reCAPTCHA
//                             </span>
//                             <span className="text-[6px] text-[#000] cursor-pointer leading-none">
//                               Privacy – Terms
//                             </span>
//                           </div>
//                         </div>
//                         <button
//                           type="submit"
//                           className="bg-white text-[#474747] font-semibold px-6 py-2 rounded-full hover:bg-[#FF83A9] hover:text-white transition-all"
//                         >
//                           Send
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="py-16">
//               <h2
//                 style={{ fontSize: "40px" }}
//                 className="text-center font-semibold text-[#008093] mb-12"
//               >
//                 Check our other services
//               </h2>

//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 <div className="p-6  rounded-lg shadow-md text-left bg-white">
//                   <img src="/services-icon-1.svg" className="mb-4" />
//                   <h3
//                     style={{ fontSize: "40px" }}
//                     className=" text-[#008093] font-semibold mb-2"
//                   >
//                     Landing Services
//                   </h3>
//                   <p
//                     style={{
//                       lineHeight: "1.2em",
//                     }}
//                     className="text-[#474747] text-lg mb-4 "
//                   >
//                     Discover cutting-edge solutions that help you stay ahead of
//                     the curve.
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
//                     className="text-[#474747] text-lg mb-4 leading-tight"
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
//                     className="text-[#474747]  text-lg mb-4 leading-tight"
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
//                 <div className="w-10 h-10 rounded-full bg-[#fcc000] flex items-center justify-center transition duration-300 group-hover:bg-[#FF83A9]">
//                   <FaArrowLeft className="text-white text-xl" />
//                 </div>

//                 <span className="ml-4 text-lg  text-[#474747]">
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

// export default Optimization;

import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import {
  FaHome,
  FaTools,
  FaChartLine,
  FaLightbulb,
  FaLayerGroup,
  FaProjectDiagram,
  FaHandsHelping,
  FaArrowLeft,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;

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

const Optimization = () => {
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
      const current = window.scrollY;
      setIsHeaderVisible(current <= lastScrollY);
      setLastScrollY(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const innovationData = {
      firstName,
      lastName,
      email,
      company,
      country,
      message,
      isAgree,
    };
    axios
      .post(`${API_BASE_URL}api/user/optimization`, innovationData)
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
    <div className="relative min-h-screen bg-white">
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out ${
          isHeaderVisible ? "translate-y-6" : "-translate-y-full"
        }`}
      >
        <Header />
      </div>

      <div className="container mx-auto px-4 py-10 md:px-6 mt-20">
        <div className="px-6 py-20 md:px-10">
          {/* Breadcrumb */}
          <div className="flex items-center text-base text-[#474747] mt-10 mb-2">
            <Link to="/">
              <img
                src="/bread-home.svg"
                className="mr-1 text-xl cursor-pointer"
                aria-hidden="true"
              />
            </Link>
            <span className="mx-1 text-base font-bold">&nbsp;/</span>
            <span className="text-base font-bold">&nbsp;Services </span>
            <span className="text-base font-bold">&nbsp; / </span>
            <span className="text-base font-bold">&nbsp; Optimization</span>
          </div>

          {/* Title */}
          <div className="mt-5">
            <h1
              style={{ lineHeight: "1.2em" }}
              className="text-2xl md:text-6xl font-bold text-[#008093] tracking-tight"
            >
              For companies looking to Boost Salesforce
            </h1>
            <p
              style={{ lineHeight: "1.2em" }}
              className="text-[#474747] text-xl md:text-2xl mt-4 tracking-tight "
            >
              We offer services that empower and optimize its use, <br />
              adapting it to the changing needs of your business.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full mt-4">
        <img
          src="/optimization1.PNG"
          alt="Optimization visual"
          className="w-full h-[500px] object-cover"
        />
      </div>
      <div className="bg-[#f9f9f9]">
        <div className="container mx-auto px-4 py-10 md:px-6">
          <div className="px-6 py-10 md:px-10">
            <div className="mt-5">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex flex-col lg:flex-row gap-6 w-full">
                  <div className="lg:w-3/5 w-full flex flex-col gap-3">
                    {[
                      {
                        icon: <img src="/implementation-icon-1.svg" />,
                        title: "Scale Salesforce Solutions",
                        description:
                          "We help scale your existing solution by adding new licenses or features, either within the same cloud or a new one. Using a co-creation strategy, we customize the expansion to support business growth, enhance operational efficiency, and address unique needs, including adding automation modules and advanced analytics tools.",
                      },
                      {
                        icon: <img src="/optimization-icon-2.svg" />,
                        title: "Customization, Expansion & Integration",
                        description:
                          "We improve your current Salesforce setup with specific customizations and integrations with key external systems, business management tools, and custom solutions to meet specific use cases. We ensure an implementation that respects security and scalability best practices.",
                      },
                      {
                        icon: <img src="/optimization-icon-3.svg" />,
                        title: "Support and Managed Services",
                        description:
                          "We provide ongoing support and platform maintenance, ensuring that Salesforce operates seamlessly over time, with optimal performance, security, and adaptability. Our team manages updates, resolves issues, and implements necessary optimizations so you can focus on growing your business.",
                      },
                    ].map((card, index) => (
                      <div key={index} className="bg-white rounded-lg p-8 ">
                        <div className="flex items-center">
                          {card.icon}
                          <h4
                            style={{ fontSize: "40px", lineHeight: "1em" }}
                            className="ml-4 font-semibold text-[#008093] tracking-tight"
                          >
                            {card.title}
                          </h4>
                        </div>
                        <p
                          style={{
                            lineHeight: "1.2em",
                          }}
                          className="mt-3 text-lg text-[#474747]"
                        >
                          {card.description}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="lg:w-2/5 w-full flex flex-col justify-between lg:sticky top-28">
                    <form className="bg-[#fcc000] text-[#474747] p-6 rounded-lg  space-y-4 flex-grow relative" onSubmit={handleSubmit}>
                      <h2 className="text-2xl font-semibold mb-2 leading-tight">
                        Complete the form and book
                        <br />a free consultation
                      </h2>

                      {/* First & Last Name */}
                      <div className="flex gap-4">
                        <input
                          type="text"
                          placeholder="First Name*"
                          className="w-1/2 p-3 rounded bg-white text-black text-lg focus:outline-none"
                          required
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input
                          type="text"
                          placeholder="Last Name*"
                          className="w-1/2 p-3 rounded bg-white text-black text-lg focus:outline-none"
                          required
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>

                      {/* Email & Company */}
                      <div className="flex gap-4">
                        <input
                          type="email"
                          placeholder="Email*"
                          className="w-1/2 p-3 rounded bg-white text-black text-lg focus:outline-none"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                          type="text"
                          placeholder="Company*"
                          className="w-1/2 p-3 rounded bg-white text-black text-lg focus:outline-none"
                          required
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                        />
                      </div>

                      {/* Country Dropdown */}
                      <div className="relative">
                        <select
                          required
                          className="w-full p-3 rounded bg-white text-black text-lg focus:outline-none appearance-none "
                          defaultValue=""
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                        >
                          <option disabled value="">
                            Select Country*
                          </option>
                          {countries.map((country, index) => (
                            <option
                              key={index}
                              value={country}
                              className="text-xs"
                            >
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
                        className="w-full p-3 h-28 rounded bg-white text-black text-lg resize-none focus:outline-none"
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>

                      {/* Checkbox */}
                      <p className="text-xs text-[#474747]">
                        By continuing, I confirm that I have read and agree to
                        the
                        <span className="font-semibold "> Privacy Policy</span>.
                      </p>
                      <div className="flex items-start gap-2">
                        <input
                          type="checkbox"
                          className="mt-1"
                          required
                          checked={isAgree}
                          onChange={(e) => setIsAgree(e.target.checked)}
                        />
                        <p className="text-xs text-[#474747]">
                          I agree to receive emails from Codescience with
                          updates on services, events, and alerts. I can
                          unsubscribe at any time.
                        </p>
                      </div>

                      {/* Submit */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6">
                        <div className="bg-white border border-gray-300 rounded-md px-2 py-2 flex items-center w-[210px]">
                          <input
                            type="checkbox"
                            id="not-robot"
                            className="h-4 w-4 mr-2 accent-blue-600"
                            required
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
              </div>
            </div>

            <div className="py-16">
              <h2
                style={{ fontSize: "40px" }}
                className="text-center font-semibold text-[#008093] mb-8 tracking-tight mt-3"
              >
                Check our other services
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <div className="p-6  rounded-lg  text-left bg-white">
                  <img src="/services-icon-1.svg" className="mb-4" />
                  <h3
                    style={{ fontSize: "40px" }}
                    className=" text-[#008093] font-semibold mb-2"
                  >
                    Landing Services
                  </h3>
                  <p
                    style={{
                      lineHeight: "1.2em",
                    }}
                    className="text-[#474747] text-lg mb-4 "
                  >
                    Discover cutting-edge solutions that help you stay ahead of
                    the curve.
                  </p>
                  <Link
                    to="/Services/implementation"
                    className="text-[#474747] font-bold text-base relative inline-block group"
                  >
                    Learn more
                    <span className="block h-0.5 bg-[#ff83a9] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                  </Link>
                </div>

                <div className="p-6  rounded-lg  text-left bg-white">
                  <img src="/services-icon-4.svg" className="mb-4" />
                  <h3
                    style={{ fontSize: "40px" }}
                    className=" text-[#008093] font-semibold mb-2"
                  >
                    Strategic Growth
                  </h3>
                  <p
                    style={{
                      lineHeight: "1.2em",
                    }}
                    className="text-[#474747] text-lg mb-4 leading-tight"
                  >
                    Accelerate your business growth with focused strategic
                    initiatives.
                  </p>
                  <Link
                    to="/Services/growth"
                    className="text-[#474747] font-bold text-base relative inline-block group"
                  >
                    Learn more
                    <span className="block h-0.5 bg-[#ff83a9] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                  </Link>
                </div>

                <div className="p-6 bg-white rounded-lg text-left">
                  <img src="/services-icon-2.svg" className="mb-4" />
                  <h3
                    style={{ fontSize: "40px" }}
                    className="text-[#008093] font-semibold mb-2"
                  >
                    Optimization
                  </h3>
                  <p
                    style={{
                      lineHeight: "1.2em",
                    }}
                    className="text-[#474747]  text-lg mb-4 leading-tight"
                  >
                    Improve efficiency by streamlining operations and maximizing
                    ROI.
                  </p>
                  <Link
                    to="/Services/optimization"
                    className="text-[#474747] font-bold text-base relative inline-block group"
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
                <div className="w-10 h-10 rounded-full bg-[#fcc000] flex items-center justify-center transition duration-300 group-hover:bg-[#FF83A9]">
                  <FaArrowLeft className="text-white text-xl" />
                </div>

                <span className="ml-4 text-lg  text-[#474747]">
                  Back to Services
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

export default Optimization;
