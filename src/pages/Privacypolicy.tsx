// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Home } from "lucide-react";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

// const Privacypolicy = () => {
//     const [isHeaderVisible, setIsHeaderVisible] = useState(true);
//       const [lastScrollY, setLastScrollY] = useState(0);
//       useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       setIsHeaderVisible(currentScrollY < lastScrollY || currentScrollY < 10);
//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);


//     // ✅ useNavigate must be used inside component


//     return (
//         <div className="relative min-h-screen bg-white overflow-x-hidden">
//             <div
//                 className="absolute top-0 right-0 w-72 h-72 bg-[#008093]"
//                 style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
//                 aria-hidden="true"
//             />
//             <div className="relative min-h-screen">
//                 <div
//                     className={`fixed top-0 left-0 w-full transition-transform duration-300 ease-in-out z-50 ${
//                         isHeaderVisible ? "translate-y-6" : "-translate-y-full"
//                     }`}
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
//                             <span className="mx-1 text-base font-bold text-[18px] ml-3">/</span>
//                             <span className="text-base font-semibold text-[18px] ml-3">Privacy Policy</span>
//                         </div>

//                         <div className="mt-10">




//                             </div>
//                         </div>
//                     </div>
//                 </div>





//                 <Footer />
//             </div>

//     );
// };

//  export default Privacypolicy;
// import React, { useEffect, useState } from "react";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

// const Privacypolicy = () => {
//     const [isHeaderVisible, setIsHeaderVisible] = useState(true);
//     const [lastScrollY, setLastScrollY] = useState(0);

//     useEffect(() => {
//         const handleScroll = () => {
//             const currentScrollY = window.scrollY;
//             setIsHeaderVisible(currentScrollY < lastScrollY || currentScrollY < 10);
//             setLastScrollY(currentScrollY);
//         };

//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, [lastScrollY]);

//     return (
//         <div className="relative min-h-screen bg-white overflow-x-hidden">
//             {/* Top corner shape */}
//             <div
//                 className="absolute top-0 right-0 w-72 h-72 bg-[#008093]"
//                 style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
//                 aria-hidden="true"
//             />

//             {/* Sticky Header */}
//             <div
//                 className={`fixed top-0 left-0 w-full transition-transform duration-300 ease-in-out z-50 ${isHeaderVisible ? "translate-y-6" : "-translate-y-full"
//                     }`}
//             >
//                 <Header />
//             </div>

//             {/* Content */}
//             <div className="relative min-h-screen">
//                 <div className="container mx-auto pt-[120px] px-4 md:px-6">
//                     <div className="px-6 pt-10 md:px-10">

//                         {/* Breadcrumb */}
//                         <div className="flex items-center text-sm mb-4 mt-10 text-[#474747]">
//                             <img src="/bread-home.svg" className="mr-1 text-xl cursor-pointer" aria-hidden="true" />
//                             <span className="mx-1 text-base font-bold text-[18px] ml-3">/</span>
//                             <span className="text-base font-semibold text-[18px] ml-3">Privacy Policy</span>
//                         </div>

//                         {/* Page Content */}
//                         <div className="mt-10 space-y-8 text-[#333]">
//                             <h1 className="text-3xl font-bold text-[#008093]">Privacy Policy</h1>
                          
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <Footer />
//         </div>
//     );
// };

// export default Privacypolicy;
// import React, { useEffect, useState } from "react";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import axios from "axios";

// const Privacypolicy = () => {
//   const [isHeaderVisible, setIsHeaderVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [privacyContent, setPrivacyContent] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   // Scroll header hide/show
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       setIsHeaderVisible(currentScrollY < lastScrollY || currentScrollY < 10);
//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   // Fetch privacy content from API
//   useEffect(() => {
//     axios
//       .get(`${process.env.REACT_APP_BASE_URL}api/user/privacy-policy`)
//       .then((res) => {
//         if (res.data.status) {
//           setPrivacyContent(res.data.data); // Set content from backend
//         } else {
//           setError("Failed to load privacy policy.");
//         }
//       })
//       .catch((err) => {
//         console.error("Error fetching privacy policy:", err);
//         setError("Something went wrong while fetching the privacy policy.");
//       })
//       .finally(() => setLoading(false));
//   }, []);

//   return (
//     <div className="relative min-h-screen bg-white overflow-x-hidden">
//       {/* Decorative Shape */}
//       <div
//         className="absolute top-0 right-0 w-72 h-72 bg-[#008093]"
//         style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
//         aria-hidden="true"
//       />

//       {/* Header */}
//       <div
//         className={`fixed top-0 left-0 w-full transition-transform duration-300 ease-in-out z-50 ${
//           isHeaderVisible ? "translate-y-6" : "-translate-y-full"
//         }`}
//       >
//         <Header />
//       </div>

//       {/* Main Content */}
//       <div className="relative min-h-screen">
//         <div className="container mx-auto pt-[120px] px-4 md:px-6">
//           <div className="px-6 pt-10 md:px-10">
//             {/* Breadcrumb */}
//             <div className="flex items-center text-sm mb-4 mt-10 text-[#474747]">
//               <img
//                 src="/bread-home.svg"
//                 className="mr-1 text-xl cursor-pointer"
//                 alt="Home"
//               />
//               <span className="mx-1 text-base font-bold text-[18px] ml-3">/</span>
//               <span className="text-base font-semibold text-[18px] ml-3">
//                 Privacy Policy
//               </span>
//             </div>

//             {/* Policy Content Section */}
//             <div className="mt-10 space-y-6 text-[#333]">
//               <h1 className="text-3xl font-bold text-[#008093]">
//                 Privacy Policy
//               </h1>

//               {loading && <p>Loading policy...</p>}
//               {error && <p className="text-red-500">{error}</p>}
//               {!loading && !error && (
//                 <div className="whitespace-pre-line leading-relaxed">
//                   {privacyContent}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Privacypolicy;
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacypolicy = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [privacyData, setPrivacyData] = useState(""); // Store policy content
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsHeaderVisible(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const fetchPrivacyPolicy = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}api/user/privacy-policy`
        );

        console.log(response.data," response data");
        setPrivacyData(response.data.policy || "No privacy policy content available.");
      } catch (err) {
        setError(err.response?.data?.message || err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchPrivacyPolicy();
  }, []);

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
                alt="breadcrumb home"
              />
              <span className="mx-1 text-base font-bold text-[18px] ml-3">/</span>
              <span className="text-base font-semibold text-[18px] ml-3">
                Privacy Policy
              </span>
            </div>

            <div className="mt-10">
              {loading && <p>Loading privacy policy...</p>}
              {error && <p className="text-red-500">{error}</p>}
              {!loading && !error && (
                <div
                  className="prose max-w-none text-gray-700"
                  dangerouslySetInnerHTML={{ __html: privacyData }}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacypolicy;
