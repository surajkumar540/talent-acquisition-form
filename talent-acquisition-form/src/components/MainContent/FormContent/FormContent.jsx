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

  

  // Details Collection Form Logic
  const handleDetailsCollection = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    setActive(active + 1)
  }

  // Document Collection Form Logic
  const handleSubmitFiles = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    setActive(active + 1)
  }

  // Statement of Purpose Form Logic
  const handleSubmitQuestions = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    setActive(active + 1)
  }

  // Interview Availability Form Logic
  const handleInterviewAvailability = (e) => {
    e.preventDefault()
   

    // Handle form submission logic here
    setActive(active + 1)

    // reset all fields of form
    setDetailsCollectionData({
      name: "",
      email: "",
      date: "",
      contactNumber: "",
    })
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
    setStatementPurposeData({
      firstQuestion: "",
      secondQuestion: "",
      thirdQuestion: "",
    })
    setInterviewData({
      email: "",
      location: "",
      interviewDate: "",
      interviewTime: "",
      timeZone: "",
      interviewMedium: "",
    })
    setActive(0)
  }

  return (
    <>
      <main className="flex-grow bg-[#F5F5F5] pt-20 px-4 sm:px-10 lg:p-[95px]">
        <FormHeader />
        <div className={`${active && " px-4 py-10 lg:py-[57px] lg:px-[100px] bg-white"}  `}>
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
              handleSubmit={handleInterviewAvailability}
              formData={interviewData}
              suggestions={suggestions}
              handleSuggestionClick={handleSuggestionClick}
            />
          )}
        </div>
      </main>
    </>
  )
}

export default FormContent
