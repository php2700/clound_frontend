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

// Flattened all sections into one array for easier splitting
const allSections: ExpertiseSection[] = [
  {
    title: "Agriculture & Mining",
    items: [
      { label: "Architecture & UX Design", image: "https://cloudgaia.com/storage/2025/01/logo-salesforce-specialist-I.svg" },
    ],
  },
  {
    title: "Automotive",
    items: [
      { label: "OEMs", image: "https://cloudgaia.com/storage/2025/01/logo-salesforce-specialist-I.svg" },
    ],
  },
  {
    title: "Consumer Goods",
    items: [
      { label: "Food & Beverage", image: "https://cloudgaia.com/storage/2025/01/logo-salesforce-expert.svg" },
      { label: "Household Products", image: "https://cloudgaia.com/storage/2025/01/logo-salesforce-expert.svg" },
      { label: "Other CG", image: "https://cloudgaia.com/storage/2025/01/logo-salesforce-expert.svg" },
    ],
  },
  {
    title: "Energy & Utilities",
    items: [
      { label: "Oil & Gas", image: "https://cloudgaia.com/storage/2025/01/logo-salesforce-specialist-I.svg" },
    ],
  },
  {
    title: "High Tech",
    items: [
      { label: "Software & Services", image: "https://cloudgaia.com/storage/2025/01/logo-salesforce-specialist-I.svg" },
    ],
  },
  {
    title: "Media & Entertainment",
    items: [
      { label: "Agency / Advertising", image: "https://cloudgaia.com/storage/2025/01/logo-salesforce-specialist-I.svg" },
    ],
  },
  {
    title: "Healthcare & Life Science",
    items: [
      { label: "Medical Devices & Diagnostics", image: "https://cloudgaia.com/storage/2025/01/logo-salesforce-specialist-I.svg" },
      { label: "Pharma", image: "https://cloudgaia.com/storage/2025/01/logo-salesforce-specialist-I.svg" },
    ],
  },
  {
    title: "Financial Services",
    items: [
      { label: "Capital Markets", image: "https://cloudgaia.com/storage/2025/01/logo-salesforce-specialist-II.svg" },
      { label: "Insurance", image: "https://cloudgaia.com/storage/2025/01/logo-salesforce-specialist-II.svg" },
      { label: "Wealth & Asset Management", image: "https://cloudgaia.com/storage/2025/01/logo-salesforce-specialist-II.svg" },
    ],
  },
  {
    title: "Retail",
    items: [
      { label: "Mass Merchants,Dept Stores,& e-Retail", image: "https://cloudgaia.com/storage/2025/01/logo-salesforce-specialist-I.svg" },
    ],
  },
];

const IndustryCollapse = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const firstRow = allSections.slice(0, 6);
  const secondRow = allSections.slice(6);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 mt-6">
      {/* Desktop layout */}
      <div className="hidden md:flex flex-col gap-6 items-center">
        {[firstRow, secondRow].map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap justify-center gap-5 w-full">
            {row.map((section) => (
              <div key={section.title} className="w-fit text-center">
                <h3 className="text-[#FF83A9] text-base font-semibold mb-2">{section.title}</h3>
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
        {allSections.map((section) => (
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

export default IndustryCollapse;
