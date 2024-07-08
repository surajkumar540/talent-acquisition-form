"use client"
import React, { useEffect, useState } from "react"
import Sidebar from "./Sidebar/Sidebar"
import FormContent from "./FormContent/FormContent"
import Header from "../Header/Header"

const MainContent = () => {
  const [active, setActive] = useState(0)
  // handle active state for sidebar item
  const handleActive = (id) => {
    if (active > id) setActive(id)
  }

  // Remove the isClient state variable and related logic

  return (
    <>
      {active > 0 && <Header setActive={setActive} active={active} />}
      <Sidebar
        active={active}
        setActive={setActive}
        handleActive={handleActive}
      />
      <FormContent active={active} setActive={setActive} />
    </>
  )
}

export default MainContent
