const CloudgaiaPage = () => {
  return (
    <div className="bg-white font-sans">
     

      {/* Banner Section */}
      <section className="relative py-20">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-yellow-400 z-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <h1 className="text-5xl font-bold text-teal-600 mb-6 leading-tight">
            We breathe, live, and harness Salesforce, every day.
          </h1>
          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            We provide end-to-end Salesforce solutions, driven by Human + AI-powered innovation—from consulting and implementation to staff augmentation and ongoing support, ensuring seamless success for companies like Coca-Cola, Diageo, Schroders, Danone, Mercado Libre, The Walt Disney Company and countless SMEs.
          </p>
          {/* Logos */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <img src="https://via.placeholder.com/100x40?text=Ualá" alt="Ualá Logo" className="h-10" loading="lazy" />
            <img src="https://via.placeholder.com/100x40?text=Mercado+Libre" alt="Mercado Libre Logo" className="h-10" loading="lazy" />
            <img src="https://via.placeholder.com/100x40?text=Philip+Morris" alt="Philip Morris Logo" className="h-10" loading="lazy" />
            <img src="https://via.placeholder.com/100x40?text=Schroders" alt="Schroders Logo" className="h-10" loading="lazy" />
            <img src="https://via.placeholder.com/100x40?text=Disney" alt="Disney Logo" className="h-10" loading="lazy" />
            <img src="https://via.placeholder.com/100x40?text=YPF" alt="YPF Logo" className="h-10" loading="lazy" />
            <img src="https://via.placeholder.com/100x40?text=Coca-Cola" alt="Coca-Cola Logo" className="h-10" loading="lazy" />
          </div>
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg p-6 rounded-lg transform hover:scale-105 transition-transform">
              <div className="text-teal-500 text-4xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-teal-600 mb-2">Sales Cloud</h3>
              <p className="text-gray-700">
                Boost engagement and productivity, accelerate deal closures, and increase revenue with AI-driven insights for smarter, faster sales from one dynamic platform.
              </p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg transform hover:scale-105 transition-transform">
              <div className="text-teal-500 text-4xl mb-4">❤️</div>
              <h3 className="text-2xl font-bold text-teal-600 mb-2">Service Cloud</h3>
              <p className="text-gray-700">
                Elevate efficiency and enhance customer satisfaction across all touchpoints with the power of AI and data.
              </p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg transform hover:scale-105 transition-transform">
              <div className="text-teal-500 text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-teal-600 mb-2">Marketing Cloud</h3>
              <p className="text-gray-700">
                Leverage data quickly with unified analytics and profiles. Execute effective campaigns with trusted AI and tailor offers at every customer interaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cloudgaia in One Minute Section */}
      <section className="py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-cover bg-center h-96 rounded-lg" style={{ backgroundImage: "url('https://via.placeholder.com/1200x600?text=People+Working')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-5xl font-bold text-white mb-6">Cloudgaia in one minute.</h2>
                <div className="flex justify-center">
                  <video
                    className="w-16 h-16 rounded-full cursor-pointer"
                    controls
                    poster="https://via.placeholder.com/600x400?text=Video+Thumbnail"
                  >
                    <source
                      src="https://www.w3schools.com/html/mov_bbb.mp4" // Replace with your video URL
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <p className="text-white mt-4">Play video</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner with Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-teal-600 mb-12 text-center">Why partner with us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="relative">
              <img src="https://via.placeholder.com/300x400?text=Team+1" alt="100% Salesforce" className="w-full h-96 object-cover rounded-lg" loading="lazy" />
              <div className="absolute bottom-4 left-4 text-white font-bold text-xl">100% Salesforce</div>
            </div>
            <div className="relative">
              <img src="https://via.placeholder.com/300x400?text=Team+2" alt="Expert Staff" className="w-full h-96 object-cover rounded-lg" loading="lazy" />
              <div className="absolute bottom-4 left-4 text-white font-bold text-xl">Expert Staff</div>
            </div>
            <div className="relative">
              <img src="https://via.placeholder.com/300x400?text=Team+3" alt="One Team" className="w-full h-96 object-cover rounded-lg" loading="lazy" />
              <div className="absolute bottom-4 left-4 text-white font-bold text-xl">One Team</div>
            </div>
            <div className="relative">
              <img src="https://via.placeholder.com/300x400?text=Team+4" alt="Agentforce Ready" className="w-full h-96 object-cover rounded-lg" loading="lazy" />
              <div className="absolute bottom-4 left-4 text-white font-bold text-xl">Agentforce Ready</div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-teal-600 mb-4">100% Salesforce</h3>
              <p className="text-gray-700">
                With a global presence and 15+ years as Salesforce partners, we’ve dedicated ourselves exclusively to mastering the Salesforce ecosystem working with leading industries of all sizes. Our team of industry experts collaborates with clients to develop solid strategies aligned with their business objectives, accelerating value delivery and adapting to their unique needs.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-teal-600 mb-4">Expert Staff</h3>
              <p className="text-gray-700">
                We stay at the forefront of Salesforce technology, mastering all its clouds with an unmatched level of expertise and technical depth. We have a global team of experts that combines local and international knowledge to design customized solutions that maximize Salesforce platforms and our clients’ roadmaps, ensuring exceptional experiences for their users.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-teal-600 mb-4">One Team</h3>
              <p className="text-gray-700">
                Earnlessly integrating with your teams and Salesforce to create a unified force for innovation. Our collaborative model means we’re deeply invested in your success, working side-by-side to drive meaningful transformation and measurable business impact.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-teal-600 mb-4">Agentforce Ready</h3>
              <p className="text-gray-700">
                We’re at the forefront of AI-driven transformation as Agentforce implementors, our expertise in artificial intelligence and innovation enables our clients to focus on growing their businesses while we take care of the rest. With 150 AI & Data certifications, we architect intelligent experiences that give our clients a competitive edge, combining human expertise with advanced AI capabilities to deliver transformative business outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20">
        <div className="relative bg-cover bg-center h-64" style={{ backgroundImage: "url('https://via.placeholder.com/1200x600?text=Background+Image')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">New to Salesforce? Unlock its potential with us</h2>
              <button
                className="bg-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition-colors"
                aria-label="Check our services"
              >
                Check our services
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudgaiaPage;
