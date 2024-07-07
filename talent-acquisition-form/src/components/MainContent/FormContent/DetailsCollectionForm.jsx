import React from "react"

const DetailsCollectionForm = ({ handleSubmit, handleChange, formData }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          1. Name*
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder:text-[#C3C3C3]"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          2. Email*
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
      <div className="mb-4">
        <label
          htmlFor="date"
          className="block text-sm font-medium text-gray-700"
        >
          3. Date of Birth
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="mt-1 p-2 w-[200px] border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          required
          style={{ color: "rgba(74, 85, 104, 0.5)" }}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="contactNumber"
          className="block text-sm font-medium text-gray-700"
        >
          4. Contact no
        </label>
        <input
          type="tel"
          id="contactNumber"
          placeholder="Enter your 10 digit contact no"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          className="mt-1 p-2 w-full border placeholder:text-[#C3C3C3] border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          required
        />
      </div>
    </form>
  )
}

export default DetailsCollectionForm