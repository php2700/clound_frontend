// // src/components/IntegritySection.jsx

// import { Home } from "lucide-react";
// import Header from "@/components/Header";
// import React, { useEffect, useState } from "react";
// import Footer from "@/components/Footer";
// import IntegrityForm from "../pages/IntegrityForm"; 
// // Assuming you have a form component for the integrity line
// import { useNavigate } from "react-router-dom";
//   // Import useNavigate for navigation


// // optional icon

// const IntegritySection = () => {
//     const [isHeaderVisible, setIsHeaderVisible] = useState(true);
//    // Initialize useNavigate hook
   
//   const handleClick = () => {
//     navigate('/form'); // Replace with your desired route
//   };

// }
//  const navigate = useNavigate();
   

//     return (
//         <div className=" bg-white overflow-x-hidden">
//             <div
//                 className="absolute top-0 right-0 w-72 h-72 bg-[#008093]"
//                 style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
//                 aria-hidden="true"
//             />
//             <div className="relative min-h-screen">
//                 <div
//                     className={`fixed top-0 left-0 w-full  transition-transform duration-300 ease-in-out z-50 ${isHeaderVisible ? "translate-y-6" : "-translate-y-full"
//                         }`}
//                 >
//                     <Header />
//                 </div>

//                 <div className="container mx-auto pt-[120px] px-4 md:px-6">
//                     <div className="px-6 pt-10 md:px-10">
//                         {/* Breadcrumb */}
//                         <div className="flex items-center text-sm mb-4 mt-10 text-[#474747]">

//                             <img
//                                 src="/bread-home.svg"
//                                 className="mr-1 text-xl cursor-pointer"
//                                 aria-hidden="true"
//                             />
//                             <span className="mx-1 text-base font-bold text-[18px] ml-3 ">/</span>
//                             <span className=" text-base font-semibold text-[18px] ml-3">Integrity line</span>

//                         </div>
//                         <div className="mt-10">
//                             <h1
//                                 className="text-2xl md:text-6xl font-bold mb-4 tracking-tight"
//                                 style={{ color: "#008093" }}
//                             >
//                                 We value and protect Integrity.
//                             </h1>
//                             <p
//                                 style={{ lineHeight: "1.2em" }}
//                                 className="text-[#474747] text-xl md:text-2xl mt- tracking-tight mt-10 "
//                             >
//                                 Conducting our business with transparency is fundamental. That's why we want to introduce a ,
//                                 <br />
//                                 communication channel we've developed so you can raise concerns about actions or behaviors ,
//                                 <br />
//                                 that you consider unethical or that violate our Code of Conduct and Ethics.
//                             </p>
//                             <div className="mt-10">
//                                 <a
//                                     href="https://cloudgaia.com/storage/2025/01/Conduct-and-Ethics-Code.pdf"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="inline-block"
//                                 >
//                                     <button className="bg-yellow-400 font-semibold text-[#474747] px-7 py-4 rounded-full hover:bg-[#ff83A0] hover:text-[#f9f9f9] transition-all">
//                                         Read our Code of Conduct and Ethics
//                                     </button>
//                                 </a>
//                             </div>

//                         </div>


//                     </div>

//                 </div>
//                 <div className="w-full mt-[120px] ">
//                     <img
//                         src="/implementation1.PNG"
//                         alt="img.visual"
//                         className="w-full h-[500px] object-cover"
//                     />
//                 </div>
//                 <section className="bg-white px-6 py-16 text-center md:px-20">
//                     {/* Message */}
//                     <p className="text-[30px] text-[#474747] max-w-3xl mx-auto mb-10">
//                         It’s important for you to know that this line is completely confidential and secure. The priority will always be to support the person who reaches out.
//                     </p>

//                     {/* Subheading */}
//                     <h2 className=" text-bold text-[30px] text-[#474747] mb-4">
//                         How can I contact?
//                     </h2>

//                     {/* Button */}
//                     <button
//                         onClick={handleClick}
//                         className="bg-[#fcc000] text-semibold hover:bg-[#ff83A0] hover:text-[#f9f9f9] text-[#474747] text-[16px] font-semibold px-6 py-3 rounded-full transition-all mb-6"
//                     >
//                         Click here to fill the form
//                     </button>

