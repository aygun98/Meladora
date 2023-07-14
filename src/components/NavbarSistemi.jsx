import React, {useState} from 'react'
import './css/NavbarSistemi.css'
import Navbar from './Navbar'
import Offcanvas from './Offcanvas'
import OffcanvasSearch from './OffcanvasSearch'

const NavbarSistemi = () => {
    const [showSearch, setshowSearch] = useState(false)
    const handleOpenSearch = () =>setshowSearch(true)
    const handleCloseSearch = ()=> setshowSearch(false)
    //
    const [showMenu, setShowMenu] = useState(false)
    const handleOpenMenu = () => setShowMenu(true)
    const handleCloseMenu = () => setShowMenu(false)



  return (
    <div className='navbar-sisemi'>
          <Navbar handleOpenMenu={handleOpenMenu} handleOpenSearch={handleOpenSearch}/>
        <div className={`searchmenu ${showSearch ?  ' searchmenu-aktive' : ''}  `}>
     <OffcanvasSearch handleCloseSearch={handleCloseSearch}/>
        </div>

        <div className={`overlaymenu-background ${showMenu ?  ' backaktiv' : ''}  `} onClick={handleCloseMenu}></div>
        <div className={`overlaymenu ${showMenu ? 'aktive' : ''}`}>
       <Offcanvas handleCloseMenu={handleCloseMenu}/>
        </div>
    </div>
  )
}

export default NavbarSistemi