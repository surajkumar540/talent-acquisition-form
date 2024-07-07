import React from "react"

const StatementPurposeForm = ({ handleSubmit, setFormData, formData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target
    if (value.split(" ").length <= 300) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }))
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          1. Tell me about a time you were asked to do something you had never
          done before. How did you react? What did you learn?
        </label>
        <textarea
          name="firstQuestion"
          value={formData.firstQuestion}
          onChange={handleChange}
          placeholder="Enter a description for the long answer"
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none h-[68px]"
          rows="5"
        />
        <p className="text-[#8A8A8A] text-sm w-full text-end text-[10px] mt-1">
          {301 - formData.firstQuestion.split(" ").length} word limit
        </p>
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          2. Tell me about the last time something significant didn’t go
          according to plan at work. What was your role? What was the outcome?
        </label>
        <textarea
          name="secondQuestion"
          value={formData.secondQuestion}
          onChange={handleChange}
          placeholder="Enter a description for the long answer"
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none h-[68px]"
          rows="5"
        />
        <p className="text-[#8A8A8A] text-sm w-full text-end text-[10px] mt-1">
          {301 - formData.secondQuestion.split(" ").length} word limit
        </p>
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          3. What are the three things that are most important to you in a job?
        </label>
        <textarea
          name="thirdQuestion"
          value={formData.thirdQuestion}
          onChange={handleChange}
          placeholder="Enter a description for the long answer"
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none h-[68px]"
          rows="5"
        />
        <p className="text-[#8A8A8A] text-sm w-full text-end text-[10px] mt-1">
          {301 - formData.thirdQuestion.split(" ").length} word limit
        </p>
      </div>
    </form>
  )
}

export default StatementPurposeForm
