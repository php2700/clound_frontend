import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Bhutan",
  "Bolivia",
  "Brazil",
  "Bulgaria",
  "Cambodia",
  "Canada",
  "Chile",
  "China",
  "Colombia",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "Estonia",
  "Ethiopia",
  "Finland",
  "France",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Guatemala",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kuwait",
  "Latvia",
  "Lebanon",
  "Lithuania",
  "Luxembourg",
  "Malaysia",
  "Maldives",
  "Mexico",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Morocco",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Panama",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Saudi Arabia",
  "Serbia",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Tunisia",
  "Turkey",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
].sort();

const Contact = () => {
  const navigate=useNavigate();
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const [agreeToEmails, setAgreeToEmails] = useState(false);
  const [isRobot, setIsRobot] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsHeaderVisible(currentScrollY <= lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const contactData = {
      firstName,
      lastName,
      email,
      company,
      country,
      message,
      agreeToEmails,
    };

    axios
      .post(`${API_BASE_URL}api/user/contact`, contactData)
      .then((res) => {
        console.log(res, "gg");
        setFirstName("");
        setLastName("");
        setEmail("");
        setCompany("");
        setCountry("");
        setMessage("");
        setAgreeToEmails(false);
        setIsRobot(false);
        // toast.success("Details_added", {
        //   position: "top-right",
        // });
        navigate('/thank-you')
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
              <Link to="/">
                <img
                  src="/bread-home.svg"
                  className="mr-1 text-xl cursor-pointer"
                  aria-hidden="true"
                />
              </Link>
              <span className="mx-1 text-base font-bold">&nbsp;/</span>
              <span className="text-base font-bold">&nbsp;Contact</span>
            </div>

            {/* Heading */}
            <h1
              className="text-xl md:text-6xl font-bold mb-2"
              style={{ color: "#008093" }}
            >
              Unlock the Salesforce potential
            </h1>

            {/* Paragraph */}
            <p
              style={{ lineHeight: "1.2em" }}
              className="text-[#474747] text-xl md:text-2xl mb-14 "
            >
              With our team of experts and the power of Salesforce, we're here
              to bring <br /> your projects to life and take your business to
              the next level.
            </p>

            <form
              onSubmit={handleSubmit}
              className="bg-[#008093] max-w-3xl mx-auto text-white p-8 my-24 rounded-md space-y-5" style={{marginTop:'100px'}}
            >
              <p className="text-xl md:text-2xl font-semibold text-center tracking-tight">
                Fill out the form and our team will get back to you shortly
              </p>

              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="First Name*"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="flex-1 p-3 bg-gray-100 text-black rounded-md placeholder:text-gray-600"
                />
                <input
                  type="text"
                  placeholder="Last Name*"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="flex-1 p-3 bg-gray-100 text-black rounded-md placeholder:text-gray-600"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Company*"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="flex-1 p-3 bg-gray-100 text-black rounded-md placeholder:text-gray-600"
                />
                <input
                  type="email"
                  placeholder="Email*"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 p-3 bg-gray-100 text-black rounded-md placeholder:text-gray-600"
                />
              </div>

              <div className="relative">
                <select
                  required
                  className="w-full p-3 bg-gray-100 text-[#474747] rounded-md appearance-none"
                  defaultValue=""
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option disabled value="">
                    Country*
                  </option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                <span className="absolute right-8 top-1/2 -translate-y-1/2 text-[#474747]  pointer-events-none ">
                  <ArrowDownwardIcon sx={{ fontSize: 16 }} />
                </span>
              </div>

              <textarea
                placeholder="Message*"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 bg-gray-100 text-black rounded-md placeholder:text-gray-600 h-32"
              ></textarea>

              <p className="text-[12px] text-[#f9f9f9] text-left font-light leading-snug">
                By continuing, I confirm that I have read and agree to the{" "}
                <span className="font-semibold">Privacy Policy</span>.
              </p>

              <label className="flex items-start text-sm text-left font-light leading-snug">
                <input
                  type="checkbox"
                  className="mt-1 mr-1 accent-white"
                  required
                  checked={agreeToEmails}
                  onChange={(e) => setAgreeToEmails(e.target.checked)}
                />
                <span className="text-[12px] text-[#f9f9f9]">
                  I agree to receive emails from Codescience with updates on
                  services, events, and alerts. I can unsubscribe at any time.
                </span>
              </label>

              <div className="flex  flex-row items-center justify-between mt-6">
                <div className="bg-white border border-gray-300 rounded-md px-2 py-2 flex items-center w-[200px]">
                  <input
                    type="checkbox"
                    id="not-robot"
                    className="h-4 w-4 mr-2 accent-blue-600"
                    checked={isRobot}
                    onChange={(e) => setIsRobot(e.target.checked)}
                    required
                  />
                  <label
                    htmlFor="not-robot"
                    className="text-[10px] text-[#000] mr-auto"
                  >
                    I'm not a robot
                  </label>
                  <div className="flex flex-col items-center">
                    <img
                      src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                      alt="reCAPTCHA logo"
                      className="h-6 mb-1"
                    />
                    <span className="text-[7px] text-[#555] leading-none">
                      reCAPTCHA
                    </span>
                    <span className="text-[6px] text-[#000] cursor-pointer leading-none">
                      Privacy – Terms
                    </span>
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-4 sm:mt-0 bg-white text-[#474747] font-semibold px-6 py-2 rounded-full hover:bg-[#ff83A9] hover:text-white transition-colors duration-300"
                >
                  Send
                </button>
              </div>
            </form>

            <div className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 mt-12">
              <div className="relative w-full h-[300px]">
                <img
                  src="/contact-back-banner.webp"
                  alt="Cloudgaia Banner"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0  bg-opacity-10"></div>

                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
                  <h2 className="text-xl md:text-6xl text-[#f9f9f9] font-bold mb-4">
                    Interested in careers?
                  </h2>
                  <p className="text-lg md:text-2xl mb-4 text-[#f9f9f9]">
                    Join a multicultural team of Salesforce experts who elevate
                    businesses through technology.
                  </p>
                  <Link
                    to="/career"
                    className="bg-[#ff83a9] hover:bg-white hover:text-[#474747]  text-white font-semibold px-6 py-2 rounded-full transition"
                  >
                    Become a codescience
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Contact;
