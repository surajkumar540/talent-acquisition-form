import React from "react"

const Footer = () => {
  return (
    <footer className="bg-white border shadow-md text-white w-full h-14 flex items-center justify-end pr-10 fixed bottom-0 left-0 z-50">
      <button
        type="submit"
        className=" text-white w-[109px] h-[32px] px-4 rounded-[4px] bg-[#1A8FE6] hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Next
      </button>
    </footer>
  )
}

export default Footer
