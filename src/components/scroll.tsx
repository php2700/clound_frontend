const Scroll = () => {
  const images = [
    "/diageo1.png",
    "/idb2.png",
    "/gadorimage.png",
    "/mecardo4.png",
    "/schroders5.png",
    "/ypf6.png",
    "/cona7.png",
    "/download.jpg",
    "/uala9.png",
    "/philip10.png",
    "/disney11.png",
    "/cocacola12.png",
  ];

  return (
    <div className="scrolling-wrapper ">
      <div className="scrolling-track">
        {[...images, ...images].map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`scroll-${idx}`}
            className="scrolling-image"
          />
        ))}
      </div>
    </div>
  );
};

export default Scroll;
