import React, { useState } from 'react'
import WhiteLogo from './svg/whiteLogo.png'

import './css/Header.css'
import Navbar from './Navbar'
import Offcanvas from './Offcanvas'
import OffcanvasSearch from './OffcanvasSearch'
// import NavbarSistemi from './NavbarSistemi'
const Header = () => {

  //    //scroll
  const [fixed, setFixed] = useState(false)
  //scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      setFixed(true)
    } else {
      setFixed(false)
    }
  })

  //
  const [showSearch, setshowSearch] = useState(false)
  const handleOpenSearch = () => setshowSearch(true)
  const handleCloseSearch = () => setshowSearch(false)
  //
  const [showMenu, setShowMenu] = useState(false)
  const handleOpenMenu = () => setShowMenu(true)
  const handleCloseMenu = () => setShowMenu(false)
  // diger usul: const handleToggleMenu = () => setShowMenu(!showMenu)
  return (
    <header className=' header-container'>
      {/* <NavbarSistemi/> */}
      <Navbar fixed={fixed} navbarHeaderRightIcon={'navbar-header-right-icon'} navbarHeaderContainer={'navbar-header container'} navbarheader={'navbar-header-left'} navlink={"nav-link "} logo={WhiteLogo} handleOpenMenu={handleOpenMenu} handleOpenSearch={handleOpenSearch} />
      <div className={`searchmenu ${showSearch ? ' searchmenu-aktive' : ''}  `}>
        <OffcanvasSearch   searchmenucontainer={'searchmenu-container'} handleCloseSearch={handleCloseSearch} />
      </div>

      <div className={`overlaymenu-background ${showMenu ? ' backaktiv' : ''}  `} onClick={handleCloseMenu}></div>
      <div className={`overlaymenu ${showMenu ? 'aktive' : ''}`}>
        <Offcanvas mobillogo={WhiteLogo} overlaymenuKontainer={"overlaymenu-kontainer"} handleCloseMenu={handleCloseMenu} />
      </div>
    </header>
  )
}

export default Header