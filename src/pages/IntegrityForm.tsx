import React, { useState } from "react";

const IntegrityForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    language: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // You can post this data to an API or Firebase
  };

  return (
    <div className="min-h-screen bg-[#e8f3f4] flex flex-col items-center justify-start py-10 px-20">
      {/* Header Image */}
      <div className="mb-6 ">
        <img
          src="/integrityform.png" // Update with your path
          alt="Integrity Line Banner"
          className="max-w-md w-full"
        />
      </div>
       <div className="bg-white w-full max-w-lg  rounded p-6 px-90">
        <h2 className=" text-2xl font-semibold mb-1 text-[#333]">
          Integrity Line
        </h2>
        <p className="text-sm text-gray-500 mb-4">Línea de Integridad</p>
        </div>

      {/* Form Container */}
      <form onSubmit={handleSubmit}
        className=" w-full max-w-lg shadow-md rounded p-6 px-90"> 
        <div>
       

        {/* Email */}
        <div className="mb-5">
          <label className="block font-medium text-sm mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            required
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Your email address"
          />
        </div>

        {/* Language */}
        <div className="mb-5">
          <label className="block font-medium text-sm mb-2 mt-4">
            Your Language: <span className="text-red-500">*</span>
          </label>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="language"
                value="English"
                checked={formData.language === "English"}
                onChange={handleChange}
                required
              />
              English
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="language"
                value="Español"
                checked={formData.language === "Español"}
                onChange={handleChange}
                required
              />
              Español
            </label>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-all"
        >
          Next
        </button>
        </div>
      </form>
    </div>
  );
};

export default IntegrityForm;
