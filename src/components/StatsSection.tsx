import { Star } from "lucide-react";

const statsData = {
  customerSatisfaction: { rating: "4.8/5 CSAT", stars: 5 },
  certifications: "50+",
  projects: "120+",
  experts: "50+",
  topExpert: {
    title: "Top 10",
    subtitle: "Expert in Consumer Goods & Non Profit in",
    platform: "AppExchange",
  },
  salesforceLogo: "/footer2.webp",
};

const StatsSection = () => {
  return (
    <section className="bg-black py-12" aria-label="Company Statistics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-around items-center gap-8">
          {/* Customer Satisfaction */}
          <div className="text-center">
            <h3 className="text-white text-2xl font-bold mb-2 font-sans">
              Customer satisfaction
            </h3>
            <div className="flex justify-center items-center space-x-1 mb-2 gap-2">
              <img src="/5-stars.svg" />
              <span className="text-white text-2xl font-bold ml-2 font-sans">
                {statsData.customerSatisfaction.rating}
              </span>
            </div>
          </div>

          {/* Certifications */}
          <div className="text-center">
            <h3 className="text-white text-2xl font-bold mb-2 font-sans">
              Certifications
            </h3>
            <p className="text-[#FACC15] text-3xl font-bold font-sans">
              {statsData.certifications}
            </p>
          </div>

          {/* Projects */}
          <div className="text-center">
            <h3 className="text-white text-2xl mb-2 font-bold font-sans">
              Projects
            </h3>
            <p className="text-[#FACC15] text-3xl font-bold font-sans">
              {statsData.projects}
            </p>
          </div>

          {/* Experts */}
          <div className="text-center">
            <h3 className="text-white text-2xl font-bold mb-2 font-sans">
              Experts
            </h3>
            <p className="text-[#FACC15] text-3xl font-bold font-sans">
              {statsData.experts}
            </p>
          </div>

          <div className="text-white font-sans">
            {/* Line 1 */}
            <h3 className="text-xl">
              <span className="text-[#FACC15] font-semibold">Top 10</span>{" "}
              <span>Expert in Consumer Goods </span>
              <div className="flex justify-center items-center space-x-2 mt-1 ml-5"> & Non Profit  in</div>
               <div className="flex items-center justify-center space-x-2 mt-1">
              <a href="https://appexchange.salesforce.com/appxConsultingListingDetail?listingId=a0N4V00000ISJrLUAX&legacy=true" target="_blank" rel="noopener noreferrer">
                <img
                  src="/salesforce-app-exchange.svg"
                  alt="Salesforce Logo"
                  className="h-6 w-auto pl-10 mr-5"
                  loading="lazy"
                />
              </a>
            </div>

              
            </h3>

            {/* Line 2 */}
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
