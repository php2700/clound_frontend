import Header from "@/components/Header";
import { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../Footer";

export const Gador_Detail = () => {
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
    <div className="relative min-h-screen">
      <div
        className={`fixed top-0 left-0 w-full transition-transform duration-300 ease-in-out z-50 ${
          isHeaderVisible ? "translate-y-6" : "-translate-y-full"
        }`}
      >
        <Header />
      </div>
      <div className="bg-[#f9f9f9]">
        <div className="container mx-auto pt-[80px] px-4 md:px-6 ">
          <div className="px-6 py-10 md:px-20 ">
            <div className="flex items-center text-sm text-gray-700 mt-8">
              <FaHome className="mr-1 text-xl" />
              <span className="mx-1 text-lg font-medium">/</span>
              <span className="text-lg font-semibold cursor-pointer">
                Resources
              </span>
              <span className="mx-1 text-lg font-medium">/</span>
              <span className="mx-1 text-lg font-medium">Customer Stories</span>
              <span className="mx-1 text-lg font-medium">/</span>
              <span className="mx-1 text-lg font-medium">Gador</span>
            </div>
            <div className={`text-6xl font-bold text-teal-700 mt-5      `}>
              Transforming Experiences with
            </div>
            <div className={`text-6xl font-bold text-teal-700 mb-5      `}>
              a 360° Customer ViewT
            </div>
            <div className="flex items-center gap-5 mb-10">
              <div>
                {" "}
                <img src="/logo-salesforce.svg" />
              </div>
              <div className="text-2xl ">
                Service Cloud | Sales Cloud | Marketing Cloud | Consumer Goods
                Cloud | Platform | Commerce Cloud
              </div>
            </div>
            <div className="text-lg">
              We transformed Gador's customer engagement strategy by
              implementing an end-to-end solution based on Salesforce,
            </div>
            <div className="text-lg mb-20">
              delivering personalized experiences tailored to each segment and
              touchpoint.
            </div>
            <div className="bg-pink-400 text-white rounded-lg shadow-md px-5 py-8">
              <div>
                <img src="/icon-clock.svg" />
              </div>
              <div className="text-5xl font-bold my-5">The Challenge</div>
              <div>
                Gador is undergoing a bold digital transformation rooted in two
                strategic pillars: embracing digital transformation and evolving
                into a data-driven organization. Our partnership focuses on
                elevating the user experience while creating powerful metrics to
                monitor and optimize business performance. Together, we’re
                reshaping processes and unlocking untapped potential for growth
                and innovation.
              </div>
            </div>

            <div className="bg-teal-700 text-white py-16 px-6 mt-2">
              <div className="mb-10 ">
                <div className="flex items-center gap-2 text-yellow-400 text-2xl mb-2">
                  <img
                    src="/icon-solution.svg"
                    alt="Icon"
                    className="w-10 h-10"
                  />
                </div>
                <h2 className="text-4xl font-bold">Our All-in Solution</h2>
              </div>

              <div className="grid gap-3 lg:grid-cols-4 max-w-7xl mx-auto">
                <div className="bg-white text-gray-800 rounded-md p-6 shadow-md">
                  <p>
                    <b>Created a 360° view of customers</b>,enabling
                    personalised experiences for each segment and channel.
                  </p>
                </div>

                <div className="bg-white text-gray-800 rounded-md p-6 shadow-md">
                  <p>
                    <b>Implemented a B2B e-commerce platform</b>, to manage
                    pharmacy market orders, strengthen our pharmacy channel, and
                    integrate with the distributor for order shipments.
                  </p>
                </div>

                <div className="bg-white text-gray-800 rounded-md p-6 shadow-md">
                  <p>
                    <b>Implemented a medical file</b>
                    system that consolidated the entire sales force into a
                    single platform with all necessary information.
                  </p>
                </div>
                <div className="bg-white text-gray-800 rounded-md p-6 shadow-md">
                  <p>
                    <b>Digitized end-to-end processes</b>
                    reducing response times, and increasing coherence and
                    efficiency in interactions with stakeholders across all
                    channels.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 py-6 px-4 mt-2 rounded-xl">
              <div className=" flex items-center justify-center gap-3">
                <img
                  src="/icon-stars-white.svg"
                  alt="Stars Icon"
                  className="w-10 h-10"
                />
                <h2 className="text-white text-4xl md:text-3xl font-semibold">
                  Delivering exceptional results
                </h2>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between gap-6 mb-10 text-center">
              <div className="flex-1 bg-white rounded-lg p-6 shadow">
                <img
                  src="/icon-arrows.svg"
                  alt="Duplicate Icon"
                  className="mx-auto mb-4 w-10 h-10 text-pink-400"
                />
                <div className="text-teal-700 font-bold text-3xl">70,000+</div>
                <p className="text-gray-700">orders per year</p>
              </div>

              <div className="flex-1 bg-white rounded-lg p-6 shadow">
                <img
                  src="/industries-icon-1.svg"
                  alt="Cart Icon"
                  className="mx-auto mb-4 w-10 h-10 text-pink-400"
                />
                <div className="text-teal-700 font-bold text-3xl">35%-</div>
                <p className="text-gray-700">case resolution time</p>
              </div>

              <div className="flex-1 bg-white rounded-lg p-6 shadow">
                <img
                  src="/icon-sales-up.svg"
                  alt="Growth Icon"
                  className="mx-auto mb-4 w-10 h-10 text-pink-400"
                />
                <div className="text-teal-700 font-bold text-3xl">42%+</div>
                <p className="text-gray-700">monthly medical file visits </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[300px] w-full overflow-hidden">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="/image (3).png"
            alt="Descriptive Alt Text"
          />
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-white text-center px-4">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Don't get stuck in technical debt.
            </h2>

            <button className="bg-pink-400 hover:bg-white hover:text-black text-white font-semibold px-6 py-2 rounded-full shadow-md transition">
              Contact an expert
            </button>
          </div>
        </div>

        <div className="container mx-auto pt-[50px] px-4 md:px-6 ">
          <div className="px-6 py-10 md:px-20 ">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-5 md:px-16 py-12 gap-8">
              <div className="md:w-2/3 text-center md:text-center">
                <p className="italic text-gray-800 text-xl leading-relaxed">
                  “We formed a team between the commercial, transformation and
                  technology areas, along with our strategic partner, Cloudgaia.
                  Undoubtedly, the success of this transformation process is
                  achieved by making the best team. That is a reliable, dynamic
                  and agile team.”
                </p>
              </div>

              <div className="text-center md:text-center md:w-1/3">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Juan Beade
                </h3>
                <p className=" mt-1">Transformation & Technology Master</p>
              </div>
            </div>
            <div>
              <Link
                to="/resources/customer-stories"
                className="flex gap-5 items-center justify-center group"
              >
                <div className="p-3 bg-yellow-500 rounded-full text-white group-hover:cursor-pointer group-hover:bg-pink-400">
                  <FaArrowLeft />
                </div>
                <div className="text-lg">Back to cases</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
        <Footer />
    </div>
  );
};
