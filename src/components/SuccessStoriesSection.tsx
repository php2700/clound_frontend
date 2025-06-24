import { Button } from "@/components/ui/button";

const SuccessStoriesSection = () => {
  const stories = [
    {
      subtitle: "Transforming Client Services",
      logo: "CONA",
      logoSubtext: "SERVICES LLC",
      title: "One of the biggest B2B Commerce Lightning projects in the world",
      bgColor: "bg-white",
      textColor: "text-[#008093]",
      buttonStyle:
        "bg-pink-400 text-white border-none hover:bg-pink-300 hover:text-pink-800",
    },
    {
      subtitle: "Unlocking Insights",
      logo: "Gador",
      logoSubtext: "",
      title: "Transforming Experiences with a 360° Customer View",
      bgColor: "bg-white",
      textColor: "text-[#008093]",
      buttonStyle:
        "bg-pink-400 text-white border-none hover:bg-pink-300 hover:text-pink-800",
    },
    {
      subtitle: "Empowering Success",
      logo: "GRUPO DEXTER",
      logoSubtext: "",
      title:
        "+57% Growth in Online Orders: Dexter's Success in E-Commerce Digitization with Salesforce",
      bgColor: "bg-white",
      textColor: "text-[#008093]",
      buttonStyle:
        "bg-pink-400 text-white border-none hover:bg-pink-300 hover:text-pink-800",
    },
  ];

  return (
    <div>
      <div className="relative h-[300px] w-full overflow-hidden">
        <img
          src="/new-img.png"
          alt="Salesforce background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            New to Salesforce?
          </h2>
          <p className="text-lg md:text-xl mb-4">
            Unlock its potential with us
          </p>
          <button className="bg-pink-400 hover:bg-white hover:text-black text-white font-semibold px-6 py-2 rounded-full shadow-md transition">
            Check our services
          </button>
        </div>
      </div>

      <section className="bg-gradient-to-b from-[#008093] to-[#006f7a] py-20 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-300 rounded-tr-full opacity-80"></div>
        <div className="absolute bottom-0 right-0 w-64 h-32 bg-yellow-400 rounded-tl-full opacity-90"></div>

        <div className="container mx-auto px-4 md:px-6 sm:px-6 md:px-10 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Success stories we're proud to share
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 md:px-10">
            {stories.map((story, index) => (
              <div
                key={index}
                className={`${story.bgColor} rounded-2xl p-8 hover:bg-yellow-300 shadow-xl flex flex-col justify-between h-full transform hover:scale-105 transition-all duration-300 hover:shadow-2xl`}
              >
                <div className="flex justify-between items-center">
                  <p className="text-[11px] font-bold text-pink-500 hover:text-gray-800 mb-3 uppercase tracking-wide">
                    {story.subtitle}
                  </p>

                  <div className="mb-6">
                    <div className="flex items-center gap-2">
                      <div>
                        <div className="text-lg font-bold text-red-600 hover:text-gray-800">
                          {story.logo}
                        </div>
                        {story.logoSubtext && (
                          <div className="text-[8px] font-semibold text-red-600 hover:text-gray-800">
                            {story.logoSubtext}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <h3
                  className={`text-3xl mb-[40px] font-bold ${story.textColor} mb-6 leading-tight`}
                >
                  {story.title}
                </h3>

                <Button
                  variant="outline"
                  className={`${story.buttonStyle} rounded-full font-semibold hover:bg-white hover:text-gray-700 py-3 px-6`}
                >
                  Discover this story
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="outline"
              className="text-gray-800 text-[15px] border-2 border-none hover:bg-pink-400 hover:text-white rounded-full font-bold py-3 px-8 transition-all duration-300 transform hover:scale-105"
            >
              View all success stories
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStoriesSection;
