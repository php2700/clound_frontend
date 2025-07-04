import Scroll from "./scroll";
import {
  FaShoppingCart,
  FaChartLine,
  FaServicestack,
  FaUsers,
  FaCloud,
  FaProjectDiagram,
} from "react-icons/fa";
import FeatureCard from "./featureCards";
import ImageHoverCard from "./imageHoverCard";
import { useState } from "react";

const Home = () => {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <div className="relative">
      <div className="absolute -top-0 -right-[0px] w-0 h-0 border-t-[320px] border-l-[350px] border-t-yellow-400 border-l-transparent z-10"></div>
      <div className="bg-[#f9f9f9]">
        <div className="container mx-auto px-4 md:px-6  py-6">
          <div className="container mt-6 px-6 py-10 md:px-10 ">
            <h2
              className="text-6xl font-bold text-left relative z-20"
              style={{ color: "#008093",lineHeight:'1em' }}
            >
              We breathe, live, and harness
            </h2>
            <h2
              className="text-6xl font-bold text-left relative z-20"
              style={{ color: "#FF83A9",lineHeight:'1em' }}
            >
              Salesforce, every day.
            </h2>
            <p
              className="text-left mt-4 text-2xl text-[#474747] max-w-4xl whitespace-pre-line relative z-20" style={{lineHeight:'1.2em'}}
            >
              We provide end-to-end Salesforce solutions, driven by Human +
              AI-powered{"\n"}
              innovation—from consulting and implementation to staff
              augmentation and{"\n"}
              ongoing support, ensuring seamless success for companies like
              Coca-Cola,{"\n"}
              Diageo, Schroders, Danone, Mercado Libre, The Walt Disney Company
              and{"\n"}
              countless SMEs.
            </p>
          </div>
        </div>
        <div className="mb-5 py-10">
          <Scroll />
        </div>

        <div className="container mx-auto  px-4 md:px-6 mt-6">
          <div className="container mx-auto my-10 md:px-10 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              <FeatureCard
                imageName="/home-icon-1.webp"
                title="Sales Cloud"
                description="Boost engagement and productivity, accelerate deal closures, and increase revenue with AI-driven insights for smarter, faster sales from one dynamic platform."
              />
              <FeatureCard
                imageName="/home-icon-2.webp"
                title="Service Cloud"
                description="Elevate efficiency and enhance customer satisfaction across all touchpoints with the power of AI and data."
              />
              <FeatureCard
                imageName="/home-icon-3.webp"
                title="Marketing Cloud"
                description="Leverage data quickly with unified analytics and profiles. Execute effective campaigns with trusted AI and tailor offers at every customer interaction."
              />
              <FeatureCard
                imageName="/home-icon-4.webp"
                title="Experience Cloud"
                description="Deliver tailored, connected digital experiences across any channel—whether you’re a global corporation or a regional SME."
              />
              <FeatureCard
                imageName="/home-icon-5.webp"
                title="Commerce Cloud"
                description="Boost your e-commerce on the leading platform, Einstein 1. Easily link commerce to top sales, service, and marketing apps, activating data from any source to enhance customer interactions and sales."
              />
              <FeatureCard
                imageName="/home-icon-6.webp"
                title="Integrations Cloud"
                description="Maximize your data with Tableau, streamline integrations via MuleSoft, and enhance collaboration with Slack. We’ve got all your Salesforce needs covered."
              />
            </div>
          </div>

          {/* 🎥 Cloudgaia in One Minute */}
          <div className="container mx-auto my-16 pt-10 px-10 md:px-10 ">
            {!playVideo ? (
              <div className="relative w-full h-[600px] rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/image5.png"
                  alt="Cloudgaia in one minute"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
                  <h2 className="text-5xl md:text-5xl font-bold mb-4">
                    Codescience in one minute
                  </h2>
                  <button
                    className="flex items-center space-x-3 bg-white text-black px-6 py-3 rounded-full shadow hover:bg-gray-200 transition duration-300"
                    onClick={() => setPlayVideo(true)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      
                    >
                      <path d="M3 22v-20l18 10-18 10z" />
                    </svg>
                    <span className="text-lg font-semibold">Play video</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="relative w-full h-[600px] rounded-xl overflow-hidden shadow-lg">
                <video className="w-full h-full" controls autoPlay>
                  <source src="/video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>

          {/* 💡 Why Partner With Us */}
          <h2
            className="text-6xl font-bold text-center mt-24"
            style={{ color: "#008093" }}
          >
            Why partner with us?
          </h2>
        </div>
        <div className="container mx-auto mt-4 pb-10 px-6 md:px-10">
          <div className="px-6 py-10 md:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <ImageHoverCard
                imageSrc="/image1.webp"
                title="100% Salesforce"
                description={
                  <>
                    With a
                    <strong> global presence and 15+ years as Salesforce partners</strong>
                    , we’ve dedicated ourselves exclusively to mastering the
                    Salesforce ecosystem working with
                    <strong> Leading and 50 industries of all sizes.</strong> Our team of industry{" "}
                    <strong> experts collaborates with clients </strong> to develop solid
                    strategies aligned with their business objectives,
                    accelerating value delivery and adapting to their unique
                    needs.{" "}
                  </>
                }
              />
              <ImageHoverCard
                imageSrc="/image2.webp"
                title="Expert Staff"
                description={
                  <>
                    We stay at the <strong> forefront of Salesforce technology</strong>,
                    mastering all its clouds with an unmatched level of
                    expertise and technical depth.
                    <strong> We have a global team of experts</strong> that comstrongines local
                    and international knowledge to design
                    <strong> customized solutions </strong> that maximize Salesforce
                    platforms and our clients’ roadmaps, ensuring exceptional
                    experiences for their users.
                  </>
                }
              />
              <ImageHoverCard
                imageSrc="/image3.webp"
                title="One Team"
                description="Seamlessly integrating with your teams and Salesforce to create a unified force for innovation. Our collaborative model means we’re deeply invested in your success, working side-by-side to drive meaningful transformation and measurable business impact."
              />
              <ImageHoverCard
                imageSrc="/image4.webp"
                title="Agentforce Ready"
                description={
                  <>
                    We’re at the forefront of AI-driven transformation as{" "}
                    <strong> Agentforce implementers</strong>, our expertise in artificial
                    intelligence and innovation enables our clients{" "}
                    <strong> to focus on growing their businesses </strong> while we take
                    care of the rest. With <strong> 50 AI & Data certifications</strong>,
                    we architect intelligent experiences that give our clients a
                    competitive edge, combining human expertise with advanced AI
                    capabilities to deliver transformative business outcomes.
                  </>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
