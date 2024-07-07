"use client"
import React, { useState } from "react"
import FormButton from "./FormButton"

const formBtnData = [
  {
    id: 1,
    title: "Details Collection",
    description:
      "SCollect information from Candidates on their education, work experience, contact no,etc",
  },
  {
    id: 2,
    title: "Document Collection",
    description:
      "Save time and efforts: Explore this template to find a set of questions required for document collection ",
  },
  {
    id: 3,
    title: "Statement of Purpose",
    description:
      "Start creating a new form with the wide options of fields available",
  },
  {
    id: 4,
    title: "Interview Availability",
    description:
      "Start creating a new form with the wide options of fields available",
  },
]

const Sidebar = () => {
  const [active, setActive] = useState()
  // handle active state for sidebar item
  const handleActive = (id) => {
    setActive(id)
  }

  return (
    <div className="flex flex-col gap-4">
      <div
        className={`h-[118px] w-[350px] border-[1px] border-[#888888] bg-white  rounded-[8px] p-[24px] flex justify-center items-center gap-[16px]`}
      >
        <div className={`h-[70px] w-[100px] bg-[#D8D8D8] rounded-[4px] `}></div>
        <div className="w-full">
          <h3 className="text-[16px]">New Form</h3>
          <p className="text-[12px]">
            Start creating a new form with the wide options of fields available
          </p>
        </div>
      </div>

      <div className="mt-4">Explore the following Templates:</div>

      {/* map formData */}
      {formBtnData.map((item) => (
        <div key={item.id}>
          <FormButton
            title={item.title}
            description={item.description}
            active={active}
            id={item.id}
            handleActive={handleActive}
          />
        </div>
      ))}
    </div>
  )
}

export default Sidebar
