import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Thankyou = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

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
          <div className="px-6 py-20 md:px-10">
            <div className="flex items-center text-sm  text-[#474747] mt-10">
              <Link to="/">
                <img
                  src="/bread-home.svg"
                  className="mr-1 text-xl cursor-pointer"
                  aria-hidden="true"
                />
              </Link>
              <span className="mx-1 text-base font-bold">&nbsp;/</span>
              <span className="text-base font-bold cursor-pointer ml-1">
                &nbsp;Thankyou!
              </span>
            </div>
            <h1
              className={`mt-4 text-6xl tracking-tight font-bold text-[#008093]  transition-transform  ${
                loaded ? "translate-y-0 duration-300" : "translate-y-12 "
              } `}
            >
              Thank You!
            </h1>
            <div
              style={{ lineHeight: "1.2em" }}
              className="mt-5 text-2xl text-[#474747] tracking-tight "
            >
              We’ve received your submission. Thank you for getting in touch
              with us! Our team will <br /> review your information and get back
              to you as soon as possible.
            </div>
            <div
              style={{ lineHeight: "1.2em" }}
              className="mt-5 text-2xl text-[#474747] tracking-tight "
            >
              In the meantime, feel free to explore our website and learn more
              about what we offer. <br /> Thank you again for reaching out!
            </div>
            <div className="mt-10 mb-12">
              <Link
                to="/services/all_services"
                className="text-[#474747] bg-[#fcc000] px-6 py-2 rounded-full font-semibold transition duration-300 hover:bg-[#FF83A9] hover:text-white"
              >
                Check our services
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
