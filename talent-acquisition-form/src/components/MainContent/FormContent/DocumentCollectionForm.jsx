import Footer from "@/components/Footer/Footer"
import React from "react"
{
  /* <input
type="file"
name={name}
onChange={handleFileChange}
className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
/> */
}
const DocumentCollectionForm = ({ handleSubmit, setFiles, files }) => {
  const handleFileChange = (e) => {
    e.stopPropagation()
    const { name, files: selectedFiles } = e.target
    if (selectedFiles[0]?.size > 51200) {
      // 5KB in bytes
      alert("File size exceeds 50KB")
      return
    }
    setFiles((prevFiles) => ({
      ...prevFiles,
      [name]: selectedFiles[0],
    }))
  }
  return (
    <form onSubmit={handleSubmit} className="pb-10">
      {[
        { label: "10th Marksheet*", name: "tenthMarksheet" },
        { label: "12th Marksheet*", name: "twelfthMarksheet" },
        { label: "Graduation Marksheet", name: "graduationMarksheet" },
        { label: "Post Graduation Marksheet", name: "postGraduationMarksheet" },
        { label: "Offer Letter*", name: "offerLetter" },
        { label: "Salary Slips*", name: "salarySlips" },
        { label: "Bank Statement*", name: "bankStatement" },
        { label: "Increment Letter (if any)", name: "incrementLetter" },
        { label: "Others (if any)", name: "others" },
      ].map(({ label, name }) => (
        <div className="mb-4 flex items-center" key={name}>
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 w-full relative">
              {label}
            </label>
            <div
              className={`absolute focus:outline-none p-2 ${
                !files[name] && "text-[#C5C5C5]"
              }  w-full  border border-gray-300 text-[14px] rounded-md focus:ring-1 focus:ring-blue-500 top-6 left-[5px] cursor-pointer`}
            >
              <div></div>
              {files[name] ? files[name]?.name : "Attach up to 50KB"}
            </div>
            <input
              type="file"
              name={name}
              className=" p-2 w-[186px]  opacity-0 z-50  "
              onChange={handleFileChange}
              required
            />
          </div>
        </div>
      ))}
      <Footer />
    </form>
  )
}

export default DocumentCollectionForm
