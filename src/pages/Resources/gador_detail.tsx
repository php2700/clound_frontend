import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export const Gador_Detail = () => {
  const navigate = useNavigate();
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

  const handlePage = (e) => {
    navigate("/resources/customer-stories");
  };

  const handleHome = () => {
    navigate("/");
  };

  const handleurl = (e) => {
    navigate("/contact");
  };

  return (
    <div className="relative min-h-screen">
      <div
        className="absolute top-0 right-0 w-72 h-72 bg-[#008093]"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
        aria-hidden="true"
      />
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
              <span className="mx-1 text-base font-bold">/</span>
              <span
                className="text-base font-bold cursor-pointer"
                onClick={handleHome}
              >
                Resources
              </span>
              <span className="mx-1 text-base font-bold">&nbsp;/</span>
              <span
                className="mx-1 text-base font-bold cursor-pointer"
                onClick={handlePage}
              >
                &nbsp;Customer Stories
              </span>
              <span className="mx-1 text-base font-bold">&nbsp;/</span>
              <span className="mx-1 text-base font-bold">
                &nbsp;Blue Cross Idaho
              </span>
            </div>
            <div className="mx-1 flex items-center text-lg font-medium mt-4">
              <img
                src="/europion_union.png"
                className="w-5 h-5"
                alt="USA Flag"
              />
              <span className="mx-1 text-[24px] text-[#474747] font-semibold ml-2">
                Blue Cross Idaho
              </span>
            </div>
            <div
              style={{ lineHeight: "1em" }}
              className={`text-6xl font-bold text-[#008093] my-5      `}
            >
              Transforming Experiences with <br />a 360° Customer View
            </div>

            <div className="flex items-center gap-5 mb-10">
              <div>
                {" "}
                <img src="/logo-salesforce.svg" />
              </div>
              <div
                style={{ lineHeight: "1.2em" }}
                className="text-2xl text-[#474747]"
              >
                Service Cloud | Sales Cloud | Marketing Cloud | Consumer Goods
                Cloud | Platform | Commerce Cloud
              </div>
            </div>
            <div
              style={{ lineHeight: "1.2em" }}
              className="text-lg text-[#474747] mb-20"
            >
              We transformed Blue Cross Idaho customer engagement strategy by
              implementing an end-to-end solution based on Salesforce,
              <br /> delivering personalized experiences tailored to each
              segment and touchpoint.
            </div>

            <div className="bg-[#ff83a9] text-[#f9f9f9] rounded-lg shadow-md px-5 py-8">
              <div>
                <img src="/icon-clock.svg" />
              </div>
              <div
                style={{ lineHeight: "1em", fontSize: "40px" }}
                className="font-semibold my-5"
              >
                The Challenge
              </div>
              <div style={{ lineHeight: "1em" }} className="text-lg ">
                Blue Cross Idaho is undergoing a bold digital transformation
                rooted in two strategic pillars: embracing digital
                transformation and evolving into a data-driven organization. Our
                partnership focuses on elevating the user experience while
                creating powerful metrics to monitor and optimize business
                performance. Together, we’re reshaping processes and unlocking
                untapped potential for growth and innovation.
              </div>
            </div>

            <div className="bg-[#008093] text-[#f9f9f9] rounded-lg py-16 px-6 mt-2">
              <div className="mb-10 ">
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src="/icon-solution.svg"
                    alt="Icon"
                    className="w-10 h-10"
                  />
                </div>
                <h2 className="text-4xl font-bold">Our All-in Solution</h2>
              </div>

              <div className="grid gap-3 lg:grid-cols-4 max-w-7xl mx-auto">
                <div className="rounded-md p-6 shadow-md  bg-white">
                  <p
                    style={{ lineHeight: "1.2em" }}
                    className="text-lg text-[#474747]"
                  >
                    <strong>Created a 360° view of customers</strong>,enabling
                    personalised experiences for each segment and channel.
                  </p>
                </div>

                <div className="rounded-md p-6 shadow-md  bg-white">
                  <p
                    style={{ lineHeight: "1.2em" }}
                    className="text-lg text-[#474747]"
                  >
                    <strong>Implemented a B2B e-commerce platform</strong>, to
                    manage pharmacy market orders, strengthen our pharmacy
                    channel, and integrate with the distributor for order
                    shipments.
                  </p>
                </div>

                <div className="rounded-md p-6 shadow-md  bg-white">
                  <p
                    style={{ lineHeight: "1.2em" }}
                    className="text-lg text-[#474747]"
                  >
                    <strong>Implemented a medical file</strong>
                    system that consolidated the entire sales force into a
                    single platform with all necessary information.
                  </p>
                </div>
                <div className="rounded-md p-6 shadow-md  bg-white">
                  <p
                    style={{ lineHeight: "1.2em" }}
                    className="text-lg text-[#474747]"
                  >
                    <b>Digitized end-to-end processes</b>
                    reducing response times, and increasing coherence and
                    efficiency in interactions with stakeholders across all
                    channels.
                  </p>
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
                  style={{ fontSize: "40px", lineHeight: "1em" }}
                  className="text-[#f9f9f9]  font-semibold"
                >
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
                <div
                  style={{ lineHeight: "1.2em" }}
                  className="text-[#008093] font-bold text-3xl mb-2"
                >
                  70,000+
                </div>
                <p
                  style={{ lineHeight: "1.2em" }}
                  className="text-lg text-[#474747]"
                >
                  orders per year
                </p>
              </div>

              <div className="flex-1 bg-white rounded-lg p-6 shadow">
                <img
                  src="/industries-icon-1.svg"
                  alt="Cart Icon"
                  className="mx-auto mb-4 w-10 h-10 text-pink-400"
                />
                <div
                  style={{ lineHeight: "1.2em" }}
                  className="text-[#008093] font-bold text-3xl mb-2"
                >
                  35%-
                </div>
                <p
                  style={{ lineHeight: "1.2em" }}
                  className="text-lg text-[#474747]"
                >
                  case resolution time
                </p>
              </div>

              <div className="flex-1 bg-white rounded-lg p-6 shadow">
                <img
                  src="/icon-sales-up.svg"
                  alt="Growth Icon"
                  className="mx-auto mb-4 w-10 h-10 text-pink-400"
                />
                <div
                  style={{ lineHeight: "1.2em" }}
                  className="text-[#008093] font-bold text-3xl mb-2"
                >
                  42%+
                </div>
                <p
                  style={{ lineHeight: "1.2em" }}
                  className="text-lg text-[#474747]"
                >
                  monthly medical file visits{" "}
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

            <button
              onClick={handleurl}
              className="bg-[#ff83a9] hover:bg-[#f9f9f9] hover:text-[#474747] text-[#f9f9f9] text-base font-bold px-6 py-2 rounded-full shadow-md transition"
            >
              Contact an expert
            </button>
          </div>
        </div>

        <div className="container mx-auto pt-[50px] px-4 md:px-6 ">
          <div className="px-6 py-10 md:px-20 ">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-5 md:px-16 py-12 gap-8">
              <div className="md:w-2/3 text-center md:text-center">
                <p
                  style={{ lineHeight: "1.2em" }}
                  className="italic text-[#474747] text-2xl"
                >
                  “We formed a team between the commercial, transformation and
                  technology areas, along with our strategic partner,
                  Codescience. Undoubtedly, the success of this transformation
                  process is achieved by making the best team. That is a
                  reliable, dynamic and agile team.”
                </p>
              </div>

              <div className="text-center md:text-center md:w-1/3">
                <h3 className="text-3xl  text-[#474747]">Tamara Cook</h3>
                <p
                  style={{ lineHeight: "1.2em" }}
                  className="text-lg text-[#474747]  mt-1"
                >
                  Transformation & Technology Master
                </p>
              </div>
            </div>
            <div>
              <Link
                to="/resources/customer-stories"
                className="flex gap-5 items-center justify-center group"
              >
                <div className="p-3 bg-[#fcc000] rounded-full  text-white group-hover:cursor-pointer group-hover:bg-[#FF83A9]">
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
