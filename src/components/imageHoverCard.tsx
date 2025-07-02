const ImageHoverCard = ({ imageSrc, title, description }) => {
  return (
    <div>
      <div className="overflow-hidden rounded-lg">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-65 object-cover filter grayscale hover:grayscale-0 transition duration-500"
        />
      </div>
      <h3 style={{lineHeight:'1.2em'}}
        className="mt-4 text-2xl font-bold text-left text-[#008093]"
      >
        {title}
      </h3>
      <p
        style={{lineHeight:'1.2em' }}
        className="mt-2 text-[#474747]  text-left text-[18px]"
      >
        {description}
      </p>
    </div>
  );
};

export default ImageHoverCard;
