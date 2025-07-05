// import React, { useEffect, useState } from "react";
// import Header from "@/components/Header"; // Fixed import path
// import Footer from "@/components/Footer"; // Fixed import path
// import { FaHome, FaStar } from "react-icons/fa";
// import ExpertiseCollapse from "@/components/Expertise_cloud";
// import { Link } from "react-router-dom";
// // import { Link } from "lucide-react";

// const Services = () => {
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
//     <div className="relative min-h-screen overflow-x-hidden">
//       <div
//         className="absolute top-0 right-0 w-72 h-72 bg-[#008093]"
//         style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
//         aria-hidden="true"
//       />
//       <div className="relative min-h-screen">
//         <div
//           className={`fixed top-0 left-0 w-full transition-transform duration-300 ease-in-out z-50 ${
//             isHeaderVisible ? "translate-y-6" : "-translate-y-full"
//           }`}
//         >
//           <Header />
//         </div>

//         <div className="container mx-auto px-4 py-10 md:px-6 mt-20">
//           <div className="px-6 py-10 md:px-10">
//             {/* Breadcrumb */}
//             <div className="flex items-center text-base  mt-10 text-[#474747]">
//               <Link to="/">
//                 <img
//                   src="/bread-home.svg"
//                   className="mr-1 text-xl cursor-pointer"
//                   aria-hidden="true"
//                 />
//               </Link>
//               <span className="mx-1 text-base font-bold">/</span>
//               <span className="text-base font-bold">Services</span>
//             </div>

//             {/* Heading & Description */}
//             <div className="max-w-7xl mx-auto mt-5">
//               <h1
//                 className="text-2xl md:text-6xl font-bold"
//                 style={{ color: "#008093" }}
//               >
//                 From strategy to support:
//                 <br />
//                 Salesforce all-in
//               </h1>
//               <p
//                 style={{
//                   lineHeight: "1.2em",
//                 }}
//                 className="text-[#474747] md:text-[24px] mt-6"
//               >
//                 We offer a variety of tailor-made services designed to meet your
//                 needs and align with your level of maturity within the
//                 Salesforce ecosystem. We understand the specific requirements of
//                 your industry and design end-to-end solutions ensuring that
//                 every step is aligned with your goals.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="w-full mt-4">
//           <img
//             src="/services.PNG"
//             alt="Services Visual"
//             className="w-full h-[500px] object-cover"
//           />
//         </div>

//         <div className="container mx-auto  px-4 md:px-6">
//           <div className="px-6 py-10 md:px-10">
//             {/* 4 Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-6 md:px-0 mt-16">
//               <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
//                 <img src="/services-icon-1.svg" className="mb-4" />
//                 <h3
//                   style={{ fontSize: "40px" }}
//                   className="font-semibold mb-2 text-[#008093]"
//                 >
//                   Landing Services
//                 </h3>
//                 <p className="text-[#474747] mb-4 text-[17px] leading-tight">
//                   Supporting your first steps with Salesforce to ensure a smooth
//                   and successful adoption.
//                 </p>
//                 <Link
//                   to="/Services/implementation"
//                   className="group inline-block text-[#474747] text-base font-bold  relative"
//                 >
//                   Learn more
//                   <span className="block h-0.5 w-0 bg-[#ff83a9] transition-all duration-300 group-hover:w-full"></span>
//                 </Link>
//               </div>

//               <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
//                 <img src="/services-icon-2.svg" className="mb-4" />
//                 <h3
//                   style={{ fontSize: "40px" }}
//                   className="font-semibold mb-2 text-[#008093]"
//                 >
//                   Optimization
//                 </h3>
//                 <p className="text-[#474747] mb-4 text-lg leading-tight">
//                   Enhancing Salesforce by tailoring it to the specific needs of
//                   your business.
//                 </p>
//                 <Link
//                   to="/Services/optimization"
//                   className="group inline-block font-bold text-base text-[#474747]  relative"
//                 >
//                   Learn more
//                   <span className="block h-0.5 w-0 bg-[#ff83a9] transition-all duration-300 group-hover:w-full"></span>
//                 </Link>
//               </div>

