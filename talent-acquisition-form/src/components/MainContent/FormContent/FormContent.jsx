import React, { useState } from "react"
import FormHeader from "./FormHeader"
import DetailsCollectionForm from "./DetailsCollectionForm"

const FormContent = ({ active }) => {
  const [detailsCollectionData, setDetailsCollectionData] = useState({
    name: "",
    email: "",
    date: "",
    contactNumber: "",
  })

  const handleChange = (e) => {
    setDetailsCollectionData({
      ...detailsCollectionData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(detailsCollectionData)
    // Reset form fields after submission if needed
    setDetailsCollectionData({
      name: "",
      email: "",
      date: "",
      contactNumber: "",
    })
  }

  return (
    <main className="flex-grow bg-[#F5F5F5] p-[95px]">
      <FormHeader />
      <div className={`${active && "py-[57px] px-[100px] bg-white"}  `}>
        {active === 1 && (
          <DetailsCollectionForm
            handleSubmit={handleSubmit}
            formData={detailsCollectionData}
            handleChange={handleChange}
          />
        )}
      </div>
    </main>
  )
}

export default FormContent
