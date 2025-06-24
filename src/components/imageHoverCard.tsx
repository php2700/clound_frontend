import React from "react";

interface ImageHoverCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const ImageHoverCard: React.FC<ImageHoverCardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <div className="w-80">
      <div className="overflow-hidden rounded-lg">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-65 object-cover filter grayscale hover:grayscale-0 transition duration-500"
        />
      </div>
      <h3 className="mt-4 text-3xl font-semibold text-left text-[#008093]">
        {title}
      </h3>
      <p className="mt-2 text-gray-600  text-left text-xl text-black leading-tight">
        {description}
      </p>
    </div>
  );
};

export default ImageHoverCard;