//               <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
//                 <img src="/services-icon-3.svg" className="mb-4" />
//                 <h3
//                   style={{ fontSize: "40px" }}
//                   className="font-semibold mb-2 text-[#008093]"
//                 >
//                   Innovation
//                 </h3>
//                 <p className="text-[#474747] mb-4 text-lg leading-tight">
//                   Identifying opportunities and overcoming challenges with
//                   efficient solutions.
//                 </p>
//                 <Link
//                   to="/Services/innovation"
//                   className="group inline-block font-bold text-base text-[#474747] relative"
//                 >
//                   Learn more
//                   <span className="block h-0.5 w-0 bg-[#ff83a9] transition-all duration-300 group-hover:w-full"></span>
//                 </Link>
//               </div>

//               <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
//                 <img src="/services-icon-4.svg" className="mb-4" />
//                 <h3
//                   style={{ fontSize: "40px" }}
//                   className="font-semibold mb-2 text-[#008093]"
//                 >
//                   Strategic Growth
//                 </h3>
//                 <p className="text-[#474747] mb-4 text-lg leading-tight">
//                   Aligning Salesforce with your business goals to drive
//                   sustainable growth.
//                 </p>
//                 <Link
//                   to="/Services/growth"
//                   className="group inline-block font-bold text-base text-[#474747] relative"
//                 >
//                   Learn more
//                   <span className="block h-0.5 w-0 bg-[#ff83a9] transition-all duration-300 group-hover:w-full"></span>
//                 </Link>
//               </div>
//             </div>

//             {/* Expand Section */}
//             <div className="flex justify-center items-center mt-[100px] px-6 md:px-0">
//               <div className="flex items-start items-center space-x-6 max-w-4xl">
//                 <img
//                   src="/services-expand-icon.svg"
//                   alt="Airplane Icon"
//                   className="w-30 h-30 object-contain "
//                 />
//                 <div className="text-left">
//                   <h2
//                     style={{ lineHeight: "1.1em" }}
//                     className="text-2xl md:text-3xl font-bold leading-tight"
//                   >
//                     <span className="block text-[#474747] ">Expand your</span>
//                     <span className="block text-[#FF83A9]">
//                       in-house capabilities
//                     </span>
//                   </h2>
//                   <p
//                     style={{
//                       lineHeight: "1.2em",
//                     }}
//                     className="mt-4 md:text-lg max-w-2xl text-[#474747] "
//                   >
//                     Our Salesforce experts around the world integrate <br />
//                     seamlessly with your team, empowering your internal talents
//                     <br /> by providing support and training with a business
//                     vision that
//                     <br />
//                     drives your success at every stage.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-[#474747] text-white rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center mt-[100px] w-[99%] h-[380px] md:h-[250px] mx-auto">
//               {/* Image */}
//               <img
//                 src="https://cloudgaia.com/storage/2025/01/salesforce-partner.svg"
//                 alt="Salesforce Partner"
//                 className="w-[80px] md:w-[100px] h-auto object-contain mb-4 md:mb-0 ml-10 md:mr-4"
//               />

//               {/* Metrics */}
//               <div className="flex flex-wrap flex-1 justify-around items-center w-full">
//                 {/* Customer Satisfaction */}
//                 <div className="text-center md:text-left mb-4 md:mb-0 min-w-[140px]">
//                   <h3 className="text-xl md:text-3xl font-bold mb-1">
//                     Customer Satisfaction
//                   </h3>
//                   <div className="flex items-center justify-center md:justify-start space-x-2">
//                     <div className="flex space-x-[2px]">
//                       <img src="/5-stars.svg" />
//                     </div>
//                     <span className="text-xl md:text-3xl font-semibold">
//                       4.8/5 CSAT
//                     </span>
//                   </div>
//                 </div>

//                 {/* Certifications */}
//                 <div className="text-center md:text-left mb-4 md:mb-0 min-w-[120px]">
//                   <h3 className="text-xl md:text-3xl font-bold mb-1">
//                     Certifications
//                   </h3>
//                   <p className="text-3xl font-bold text-yellow-400">50+</p>
//                 </div>

