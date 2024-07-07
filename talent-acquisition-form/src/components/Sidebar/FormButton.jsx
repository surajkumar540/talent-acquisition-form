import React from "react"

const FormButton = ({ title, description }) => {
  return (
    <div className="h-[118px] w-[350px] border-[1px] border-[#888888] rounded-[8px] p-[24px] flex justify-center items-center gap-[16px]">
      <div className="h-[70px] w-[100px] bg-[#D8D8D8] rounded-[4px] "></div>
      <div className="w-full">
        <h3 className="text-[16px]">{title}</h3>
        <p className="text-[12px]">{description}</p>
      </div>
    </div>
  )
}

export default FormButton
