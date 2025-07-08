import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;
import "./text-editor.css";
import "react-quill/dist/quill.snow.css";

const Privacypolicy = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [privacyData, setPrivacyData] = useState("");
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

  const fetchPrivacyPolicy = async () => {
    try {
      await axios
        .get(`${API_BASE_URL}api/user/privacy-policy`)
        .then((res) => {
          console.log(res?.data);
          setPrivacyData(res?.data?.privacyPolicy?.privacyPolicy);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      setError(
        err.response?.data?.message || err.message || "Something went wrong"
      );
    }
  };

  useEffect(() => {
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

        <div className="container mx-auto py-[120px] px-4 md:px-6">
          <div className="px-6 pt-10 md:px-10">
            <div className="flex items-center text-sm mb-4 mt-10 text-[#474747]">
              <img
                src="/bread-home.svg"
                className="mr-1 text-xl cursor-pointer"
                aria-hidden="true"
                alt="breadcrumb home"
              />
              <span className="mx-1 text-base font-bold text-[18px] ml-3">
                /
              </span>
              <span className="text-base font-semibold text-[18px] ml-3">
                Privacy Policy
              </span>
            </div>
            <div
              className="quill-content"
              dangerouslySetInnerHTML={{ __html: privacyData }}
            ></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacypolicy;
