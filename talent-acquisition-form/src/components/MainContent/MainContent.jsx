"use client"
import React, { useState } from "react"
import Sidebar from "./Sidebar/Sidebar"
import FormContent from "./FormContent/FormContent"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const MainContent = () => {
  const [active, setActive] = useState()
  // handle active state for sidebar item
  const handleActive = (id) => {
    setActive(id)
  }
  return (
    <>
      <Header />
      <Sidebar active={active} handleActive={handleActive} />
      <FormContent active={active} />
      <Footer />
    </>
  )
}

export default MainContent
