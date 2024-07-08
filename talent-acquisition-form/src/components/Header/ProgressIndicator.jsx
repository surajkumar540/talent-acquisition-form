// ProgressIndicator.js

import React from "react"
import checkImg from "../../../public/check.svg"
import Image from "next/image"

const ProgressIndicator = ({ active, setActive }) => {
  const steps = [
    { label: "Step 1: Form Selection" },
    { label: "Step 2: Set up" },
    { label: "Step 3: Form Creation" },
    { label: "Step 4: Review" },
  ]

  return (
    <div className="flex space-x-4   w-full">
      <div className="flex w-[100%] items-center justify-center ">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full ${
                index < active ? "bg-[#1A8FE6]" : " border-2 border-gray-300"
              }`}
            >
              {index < active ? (
                <Image src={checkImg} alt="Check Mark" className="w-6 h-6" />
              ) : (
                <div className="w-4 h-4 " />
              )}
            </div>
            <p className="ml-2 text-black">{step.label}</p>
            {index !== steps.length - 1 && (
              <div className="w-[130px] mx-4 h-[2px] bg-[#C3C3C3]"></div>
            )}
          </div>
        ))}

        {/* cross  */}
        <div
          className=" pl-32 font-semibold cursor-pointer text-[#343434]"
          onClick={() => {
            setActive(0)
          }}
        >
          X
        </div>
      </div>
    </div>
  )
}

export default ProgressIndicator
