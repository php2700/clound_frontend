const Scroll = () => {
  const images = [
    "/20220309083632!Parle_Products_logo.png",
    "/Absa_logoe.png",
    "/Blue Cross IDHO.png",
    "/capgemini.png",
    "/Coinbase.svg.png",
    // "/coinbasenew.png",
    "/DHL_Logo.svg.png",
    "/DoorDash-logo.png",
    "/samsara.png",
    "/Ecolab-logo.webp",
    "/HDFCBank.jpg.png",
    "/ICFF Logo.jpg",
    "/Kaplan (1).png",
    "/Kotak_Mahindra_Bank_logo.png",
    "/Migros-Logo.wine.png",
    "/Rapid7_logo_-_transparent_PNG.png",
  ];

  return (
    <div className="scrolling-wrapper ">
      <div className="scrolling-track flex  gap-20" >
        {[...images, ...images].map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`scroll-${idx}`}
            className="scrolling-image w-32 h-90 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default Scroll;
