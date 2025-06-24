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

// Country list
const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina",
  "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain",
  "Bangladesh", "Barbados", "Belarus", "Belgium", "Bhutan", "Bolivia",
  "Brazil", "Bulgaria", "Cambodia", "Canada", "Chile", "China", "Colombia",
  "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Dominican Republic",
  "Ecuador", "Egypt", "Estonia", "Ethiopia", "Finland", "France", "Georgia",
  "Germany", "Ghana", "Greece", "Guatemala", "Honduras", "Hungary", "Iceland",
  "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica",
  "Japan", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Latvia", "Lebanon",
  "Lithuania", "Luxembourg", "Malaysia", "Maldives", "Mexico", "Moldova",
  "Monaco", "Mongolia", "Morocco", "Nepal", "Netherlands", "New Zealand",
  "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Peru", "Philippines",
  "Poland", "Portugal", "Qatar", "Romania", "Russia", "Saudi Arabia", "Serbia",
  "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain",
  "Sri Lanka", "Sudan", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan",
  "Tanzania", "Thailand", "Tunisia", "Turkey", "Uganda", "Ukraine",
  "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
  "Uzbekistan", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
].sort();

const Optimization = () => {
  const navigate = useNavigate();
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

  return (
    <div className="relative min-h-screen bg-white">
      {/* Sticky Header */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out ${
          isHeaderVisible ? "translate-y-6" : "-translate-y-full"
        }`}
      >
        <Header />
      </div>

      {/* Main Content */}
      <div className="px-6 md:px-20 mt-20 pt-24 pb-10">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <FaHome className="mr-1 text-xl" />
          <span className="mx-1 text-lg font-medium">/</span>
          <span className="text-lg font-semibold">
            Services / Implementation / Optimization
          </span>
        </div>

        {/* Title */}
        <div className="max-w-7xl mx-auto mt-10">
          <h1 className="text-2xl md:text-6xl font-bold text-[#008093] mb-4">
            For companies looking to Boost Salesforce
          </h1>
          <p className="text-[#474747] text-base md:text-2xl mt-5">
            We offer services that empower and optimize its use, <br/>adapting it to the changing needs of your business.
          </p>
        </div>

        {/* Full-width Image */}
        <div className="w-screen mt-8 relative left-1/2 right-1/2 -mx-[50vw] mt-[150px]">
          <img
            src="/optimization1.PNG"
            alt="Optimization visual"
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Two-column Layout */}
       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          {/* Se ha quitado `justify-center` de aquí */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

            {/* 
      CAMBIO: Se ha añadido `lg:col-start-2`.
      Esto deja la primera columna del grid vacía, empujando todo el bloque al centro.
    */}
            <div className="lg:col-start-2 lg:col-span-5 w-full">
              <div className="flex flex-col gap-8 text-base md:text-sm" >
                {[
                  {
                    icon: <img src="/implementation-icon-1.svg" className="text-3xl text-[#FF83A9]" />,
                    title: "Scale Salesforce Solutions",
                    description: "We help scale your existing solution by adding new licenses or features, either within the same cloud or a new one. Using a co-creation strategy, we customize the expansion to support business growth, enhance operational efficiency, and address unique needs, including adding automation modules and advanced analytics tools.",
                  },
                  {
                    icon: <img src="/optimization-icon-2.svg" className="text-3xl text-[#FF83A9]" />,
                    title: "Customization, Expansion & Integration",
                    description: "We improve your current Salesforce setup with specific customizations and integrations with key external systems, business management tools, and custom solutions to meet specific use cases. We ensure an implementation that respects security and scalability best practices.",
                  },
                  {
                    icon: <img src="/optimization-icon-3.svg" className="text-3xl text-[#FF83A9]" />,
                    title: "Support and Managed Services",
                    description :  " We provide ongoing support and platform maintenance, ensuring that Salesforce operates seamlessly over time, with optimal performance, security, and adaptability. Our team manages updates, resolves issues, and implements necessary optimizations so you can focus on growing your business.",
                  },
                ].map((card, index) => (
                  <div key={index} className="bg-white border rounded-lg p-6 shadow-sm">
                    <div className="flex items-center">
                      {card.icon}
                      <h4 className="ml-4 text-2xl font-bold text-[#008093]">{card.title}</h4>
                    </div>
                    <p className="mt-4 text-gray-700">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Esta columna no necesita cambios, se ajustará automáticamente */}
            <div className="lg:col-span-5 w-full">
              <div className="lg:sticky top-28">
                <form className="bg-yellow-400 text-black p-6 rounded-lg shadow-lg space-y-4">
                  <h2 className="text-2xl font-semibold mb-2 leading-tight">
                    Complete the form and book<br />a free consultation
                  </h2>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <input type="text" placeholder="First Name*" className="w-full p-3 rounded bg-white text-black focus:outline-none" required />
                    <input type="text" placeholder="Last Name*" className="w-full p-3 rounded bg-white text-black focus:outline-none" required />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <input type="email" placeholder="Email*" className="w-full p-3 rounded bg-white text-black focus:outline-none" required />
                    <input type="text" placeholder="Company*" className="w-full p-3 rounded bg-white text-black focus:outline-none" required />
                  </div>

                  <select required className="w-full p-3 rounded bg-white text-black focus:outline-none" defaultValue="">
                    <option disabled value="">Select Country*</option>
                    {/* {countries.map(...)} */}
                  </select>

                  <textarea placeholder="Message*" className="w-full p-3 h-24 rounded bg-white text-black resize-none focus:outline-none" required></textarea>

                  <p className="text-xs !mt-2 text-gray-800">
                    By continuing, I confirm that I have read and agree to the Privacy Policy.
                  </p>
                  <div className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1" required />
                    <p className="text-sm text-gray-800">
                      I agree to receive emails from CloudGaia with updates on services, events, and alerts. I can unsubscribe at any time.
                    </p>
                  </div>

                  <div className="flex justify-end">
                    <button type="submit" className="bg-white text-black font-semibold py-2 px-6 rounded-full hover:bg-[#FF83A9] hover:text-white transition">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Other Services Section */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-center text-3xl md:text-4xl font-semibold text-[#008093] mb-12">
            Check our other services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow-md text-left">
              <img src='/services-icon-1.svg' className="mb-4" />
              <h3 className="text-3xl text-[#008093] font-semibold mb-2">Innovation</h3>
              <p className="text-gray-700 text-lg mb-4">
                Discover cutting-edge solutions that help you stay ahead of the curve.
              </p>
              <a href="#" className="text-gray-700 font-medium relative inline-block group">
                Learn more
                <span className="block h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </a>
            </div>

            <div className="p-6 border rounded-lg shadow-md text-left">
              <img src='/services-icon-3.svg' className="mb-4" />
              <h3 className="text-3xl text-[#008093] font-semibold mb-2">Strategic Growth</h3>
              <p className="text-gray-700 text-lg mb-4">
                Accelerate your business growth with focused strategic initiatives.
              </p>
              <a href="#" className="text-gray-700 font-medium relative inline-block group">
                Learn more
                <span className="block h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </a>
            </div>

            <div className="p-6 border rounded-lg shadow-md text-left">
              <img src='/services-icon-4.svg' className="mb-4" />
              <h3 className="text-3xl text-[#008093] font-semibold mb-2">Optimization</h3>
              <p className="text-gray-700 text-lg mb-4">
                Improve efficiency by streamlining operations and maximizing ROI.
              </p>
              <a href="#" className="text-gray-700 font-medium relative inline-block group">
                Learn more
                <span className="block h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-20">
                          <div
                            onClick={() => navigate("/Services/all_services")}
                            className="flex items-center cursor-pointer group"
                          >
                            {/* Circle with Arrow */}
                            <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center transition duration-300 group-hover:bg-[#FF83A9]">
                              <FaArrowLeft className="text-white text-xl" />
                            </div>
                
                            {/* Label */}
                            <span className="ml-4 text-lg font-medium text-[#474747] group-hover:underline">
                              Back to Services
                            </span>
                          </div>
                        </div>
      </div>
      

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Optimization;
