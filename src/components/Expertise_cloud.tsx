import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

type ExpertiseItem = {
  label: string;
  image: string;
};

type ExpertiseSection = {
  title: string;
  items: ExpertiseItem[];
};

// Grouped into 3 rows: [3 sections], [5 sections], [rest]
const expertiseData: ExpertiseSection[][] = [
  [
  {
      title: "B2C Commerce",
      items: [
        { label: "B2C Commerce", image: "https://cloudgaia.com/storage/2025/01/logo-salesforce-specialist-I.svg" },
      ],
    },
    {
      title: "Experience Cloud",
      items: [
        { label: "CMS", image: "https://cloudgaia.com/storage/2025/01/logo-salesforce-specialist-II.svg" },
        { label: "Experience Cloud", image: "https://cloudgaia.com/storage/2025/01/logo-salesforce-specialist-II.svg" },
      ],
    },
    {
      title: "Customer 360 Platform",
      items: [
        { label: "App Builder", image: "https://cloudgaia.com/storage/2025/01/logo-salesforce-expert.svg" },
        { label: "Integration Services", image: "https://cloudgaia.com/storage/2025/01/logo-salesforce-expert.svg" },
        { label: "JavaScript Designer", image: "https://cloudgaia.com/storage/2025/01/logo-salesforce-expert.svg" },
        { label: "Platform", image: "https://cloudgaia.com/storage/2025/01/logo-salesforce-expert.svg" },
        { label: "Mobile", image: "https://cloudgaia.com/storage/2025/01/logo-salesforce-expert.svg" },
        { label: "Process Automation", image: "https://cloudgaia.com/storage/2025/01/logo-salesforce-expert.svg" },
        { label: "Security & Privacy", image: "https://cloudgaia.com/storage/2025/01/logo-salesforce-expert.svg" },
      ],
    },
       {
      title: "Non Profit",
      items: [
        { label: "Non Profit", image: "https://cloudgaia.com/storage/2025/01/logo-salesforce-specialist-I.svg" },
      ],
    },
  ],
  [
    {
      title: "Industry Products",
      items: [
        { label: "Consumer Goods Cloud", image: "https://cloudgaia.com/storage/2025/01/logo-salesforce-specialist-I.svg" },
        { label: "Financial Services Cloud", image: "https://cloudgaia.com/storage/2025/01/logo-salesforce-specialist-I.svg" },
        { label: "Insurance", image: "https://cloudgaia.com/storage/2025/01/logo-salesforce-specialist-I.svg" },
      ],
    },
    {
      title: "MuleSoft",
      items: [
        { label: "MuleSoft Anypoint Platform", image: "https://cloudgaia.com/storage/2025/01/logo-salesforce-specialist-I.svg" },
      ],
    },
    {
      title: "Service Cloud",
      items: [
        { label: "Service Cloud", image: "https://cloudgaia.com/storage/2025/01/logo-salesforce-specialist-II.svg" },
      ],
    },
    {
      title: "Managed Services",
      items: [
        { label: "Developer & Integration Services", image: "https://cloudgaia.com/storage/2025/01/logo-salesforce-specialist-I.svg" },
      ],
    },
    {
      title: "Marketing Cloud",
      items: [
        { label: "MC Account Engagement", image: "https://cloudgaia.com/storage/2025/01/logo-salesforce-specialist-I.svg" },
        { label: "MC Advanced Cross Channel", image: "https://cloudgaia.com/storage/2025/01/logo-salesforce-specialist-I.svg" },
        { label: "MC Engagement", image: "https://cloudgaia.com/storage/2025/01/logo-salesforce-specialist-I.svg" },
        { label: "MC Personalization", image: "https://cloudgaia.com/storage/2025/01/logo-salesforce-specialist-I.svg" },
      ],
    },
  ],
  [
    {
      title: "PDO AppExchange",
      items: [
        { label: "Architecture & UX Design", image: "https://cloudgaia.com/storage/2025/01/logo-salesforce-specialist-I.svg" },
        { label: "Development", image: "https://cloudgaia.com/storage/2025/01/logo-salesforce-specialist-I.svg" },
        { label: "Product Support", image: "https://cloudgaia.com/storage/2025/01/logo-salesforce-specialist-I.svg" },
      ],
    },
    {
      title: "Einstein",
      items: [
        { label: "CRM Analytics", image: "https://cloudgaia.com/storage/2025/01/logo-salesforce-specialist-I.svg" },
      ],
    },
    {
      title: "Multi-Cloud Integration",
      items: [
        { label: "B2B Integration", image: "https://cloudgaia.com/storage/2025/01/logo-salesforce-specialist-I.svg" },
      ],
    },
    {
      title: "Sales Cloud",
      items: [
        { label: "Sales Cloud", image: "https://cloudgaia.com/storage/2025/01/logo-salesforce-specialist-II.svg" },
        { label: "Sales Performance Management", image: "https://cloudgaia.com/storage/2025/01/logo-salesforce-specialist-II.svg" },
      ],
    },
    {
      title: "Salesforce Commerce",
      items: [
        { label: "B2B Commerce", image: "https://cloudgaia.com/storage/2025/01/logo-salesforce-specialist-I.svg" },
      ],
    },
     
  ],
];

const ExpertiseCollapse = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 mt-6">
      {/* Desktop layout */}
<div className="hidden md:flex flex-col gap-2 items-center">
  {expertiseData.map((row, rowIndex) => (
    <div
      key={rowIndex}
      className="flex flex-row flex-wrap justify-center gap-5 w-full"
    >
      {row.map((section) => (
        <div key={section.title} className="w-fit text-center">
          <h3 className="text-[#FF83A9] text-base font-semibold mb-2">
            {section.title}
          </h3>
          <div className="flex flex-wrap justify-center gap-[2px]">
            {section.items.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center mx-[1px]">
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-[80px] h-[80px] object-contain mb-[2px]"
                />
                <p className="text-[11px] text-[#474747] font-medium leading-tight max-w-[70px] text-center">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ))}
</div>

      {/* Mobile layout */}
      <div className="md:hidden">
        {expertiseData.flat().map((section) => (
          <div key={section.title} className="mb-6 border-b border-gray-300 pb-4">
            <button
              onClick={() => toggleSection(section.title)}
              className="flex items-center justify-between w-full text-[#FF83A9] text-base font-bold mb-3"
            >
              {section.title}
              {openSections[section.title] ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openSections[section.title] && (
              <div className="grid grid-cols-2 gap-4">
                {section.items.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center">
                    <img
                      src={item.image}
                      alt={item.label}
                      className="w-16 h-16 object-contain mb-1"
                    />
                    <p className="text-sm text-[#474747] font-medium">{item.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertiseCollapse;
