import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./resource.css";

export const Ealde_Detail = () => {
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
        <div className="container mx-auto pt-[120px] px-4 md:px-6 ">
          <div className="px-6 py-10 md:px-10 ">
            <div className="flex items-center text-sm text-[#474747] mt-10">
              <img src='/bread-home.svg' className="mr-1 text-xl" />
              <span className="mx-1 text-base font-bold">/</span>
              <span className="text-base font-bold cursor-pointer">
                Resources
              </span>
              <span className="mx-1 text-base font-bold">/</span>
              <span className="mx-1 text-base font-bold">Customer Stories</span>
              <span className="mx-1 text-base font-bold">/</span>
              <span className="mx-1 text-base font-bold">EALDE - Spain </span>
            </div>
            <div className="mx-1 flex items-center text-lg font-medium mt-4" >
              <img src="/flag-usa (1).svg" className="w-6 h-6" alt="USA Flag" />
              <span className="mx-1 text-[24px] text-[#474747] font-semibold ml-2">Kaplan - USA</span>
            </div>
            <div
              style={{ lineHeight: "1em" }}
              className={`text-6xl font-bold text-[#008093] my-5`}
            >
              Automation and Scalability: How Kaplan Optimized Its Operations
              with Salesforce
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
                Sales Cloud | Experience Cloud | Marketing Cloud
              </div>
            </div>
            <div
              style={{ lineHeight: "1.2em" }}
              className="text-lg text-[#474747] mb-20"
            >
              Codescience partnered with Kaplan to implement a
              Salesforce-based solution that modernised its data <br />
              model, automated key processes and improved the personalisation of
              its educational offerings. The result? A more agile,
              <br /> efficient and scalable operation, ready for the future.
            </div>
            <div className="bg-white rounded-lg shadow-md px-5 py-8">
              <div>
                <img src="/icon-info.svg" />
              </div>
              <div
                style={{ lineHeight: "1.2em" }}
                className="font-semibold text-[#008093] text-[40px] my-5"
              >
                About Kaplan Business School
              </div>
              <div
                style={{ lineHeight: "1.2em" }}
                className="text-[#474747] text-lg"
              >
              Kaplan Business School is a leading business school in the
                e-learning sector in Spain, specialised in executive training
                programmes in areas such as Compliance, Sustainability or Risk
                Management. Risk Management. Its focus is on academic
                excellence, agility and digital innovation to offer a high-level
                educational experience. offer a high-level educational
                experience.
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <div className="flex flex-col flex-1 gap-4 bg-[#ff83a9] rounded-lg px-6 md:px-8 py-6">
                <div>
                  <img
                    src="/icon-clock.svg"
                    alt="Clock Icon"
                    className="w-10 h-10"
                  />
                </div>
                <div
                  style={{ fontSize: "40px", lineHeight: "1em" }}
                  className=" font-semibold text-[#F9F9F9]"
                >
                  The Challenge
                </div>
                <div
                  style={{ lineHeight: "1.2em" }}
                  className="text-[#f9f9f9] text-lg"
                >
                  With sustained growth and an expanding academic offering,
                 Kaplan sought to strengthen its commercial and operational
                  management. To ensure efficient administration of its
                  programs, business opportunities, and enrollment processes, it
                  was crucial to have a unified data structure and agile,
                  digitized processes that would allow the institution to scale
                  efficiently and seamlessly.
                </div>
              </div>

              <div className="flex-1 min-h-[300px] md:min-h-0">
                <img
                  src="/53587161679_f0c0a75c22_6k-scaled.jpg"
                  alt="Team working"
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="bg-[#008093] rounded-lg text-white py-16 px-6 mt-2">
              <div className="mb-5  ">
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src="/icon-solution.svg"
                    alt="Icon"
                    className="w-10 h-10"
                  />
                </div>
                <h2 className="text-[#f9f9f9] text-[40px] font-semibold">
                  The Solution
                </h2>
              </div>

              <div className="grid gap-6 lg:grid-cols-3 max-w-7xl mx-auto">
                <div className="bg-white rounded-md p-6 shadow-md">
                  <h3
                    style={{ lineHeight: "1.2em" }}
                    className="font-semibold text-lg text-[#474747] mb-3"
                  >
                    Smart Process Automation
                  </h3>
                  <p
                    style={{ lineHeight: "1.2em" }}
                    className="text-[#474747] text-lg"
                  >
                    We optimized operations by migrating from{" "}
                    <strong>Process Builder to Flows</strong>, reducing manual
                    errors and improving efficiency.{" "}
                    <strong>Validation rules and advanced formulas</strong> were
                    incorporated to ensure data accuracy, and{" "}
                    <strong>layouts were improved</strong> to facilitate the
                    work of the commercial team.
                  </p>
                </div>

                <div className="bg-white text-gray-800 rounded-md p-6 shadow-md">
                  <h3
                    style={{ lineHeight: "1.2em" }}
                    className="font-semibold text-lg mb-2 text-[#474747]"
                  >
                    A More Robust and Flexible Data Model
                  </h3>
                  <p
                    style={{ lineHeight: "1.2em" }}
                    className="text-[#474747] text-lg"
                  >
                    We redesigned the data structure by incorporating key
                    objects such as <b>products, prices, and price lists</b>,
                    ensuring more efficient management of opportunities,
                    scholarships, and discounts. Additionally, we integrated the{" "}
                    <b>quote object</b> to streamline the creation and
                    management of educational offers.
                  </p>
                </div>

                <div className="bg-white text-gray-800 rounded-md p-6 shadow-md">
                  <h3
                    style={{ lineHeight: "1.2em" }}
                    className="font-semibold text-lg mb-2 text-[#474747]"
                  >
                    Scalability for the Future
                  </h3>
                  <p
                    style={{ lineHeight: "1.2em" }}
                    className="text-[#474747] text-lg"
                  >
                    We built a flexible and adaptable infrastructure, enabling
                    Kaplan to continue growing with a robust system that
                    optimizes both commercial and academic management.
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
                  style={{ lineHeight: "1.em", fontSize: "40px" }}
                  className="text-[#f9f9f9] font-semibold"
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
                  80%
                </div>
                <p
                  style={{ lineHeight: "1.2em" }}
                  className="text-lg text-[#474747]"
                >
                  Reduction of duplicate programme registrations.
                </p>
              </div>

              <div className="flex-1 bg-white rounded-lg p-6 shadow">
                <img
                  src="/industries-icon-1.svg"
                  alt="Cart Icon"
                  className="mx-auto mb-4 w-10 h-10 text-pink-400"
                />
                <div className="text-[#008093] font-bold text-3xl mb-2">
                  30%
                </div>
                <p
                  style={{ lineHeight: "1.2em" }}
                  className="text-lg text-[#474747]"
                >
                  Increase in the number of products to be marketed.
                </p>
              </div>

              <div className="flex-1 bg-white rounded-lg p-6 shadow">
                <img
                  src="/icon-sales-up.svg"
                  alt="Growth Icon"
                  className="mx-auto mb-4 w-10 h-10 text-pink-400"
                />
                <div className="text-[#008093] font-bold text-3xl mb-2">7%</div>
                <p
                  style={{ lineHeight: "1.2em" }}
                  className="text-lg text-[#474747]"
                >
                  Increase in the average ticket for each sale.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-10">
              <div className="bg-white rounded-lg p-6 shadow">
                <span
                  style={{ fontWeight: "bolder", lineHeight: "1.2em" }}
                  className="text-lg text-[#474747]"
                >
                  Personalized Experience:
                </span>
                <span
                  style={{ lineHeight: "1.2em" }}
                  className="middle-description text-[#474747] text-lg"
                >
                  Greater ability to create tailored and attractive educational
                  proposals aligned with each student’s needs.
                </span>
              </div>
              <div className="bg-white rounded-lg p-6 shadow">
                <span
                  style={{ fontWeight: "bolder", lineHeight: "1.2em" }}
                  className="text-lg text-[#474747]"
                >
                  Opportunity Tracking:
                </span>
                <span
                  style={{ lineHeight: "1.2em" }}
                  className="middle-description text-[#474747] text-lg"
                >
                  Access to detailed historical analysis that facilitates
                  strategic decision-making and improves business planning.
                </span>
              </div>
              <div className="bg-white rounded-lg p-6 shadow">
                <span
                  style={{ fontWeight: "bolder", lineHeight: "1.2em" }}
                  className="text-lg text-[#474747]"
                >
                  Digitization and Automation:
                </span>
                <span
                  style={{ lineHeight: "1.2em" }}
                  className="middle-description text-[#474747] text-lg"
                >
                  Elimination of duplicate records, reduction of manual work,
                  and greater precision in data and enrollment management.
                </span>
              </div>
              <div className="bg-white rounded-lg p-6 shadow">
                <span
                  style={{ fontWeight: "bolder", lineHeight: "1.2em" }}
                  className="middle-description text-lg "
                >
                  Scalable and Future-Ready Model:
                </span>
                <span
                  style={{ lineHeight: "1.2em" }}
                  className="middle-description text-[#474747] text-lg"
                >
                  A flexible and optimized infrastructure that allows Kaplan to
                  continue growing with efficient and sustainable processes.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[300px] mt-10 w-full overflow-hidden">
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

            <Link to ="/contact" className="bg-[#ff83a9] hover:bg-white hover:text-[#474747] text-white font-semibold px-6 py-2 rounded-full shadow-md transition">
              Contact an expert
            </Link>
          </div>
        </div>

        <div className="container mx-auto py-[50px]  px-4 md:px-6 ">
          <div className="px-6 py-10 md:px-20 ">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-5 md:px-16 py-12 gap-8">
              <div className="md:w-2/3 text-center md:text-center">
                <p
                  style={{ lineHeight: "1.2em" }}
                  className="italic text-[#474747] text-2xl"
                >
                  “What really stood out to me about the Codescience team was
                  their deep understanding of the Salesforce ecosystem and their
                  ability to customise solutions to our specific needs. They
                  implemented all the necessary functionalities, efficiently
                  integrating them to optimise our product management and
                  enhance our growth. Thanks to their support, we have achieved
                  greater efficiency in sales management and an increase in
                  sales volume. In addition, their work methodology has inspired
                  us to implement new improvement dynamics in our team.”
                </p>
              </div>

              <div className="text-center md:text-center md:w-1/3">
                <h3
                  style={{ lineHeight: "1.2em" }}
                  className="text-3xl text-[#474747]"
                >
                Kaplan
                </h3>
                <p
                  style={{ lineHeight: "1.2em" }}
                  className="text-[#474747] text-lg mt-1"
                >
                  Innovation and product manager
                </p>
              </div>
            </div>
            <div>
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
