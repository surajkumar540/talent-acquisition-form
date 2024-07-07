import React from "react"

const Footer = () => {
  return (
    <footer className="bg-white border shadow-md text-white w-full h-14 flex items-center justify-center fixed bottom-0 left-0 z-50">
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Submit
      </button>
    </footer>
  )
}

export default Footer
