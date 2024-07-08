import Footer from "@/components/Footer/Footer";
import React, { useState } from "react";

const InterviewAvailabilityForm = ({
  handleSubmit,
  formData,
  setInterviewData,
}) => {
  const [location, setLocation] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "location") {
      setLocation(value);

      const locations = ["Delhi", "Mumbai", "Kashmir", "Bangalore", "Chennai"];
      const filteredSuggestions = locations.filter((loc) =>
        loc.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    }

    setInterviewData({
      ...formData,
      [name]: value,
    });
  };

  const handleSuggestionClick = (selectedLocation) => {
    setLocation(selectedLocation);
    setSuggestions([]);
    setInterviewData({
      ...formData,
      location: selectedLocation,
    });
  };

  return (
    <form className="space-y-4 p-4 bg-white rounded" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          1. Email*
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Example - userid@gmail.com"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder:text-[#C3C3C3]"
          required
        />
      </div>

      <div className="relative">
        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
          2. Location (Search or enter your location)
        </label>
        <input
          type="text"
          name="location"
          id="location"
          placeholder="Search or enter your location"
          value={location}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder:text-[#C3C3C3]"
          required
        />
        {suggestions.length > 0 && (
          <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1">
            {suggestions.map((suggest, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(suggest)}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                {suggest}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <label htmlFor="interviewDate" className="block text-sm font-medium text-gray-700">
          3. Interview Date
        </label>
        <input
          type="date"
          name="interviewDate"
          id="interviewDate"
          value={formData.interviewDate}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder:text-[#C3C3C3]"
          required
        />
      </div>

      <div>
        <label htmlFor="interviewTime" className="block text-sm font-medium text-gray-700">
          4. Interview Time (Search or Select a time zone from below)
        </label>
        <input
          type="time"
          name="interviewTime"
          id="interviewTime"
          value={formData.interviewTime}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder:text-[#C3C3C3]"
          required
        />
      </div>

      <div>
        <label htmlFor="timeZone" className="block text-sm font-medium text-gray-700">
          5. Time Zone
        </label>
        <select
          name="timeZone"
          id="timeZone"
          value={formData.timeZone}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder:text-[#C3C3C3]"
          required
        >
          <option value="" disabled>
            Select your time zone
          </option>
          <option value="UTC-12:00">UTC-12:00</option>
          <option value="UTC-11:00">UTC-11:00</option>
          <option value="UTC-10:00">UTC-10:00</option>
          <option value="UTC-09:00">UTC-09:00</option>
          <option value="UTC-08:00">UTC-08:00</option>
          <option value="UTC-07:00">UTC-07:00</option>
          <option value="UTC-06:00">UTC-06:00</option>
          <option value="UTC-05:00">UTC-05:00</option>
          <option value="UTC-04:00">UTC-04:00</option>
          <option value="UTC-03:00">UTC-03:00</option>
          <option value="UTC-02:00">UTC-02:00</option>
          <option value="UTC-01:00">UTC-01:00</option>
          <option value="UTC+00:00">UTC+00:00</option>
          <option value="UTC+01:00">UTC+01:00</option>
          <option value="UTC+02:00">UTC+02:00</option>
          <option value="UTC+03:00">UTC+03:00</option>
          <option value="UTC+04:00">UTC+04:00</option>
          <option value="UTC+05:00">UTC+05:00</option>
          <option value="UTC+06:00">UTC+06:00</option>
          <option value="UTC+07:00">UTC+07:00</option>
          <option value="UTC+08:00">UTC+08:00</option>
          <option value="UTC+09:00">UTC+09:00</option>
          <option value="UTC+10:00">UTC+10:00</option>
          <option value="UTC+11:00">UTC+11:00</option>
          <option value="UTC+12:00">UTC+12:00</option>
        </select>
      </div>

      <div>
        <label htmlFor="interviewMedium" className="block text-sm font-medium text-gray-700">
          6. Interview Medium (Search or Select the medium of Interview from below)
        </label>
        <select
          name="interviewMedium"
          id="interviewMedium"
          value={formData.interviewMedium}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder:text-[#C3C3C3]"
          required
        >
          <option className="text-[#C5C5C5] text-[14px]" value="" disabled>
            Select interview medium
          </option>
          <option value="In-person">In-person</option>
          <option value="Phone">Phone</option>
          <option value="Video">Video</option>
        </select>
      </div>
      <Footer />
    </form>
  );
};

export default InterviewAvailabilityForm;