//                 {/* Projects */}
//                 <div className="text-center md:text-left mb-4 md:mb-0 min-w-[100px]">
//                   <h3 className="text-xl md:text-3xl font-bold mb-1">
//                     Projects
//                   </h3>
//                   <p className="text-3xl font-bold text-yellow-400">120+</p>
//                 </div>

//                 {/* Experts */}
//                 <div className="text-center md:text-left mb-4 md:mb-0 min-w-[100px]">
//                   <h3 className="text-xl md:text-3xl font-bold mb-1">
//                     Experts
//                   </h3>
//                   <p className="text-3xl font-bold text-yellow-400">50+</p>
//                 </div>
//               </div>
//             </div>
//             <div className="text-center mt-[100px]">
//               <h2 className="text-4xl md:text-5xl font-bold text-[#474747]">
//                 Cloud Expertise
//               </h2>
//               <ExpertiseCollapse />
//             </div>

//             <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-20 px-6">
//               <div className="relative w-[200px] h-[200px] flex justify-center items-center">
//                 <div className="absolute inset-0  flex justify-center items-center">
//                   <img
//                     src="/services-circle-animated-1.svg"
//                     alt="Rotating Circle"
//                     className="w-full h-full absolute animate-spin-slow"
//                   />
//                   <img
//                     src="/services-vibe-logo-1.svg"
//                     alt="Inner Image"
//                     className="w-full h-full rounded-full object-cover border-4 border-white z-10"
//                   />
//                 </div>
//               </div>

//               <div className="text-left max-w-2xl">
//                 <h2 className="text-xl md:text-6xl font-bold text-[#474747] mb-4">
//                   Our way of work
//                 </h2>
//                 <p
//                   style={{
//                     lineHeight: "1.1em",
//                   }}
//                   className="text-[#474747] md:text-lg"
//                 >
//                   At Codescience, we <strong>venture</strong> beyond the
//                   ordinary, aiming to be the best by challenging and redefining
//                   best practices, while
//                   <strong> including</strong> diverse perspectives that enrich
//                   our approach and foster meaningful collaboration. Guided by
//                   our values, we
//                   <strong> believe</strong> in the power of our work to
//                   contribute to a better world, and we <strong> enjoy</strong>{" "}
//                   every step of the way, celebrating talent, empathy, and shared
//                   success as we achieve extraordinary results together.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Services;


import React, { useEffect, useState } from "react";
import Header from "@/components/Header"; // Fixed import path
import Footer from "@/components/Footer"; // Fixed import path
import { FaHome, FaStar } from "react-icons/fa";
import ExpertiseCollapse from "@/components/Expertise_cloud";
import { Link } from "react-router-dom";
// import { Link } from "lucide-react";
 
