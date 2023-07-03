import React from 'react'
import './css/Header.css'
import Navbar from './Navbar'
import NavbarHeader from './NavbarHeader'

const Header = () => {
  return (
    <header className=' header-container'>
        <NavbarHeader/>
        <Navbar/>
    </header>
  )
}

export default Header