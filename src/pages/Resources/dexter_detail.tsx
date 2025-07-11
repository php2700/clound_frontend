import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export const Dexter_Detail = () => {
  const navigate=useNavigate()
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

 const handlePage=(e)=>{
    navigate("/resources/customer-stories")
  }

  const handleHome=()=>{
    navigate("/")
  }

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
        <div className="container mx-auto pt-[120px] px-4 md:px-6">
          <div className="px-6 py-10 md:px-10 ">
            <div className="flex items-center text-sm text-[#474747] mt-10">
              <img src="/bread-home.svg" className="mr-1 text-xl" />
              <span className="mx-1 text-base font-bold">&nbsp;/</span>
              <span className="text-base font-bold cursor-pointer" onClick={handleHome}>
                &nbsp; Resources
              </span>
              <span className="mx-1 text-base font-bold">&nbsp;/</span>
              <span className="mx-1 text-base font-bold cursor-pointer" onClick={handlePage}>
                &nbsp;Customer Stories
              </span>
              <span className="mx-1 text-base font-bold">&nbsp;/</span>
              <span className="mx-1 text-base font-bold">
                &nbsp;Schneider Electric
              </span>
            </div>
            <div className="mx-1 flex items-center text-lg font-medium mt-4">
              <img src="/flag-usa (1).svg" className="w-6 h-6" alt="USA Flag" />
              <span className="mx-1 text-[24px] text-[#474747] font-semibold ml-2">
                Schneider Electric
              </span>
            </div>
            <div
              style={{ lineHeight: "1em" }}
              className={`text-6xl font-bold text-[#008093] my-5 `}
            >
              +57% Growth in Online Orders: <br />
              Schneider Electric’s Success in E-Commerce Digitization with
              Salesforce
            </div>
            <div className="flex items-center gap-5 mb-10">
              <div>
                <img src="/logo-salesforce.svg" />
              </div>
              <div
                style={{ lineHeight: "1.2em" }}
                className="text-2xl text-[#474747]"
              >
                Commerce Cloud B2C | Service Cloud | Marketing Cloud
              </div>
            </div>
            <div
              style={{ lineHeight: "1.2em" }}
              className="text-lg text-[#474747] mb-20"
            >
              Schneider Electric’s Europe’s leading provider of energy and
              industrial automation, , transformed its e-commerce experience,
              streamlining operations and enhancing customer engagement to drive
              significant growth in online orders.
            </div>

            <div className="flex flex-col md:flex-row gap-2 mt-8">
              <div className="lg:w-1/2 w-full  lg:h-auto flex flex-col  gap-4 bg-white rounded-lg px-6 md:px-8 py-6">
                <div>
                  <img
                    src="/icon-info.svg"
                    alt="Clock Icon"
                    className="w-10 h-10"
                  />
                </div>
                <div
                  style={{ fontSize: "40px", lineHeight: "1em" }}
                  className="font-semibold text-[#008093] "
                >
                  About Schneider Electric
                </div>
                <div
                  style={{ lineHeight: "1.2em" }}
                  className="text-lg text-[#474747]"
                >
                  Schneider Electric is a global leader in energy management and
                  automation, providing digital solutions for efficiency and
                  sustainability across homes, buildings, data centers, and
                  industries.
                </div>
              </div>
              <div className="lg:w-1/2 w-full h-64 lg:h-auto">
                <img
                  src="/stories-dexter.webp"
                  alt="Team working"
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-2 mt-2">
              <div className="flex-1 flex flex-col gap-4 bg-[#ff83a9] rounded-lg px-6 md:px-8 py-6">
                <div>
                  <img
                    src="/icon-clock.svg"
                    alt="Clock Icon"
                    className="w-10 h-10"
                  />
                </div>
                <div
                  style={{ fontSize: "40px", lineHeight: "1em" }}
                  className="font-semibold text-[#f9f9f9]"
                >
                  The Challenge
                </div>
                <div
                  style={{ lineHeight: "1.2em" }}
                  className="text-[#f9f9f9] text-lg"
                >
                  Grupo Dexter has a strategic focus on leveraging innovative
                  technological tools to strengthen its connection with
                  customers. They required a robust platform to support the high
                  operational demands of Netshoes Argentina, ensuring seamless
                  management of large transaction volumes. The solution also
                  needed to be highly flexible to swiftly implement diverse
                  promotional strategies and business initiatives. Additionally,
                  it was essential to gain a 360° customer view by integrating
                  data across multiple platforms, enabling a more unified and
                  customer-focused retail experience that drives business
                  growth.
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-4 bg-[#008093] rounded-lg px-6 md:px-8 py-6">
                <div>
                  <img
                    src="/icon-solution.svg"
                    alt="Solution Icon"
                    className="w-10 h-10"
                  />
                </div>
                <div
                  style={{ fontSize: "40px" }}
                  className="text-[#f9f9f9] font-semibold "
                >
                  Our All-in Solution
                </div>
                <div
                  style={{ lineHeight: "1.2em" }}
                  className="text-[#f9f9f9] text-lg"
                >
                  <strong>
                    {" "}
                    A multi-cloud platform that seamlessly integrates data from
                    all of Grupo Dexter’s brands into a unified solution.
                  </strong>
                </div>
                <div
                  style={{ lineHeight: "1.2em" }}
                  className="text-[#f9f9f9] text-lg"
                >
                  This platform includes customized storefronts for each brand,
                  ensuring scalability and adaptability as the business grows.
                </div>
              </div>
            </div>

            <div className="bg-[#474747] py-6 px-4 mt-2 rounded-xl">
              <div className=" flex items-center justify-center gap-3">
                <img
                  src="/icon-stars-white.svg"
                  alt="Stars Icon"
                  className="w-10 h-10"
                />
                <h2
                  style={{ lineHeight: "1.em", fontSize: "40px" }}
                  className="text-[#f9f9f9] font-semibold"
                >
                  Delivering exceptional results
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-10 text-center">
              <div className="bg-white rounded-lg p-6 shadow">
                <img
                  src="/icon-arrows.svg"
                  alt="Duplicate Icon"
                  className="mx-auto mb-4 w-10 h-10 text-pink-400"
                />
                <div
                  style={{ lineHeight: "1.2em" }}
                  className="text-[#008093] font-bold text-3xl mb-2"
                >
                  150%
                </div>
                <p
                  style={{ lineHeight: "1.2em" }}
                  className="text-lg text-[#474747]"
                >
                  of growth sales soared in just one year
                </p>
              </div>

              <div className=" bg-white rounded-lg p-6 shadow">
                <img
                  src="/industries-icon-1.svg"
                  alt="Cart Icon"
                  className="mx-auto mb-4 w-10 h-10 text-pink-400"
                />
                <div
                  style={{ lineHeight: "1.2em" }}
                  className="text-[#008093] font-bold text-3xl mb-2"
                >
                  57%
                </div>
                <p
                  style={{ lineHeight: "1.2em" }}
                  className="text-lg text-[#474747]"
                >
                  of e-commerce orders within six months
                </p>
              </div>

              <div className=" bg-white rounded-lg p-6 shadow">
                <img
                  src="/icon-sales-up.svg"
                  alt="Growth Icon"
                  className="mx-auto mb-4 w-10 h-10 text-pink-400"
                />
                <div
                  style={{ lineHeight: "1.2em" }}
                  className="text-[#008093] font-bold text-3xl mb-2"
                >
                  27%
                </div>
                <p
                  style={{ lineHeight: "1.2em" }}
                  className="text-lg text-[#474747]"
                >
                  average conversion rate growth
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow">
                <img
                  src="/icon-arrows.svg"
                  alt="Duplicate Icon"
                  className="mx-auto mb-4 w-10 h-10 text-pink-400"
                />
                <div
                  style={{ lineHeight: "1.2em" }}
                  className="text-[#008093] font-bold text-3xl mb-2"
                >
                  1.5M
                </div>
                <p
                  style={{ lineHeight: "1.2em" }}
                  className="text-lg text-[#474747]"
                >
                  contacts migrated to Marketing Cloud
                </p>
              </div>

              <div className=" bg-white rounded-lg p-6 shadow">
                <img
                  src="/industries-icon-1.svg"
                  alt="Cart Icon"
                  className="mx-auto mb-4 w-10 h-10 text-pink-400"
                />
                <div
                  style={{ lineHeight: "1.2em" }}
                  className="text-[#008093] font-bold text-3xl mb-2"
                >
                  24M
                </div>
                <p
                  style={{ lineHeight: "1.2em" }}
                  className="text-lg text-[#474747]"
                >
                  emails sent monthly
                </p>
              </div>

              <div className=" bg-white rounded-lg p-6 shadow">
                <img
                  src="/icon-sales-up.svg"
                  alt="Growth Icon"
                  className="mx-auto mb-4 w-10 h-10 text-pink-400"
                />
                <div
                  style={{ lineHeight: "1.2em" }}
                  className="text-[#008093] font-bold text-3xl mb-2"
                >
                  120%
                </div>
                <p
                  style={{ lineHeight: "1.2em" }}
                  className="text-lg text-[#474747]"
                >
                  email sales growth during Cyber Monday
                </p>
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
            <h2
              style={{ fontSize: "40px", lineHeight: "1em" }}
              className="text-[#f9f9f9] font-semibold mb-4"
            >
              Don't get stuck in technical debt.
            </h2>

            <button className="bg-[#ff83a9] hover:bg-white hover:text-[#474747] text-white font-semibold px-6 py-2 rounded-full shadow-md transition">
              Contact an expert
            </button>
          </div>
        </div>

        <div className="container mx-auto pt-[50px] px-4 md:px-6 ">
          <div className="px-6 py-10 md:px-10 ">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-5 md:px-16 py-12 gap-8">
              <div className="md:w-2/3 text-center md:text-center">
                <p
                  style={{ lineHeight: "1.2em" }}
                  className="italic text-2xl text-[#474747]"
                >
                  “What was done was epic, and I attribute this to the good
                  chemistry, trust, of the team that was formed; and having all
                  together that common goal in which we all pushed to get the
                  place where we wanted to be”
                </p>
              </div>

              <div className="text-center md:text-center md:w-1/3">
                <h3
                  style={{ lineHeight: "1.2em" }}
                  className="text-3xl text-[#474747]"
                >
                  Former CEO
                </h3>
                <p className=" mt-1">Innovation and product manager</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-1 text-center">
              <div className="rounded-xl bg-white flex-1 px-5 py-6">
                <div>
                  <img src="/icon-arrows.svg" className="mx-auto" />
                </div>
                <div
                  style={{ lineHeight: "1.2em" }}
                  className="text-[#008093] text-2xl font-bold my-5"
                >
                  Unified ecommerce Platform
                </div>
                <div
                  style={{ lineHeight: "1.2em" }}
                  className="text-lg text-[#474747]"
                >
                  Implemented Salesforce Commerce Cloud with storefront
                  reference architecture to optimize the user experience.
                </div>
              </div>
              <div className="rounded-xl bg-white flex-1 px-5 py-6">
                <div>
                  <img src="/icon-infinite.svg" className="mx-auto" />
                </div>
                <div
                  style={{ lineHeight: "1.2em" }}
                  className="text-[#008093] text-2xl font-bold my-5"
                >
                  Unified ecommerce Platform
                </div>
                <div
                  style={{ lineHeight: "1.2em" }}
                  className="text-lg text-[#474747]"
                >
                  Integrated Marketing Cloud and Service Cloud to deliver
                  personalized engagement and a unified customer database.
                </div>
              </div>
              <div className=" rounded-xl bg-white flex-1 px-5 py-6">
                <div>
                  <img src="/icon-chip.svg" className="mx-auto" />
                </div>
                <div
                  style={{ lineHeight: "1.2em" }}
                  className="text-[#008093] text-2xl font-bold my-5"
                >
                  AI-Driven insights
                </div>
                <div
                  style={{ lineHeight: "1.2em" }}
                  className="text-lg text-[#474747]"
                >
                  Enabled Einstein Analytics for intelligent product suggestions
                  and enhanced customer interactions.
                </div>
              </div>
              <div className="rounded-xl bg-white flex-1 px-5 py-6">
                <div>
                  <img src="/icon-badge-pink.svg" className="mx-auto" />
                </div>
                <div
                  style={{ lineHeight: "1.2em" }}
                  className="text-[#008093] text-2xl font-bold my-5"
                >
                  Fraud prevention system
                </div>
                <div
                  style={{ lineHeight: "1.2em" }}
                  className="text-lg text-[#474747]"
                >
                  Developed a custom fraud detection module on Salesforce
                  Platform to safeguard transactions.
                </div>
              </div>
            </div>
            <div className="my-20">
              <Link
                to="/resources/customer-stories"
                className="flex gap-5 items-center justify-center group"
              >
                <div className="p-3 bg-[#fcc000] rounded-full text-white group-hover:cursor-pointer group-hover:bg-[#FF83A9]">
                  <FaArrowLeft />
                </div>
                <div className="text-lg text-[#474747]">Back to cases</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
