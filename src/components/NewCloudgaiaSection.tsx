const NewCloudgaiaSection = () => {
  return (
    <section className="bg-[#2F2F2F] py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Section: Video Player */}
          <div className="relative bg-[#2A8A9D] rounded-lg p-12 w-full lg:w-1/2 h-64 flex items-center justify-center overflow-hidden">
            {/* Background Pattern */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ctext x='0' y='50' font-size='20' fill='white'%3Enew%3C/text%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat",
              }}
            />
            {/* Main Text */}
            <div className="text-center absolute top-12 z-10">
              <h2 className="text-white text-4xl font-bold leading-tight">
                Welcome
                <br />
                to the <span className="text-yellow-400">new</span>
              </h2>
            </div>
            {/* Video */}
            <video
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
              controls
              poster="https://via.placeholder.com/600x400?text=Video+Thumbnail"
            >
              <source
                src="/mov_bbb.mp4" // Sample video; replace with your video URL
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Right Section: Text */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-bold text-white mb-5 leading-tight">
              <span className="text-[#ff83a9]"> A new Codescience</span>
            </h2>
            <p style={{  fontFamily: 'sans-serif,dm-sans'}} className="text-2xl text-[#f9f9f9] leading-relaxed leading-tight" >
              New visual identity. New brand tagline.
              <br />
              New challenges. The same purpose.
            </p>
          </div>
        </div>
      </div>

      {/* Geometric Shapes */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-yellow-400 transform rotate-45" />
      <div className="absolute top-10 left-0 w-32 h-32 bg-pink-400 transform rotate-45" />
    </section>
  );
};

export default NewCloudgaiaSection;
