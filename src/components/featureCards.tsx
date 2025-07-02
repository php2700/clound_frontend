
const FeatureCard = ({
  imageName,
  title,
  description,
}) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 transition-shadow duration-300">
      <img src={imageName} className="h-10" />
      <h3 style={{fontSize:'40px',lineHeight:'1em'}} className="text-[#008093] font-bold my-3 text-left">
        {title}
      </h3>
      <p  style={{lineHeight:'1.2em'}} className="text-[#474747] text-lg text-left ">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
