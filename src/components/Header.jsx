import React, { useState } from 'react'

import './css/Header.css'
import Navbar from './Navbar'
import Offcanvas from './Offcanvas'
import OffcanvasSearch from './OffcanvasSearch'

const Header = () => {
  const [showSearch, setshowSearch] = useState(false)
  const handleOpenSearch = () =>setshowSearch(true)
  const handleCloseSearch = ()=> setshowSearch(false)
  //
  const [showMenu, setShowMenu] = useState(false)
  const handleOpenMenu = () => setShowMenu(true)
  const handleCloseMenu = () => setShowMenu(false)
  // const handleToggleMenu = () => setShowMenu(!showMenu)
  return (
    <header className=' header-container'>
        <Navbar handleOpenMenu={handleOpenMenu} handleOpenSearch={handleOpenSearch}/>
        <div className={`searchmenu ${showSearch ?  ' searchmenu-aktive' : ''}  `}>
     <OffcanvasSearch handleCloseSearch={handleCloseSearch}/>
        </div>

        <div className={`overlaymenu-background ${showMenu ?  ' backaktiv' : ''}  `} onClick={handleCloseMenu}></div>
        <div className={`overlaymenu ${showMenu ? 'aktive' : ''}`}>
       <Offcanvas handleCloseMenu={handleCloseMenu}/>
        </div>
    </header>
  )
}

export default Header