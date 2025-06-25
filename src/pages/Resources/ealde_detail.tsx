import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

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
        className={`fixed top-0 left-0 w-full transition-transform duration-300 ease-in-out z-50 ${
          isHeaderVisible ? "translate-y-6" : "-translate-y-full"
        }`}
      >
        <Header />
      </div>
      <div className="bg-[#f9f9f9]">
        <div className="container mx-auto pt-[80px] px-4 md:px-6 ">
          <div className="px-6 py-10 md:px-10 ">
            <div className="flex items-center text-sm text-gray-700 mt-8">
              <FaHome className="mr-1 text-xl" />
              <span className="mx-1 text-lg font-medium">/</span>
              <span className="text-lg font-semibold cursor-pointer">
                Resources
              </span>
              <span className="mx-1 text-lg font-medium">/</span>
              <span className="mx-1 text-lg font-medium">Customer Stories</span>
              <span className="mx-1 text-lg font-medium">/</span>
              <span className="mx-1 text-lg font-medium">EALDE - Spain</span>
            </div>
            <div className={`text-6xl font-bold text-[#008093] my-5      `}>
              Automation and Scalability: How EALDE Optimized Its Operations
              with Salesforce
            </div>
            <div className="flex items-center gap-5 mb-10">
              <div>
                {" "}
                <img src="/logo-salesforce.svg" />
              </div>
              <div className="text-2xl ">
                Sales Cloud | Experience Cloud | Marketing Cloud
              </div>
            </div>
            <div className="text-lg">
              Cloudgaia partnered with EALDE Business School to implement a
              Salesforce-based solution that modernised its data
            </div>
            <div className="text-lg">
              model, automated key processes and improved the personalisation of
              its educational offerings. The result? A more agile,
            </div>
            <div className="text-lg mb-20">
              efficient and scalable operation, ready for the future.
            </div>
            <div className="bg-white rounded-lg shadow-md px-5 py-8">
              <div>
                <img src="/icon-info.svg" />
              </div>
              <div className="text-5xl font-bold text-[#008093] my-5">
                About EALDE Business School
              </div>
              <div>
                EALDE Business School is a leading business school in the
                e-learning sector in Spain, specialised in executive training
                programmes in areas such as Compliance, Sustainability or Risk
                Management. Risk Management. Its focus is on academic
                excellence, agility and digital innovation to offer a high-level
                educational experience. offer a high-level educational
                experience.
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mt-8">
              <div className="flex flex-col flex-1 gap-4 bg-pink-400 rounded-lg px-6 md:px-8 py-6">
                <div>
                  <img
                    src="/icon-clock.svg"
                    alt="Clock Icon"
                    className="w-10 h-10"
                  />
                </div>
                <div className="text-2xl md:text-4xl font-bold text-white">
                  The Challenge
                </div>
                <div className="text-white text-sm md:text-base leading-relaxed">
                  With sustained growth and an expanding academic offering,
                  EALDE sought to strengthen its commercial and operational
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

            <div className="bg-[#008093] text-white py-16 px-6 mt-2">
              <div className="mb-10 ">
                <div className="flex items-center gap-2 text-yellow-400 text-2xl mb-2">
                  <img
                    src="/icon-solution.svg"
                    alt="Icon"
                    className="w-10 h-10"
                  />
                </div>
                <h2 className="text-4xl font-bold">The Solution</h2>
              </div>

              <div className="grid gap-6 lg:grid-cols-3 max-w-7xl mx-auto">
                <div className="bg-white text-gray-800 rounded-md p-6 shadow-md">
                  <h3 className="font-semibold text-lg mb-2">
                    Smart Process Automation
                  </h3>
                  <p>
                    We optimized operations by migrating from{" "}
                    <b>Process Builder to Flows</b>, reducing manual errors and
                    improving efficiency.{" "}
                    <b>Validation rules and advanced formulas</b> were
                    incorporated to ensure data accuracy, and{" "}
                    <b>layouts were improved</b> to facilitate the work of the
                    commercial team.
                  </p>
                </div>

                <div className="bg-white text-gray-800 rounded-md p-6 shadow-md">
                  <h3 className="font-semibold text-lg mb-2">
                    A More Robust and Flexible Data Model
                  </h3>
                  <p>
                    We redesigned the data structure by incorporating key
                    objects such as <b>products, prices, and price lists</b>,
                    ensuring more efficient management of opportunities,
                    scholarships, and discounts. Additionally, we integrated the{" "}
                    <b>quote object</b> to streamline the creation and
                    management of educational offers.
                  </p>
                </div>

                <div className="bg-white text-gray-800 rounded-md p-6 shadow-md">
                  <h3 className="font-semibold text-lg mb-2">
                    Scalability for the Future
                  </h3>
                  <p>
                    We built a flexible and adaptable infrastructure, enabling
                    EALDE to continue growing with a robust system that
                    optimizes both commercial and academic management.
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
                <div className="text-teal-700 font-bold text-3xl">80%</div>
                <p className="text-gray-700">
                  Reduction of duplicate programme registrations.
                </p>
              </div>

              <div className="flex-1 bg-white rounded-lg p-6 shadow">
                <img
                  src="/industries-icon-1.svg"
                  alt="Cart Icon"
                  className="mx-auto mb-4 w-10 h-10 text-pink-400"
                />
                <div className="text-teal-700 font-bold text-3xl">30%</div>
                <p className="text-gray-700">
                  Increase in the number of products to be marketed.
                </p>
              </div>

              <div className="flex-1 bg-white rounded-lg p-6 shadow">
                <img
                  src="/icon-sales-up.svg"
                  alt="Growth Icon"
                  className="mx-auto mb-4 w-10 h-10 text-pink-400"
                />
                <div className="text-teal-700 font-bold text-3xl">7%</div>
                <p className="text-gray-700">
                  Increase in the average ticket for each sale.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Personalized Experience:
                </h3>
                <p className="text-gray-700 text-sm">
                  Greater ability to create tailored and attractive educational
                  proposals aligned with each student’s needs.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Opportunity Tracking:
                </h3>
                <p className="text-gray-700 text-sm">
                  Access to detailed historical analysis that facilitates
                  strategic decision-making and improves business planning.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Digitization and Automation:
                </h3>
                <p className="text-gray-700 text-sm">
                  Elimination of duplicate records, reduction of manual work,
                  and greater precision in data and enrollment management.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Scalable and Future-Ready Model:
                </h3>
                <p className="text-gray-700 text-sm">
                  A flexible and optimized infrastructure that allows EALDE to
                  continue growing with efficient and sustainable processes.
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
                  “What really stood out to me about the Cloudgaia team was
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
                <h3 className="text-2xl font-semibold text-gray-900">
                  Karen Gonçalves
                </h3>
                <p className=" mt-1">Innovation and product manager</p>
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
