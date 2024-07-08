import React from "react"

const FormHeader = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px]">Preview</h3>
        <p className="text-[16px]">
          You will be able to customize the fields in the later stage
        </p>
      </div>
      <div
        className="lg:h-[150px] p-5 lg:p-[36px]"
        style={{ backgroundColor: "rgba(26, 143, 230, 0.15)" }}
      >
        <h2 className="text-[20px]">Name of the Enquiry Form</h2>
        <p className="text-[12px]">One line description of the form</p>

        <p className="text-[12px] text-[#888888] mt-[25px]">
          Provide the following information to process your application
        </p>
      </div>
    </div>
  )
}

export default FormHeader