//                     {/* Email */}
//                     <p className="text-[#474747] text-[18px mt-8">
//                         You can also contact us via email at{" "}
//                         <a
//                             href="mailto:integrity@cloudgaia.com"
//                             className="text-[#008093] text-[18px] font-semibold hover:underline"
//                         >
//                             integrity@codescience.com
//                         </a>
//                     </p>
//                 </section>

//                 <Footer />
//             </div>

//         </div>
//     );

// };
// export default IntegritySection;

// src/components/IntegritySection.jsx

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Home } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const IntegritySection = () => {
     const pdfUrl = "/storages/Codescience pdf";
//   const pdfUrl = `${process.env.PUBLIC_URL}/storages/Codescience pdf`;
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
      const [lastScrollY, setLastScrollY] = useState(0);
      useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsHeaderVisible(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);


    // ✅ useNavigate must be used inside component
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/contact'); // 👈 make sure this route exists in your App.js or Router
    };
      const handleOpenPdf = () => {
    window.open(pdfUrl, "_blank");
   };


    return (
        <div className="relative min-h-screen bg-white overflow-x-hidden">
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

                <div className="container mx-auto pt-[120px] px-4 md:px-6">
                    <div className="px-6 pt-10 md:px-10">
                        {/* Breadcrumb */}
                        <div className="flex items-center text-sm mb-4 mt-10 text-[#474747]">
                            <img
                                src="/bread-home.svg"
                                className="mr-1 text-xl cursor-pointer"
                                aria-hidden="true"
                            />
                            <span className="mx-1 text-base font-bold text-[18px] ml-3">/</span>
                            <span className="text-base font-semibold text-[18px] ml-3">Integrity line</span>
                        </div>

                        <div className="mt-10">
                            <h1
                                className="text-2xl md:text-6xl font-bold mb-4 tracking-tight"
                                style={{ color: "#008093" }}
                            >
                                We value and protect Integrity.
                            </h1>
                            <p
                                style={{ lineHeight: "1.2em" }}
                                className="text-[#474747] text-xl md:text-2xl tracking-tight mt-10"
                            >
                                Conducting our business with transparency is fundamental. That's why we want to
                                introduce a,
                                <br />
                                communication channel we've developed so you can raise concerns about actions or behaviors,
                                <br />
                                that you consider unethical or that violate our Code of Conduct and Ethics.
                            </p>

                            <div className="mt-10">
                                <a
                                    href={pdfUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block"
                                >
                                    <button 
                                     onClick={handleOpenPdf}
                                    className="bg-yellow-400 font-semibold text-[#474747] px-7 py-4 rounded-full hover:bg-[#ff83A0] hover:text-[#f9f9f9] transition-all">
                                        Read our Code of Conduct and Ethics
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full mt-[120px]">
                    <img
                        src="/integrityimg.webp"
                        alt="img.visual"
                        className="w-full h-[500px] object-cover"
                    />
                </div>

                <section className="bg-white px-6 py-16 text-center md:px-20">
                    <p className="text-[30px] text-[#474747] max-w-3xl mx-auto mb-10">
                        It’s important for you to know that this line is completely confidential and secure.
                        The priority will always be to support the person who reaches out.
                    </p>

                    <h2 className="text-bold text-[30px] text-[#474747] mb-4">
                        How can I contact?
                    </h2>

                    <button
                        onClick={handleClick}
                        className="bg-[#fcc000] text-semibold hover:bg-[#ff83A0] hover:text-[#f9f9f9] text-[#474747] text-[16px] font-semibold px-6 py-3 rounded-full transition-all mb-6"
                    >
                        Click here to fill the form
                    </button>

                    <p className="text-[#474747] text-[18px] mt-8">
                        You can also contact us via email at{" "}
                        <a
                            href="mailto:integrity@cloudgaia.com"
                            className="text-[#008093] text-[18px] font-semibold hover:underline"
                        >
                            integrity@code-science.com
                        </a>
                    </p>
                </section>

                <Footer />
            </div>
        </div>
    );
};

export default IntegritySection;
