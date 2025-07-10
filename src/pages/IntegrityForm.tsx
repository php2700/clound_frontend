import React, { useState } from "react";

const IntegrityForm = () => {
  const initialState = {
    email: "",
    language: "English", // Default to English
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClear = () => {
    setFormData(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all required fields are filled
    if (!formData.email || !formData.language) {
      alert("Please fill out all required fields.");
      return;
    }
    console.log("Form Data Submitted:", formData);
    // You can add logic here to post this data to an API
    alert(`Form submitted!\nEmail: ${formData.email}\nLanguage: ${formData.language}`);
  };

  return (
    // Main container with the light blue-green background
    <div className="min-h-screen bg-[#F0F8F8] flex flex-col items-center pt-8 pb-12 px-4">
      
      {/* Optional: Header Banner Image */}
      <div className="w-full max-w-2xl mb-4">
        <img
          src="/integrityform.PNG" // Using a placeholder that looks similar
          alt="Integrity Line Banner"
          className="w-full rounded-lg border border-gray-300"
        />
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-3">
        
        {/* --- Card 1: Form Title and Info --- */}
        <div className="bg-white border border-gray-300 rounded-lg p-6">
          <h1 className="text-3xl text-gray-800">Integrity Line</h1>
          <p className="text-gray-600 mt-1 mb-6">Línea de Integridad</p>
          
          <div className="border-t border-gray-300 pt-4 mb-4">
             <p className="text-sm">pjais6760@gmail.com <button type="button" className="text-blue-600 hover:underline text-sm font-semibold">Switch accounts</button></p>
             <p className="text-xs text-gray-500 mt-2">The name and photo associated with your Google account will be recorded when you upload files and submit this form. Your email is not part of your response.</p>
          </div>

          <p className="text-red-600 text-sm">* Indicates required question</p>
        </div>

        {/* --- Card 2: Email Input --- */}
        <div className="bg-white border border-gray-300 rounded-lg p-6">
          <label htmlFor="email" className="block text-base mb-4 font-medium text-gray-800">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-1/2 bg-transparent border-b-2 border-gray-300 focus:border-blue-600 outline-none transition-colors pb-1"
            placeholder="Your email address"
          />
        </div>

        {/* --- Card 3: Language Selection --- */}
        <div className="bg-white border border-gray-300 rounded-lg p-6">
          <label className="block text-base mb-4 font-medium text-gray-800">
            Your Language: <span className="text-red-500">*</span>
          </label>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="language"
                value="English"
                checked={formData.language === "English"}
                onChange={handleChange}
                required
                className="w-5 h-5"
              />
              <span className="text-gray-800">English</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="language"
                value="Español"
                checked={formData.language === "Español"}
                onChange={handleChange}
                required
                className="w-5 h-5"
              />
              <span className="text-gray-800">Español</span>
            </label>
          </div>
        </div>

        {/* --- Action Buttons --- */}
        <div className="flex justify-between items-center mt-6 pt-2">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors font-semibold"
          >
            Next
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="text-blue-600 hover:bg-blue-50 p-2 rounded-md transition-colors font-semibold"
          >
            Clear form
          </button>
        </div>
      </form>
    </div>
  );
};

export default IntegrityForm;
