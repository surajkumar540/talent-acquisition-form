import React, { useState } from "react"
import FormHeader from "./FormHeader"
import DetailsCollectionForm from "./DetailsCollectionForm"
import DocumentCollectionForm from "./DocumentCollectionForm"
import StatementPurposeForm from "./StatementPurposeForm"
import InterviewAvailabilityForm from "./InterviewAvailabilityForm"
import Footer from "@/components/Footer/Footer"

const FormContent = ({ active, setActive }) => {
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

  const [statementPurposeData, setStatementPurposeData] = useState({
    firstQuestion: "",
    secondQuestion: "",
    thirdQuestion: "",
  })

  const [interviewData, setInterviewData] = useState({
    email: "",
    location: "",
    interviewDate: "",
    interviewTime: "",
    timeZone: "",
    interviewMedium: "",
  })

  const handleDetailsCollection = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    // validation check
    if (
      !detailsCollectionData.name &&
      !detailsCollectionData.email &&
      !detailsCollectionData.date &&
      !detailsCollectionData.contactNumber
    ) {
      alert("Please fill all the fields")
      return
    }

    setActive(active + 1)
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
    <>
      <main className="flex-grow bg-[#F5F5F5] p-[95px]">
        <FormHeader />
        <div className={`${active && "py-[57px] px-[100px] bg-white"}  `}>
          {active === 1 && (
            <DetailsCollectionForm
              handleSubmit={handleDetailsCollection}
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
              setFormData={setStatementPurposeData}
              handleSubmit={handleSubmitQuestions}
              formData={statementPurposeData}
            />
          )}
          {active === 4 && (
            <InterviewAvailabilityForm
              setInterviewData={setInterviewData}
              handleSubmit={handleSubmitQuestions}
              formData={interviewData}
            />
          )}
        </div>
      </main>
    </>
  )
}

export default FormContent