const Services = () => {
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
 
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#F9F9F9]">
      <div
        className="absolute top-0 right-0 w-72 h-72 bg-[#008093]"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
        aria-hidden="true"
      />
      <div className="relative min-h-screen">
        <div
          className={`fixed top-0 left-0 w-full transition-transform duration-300 ease-in-out z-50 ${
            isHeaderVisible ? "translate-y-6" : "-translate-y-full"
          }`}
        >
          <Header />
        </div>
 
        <div className="container mx-auto px-4 py-20 md:px-6 mt-20">
          <div className="px-6 py-10 md:px-10">
            {/* Breadcrumb */}
            <div className="flex items-center text-base  mt-10 text-[#474747]">
              <Link to="/">
                <img
                  src="/bread-home.svg"
                  className="mr-1 text-xl cursor-pointer"
                  aria-hidden="true"
                />
              </Link>
              <span className="mx-1 text-base font-bold ml-2">/</span>
              <span className="text-base font-bold ml-2">Services</span>
            </div>
 
            {/* Heading & Description */}
            <div className="max-w-7xl mx-auto mt-5">
              <h1
                className="text-2xl md:text-6xl font-bold"
                style={{ color: "#008093" }}
              >
                From strategy to support:
                <br />
                Salesforce all-in
              </h1>
              <p
                style={{
                  lineHeight: "1.2em",
                }}
                className="text-[#474747] md:text-[24px] mt-6"
              >
                We offer a variety of tailor-made services designed to meet your
                needs and align with your level of maturity within the
                Salesforce ecosystem. We understand the specific requirements of
                your industry and design end-to-end solutions ensuring that
                every step is aligned with your goals.
              </p>
            </div>
          </div>
        </div>
 
        <div className="w-full mt-4">
          <img
            // src="/services.PNG"
            src="/Depositphotos_52462445.jpg"
            alt="Services Visual"
            className="w-full h-[500px] object-cover"
          />
        </div>
 
        <div className="container mx-auto  px-4 md:px-6">
          <div className="px-6 py-10 md:px-10">
            {/* 4 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-6 md:px-0 mt-16">
              <div className="bg-white  rounded-lg p-6">
                <img src="/services-icon-1.svg" className="mb-4" />
                <h3
                  style={{ fontSize: "40px" }}
                  className="font-semibold mb-2 text-[#008093]"
                >
                  Landing Services
                </h3>
                <p className="text-[#474747] mb-4 text-[17px] leading-tight">
                  Supporting your first steps with Salesforce to ensure a smooth
                  and successful adoption.
                </p>
                <Link
                  to="/Services/implementation"
                  className="group inline-block text-[#474747] text-base font-bold  relative"
                >
                  Learn more
                  <span className="block h-0.5 w-0 bg-[#ff83a9] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
 
              <div className="bg-white  rounded-lg p-6 ">
                <img src="/services-icon-2.svg" className="mb-4" />
                <h3
                  style={{ fontSize: "40px" }}
                  className="font-semibold mb-2 text-[#008093]"
                >
                  Optimization
                </h3>
                <p className="text-[#474747] mb-4 text-lg leading-tight">
                  Enhancing Salesforce by tailoring it to the specific needs of
                  your business.
                </p>
                <Link
                  to="/Services/optimization"
                  className="group inline-block font-bold text-base text-[#474747]  relative"
                >
                  Learn more
                  <span className="block h-0.5 w-0 bg-[#ff83a9] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
 
              <div className="bg-white  rounded-lg p-6 ">
                <img src="/services-icon-3.svg" className="mb-4" />
                <h3
                  style={{ fontSize: "40px" }}
                  className="font-semibold mb-2 text-[#008093]"
                >
                  Innovation
                </h3>
                <p className="text-[#474747] mb-4 text-lg leading-tight">
                  Identifying opportunities and overcoming challenges with
                  efficient solutions.
                </p>
                <Link
                  to="/Services/innovation"
                  className="group inline-block font-bold text-base text-[#474747] relative"
                >
                  Learn more
                  <span className="block h-0.5 w-0 bg-[#ff83a9] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
 
              <div className="bg-white rounded-lg p-6 ">
                <img src="/services-icon-4.svg" className="mb-4" />
                <h3
                  style={{ fontSize: "40px" }}
                  className="font-semibold mb-2 text-[#008093]"
                >
                  Strategic Growth
                </h3>
                <p className="text-[#474747] mb-4 text-lg leading-tight">
                  Aligning Salesforce with your business goals to drive
                  sustainable growth.
                </p>
                <Link
                  to="/Services/growth"
                  className="group inline-block font-bold text-base text-[#474747] relative"
                >
                  Learn more
                  <span className="block h-0.5 w-0 bg-[#ff83a9] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
            </div>
 
            {/* Expand Section */}
            <div className="flex justify-center items-center mt-[100px] px-6 md:px-0">
              <div className="flex items-start items-center space-x-6 max-w-4xl">
                <img
                  src="/services-expand-icon.svg"
                  alt="Airplane Icon"
                  className="w-30 h-30 object-contain "
                />
                <div className="text-left">
                  <h2
                    style={{ lineHeight: "1.1em" }}
                    className="text-2xl md:text-3xl font-bold leading-tight"
                  >
                    <span className="block text-[#474747] tracking-tight">Expand your</span>
                    <span className="block text-[#FF83A9] tracking-tight">
                      in-house capabilities
                    </span>
                  </h2>
                  <p
                    style={{
                      lineHeight: "1.2em",
                    }}
                    className="mt-4 md:text-lg max-w-2xl text-[#474747] "
                     >
                    Our Salesforce experts around the world integrate <br />
                    seamlessly with your team, empowering your internal talents
                    <br /> by providing support and training with a business
                    vision that
                    <br />
                    drives your success at every stage.
                  </p>
                </div>
              </div>
            </div>
 
            <div className="bg-[#474747] text-white rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center mt-[100px] w-[99%] h-[380px] md:h-[250px] mx-auto">
              {/* Image */}
              <img
                src="https://cloudgaia.com/storage/2025/01/salesforce-partner.svg"
                alt="Salesforce Partner"
                className="w-[80px] md:w-[100px] h-auto object-contain mb-4 md:mb-0 ml-10 md:mr-4"
              />
 
              {/* Metrics */}
              <div className="flex flex-wrap flex-1 justify-around items-center w-full">
                {/* Customer Satisfaction */}
                <div className="text-center md:text-left mb-4 md:mb-0 min-w-[140px]">
                  <h3 className="text-xl md:text-3xl font-bold mb-1 tracking-tight">
                    Customer Satisfaction
                  </h3>
                  <div className="flex items-center justify-center md:justify-start space-x-2">
                    <div className="flex space-x-[2px]">
                      <img src="/5-stars.svg" />
                    </div>
                    <span className="text-xl md:text-3xl font-semibold">
                      4.8/5 CSAT
                    </span>
                  </div>
                </div>
 
                {/* Certifications */}
                <div className="text-center md:text-left mb-4 md:mb-0 min-w-[120px tracking-tight]">
                  <h3 className="text-xl md:text-3xl font-bold mb-1">
                    Certifications
                  </h3>
                  <p className="text-3xl font-bold text-yellow-400">50+</p>
                </div>
 
                {/* Projects */}
                <div className="text-center md:text-left mb-4 md:mb-0 min-w-[100px] tracking-tight">
                  <h3 className="text-xl md:text-3xl font-bold mb-1">
                    Projects
                  </h3>
                  <p className="text-3xl font-bold text-yellow-400">120+</p>
                </div>
 
                {/* Experts */}
                <div className="text-center md:text-left mb-4 md:mb-0 min-w-[100px] tracking-tight">
                  <h3 className="text-xl md:text-3xl font-bold mb-1">
                    Experts
                  </h3>
                  <p className="text-3xl font-bold text-yellow-400">50+</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-[100px]">
              <h2 className="text-[60px]  font-bold text-[#474747] tracking-tight">
                Cloud Expertise
              </h2>
              <ExpertiseCollapse />
            </div>
 
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-20 px-6">
              <div className="relative w-[200px] h-[200px] flex justify-center items-center">
                <div className="absolute inset-0  flex justify-center items-center">
                  <img
                    src="/services-circle-animated-1.svg"
                    alt="Rotating Circle"
                    className="w-full h-full absolute animate-spin-slow"
                  />
                  <img
                    src="/services-vibe-logo-1.svg"
                    alt="Inner Image"
                    className="w-full h-full rounded-full object-cover border-4 border-white z-10"
                  />
                </div>
              </div>
 
              <div className="text-left max-w-2xl">
                <h2 className="text-xl md:text-6xl font-bold text-[#474747] mb-4">
                  Our way of work
                </h2>
                <p
                  style={{
                    lineHeight: "1.1em",
                  }}
                  className="text-[#474747] md:text-lg space-y-1"
                >
                  At Codescience, we <strong>venture</strong> beyond the
                  ordinary, aiming to be the best by challenging and redefining
                  best practices, while
                  <strong> including</strong> diverse perspectives that enrich
                  our approach and foster meaningful collaboration. Guided by
                  our values, we
                  <strong> believe</strong> in the power of our work to
                  contribute to a better world, and we <strong> enjoy</strong>{" "}
                  every step of the way, celebrating talent, empathy, and shared
                  success as we achieve extraordinary results together.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
 
export default Services;
 
 
