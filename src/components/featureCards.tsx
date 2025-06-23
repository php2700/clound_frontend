import React from "react";
import { IconType } from "react-icons";

interface FeatureCardProps {
  imageName: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  imageName,
  title,
  description,
}) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 transition-shadow duration-300">
      <img src={imageName} className="h-10" />
      <h3 className="text-4xl text-[#008093] font-bold mb-2 text-left">
        {title}
      </h3>
      <p className="text-gray-700 text-lg line-gap-1  fond-semibold text-left leading-tight">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
