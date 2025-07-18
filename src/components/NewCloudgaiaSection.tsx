import { useRef, useState } from "react";

const NewCloudgaiaSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => setIsPlaying(true);

  return (
    <section className="bg-[#474748] py-20 relative overflow-hidden">
      <img
        src="asset1.png"
        // src="/left-video.png"
        alt="Decorative Overlay"
        className="absolute  w-[90px] z-0  left-0  top-0 hidden md:block"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="relative bg-[#2A8A9D] rounded-lg p-12 w-full lg:w-1/2 h-64 flex items-center justify-center overflow-hidden">
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ctext x='0' y='50' font-size='20' fill='white'%3Enew%3C/text%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat",
              }}
            />

            {/* Main Text Overlay */}
            {!isPlaying && (
              <div className="text-center absolute top-12 z-10">
                <h2 className="text-white text-4xl font-bold leading-tight">
                  Welcome
                  <br />
                  to the <span className="text-yellow-400">new</span>
                </h2>
              </div>
            )}
            {/* Video Player */}
            <video
              onPlay={handlePlay}
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
              controls
              poster="https://via.placeholder.com/600x400?text=Video+Thumbnail"
            >
              <source src="/CLOUDSCIENCE 1_1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Right Section: Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-bold text-white leading-tight">
              <span className="text-[#ff83a9]">A new Codescience</span>
            </h2>
            <p
              className="text-2xl mb-5 text-[#f9f9f9] leading-relaxed leading-tight"
              style={{ fontFamily: "sans-serif, dm-sans" }}
            >
              New visual identity. New brand tagline.
              <br />
              New challenges. The same purpose.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewCloudgaiaSection;
