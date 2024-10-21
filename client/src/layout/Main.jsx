import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderComponent from '../components/Header/HeaderComponent'
import FooterComponent from '../components/Footer/FooterComponent'

const Main = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />

    </>
  )
}

export default Main