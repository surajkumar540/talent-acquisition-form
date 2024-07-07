import React from "react"
import FormButton from "./FormButton"

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-3">
      <FormButton
        title={"New Form"}
        description={
          "Start creating a new form with the wide options of fields available"
        }
      />
      <div className="mt-4">Explore the following Templates:</div>

      <div className="flex flex-col gap-3">
        <FormButton
          title={"Details Collection"}
          description={
            "Collect information from Candidates on their education, work experience, contact no,etc"
          }
        />
        <FormButton
          title={"Document Collection"}
          description={
            "Save time and efforts: Explore this template to find a set of questions required for document collection "
          }
        />
        <FormButton
          title={"Statement of Purpose"}
          description={
            "Start creating a new form with the wide options of fields available"
          }
        />
        <FormButton
          title={"Interview Availability"}
          description={
            "Start creating a new form with the wide options of fields available"
          }
        />
      </div>
    </div>
  )
}

export default Sidebar
