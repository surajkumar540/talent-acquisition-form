import React from "react"
import ProgressIndicator from "./ProgressIndicator"

const Header = ({active, setActive}) => {
  return (
    <header className="bg-white border shadow-md text-white h-16 flex items-center justify-center fixed w-full z-50 ">
      <ProgressIndicator setActive={setActive} active={active} />
    </header>
  )
}

export default Header
