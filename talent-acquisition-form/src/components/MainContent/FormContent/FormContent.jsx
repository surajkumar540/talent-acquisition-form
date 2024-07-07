import React, { useState } from "react"
import FormHeader from "./FormHeader"
import DetailsCollectionForm from "./DetailsCollectionForm"
import DocumentCollectionForm from "./DocumentCollectionForm"
import StatementPurposeForm from "./StatementPurposeForm"

const FormContent = ({ active }) => {
  const [detailsCollectionData, setDetailsCollectionData] = useState({
    name: "",
    email: "",
    date: "",
    contactNumber: "",
  })

  const [files, setFiles] = useState({
    tenthMarksheet: null,
    twelfthMarksheet: null,
    graduationMarksheet: null,
    postGraduationMarksheet: null,
    offerLetter: null,
    salarySlips: null,
    bankStatement: null,
    incrementLetter: null,
    others: null,
  })

  const [formData, setFormData] = useState({
    firstQuestion: "",
    secondQuestion: "",
    thirdQuestion: "",
  })

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

  const handleSubmitFiles = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(files)
    // Reset files after submission if needed
    setFiles({
      tenthMarksheet: null,
      twelfthMarksheet: null,
      graduationMarksheet: null,
      postGraduationMarksheet: null,
      offerLetter: null,
      salarySlips: null,
      bankStatement: null,
      incrementLetter: null,
      others: null,
    })
  }

  const handleSubmitQuestions = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
    // Reset form if needed
    setFormData({
      firstQuestion: "",
      secondQuestion: "",
      thirdQuestion: "",
    })
  }

  return (
    <main className="flex-grow bg-[#F5F5F5] p-[95px]">
      <FormHeader />
      <div className={`${active && "py-[57px] px-[100px] bg-white"}  `}>
        {active === 1 && (
          <DetailsCollectionForm
            handleSubmit={handleSubmit}
            setDetailsCollectionData={setDetailsCollectionData}
            detailsCollectionData={detailsCollectionData}
          />
        )}
        {active === 2 && (
          <DocumentCollectionForm
            files={files}
            setFiles={setFiles}
            handleSubmit={handleSubmitFiles}
          />
        )}
        {active === 3 && (
          <StatementPurposeForm
            setFormData={setFormData}
            handleSubmit={handleSubmitQuestions}
            formData={formData}
          />
        )}
      </div>
    </main>
  )
}

export default FormContent
