"use client"
import React, { useState } from "react"
import Sidebar from "./Sidebar/Sidebar"
import FormContent from "./FormContent/FormContent"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const MainContent = () => {
  const [active, setActive] = useState(0)
  // handle active state for sidebar item
  const handleActive = (id) => {
    if (active > id) setActive(id)
  }

  return (
    <>
      {active > 0 && <Header setActive={setActive} active={active} />}
      <Sidebar
        active={active}
        setActive={setActive}
        handleActive={handleActive}
      />
      <FormContent active={active} setActive={setActive} />
      {/* <Footer setActive={setActive} active={active}  /> */}
    </>
  )
}

export default MainContent
