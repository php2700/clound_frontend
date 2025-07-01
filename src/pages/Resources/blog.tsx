import Footer from "@/components/Footer";
import Header from "@/components/Header";
import axios from "axios";
// import { Link } from "lucide-react";
import { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;

export const Blog = () => {
  const [loaded, setLoaded] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const data = [
    {
      img: "/BANNER-cnx-main-keynote.png",
      fetchFrom: "AI, Expert insights",
      title:
        "Highlights from Keynote CNX 2025: how Agentforce is transforming marketing with AI",
      description:
        "Get key insights from Salesforce’s Main Keynote at CNX 2025. Discover how Agentforce is transforming marketing with AI and real-time personalization.",
    },
    {
      img: "/BLOG-POST-ARTICULO-2-JC.jpg",
      fetchFrom: "Consumer Goods, Expert insights",
      title: "Consumer Goods Success: The Foundational Phase",
      description:
        "In this article, we’ll explore the key components of the Foundational Phase of Salesforce Consumer Goods Cloud, ensuring that you have the necessary tools and processes in place to drive success from the very start.",
    },
    {
      img: "/CNX25-Recommended-Sessions.jpg",
      fetchFrom: "Consumer Goods, Expert insights",
      title: "CNX25: Consumer Goods Recommended Sessions",
      description:
        "In a landscape driven by AI, automation, and connected customer experiences, Salesforce Connections 2025 is the place to be for Consumer Goods companies ready to transform and scale. At codescience, we’ve curated a list of key sessions that we believe every Consumer Goods leader should attend to gain insights into smarter decision-making, seamless engagement, and future-ready growth.",
    },
    {
      img: "/CNX25-Recommended-Sessions.jpg",
      fetchFrom: "Consumer Goods, Expert insights",
      title: "CNX25: Consumer Goods Recommended Sessions",
      description:
        "In a landscape driven by AI, automation, and connected customer experiences, Salesforce Connections 2025 is the place to be for Consumer Goods companies ready to transform and scale. At codescience, we’ve curated a list of key sessions that we believe every Consumer Goods leader should attend to gain insights into smarter decision-making, seamless engagement, and future-ready growth.",
    },
  ];
  const headings = ["AI", "Consumer Goods", "Expert Insights", "News"];

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsHeaderVisible(currentScrollY <= lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

//   const blogDataList=()={
// axios.get(`${API_BASE_URL}api/user/innovation`)
//   }

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      <div
        className="absolute top-0 right-0 w-72 h-72 bg-[#008093]"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
        aria-hidden="true"
      />
      {/* <div className="relative min-h-screen "> */}
      <div
        className={`fixed top-0 left-0 w-full transition-transform duration-300 ease-in-out z-50 ${
          isHeaderVisible ? "translate-y-6" : "-translate-y-full"
        }`}
      >
        <Header />
      </div>
      <div className="bg-[#f9f9f9]">
        <div className="container mx-auto pt-[120px] px-4 md:px-6 ">
          <div className="px-6 py-10 md:px-10">
            <div className="flex items-center text-sm  text-[#474747] mt-10">
              <Link to="/">
                <img src='/bread-home.svg'
                  className="mr-1 text-xl cursor-pointer"
                  aria-hidden="true"
                />
              </Link>
              <span className="mx-1 text-base font-bold">&nbsp;/</span>
              <span className="text-base font-bold cursor-pointer">
                &nbsp;Resources
              </span>
              <span className="mx-1 text-base font-bold">&nbsp;/</span>
              <span className="mx-1 text-base font-bold">&nbsp; Blog</span>
            </div>
            <h1
              className={`mt-4 text-6xl font-bold text-[#008093] transition-transform  ${
                loaded ? "translate-y-0 duration-300" : "translate-y-12"
              } `}
            >
              Check out our latest updates
            </h1>
            <div
              style={{  lineHeight: "1.2em" }}
              className="mt-5 text-2xl text-[#474747] "
            >
              Stay up-to-date with the latest insights, trends, and best
              practices from the Salesforce ecosystem. Our blog features
              reflections, perspectives, and advice from our team of experts,
              helping you stay one step ahead in your business.
            </div>
            <div className="mt-24  relative ">
              <img
                src="/BANNER-cnx-main-keynote.png"
                alt="Banner Visual"
                className="w-full h-[400px] object-cover rounded-xl "
              />
              <div className="absolute inset-0 bg-black/50 rounded-xl"></div>
              <div className="absolute bottom-0 left-0 w-full  text-white p-4 text-sm md:text-base">
                <h2 className="mb-1">
                  <span className="text-[#fcc000] font-bold text-base">
                    Latest -{" "}
                  </span>
                  <span className="text-[12px] text-[#fcc000]">
                    AI, Expert insights
                  </span>
                </h2>
                <h2
                  style={{ lineHeight: "1.2em" }}
                  className="text-3xl font-bold"
                >
                  Highlights from Keynote CNX 2025: how Agentforce is
                </h2>
                <h2
                  style={{ lineHeight: "1.2em" }}
                  className="text-3xl font-bold"
                >
                  transforming marketing with AI
                </h2>
                <p style={{ lineHeight: "1.2em" }} className="text-lg mt-3">
                  Get key insights from Salesforce’s Main Keynote at CNX 2025.
                  Discover how Agentforce is
                </p>
                <p style={{ lineHeight: "1.2em" }} className="text-lg mb-3">
                  transforming marketing with AI and real-time personalization.
                </p>
                <div className="relative font-bold text-base cursor-pointer group w-max">
                  <span>Read story</span>
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex flex-wrap items-center gap-5">
                <div className="text-[#008093] border border-[#008093] rounded-full px-5 py-1 text-lg cursor-pointer bg-white">
                  All articles
                </div>
                {headings.map((item, index) => (
                  <div
                    key={index}
                    className="text-[#474747] text-lg bg-white hover:text-[#008093] border rounded-2xl border-transparent hover:border-[#008093] hover:rounded-full px-6 py-1 cursor-pointer"
                  >
                    {item}
                  </div>
                ))}
                <div className="relative w-full max-w-xs">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#474747]">
                    <FiSearch className="text-xl" />
                  </span>
                  <input
                    type="search"
                    placeholder="Search..."
                    style={{ lineHeight: "1.2em" }}
                    className="w-full pl-10 pr-4 py-2 text-[#474747] placeholder:text-[#474747] border text-lg border-none rounded-full bg-white outline-none focus:ring-1 focus:ring-[#008093]"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-10">
              {data?.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col min-h-[400px]"
                >
                  <img
                    src={item?.img}
                    alt={item?.title}
                    className="w-full h-48 object-cover cursor-pointer"
                  />

                  <div className="p-4 flex flex-col flex-grow">
                    <div
                      style={{ fontSize: "12px" }}
                      className="text-[#ff83a9] mb-1"
                    >
                      {item?.fetchFrom}
                    </div>
                    <div
                      style={{ lineHeight: "1.2em" }}
                      className="text-2xl font-bold text-[#008093] mb-2 cursor-pointer"
                    >
                      {item?.title}
                    </div>
                    <div
                      style={{
                        lineHeight: "1.2em",
                      }}
                      className="text-lg text-[#474747] flex-grow "
                    >
                      {item?.description}
                    </div>

                    {/* Read Article pushed to bottom */}
                    <div className="relative mt-auto font-bold text-[#474747] text-base cursor-pointer group w-max">
                      <span>Read Article</span>
                      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#ff83a9] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    // </div>
  );
};
