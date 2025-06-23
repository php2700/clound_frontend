import { Star } from "lucide-react";

const statsData = {
	customerSatisfaction: { rating: "4.8/5 CSAT", stars: 5 },
	certifications: "50+",
	projects: "120+",
	experts: "50+",
	topExpert: { title: "Top 10", subtitle: "Expert in Consumer Goods in", platform: "AppExchange" },
	salesforceLogo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
};

const StatsSection = () => {
	return (
		<section
			className="bg-black py-12 border-b-4 border-yellow-500"
			aria-label="Company Statistics"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col md:flex-row justify-around items-center gap-8">
					{/* Customer Satisfaction */}
					<div className="text-center">
						<h3 className="text-white text-xl mb-2 font-sans">Customer satisfaction</h3>
						<div className="flex justify-center items-center space-x-1 mb-2">
							{[...Array(statsData.customerSatisfaction.stars)].map((_, i) => (
								<Star
									key={i}
									className="w-6 h-6 fill-yellow-400 text-yellow-400"
									aria-hidden="true"
								/>
							))}
							<span className="text-white text-2xl font-bold ml-2 font-sans">
								{statsData.customerSatisfaction.rating}
							</span>
						</div>
					</div>

					{/* Certifications */}
					<div className="text-center">
						<h3 className="text-white text-xl mb-2 font-sans">Certifications</h3>
						<p className="text-yellow-400 text-3xl font-bold font-sans">
							{statsData.certifications}
						</p>
					</div>

					{/* Projects */}
					<div className="text-center">
						<h3 className="text-white text-xl mb-2 font-sans">Projects</h3>
						<p className="text-yellow-400 text-3xl font-bold font-sans">
							{statsData.projects}
						</p>
					</div>

					{/* Experts */}
					<div className="text-center">
						<h3 className="text-white text-xl mb-2 font-sans">Experts</h3>
						<p className="text-yellow-400 text-3xl font-bold font-sans">
							{statsData.experts}
						</p>
					</div>

					<div className="text-white font-sans">
						{/* Line 1 */}
						<h3 className="text-xl">
							<span className="text-yellow-400 font-semibold">Top 10</span>{" "}
							<span>Expert in Consumer Goods in</span>
						</h3>

						{/* Line 2 */}
						<div className="flex items-center space-x-2 mt-1">
							<img
								src={statsData.salesforceLogo}
								alt="Salesforce Logo"
								className="h-6 w-auto pl-10"
								loading="lazy"
							/>
							<span className="text-white font-bold text-sm">AppExchange</span>
						</div>
					</div>

				</div>
			</div>
		</section>
	);
};

export default StatsSection;
