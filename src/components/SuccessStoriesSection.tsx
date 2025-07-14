import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SuccessStoriesSection = () => {
  const stories = [
    {
      subtitle: "Empowering Success",
      logo: "/doordash.png",
      logoSubtext: "",
      title:
        "One of the biggest B2B Commerce Lightning projects",
      bgColor: "bg-white",
      textColor: "text-[#008093]",
      buttonStyle:
        "bg-[#ff83a9] text-white border-none hover:bg-pink-300 hover:text-pink-800",
      link: "/customer-stories/commerce-cloud-implementation",
    },
    {
      subtitle: "Transforming Client Services",
      // logo: "/wgite..png",
      logo: "/Blue Cross IDHO.png",

      logoSubtext: "SERVICES LLC",
      title: " Transforming Experiences with a 360° Customer View ",
      bgColor: "bg-white",
      textColor: "text-[#008093]",
      buttonStyle:
        "bg-[#ff83a9] text-white border-none hover:bg-pink-300 hover:text-pink-800",
      link: "/customer-stories/blue-cross",
    },
    {
      subtitle: "Unlocking Insights",
      logo: "/electric-schneider.png",
      logoSubtext: "",
      title: " +57% Growth in Online Orders: Doordash's Success in E-Commerce Digitization with Salesforce",
      bgColor: "bg-white",
      textColor: "text-[#008093]",
      buttonStyle:
        "bg-[#ff83a9] text-white border-none hover:bg-pink-300 hover:text-pink-800",
      link: "/customer-stories/schneider-electric",
    },
    
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[300px] w-full overflow-hidden">
        <img
          src="/new-img.png"
          alt="Salesforce background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 text-white">
          <h2 className="text-3xl md:text-6xl font-bold mb-3">
            New to Salesforce?
          </h2>
          <p className="text-lg md:text-2xl mb-4">
            Unlock its potential with us
          </p>
          <Link
            to="/services/implementation"
            className="bg-[#ff83a9] hover:bg-white hover:text-[#474747] text-white font-semibold px-6 py-2 rounded-full shadow-md transition"
          >
            Check our services
          </Link>
        </div>
      </div>

      {/* Success Stories Section */}
      <section className="relative bg-gradient-to-b from-[#008093] to-[#006f7a] pt-24 pb-20 overflow-hidden">
        {/* Decorative Full-Width Image */}
        <img
          src="https://cloudgaia.com/storage/2025/01/home-success-overlay-1.svg"
          alt="Decorative"
          className="absolute bottom-0 left-0 right-0 w-full z-0  mb-[-20px]"
        />

        <div className="relative z-10 container mx-auto  px-4 md:px-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-6xl font-bold text-white mb-8 leading-tight pt-3">
              Success stories we're proud to share
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl gap-6 mb-12 mx-auto">
            {stories.map((story, index) => (
              <div
                key={index}
                className={`${story.bgColor} group rounded-2xl p-8 hover:bg-[#fcc000] shadow-xl flex flex-col justify-between h-full transform transition-all duration-300`}
              >
                <div className="flex justify-between items-center">
                  <p className="text-[14px] font-bold text-[#ff83a9] group-hover:text-[#474747] mb-3 tracking-wide transition-colors">
                    {story.subtitle}
                  </p>

                  <div className="mb-6">
                    <div className="flex items-center gap-2">
                      <div>
                        <div className="text-lg font-bold text-red-600 group-hover:text-[#474747] transition-colors duration-300">
                          <img
                            src={story.logo}
                            style={{ width: "190px", height: "90px" }}
                          />
                        </div>
                        {/* {story.logoSubtext && (
                          <div className="text-[8px] font-semibold text-red-600 group-hover:text-black transition-colors duration-300">
                            {story.logoSubtext}
                          </div>
                        )} */}
                      </div>
                    </div>
                  </div>
                </div>

                <h3
                  className={`text-3xl font-bold ${story.textColor} mb-6 leading-tight`}
                >
                  {story.title}
                </h3>

                <Link to={story.link}>
                  <Button
                    variant="outline"
                    className={`${story.buttonStyle} rounded-full font-bold text-base hover:bg-white hover:text-[#474747] py-3 px-6`}
                  >
                    Discover this story
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center" style={{ marginBottom: "4%" }}>
            <Link to="/resources/customer-stories">
              <Button
                variant="outline"
                className="text-[#474747] text-[16px] border-2 border-none hover:bg-pink-400 hover:text-white rounded-full font-bold py-3 px-8 transition-all duration-300 transform hover:scale-105"
              >
                View all success stories
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStoriesSection;
