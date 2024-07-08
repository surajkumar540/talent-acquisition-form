import React from "react"

const FormButton = ({
  title,
  description,
  active,
  id,
  handleActive = false,
}) => {
  return (
    <div
      className={`${
        active === id
          ? "ring-2 ring-blue-500 ring-opacity-50 hover:ring-2 hover:ring-opacity-75"
          : "ring-opacity-50  "
      } h-[100px] lg:h-[118px] lg:w-[350px] border-[1px]  border-[rgb(136,136,136)] rounded-[8px] p-[5px] lg:p-[24px] flex justify-center items-center gap-[16px] cursor-pointer`}
      onClick={() => {
        handleActive(id)
      }}
    >
      <div
        className={`h-[70px] w-[100px] hidden lg:flex ${
          active === id ? "bg-[#1A8FE6] opacity-30 " : "bg-[#D8D8D8]"
        }  rounded-[4px] `}
      ></div>
      <div className="w-full flex md:flex-col justify-center  text-center md:text-center items-center md:items-start">
        <h3 className="text-sm sm:text-[16px]">{title}</h3>
        <p className="text-[12px] hidden lg:block">{description}</p>
      </div>
    </div>
  )
}

export default FormButton
